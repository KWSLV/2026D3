const DATA = window.MONITOR_DATA;

const C = {
  text: "#d9f7ff",
  muted: "#6f9db2",
  grid: "rgba(84,151,180,.18)",
  cyan: "#13d8ff",
  cyan2: "#00f0d4",
  green: "#29f070",
  orange: "#ff9b32",
  yellow: "#ffd34d",
  red: "#ff4f64",
  purple: "#8a6cff",
  blue: "#4d8dff"
};

function el(id) {
  return document.getElementById(id);
}

function setText(id, value) {
  el(id).textContent = value;
}

function canvasSize(canvas) {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = Math.max(1, Math.floor(rect.width * dpr));
  canvas.height = Math.max(1, Math.floor(rect.height * dpr));
  const ctx = canvas.getContext("2d");
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { ctx, w: rect.width, h: rect.height };
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function polarLabel(ctx, cx, cy, radius, angle, name, value) {
  const x = cx + Math.cos(angle) * radius;
  const y = cy + Math.sin(angle) * radius;
  ctx.fillStyle = C.text;
  ctx.font = "11px Microsoft YaHei, Arial";
  ctx.textAlign = x > cx ? "left" : "right";
  ctx.fillText(`${name}`, x, y - 2);
  ctx.fillStyle = C.cyan;
  ctx.fillText(`${value}`, x, y + 12);
}

function drawDonut(canvasId, items, valueField = "value") {
  const canvas = el(canvasId);
  const { ctx, w, h } = canvasSize(canvas);
  const colors = [C.cyan, C.purple, C.orange, C.green, "#d65fb6", C.blue];
  const total = items.reduce((sum, item) => sum + Number(item[valueField]), 0) || 1;
  const cx = w * 0.42;
  const cy = h * 0.52;
  const radius = Math.min(w, h) * 0.30;
  let angle = -Math.PI / 2;

  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = radius * 0.42;
  items.forEach((item, index) => {
    const next = angle + Math.PI * 2 * Number(item[valueField]) / total;
    ctx.strokeStyle = colors[index % colors.length];
    ctx.beginPath();
    ctx.arc(cx, cy, radius, angle, next);
    ctx.stroke();
    polarLabel(ctx, cx, cy, radius + 28, (angle + next) / 2, item.name, item[valueField]);
    angle = next;
  });

  ctx.fillStyle = "rgba(19,216,255,.08)";
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 0.48, 0, Math.PI * 2);
  ctx.fill();

  const lx = w * 0.76;
  const ly = h * 0.28;
  ctx.textAlign = "left";
  items.slice(0, 6).forEach((item, index) => {
    const y = ly + index * 19;
    ctx.fillStyle = colors[index % colors.length];
    ctx.fillRect(lx, y - 8, 8, 8);
    ctx.fillStyle = C.muted;
    ctx.font = "11px Microsoft YaHei, Arial";
    ctx.fillText(item.name, lx + 14, y);
  });
}

