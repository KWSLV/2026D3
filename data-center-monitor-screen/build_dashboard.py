import csv
import json
from collections import defaultdict
from datetime import datetime, timezone, timedelta
from pathlib import Path


BASE = Path(__file__).resolve().parent.parent
OUT = Path(__file__).resolve().parent
DATA_OUT = OUT / "data"
TZ = timezone(timedelta(hours=8))


def read_tsv(name):
    with (BASE / name).open("r", encoding="utf-8", errors="replace", newline="") as f:
        return list(csv.DictReader(f, delimiter="\t"))


def dt(ms):
    return datetime.fromtimestamp(int(ms) / 1000, tz=TZ)


def metric_key(row):
    return row["hostid"], row["mod"]


def latest_metric(rows):
    latest = {}
    for row in rows:
        key = metric_key(row)
        if key not in latest or int(row["ts"]) > int(latest[key]["ts"]):
            latest[key] = row
    return latest


def latest_value(latest, hostid, mod, default=0.0):
    row = latest.get((hostid, mod))
    if not row:
        return default
    try:
        return float(row["value"])
    except ValueError:
        return default


def agg_by(rows, key_fn, value_fn):
    bucket = defaultdict(list)
    for row in rows:
        bucket[key_fn(row)].append(value_fn(row))
    return {
        k: {
            "avg": round(sum(v) / len(v), 2),
            "max": round(max(v), 2),
            "count": len(v),
        }
        for k, v in bucket.items()
        if v
    }


def count_by(rows, field):
    out = defaultdict(int)
    for row in rows:
        out[row[field]] += 1
    return [{"name": k, "value": v} for k, v in sorted(out.items())]


def score_host(host, pref_latest, disk_latest):
    hostid = host["hostid"]
    cpu = latest_value(pref_latest, hostid, "cpu_usage")
    used = latest_value(pref_latest, hostid, "mem_used")
    free = latest_value(pref_latest, hostid, "mem_free")
    buff = latest_value(pref_latest, hostid, "mem_buff")
    cache = latest_value(pref_latest, hostid, "mem_cache")
    mem_total = max(used + free + buff + cache, 1)
    mem_util = used / mem_total * 100
    load1 = latest_value(pref_latest, hostid, "load1")

    disk_utils = [
        latest_value(disk_latest, hostid, f"sd{x}_util")
        for x in "abcde"
        if (hostid, f"sd{x}_util") in disk_latest
    ]
    disk_waits = [
        latest_value(disk_latest, hostid, f"sd{x}_await")
        for x in "abcde"
        if (hostid, f"sd{x}_await") in disk_latest
    ]
    disk_util = max(disk_utils) if disk_utils else 0.0
    io_wait = max(disk_waits) if disk_waits else 0.0

    penalty = 0
    penalty += max(0, cpu - 60) * 0.55
    penalty += max(0, mem_util - 70) * 0.45
    penalty += max(0, disk_util - 70) * 0.35
    penalty += max(0, io_wait - 25) * 0.45
    penalty += max(0, load1 - 8) * 1.2
    health = max(0, min(100, round(100 - penalty, 1)))
    if health >= 85:
        status = "健康"
    elif health >= 70:
        status = "关注"
    elif health >= 55:
        status = "风险"
    else:
        status = "严重"

    return {
        "hostid": hostid,
        "hostname": host["hostname"],
        "owner": host["owner"],
        "model": host["model"],
        "location1": host["location1"],
        "location2": host["location2"],
        "cpu": round(cpu, 2),
        "mem": round(mem_util, 2),
        "load1": round(load1, 2),
        "diskUtil": round(disk_util, 2),
        "ioWait": round(io_wait, 2),
        "health": health,
        "risk": round(100 - health, 1),
        "status": status,
    }


def alarm_items(host_scores):
    alarms = []
    rules = [
        ("cpu", "CPU 使用率", 80, 90, "%"),
        ("mem", "内存利用率", 80, 90, "%"),
        ("diskUtil", "磁盘使用率", 80, 90, "%"),
        ("ioWait", "磁盘 I/O 等待", 35, 45, "ms"),
        ("load1", "1分钟负载", 12, 16, ""),
    ]
    base = datetime(2026, 8, 11, 16, 0, tzinfo=TZ)
    seq = 0
    for host in sorted(host_scores, key=lambda x: x["risk"], reverse=True):
        for field, label, warn, critical, unit in rules:
            value = host[field]
            if value >= warn:
                severity = "严重" if value >= critical else "警告"
                handled = severity == "警告" and int(host["hostid"][-2:]) % 3 != 0
                alarms.append({
                    "time": (base - timedelta(minutes=seq * 7)).strftime("%H:%M"),
                    "hostid": host["hostid"],
                    "hostname": host["hostname"],
                    "room": host["location1"],
                    "metric": label,
                    "value": f"{value}{unit}",
                    "severity": severity,
                    "status": "已处理" if handled else "待处理",
                })
                seq += 1
    return alarms[:18]


def hourly_series(rows, mod, hours=24):
    selected = [r for r in rows if r["mod"] == mod]
    grouped = defaultdict(list)
    for row in selected:
        t = dt(row["ts"]).replace(minute=0, second=0, microsecond=0)
        grouped[t].append(float(row["value"]))
    points = sorted(grouped.items())[-hours:]
    return {
        "labels": [k.strftime("%m-%d %H:00") for k, _ in points],
        "values": [round(sum(v) / len(v), 2) for _, v in points],
    }


def top_disk(rows, suffix, limit=8):
    grouped = defaultdict(list)
    for row in rows:
        if row["mod"].endswith(suffix):
            grouped[(row["hostid"], row["mod"])].append(float(row["value"]))
    result = []
    for (hostid, mod), values in grouped.items():
        result.append({
            "name": f"{hostid} {mod}",
            "value": round(max(values), 2),
        })
    return sorted(result, key=lambda x: x["value"], reverse=True)[:limit]


def main():
    DATA_OUT.mkdir(exist_ok=True)
    hosts = read_tsv("host_detail.dat")
    mods = read_tsv("mod_detail.dat")
    pref = read_tsv("pref_tsar.dat")
    disk = read_tsv("disk_tsar.dat")
    pref_latest = latest_metric(pref)
    disk_latest = latest_metric(disk)
    host_scores = [score_host(h, pref_latest, disk_latest) for h in hosts]
    alarms = alarm_items(host_scores)

    online_hosts = len({r["hostid"] for r in pref if dt(r["ts"]).strftime("%Y-%m-%d") == "2026-07-07"})
    avg_health = round(sum(h["health"] for h in host_scores) / len(host_scores), 1)
    pending = sum(1 for a in alarms if a["status"] == "待处理")
    handled = len(alarms) - pending

    rooms = sorted({h["location1"] for h in host_scores})
    room_health = []
    for room in rooms:
        items = [h for h in host_scores if h["location1"] == room]
        room_health.append({
            "name": room,
            "health": round(sum(i["health"] for i in items) / len(items), 1),
            "hosts": len(items),
            "riskHosts": sum(1 for i in items if i["health"] < 70),
        })

    dashboard = {
        "meta": {
            "generatedAt": datetime.now(TZ).strftime("%Y-%m-%d %H:%M:%S"),
            "dataWindow": {
                "pref": {
                    "from": dt(min(int(r["ts"]) for r in pref)).strftime("%Y-%m-%d %H:%M:%S"),
                    "to": dt(max(int(r["ts"]) for r in pref)).strftime("%Y-%m-%d %H:%M:%S"),
                },
                "disk": {
                    "from": dt(min(int(r["ts"]) for r in disk)).strftime("%Y-%m-%d %H:%M:%S"),
                    "to": dt(max(int(r["ts"]) for r in disk)).strftime("%Y-%m-%d %H:%M:%S"),
                },
            },
        },
        "kpis": {
            "totalHosts": len(hosts),
            "onlineHosts": online_hosts,
            "offlineHosts": len(hosts) - online_hosts,
            "avgHealth": avg_health,
            "alarmTotal": len(alarms),
            "alarmPending": pending,
            "alarmHandled": handled,
            "criticalAlarms": sum(1 for a in alarms if a["severity"] == "严重"),
        },
        "distributions": {
            "roomHealth": room_health,
            "model": count_by(hosts, "model"),
            "room": count_by(hosts, "location1"),
            "status": count_by(host_scores, "status"),
        },
        "rankings": {
            "hostRiskTop": sorted(host_scores, key=lambda x: x["risk"], reverse=True)[:10],
            "diskReadTop": top_disk(disk, "_read"),
            "diskWriteTop": top_disk(disk, "_write"),
            "cpuTop": sorted(
                [{"name": h["hostid"], "value": h["cpu"], "host": h["hostname"]} for h in host_scores],
                key=lambda x: x["value"],
                reverse=True,
            )[:8],
            "memTop": sorted(
                [{"name": h["hostid"], "value": h["mem"], "host": h["hostname"]} for h in host_scores],
                key=lambda x: x["value"],
                reverse=True,
            )[:8],
        },
        "series": {
            "cpuUsage": hourly_series(pref, "cpu_usage", 36),
            "memUsed": hourly_series(pref, "mem_used", 36),
            "diskRead": hourly_series(disk, "sda_read", 36),
            "diskWrite": hourly_series(disk, "sda_write", 36),
        },
        "alarms": alarms,
        "hosts": sorted(host_scores, key=lambda x: x["risk"], reverse=True),
        "dictionaryCount": len(mods),
    }

    js = "window.MONITOR_DATA = " + json.dumps(dashboard, ensure_ascii=False, indent=2) + ";\n"
    (DATA_OUT / "metrics.js").write_text(js, encoding="utf-8")
    print("generated data/metrics.js")


if __name__ == "__main__":
    main()