function drawTrend() {
  const canvas = el("trendChart");
  const { ctx, w, h } = canvasSize(canvas);
  const labels = DATA.series.cpuUsage.labels;
  const cpu = DATA.series.cpuUsage.values;
  const memRaw = DATA.series.memUsed.values;
  const memMax = Math.max(...memRaw, 1);
  const mem = memRaw.map(v => v / memMax * 100);
  const load = DATA.hosts.slice(0, cpu.length).map((x, i) => (DATA.hosts[i % DATA.hosts.length].load1 || 0) * 6);
  const pad = { l: 44, r: 18, t: 18, b: 34 };
  const max = 100;

  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = C.grid;
  ctx.fillStyle = C.muted;
  ctx.font = "11px Microsoft YaHei, Arial";
  for (let i = 0; i <= 5; i++) {
    const y = pad.t + (h - pad.t - pad.b) * i / 5;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(w - pad.r, y);
    ctx.stroke();
    ctx.fillText(`${100 - i * 20}%`, 4, y + 4);
  }

  function plot(values, color, width = 2) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.beginPath();
    values.forEach((v, i) => {
      const x = pad.l + (w - pad.l - pad.r) * i / Math.max(1, values.length - 1);
      const y = h - pad.b - (h - pad.t - pad.b) * Math.min(max, v) / max;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }

  plot(cpu, C.cyan, 2.2);
  plot(mem, C.purple, 2);
  plot(load, C.orange, 2);

  const legend = [
    ["CPU 平均", C.cyan],
    ["内存平均", C.purple],
    ["负载平均", C.orange]
  ];
  legend.forEach(([name, color], i) => {
    const x = w - 230 + i * 76;
    ctx.fillStyle = color;
    ctx.fillRect(x, 6, 12, 4);
    ctx.fillStyle = C.text;
    ctx.fillText(name, x + 18, 10);
  });

  const step = Math.ceil(labels.length / 8);
  labels.forEach((label, i) => {
    if (i % step) return;
    const x = pad.l + (w - pad.l - pad.r) * i / Math.max(1, labels.length - 1);
    ctx.save();
    ctx.translate(x, h - 12);
    ctx.rotate(-Math.PI / 8);
    ctx.textAlign = "right";
    ctx.fillStyle = C.muted;
    ctx.fillText(label.slice(6), 0, 0);
    ctx.restore();
  });
}

function drawGauge() {
  const canvas = el("healthGauge");
  const { ctx, w, h } = canvasSize(canvas);
  const value = DATA.kpis.avgHealth;
  const cx = w / 2;
  const cy = h * 0.76;
  const radius = Math.min(w * 0.37, h * 0.66);
  const start = Math.PI;
  const end = Math.PI * 2;
  const angle = start + (end - start) * value / 100;

  ctx.clearRect(0, 0, w, h);
  ctx.lineWidth = 15;
  ctx.lineCap = "round";
  ctx.strokeStyle = "rgba(255,255,255,.10)";
  ctx.beginPath();
  ctx.arc(cx, cy, radius, start, end);
  ctx.stroke();

  const grad = ctx.createLinearGradient(cx - radius, cy, cx + radius, cy);
  grad.addColorStop(0, C.orange);
  grad.addColorStop(0.55, C.yellow);
  grad.addColorStop(1, C.green);
  ctx.strokeStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, start, angle);
  ctx.stroke();

  for (let i = 0; i <= 10; i++) {
    const a = start + (end - start) * i / 10;
    const x1 = cx + Math.cos(a) * (radius + 9);
    const y1 = cy + Math.sin(a) * (radius + 9);
    const x2 = cx + Math.cos(a) * (radius + 16);
    const y2 = cy + Math.sin(a) * (radius + 16);
    ctx.strokeStyle = "rgba(217,247,255,.45)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }
}

function drawHorizontalTop(canvasId, readItems, writeItems) {
  const canvas = el(canvasId);
  const { ctx, w, h } = canvasSize(canvas);
  const rows = readItems.slice(0, 10).map((item, i) => ({
    name: item.name.split(" ")[0],
    read: item.value,
    write: writeItems[i]?.value || 0
  }));
  const max = Math.max(...rows.flatMap(r => [r.read, r.write]), 1);
  const pad = { l: 44, r: 56, t: 10, b: 8 };
  const rowH = (h - pad.t - pad.b) / rows.length;

  ctx.clearRect(0, 0, w, h);
  ctx.font = "11px Microsoft YaHei, Arial";
  rows.forEach((row, i) => {
    const y = pad.t + i * rowH + rowH * 0.5;
    const readW = (w - pad.l - pad.r) * row.read / max;
    const writeW = (w - pad.l - pad.r) * row.write / max;
    ctx.fillStyle = C.text;
    ctx.textAlign = "right";
    ctx.fillText(row.name, pad.l - 8, y + 4);
    ctx.fillStyle = "rgba(255,255,255,.08)";
    roundRect(ctx, pad.l, y - 8, w - pad.l - pad.r, 5, 3);
    ctx.fill();
    ctx.fillStyle = C.cyan;
    roundRect(ctx, pad.l, y - 8, readW, 5, 3);
    ctx.fill();
    ctx.fillStyle = C.orange;
    roundRect(ctx, pad.l, y + 1, writeW, 5, 3);
    ctx.fill();
    ctx.fillStyle = C.muted;
    ctx.textAlign = "left";
    ctx.fillText(String(Math.round(Math.max(row.read, row.write))), w - pad.r + 6, y + 4);
  });
}

function drawNetwork() {
  const canvas = el("networkChart");
  const { ctx, w, h } = canvasSize(canvas);
  const labels = DATA.series.cpuUsage.labels.slice(-24);
  const base = DATA.series.cpuUsage.values.slice(-24);
  const inbound = base.map((v, i) => Math.max(1, v / 100 + (i % 5) * 0.04));
  const outbound = base.map((v, i) => Math.max(1, v / 130 + (i % 4) * 0.03));
  const pad = { l: 36, r: 12, t: 10, b: 25 };
  const max = Math.max(...inbound, ...outbound, 1);

  ctx.clearRect(0, 0, w, h);
  ctx.strokeStyle = C.grid;
  for (let i = 0; i <= 4; i++) {
    const y = pad.t + (h - pad.t - pad.b) * i / 4;
    ctx.beginPath();
    ctx.moveTo(pad.l, y);
    ctx.lineTo(w - pad.r, y);
    ctx.stroke();
  }

  function plot(vals, color) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    vals.forEach((v, i) => {
      const x = pad.l + (w - pad.l - pad.r) * i / Math.max(1, vals.length - 1);
      const y = h - pad.b - (h - pad.t - pad.b) * v / max;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();
  }
  plot(inbound, C.blue);
  plot(outbound, C.green);

  ctx.font = "10px Microsoft YaHei, Arial";
  ctx.fillStyle = C.blue;
  ctx.fillText("入站", w - 86, 10);
  ctx.fillStyle = C.green;
  ctx.fillText("出站", w - 44, 10);
  ctx.fillStyle = C.muted;
  labels.forEach((_, i) => {
    if (i % 4) return;
    const x = pad.l + (w - pad.l - pad.r) * i / Math.max(1, labels.length - 1);
    ctx.fillText(String(i), x, h - 8);
  });
}

function renderRisk() {
  el("riskList").innerHTML = DATA.rankings.hostRiskTop.slice(0, 10).map((host, i) => `
    <div class="risk-row">
      <span class="idx">#${String(i + 1).padStart(2, "0")}</span>
      <span>${host.hostid}</span>
      <span class="bar"><i style="width:${Math.min(100, host.risk)}%"></i></span>
      <span class="score">${host.risk}</span>
    </div>
  `).join("");
}

function renderMatrix() {
  el("hostMatrix").innerHTML = DATA.hosts.slice(0, 20).map(host => {
    const cls = host.health >= 85 ? "" : host.health >= 70 ? "watch" : host.health >= 55 ? "risk" : "bad";
    return `<div class="host-cell ${cls}" title="${host.hostname} 健康度 ${host.health}">${host.hostid.replace("host", "H")}</div>`;
  }).join("");
}

function renderAlarms() {
  el("alarmList").innerHTML = DATA.alarms.slice(0, 12).map(item => {
    const critical = item.severity === "严重";
    return `
      <div class="alarm-row ${critical ? "critical" : ""}">
        <span class="time">${item.time}</span>
        <span class="host">${item.hostid}</span>
        <span class="metric">${item.metric} ${item.value}</span>
        <span class="level">${item.severity}</span>
      </div>
    `;
  }).join("");
}

function renderKpis() {
  const k = DATA.kpis;
  setText("totalHosts", k.totalHosts);
  setText("onlineHosts", k.onlineHosts);
  setText("avgHealth", k.avgHealth);
  setText("alarmPending", k.alarmPending);
  setText("gaugeValue", k.avgHealth);
  setText("healthStatus", k.avgHealth >= 85 ? "整体健康" : k.avgHealth >= 70 ? "需要关注" : "存在风险");
  setText("criticalCount", `严重 ${k.criticalAlarms}`);
}

function drawAll() {
  drawDonut("roomHealthChart", DATA.distributions.room.map(item => ({ name: item.name, value: item.value })));
  drawDonut("modelChart", DATA.distributions.model);
  drawTrend();
  drawGauge();
  drawNetwork();
  drawHorizontalTop("diskTopChart", DATA.rankings.diskReadTop, DATA.rankings.diskWriteTop);
}

function tick() {
  const now = new Date();
  el("clockTime").textContent = now.toLocaleTimeString("zh-CN", { hour12: false });
  el("today").textContent = now.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short"
  });
}

function init() {
  renderKpis();
  renderRisk();
  renderMatrix();
  renderAlarms();
  drawAll();
  tick();
  setInterval(tick, 1000);
}

window.addEventListener("resize", () => {
  clearTimeout(window.__nocResize);
  window.__nocResize = setTimeout(drawAll, 120);
});

init();
