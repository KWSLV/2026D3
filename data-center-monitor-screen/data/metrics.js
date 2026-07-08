window.MONITOR_DATA = {
  "meta": {
    "generatedAt": "2026-07-08 17:03:24",
    "dataWindow": {
      "pref": {
        "from": "2026-07-01 00:00:00",
        "to": "2026-07-07 23:00:00"
      },
      "disk": {
        "from": "2026-07-01 00:00:00",
        "to": "2026-08-11 15:55:00"
      }
    }
  },
  "kpis": {
    "totalHosts": 20,
    "onlineHosts": 20,
    "offlineHosts": 0,
    "avgHealth": 75.0,
    "alarmTotal": 18,
    "alarmPending": 15,
    "alarmHandled": 3,
    "criticalAlarms": 14
  },
  "distributions": {
    "roomHealth": [
      {
        "name": "A机房",
        "health": 76.0,
        "hosts": 7,
        "riskHosts": 1
      },
      {
        "name": "B机房",
        "health": 75.3,
        "hosts": 4,
        "riskHosts": 1
      },
      {
        "name": "C机房",
        "health": 70.9,
        "hosts": 3,
        "riskHosts": 2
      },
      {
        "name": "D机房",
        "health": 80.4,
        "hosts": 2,
        "riskHosts": 0
      },
      {
        "name": "E机房",
        "health": 73.2,
        "hosts": 4,
        "riskHosts": 2
      }
    ],
    "model": [
      {
        "name": "Dell R740",
        "value": 2
      },
      {
        "name": "Dell R750",
        "value": 4
      },
      {
        "name": "HP DL388",
        "value": 4
      },
      {
        "name": "Huawei 2288H",
        "value": 5
      },
      {
        "name": "Lenovo SR650",
        "value": 2
      },
      {
        "name": "Lenovo SR860",
        "value": 3
      }
    ],
    "room": [
      {
        "name": "A机房",
        "value": 7
      },
      {
        "name": "B机房",
        "value": 4
      },
      {
        "name": "C机房",
        "value": 3
      },
      {
        "name": "D机房",
        "value": 2
      },
      {
        "name": "E机房",
        "value": 4
      }
    ],
    "status": [
      {
        "name": "健康",
        "value": 4
      },
      {
        "name": "关注",
        "value": 10
      },
      {
        "name": "风险",
        "value": 6
      }
    ]
  },
  "rankings": {
    "hostRiskTop": [
      {
        "hostid": "host006",
        "hostname": "server-006.hismartlab.cn",
        "owner": "王二",
        "model": "Dell R740",
        "location1": "E机房",
        "location2": "机柜04",
        "cpu": 69.57,
        "mem": 9.62,
        "load1": 27.45,
        "diskUtil": 77.94,
        "ioWait": 44.41,
        "health": 59.9,
        "risk": 40.1,
        "status": "风险"
      },
      {
        "hostid": "host020",
        "hostname": "server-020.hismartlab.cn",
        "owner": "孙八",
        "model": "HP DL388",
        "location1": "C机房",
        "location2": "机柜12",
        "cpu": 25.98,
        "mem": 25.18,
        "load1": 28.95,
        "diskUtil": 81.08,
        "ioWait": 48.82,
        "health": 60.3,
        "risk": 39.7,
        "status": "风险"
      },
      {
        "hostid": "host009",
        "hostname": "server-009.hismartlab.cn",
        "owner": "林四",
        "model": "Huawei 2288H",
        "location1": "C机房",
        "location2": "机柜05",
        "cpu": 33.91,
        "mem": 48.17,
        "load1": 29.33,
        "diskUtil": 70.37,
        "ioWait": 48.57,
        "health": 63.7,
        "risk": 36.3,
        "status": "风险"
      },
      {
        "hostid": "host019",
        "hostname": "server-019.hismartlab.cn",
        "owner": "吴十",
        "model": "Lenovo SR860",
        "location1": "B机房",
        "location2": "机柜06",
        "cpu": 58.85,
        "mem": 14.53,
        "load1": 23.64,
        "diskUtil": 86.02,
        "ioWait": 49.83,
        "health": 64.5,
        "risk": 35.5,
        "status": "风险"
      },
      {
        "hostid": "host015",
        "hostname": "server-015.hismartlab.cn",
        "owner": "钱七",
        "model": "Lenovo SR860",
        "location1": "E机房",
        "location2": "机柜04",
        "cpu": 33.11,
        "mem": 32.85,
        "load1": 20.32,
        "diskUtil": 91.37,
        "ioWait": 48.12,
        "health": 67.3,
        "risk": 32.7,
        "status": "风险"
      },
      {
        "hostid": "host011",
        "hostname": "server-011.hismartlab.cn",
        "owner": "李四",
        "model": "Huawei 2288H",
        "location1": "A机房",
        "location2": "机柜06",
        "cpu": 29.87,
        "mem": 9.94,
        "load1": 18.94,
        "diskUtil": 96.42,
        "ioWait": 47.83,
        "health": 67.4,
        "risk": 32.6,
        "status": "风险"
      },
      {
        "hostid": "host017",
        "hostname": "server-017.hismartlab.cn",
        "owner": "赵六",
        "model": "Lenovo SR650",
        "location1": "A机房",
        "location2": "机柜04",
        "cpu": 62.72,
        "mem": 20.85,
        "load1": 24.91,
        "diskUtil": 75.91,
        "ioWait": 37.97,
        "health": 70.3,
        "risk": 29.7,
        "status": "关注"
      },
      {
        "hostid": "host013",
        "hostname": "server-013.hismartlab.cn",
        "owner": "黄五",
        "model": "Dell R740",
        "location1": "D机房",
        "location2": "机柜09",
        "cpu": 34.08,
        "mem": 19.98,
        "load1": 20.62,
        "diskUtil": 98.09,
        "ioWait": 30.99,
        "health": 72.3,
        "risk": 27.7,
        "status": "关注"
      },
      {
        "hostid": "host014",
        "hostname": "server-014.hismartlab.cn",
        "owner": "李四",
        "model": "Huawei 2288H",
        "location1": "A机房",
        "location2": "机柜09",
        "cpu": 57.12,
        "mem": 19.6,
        "load1": 22.61,
        "diskUtil": 75.15,
        "ioWait": 42.26,
        "health": 72.9,
        "risk": 27.1,
        "status": "关注"
      },
      {
        "hostid": "host007",
        "hostname": "server-007.hismartlab.cn",
        "owner": "林四",
        "model": "Huawei 2288H",
        "location1": "B机房",
        "location2": "机柜08",
        "cpu": 44.85,
        "mem": 3.06,
        "load1": 14.75,
        "diskUtil": 96.02,
        "ioWait": 45.66,
        "health": 73.5,
        "risk": 26.5,
        "status": "关注"
      }
    ],
    "diskReadTop": [
      {
        "name": "host007 sdb_read",
        "value": 499534.0
      },
      {
        "name": "host013 sdb_read",
        "value": 499136.0
      },
      {
        "name": "host016 sda_read",
        "value": 499041.0
      },
      {
        "name": "host020 sdd_read",
        "value": 498796.0
      },
      {
        "name": "host008 sdb_read",
        "value": 498619.0
      },
      {
        "name": "host005 sdb_read",
        "value": 497946.0
      },
      {
        "name": "host003 sda_read",
        "value": 497883.0
      },
      {
        "name": "host007 sdc_read",
        "value": 497554.0
      }
    ],
    "diskWriteTop": [
      {
        "name": "host011 sdb_write",
        "value": 499915.0
      },
      {
        "name": "host019 sdc_write",
        "value": 499797.0
      },
      {
        "name": "host018 sde_write",
        "value": 499264.0
      },
      {
        "name": "host004 sdb_write",
        "value": 499262.0
      },
      {
        "name": "host002 sdd_write",
        "value": 498943.0
      },
      {
        "name": "host017 sdc_write",
        "value": 498856.0
      },
      {
        "name": "host014 sdd_write",
        "value": 498818.0
      },
      {
        "name": "host003 sdb_write",
        "value": 498751.0
      }
    ],
    "cpuTop": [
      {
        "name": "host006",
        "value": 69.57,
        "host": "server-006.hismartlab.cn"
      },
      {
        "name": "host017",
        "value": 62.72,
        "host": "server-017.hismartlab.cn"
      },
      {
        "name": "host012",
        "value": 59.65,
        "host": "server-012.hismartlab.cn"
      },
      {
        "name": "host019",
        "value": 58.85,
        "host": "server-019.hismartlab.cn"
      },
      {
        "name": "host014",
        "value": 57.12,
        "host": "server-014.hismartlab.cn"
      },
      {
        "name": "host002",
        "value": 55.85,
        "host": "server-002.hismartlab.cn"
      },
      {
        "name": "host008",
        "value": 49.19,
        "host": "server-008.hismartlab.cn"
      },
      {
        "name": "host007",
        "value": 44.85,
        "host": "server-007.hismartlab.cn"
      }
    ],
    "memTop": [
      {
        "name": "host009",
        "value": 48.17,
        "host": "server-009.hismartlab.cn"
      },
      {
        "name": "host003",
        "value": 38.42,
        "host": "server-003.hismartlab.cn"
      },
      {
        "name": "host001",
        "value": 35.06,
        "host": "server-001.hismartlab.cn"
      },
      {
        "name": "host015",
        "value": 32.85,
        "host": "server-015.hismartlab.cn"
      },
      {
        "name": "host010",
        "value": 30.15,
        "host": "server-010.hismartlab.cn"
      },
      {
        "name": "host016",
        "value": 28.71,
        "host": "server-016.hismartlab.cn"
      },
      {
        "name": "host008",
        "value": 26.98,
        "host": "server-008.hismartlab.cn"
      },
      {
        "name": "host020",
        "value": 25.18,
        "host": "server-020.hismartlab.cn"
      }
    ]
  },
  "series": {
    "cpuUsage": {
      "labels": [
        "07-06 12:00",
        "07-06 13:00",
        "07-06 14:00",
        "07-06 15:00",
        "07-06 16:00",
        "07-06 17:00",
        "07-06 18:00",
        "07-06 19:00",
        "07-06 20:00",
        "07-06 21:00",
        "07-06 22:00",
        "07-06 23:00",
        "07-07 00:00",
        "07-07 01:00",
        "07-07 02:00",
        "07-07 03:00",
        "07-07 04:00",
        "07-07 05:00",
        "07-07 06:00",
        "07-07 07:00",
        "07-07 08:00",
        "07-07 09:00",
        "07-07 10:00",
        "07-07 11:00",
        "07-07 12:00",
        "07-07 13:00",
        "07-07 14:00",
        "07-07 15:00",
        "07-07 16:00",
        "07-07 17:00",
        "07-07 18:00",
        "07-07 19:00",
        "07-07 20:00",
        "07-07 21:00",
        "07-07 22:00",
        "07-07 23:00"
      ],
      "values": [
        42.66,
        42.01,
        35.23,
        43.93,
        55.21,
        51.67,
        48.95,
        39.94,
        38.19,
        44.06,
        52.21,
        43.67,
        37.02,
        44.12,
        40.79,
        41.43,
        39.78,
        43.42,
        44.48,
        40.74,
        45.3,
        41.57,
        36.74,
        45.8,
        39.76,
        46.8,
        40.77,
        43.56,
        55.03,
        37.07,
        44.53,
        45.73,
        47.95,
        47.6,
        46.79,
        39.57
      ]
    },
    "memUsed": {
      "labels": [
        "07-06 12:00",
        "07-06 13:00",
        "07-06 14:00",
        "07-06 15:00",
        "07-06 16:00",
        "07-06 17:00",
        "07-06 18:00",
        "07-06 19:00",
        "07-06 20:00",
        "07-06 21:00",
        "07-06 22:00",
        "07-06 23:00",
        "07-07 00:00",
        "07-07 01:00",
        "07-07 02:00",
        "07-07 03:00",
        "07-07 04:00",
        "07-07 05:00",
        "07-07 06:00",
        "07-07 07:00",
        "07-07 08:00",
        "07-07 09:00",
        "07-07 10:00",
        "07-07 11:00",
        "07-07 12:00",
        "07-07 13:00",
        "07-07 14:00",
        "07-07 15:00",
        "07-07 16:00",
        "07-07 17:00",
        "07-07 18:00",
        "07-07 19:00",
        "07-07 20:00",
        "07-07 21:00",
        "07-07 22:00",
        "07-07 23:00"
      ],
      "values": [
        82387.7,
        57052.8,
        66998.45,
        70489.4,
        69367.1,
        56209.9,
        59329.95,
        68068.65,
        70139.65,
        84429.95,
        68181.35,
        74225.7,
        66354.95,
        67178.55,
        75738.65,
        47342.2,
        70249.6,
        70632.25,
        56553.4,
        74730.15,
        64890.55,
        74414.5,
        69873.4,
        65431.4,
        80438.45,
        55312.35,
        80647.55,
        72030.95,
        65358.85,
        67634.7,
        85400.9,
        53055.8,
        91735.35,
        59419.45,
        69534.6,
        52462.5
      ]
    },
    "diskRead": {
      "labels": [
        "08-06 01:00",
        "08-06 04:00",
        "08-06 10:00",
        "08-06 22:00",
        "08-07 00:00",
        "08-07 04:00",
        "08-07 05:00",
        "08-07 12:00",
        "08-07 16:00",
        "08-07 17:00",
        "08-07 19:00",
        "08-07 20:00",
        "08-07 22:00",
        "08-07 23:00",
        "08-08 00:00",
        "08-08 02:00",
        "08-08 06:00",
        "08-08 07:00",
        "08-08 14:00",
        "08-08 16:00",
        "08-08 18:00",
        "08-09 01:00",
        "08-09 02:00",
        "08-09 09:00",
        "08-09 14:00",
        "08-09 15:00",
        "08-09 19:00",
        "08-10 01:00",
        "08-10 06:00",
        "08-10 16:00",
        "08-10 17:00",
        "08-10 19:00",
        "08-10 23:00",
        "08-11 12:00",
        "08-11 13:00",
        "08-11 14:00"
      ],
      "values": [
        179620.5,
        152593.0,
        14031.0,
        38530.0,
        16966.0,
        60718.0,
        56085.0,
        332853.0,
        83684.0,
        87771.0,
        439591.0,
        323383.0,
        472098.0,
        423800.0,
        362531.0,
        188811.5,
        274142.0,
        415587.0,
        156955.0,
        240654.0,
        324209.0,
        48609.0,
        213064.0,
        405491.0,
        360269.5,
        456567.0,
        311120.0,
        88089.0,
        375808.0,
        153696.0,
        254555.0,
        179635.0,
        184417.0,
        15712.0,
        179955.33,
        56637.0
      ]
    },
    "diskWrite": {
      "labels": [
        "08-06 23:00",
        "08-07 03:00",
        "08-07 04:00",
        "08-07 06:00",
        "08-07 10:00",
        "08-07 13:00",
        "08-07 15:00",
        "08-08 05:00",
        "08-08 06:00",
        "08-08 07:00",
        "08-08 09:00",
        "08-08 11:00",
        "08-08 15:00",
        "08-08 17:00",
        "08-08 19:00",
        "08-08 21:00",
        "08-09 00:00",
        "08-09 03:00",
        "08-09 04:00",
        "08-09 07:00",
        "08-09 13:00",
        "08-09 17:00",
        "08-09 20:00",
        "08-10 00:00",
        "08-10 02:00",
        "08-10 08:00",
        "08-10 10:00",
        "08-10 12:00",
        "08-10 13:00",
        "08-10 14:00",
        "08-10 15:00",
        "08-10 16:00",
        "08-10 18:00",
        "08-11 05:00",
        "08-11 08:00",
        "08-11 14:00"
      ],
      "values": [
        333801.0,
        69813.0,
        428380.0,
        95176.0,
        77915.0,
        455765.0,
        303033.0,
        149038.0,
        329503.0,
        427028.0,
        288752.0,
        125384.0,
        386833.0,
        324663.0,
        12019.0,
        127614.0,
        209541.0,
        262400.0,
        221544.0,
        129164.5,
        228105.0,
        496539.0,
        139050.0,
        393852.0,
        46689.0,
        214119.0,
        3730.0,
        326223.0,
        97631.0,
        448165.0,
        252057.0,
        38404.0,
        397484.0,
        108382.0,
        254814.0,
        212807.0
      ]
    }
  },
  "alarms": [
    {
      "time": "16:00",
      "hostid": "host006",
      "hostname": "server-006.hismartlab.cn",
      "room": "E机房",
      "metric": "磁盘 I/O 等待",
      "value": "44.41ms",
      "severity": "警告",
      "status": "待处理"
    },
    {
      "time": "15:53",
      "hostid": "host006",
      "hostname": "server-006.hismartlab.cn",
      "room": "E机房",
      "metric": "1分钟负载",
      "value": "27.45",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "15:46",
      "hostid": "host020",
      "hostname": "server-020.hismartlab.cn",
      "room": "C机房",
      "metric": "磁盘使用率",
      "value": "81.08%",
      "severity": "警告",
      "status": "已处理"
    },
    {
      "time": "15:39",
      "hostid": "host020",
      "hostname": "server-020.hismartlab.cn",
      "room": "C机房",
      "metric": "磁盘 I/O 等待",
      "value": "48.82ms",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "15:32",
      "hostid": "host020",
      "hostname": "server-020.hismartlab.cn",
      "room": "C机房",
      "metric": "1分钟负载",
      "value": "28.95",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "15:25",
      "hostid": "host009",
      "hostname": "server-009.hismartlab.cn",
      "room": "C机房",
      "metric": "磁盘 I/O 等待",
      "value": "48.57ms",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "15:18",
      "hostid": "host009",
      "hostname": "server-009.hismartlab.cn",
      "room": "C机房",
      "metric": "1分钟负载",
      "value": "29.33",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "15:11",
      "hostid": "host019",
      "hostname": "server-019.hismartlab.cn",
      "room": "B机房",
      "metric": "磁盘使用率",
      "value": "86.02%",
      "severity": "警告",
      "status": "已处理"
    },
    {
      "time": "15:04",
      "hostid": "host019",
      "hostname": "server-019.hismartlab.cn",
      "room": "B机房",
      "metric": "磁盘 I/O 等待",
      "value": "49.83ms",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:57",
      "hostid": "host019",
      "hostname": "server-019.hismartlab.cn",
      "room": "B机房",
      "metric": "1分钟负载",
      "value": "23.64",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:50",
      "hostid": "host015",
      "hostname": "server-015.hismartlab.cn",
      "room": "E机房",
      "metric": "磁盘使用率",
      "value": "91.37%",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:43",
      "hostid": "host015",
      "hostname": "server-015.hismartlab.cn",
      "room": "E机房",
      "metric": "磁盘 I/O 等待",
      "value": "48.12ms",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:36",
      "hostid": "host015",
      "hostname": "server-015.hismartlab.cn",
      "room": "E机房",
      "metric": "1分钟负载",
      "value": "20.32",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:29",
      "hostid": "host011",
      "hostname": "server-011.hismartlab.cn",
      "room": "A机房",
      "metric": "磁盘使用率",
      "value": "96.42%",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:22",
      "hostid": "host011",
      "hostname": "server-011.hismartlab.cn",
      "room": "A机房",
      "metric": "磁盘 I/O 等待",
      "value": "47.83ms",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:15",
      "hostid": "host011",
      "hostname": "server-011.hismartlab.cn",
      "room": "A机房",
      "metric": "1分钟负载",
      "value": "18.94",
      "severity": "严重",
      "status": "待处理"
    },
    {
      "time": "14:08",
      "hostid": "host017",
      "hostname": "server-017.hismartlab.cn",
      "room": "A机房",
      "metric": "磁盘 I/O 等待",
      "value": "37.97ms",
      "severity": "警告",
      "status": "已处理"
    },
    {
      "time": "14:01",
      "hostid": "host017",
      "hostname": "server-017.hismartlab.cn",
      "room": "A机房",
      "metric": "1分钟负载",
      "value": "24.91",
      "severity": "严重",
      "status": "待处理"
    }
  ],
  "hosts": [
    {
      "hostid": "host006",
      "hostname": "server-006.hismartlab.cn",
      "owner": "王二",
      "model": "Dell R740",
      "location1": "E机房",
      "location2": "机柜04",
      "cpu": 69.57,
      "mem": 9.62,
      "load1": 27.45,
      "diskUtil": 77.94,
      "ioWait": 44.41,
      "health": 59.9,
      "risk": 40.1,
      "status": "风险"
    },
    {
      "hostid": "host020",
      "hostname": "server-020.hismartlab.cn",
      "owner": "孙八",
      "model": "HP DL388",
      "location1": "C机房",
      "location2": "机柜12",
      "cpu": 25.98,
      "mem": 25.18,
      "load1": 28.95,
      "diskUtil": 81.08,
      "ioWait": 48.82,
      "health": 60.3,
      "risk": 39.7,
      "status": "风险"
    },
    {
      "hostid": "host009",
      "hostname": "server-009.hismartlab.cn",
      "owner": "林四",
      "model": "Huawei 2288H",
      "location1": "C机房",
      "location2": "机柜05",
      "cpu": 33.91,
      "mem": 48.17,
      "load1": 29.33,
      "diskUtil": 70.37,
      "ioWait": 48.57,
      "health": 63.7,
      "risk": 36.3,
      "status": "风险"
    },
    {
      "hostid": "host019",
      "hostname": "server-019.hismartlab.cn",
      "owner": "吴十",
      "model": "Lenovo SR860",
      "location1": "B机房",
      "location2": "机柜06",
      "cpu": 58.85,
      "mem": 14.53,
      "load1": 23.64,
      "diskUtil": 86.02,
      "ioWait": 49.83,
      "health": 64.5,
      "risk": 35.5,
      "status": "风险"
    },
    {
      "hostid": "host015",
      "hostname": "server-015.hismartlab.cn",
      "owner": "钱七",
      "model": "Lenovo SR860",
      "location1": "E机房",
      "location2": "机柜04",
      "cpu": 33.11,
      "mem": 32.85,
      "load1": 20.32,
      "diskUtil": 91.37,
      "ioWait": 48.12,
      "health": 67.3,
      "risk": 32.7,
      "status": "风险"
    },
    {
      "hostid": "host011",
      "hostname": "server-011.hismartlab.cn",
      "owner": "李四",
      "model": "Huawei 2288H",
      "location1": "A机房",
      "location2": "机柜06",
      "cpu": 29.87,
      "mem": 9.94,
      "load1": 18.94,
      "diskUtil": 96.42,
      "ioWait": 47.83,
      "health": 67.4,
      "risk": 32.6,
      "status": "风险"
    },
    {
      "hostid": "host017",
      "hostname": "server-017.hismartlab.cn",
      "owner": "赵六",
      "model": "Lenovo SR650",
      "location1": "A机房",
      "location2": "机柜04",
      "cpu": 62.72,
      "mem": 20.85,
      "load1": 24.91,
      "diskUtil": 75.91,
      "ioWait": 37.97,
      "health": 70.3,
      "risk": 29.7,
      "status": "关注"
    },
    {
      "hostid": "host013",
      "hostname": "server-013.hismartlab.cn",
      "owner": "黄五",
      "model": "Dell R740",
      "location1": "D机房",
      "location2": "机柜09",
      "cpu": 34.08,
      "mem": 19.98,
      "load1": 20.62,
      "diskUtil": 98.09,
      "ioWait": 30.99,
      "health": 72.3,
      "risk": 27.7,
      "status": "关注"
    },
    {
      "hostid": "host014",
      "hostname": "server-014.hismartlab.cn",
      "owner": "李四",
      "model": "Huawei 2288H",
      "location1": "A机房",
      "location2": "机柜09",
      "cpu": 57.12,
      "mem": 19.6,
      "load1": 22.61,
      "diskUtil": 75.15,
      "ioWait": 42.26,
      "health": 72.9,
      "risk": 27.1,
      "status": "关注"
    },
    {
      "hostid": "host007",
      "hostname": "server-007.hismartlab.cn",
      "owner": "林四",
      "model": "Huawei 2288H",
      "location1": "B机房",
      "location2": "机柜08",
      "cpu": 44.85,
      "mem": 3.06,
      "load1": 14.75,
      "diskUtil": 96.02,
      "ioWait": 45.66,
      "health": 73.5,
      "risk": 26.5,
      "status": "关注"
    },
    {
      "hostid": "host001",
      "hostname": "server-001.hismartlab.cn",
      "owner": "陈三",
      "model": "Dell R750",
      "location1": "A机房",
      "location2": "机柜12",
      "cpu": 22.09,
      "mem": 35.06,
      "load1": 23.72,
      "diskUtil": 43.59,
      "ioWait": 40.73,
      "health": 74.1,
      "risk": 25.9,
      "status": "关注"
    },
    {
      "hostid": "host012",
      "hostname": "server-012.hismartlab.cn",
      "owner": "刘六",
      "model": "Lenovo SR860",
      "location1": "E机房",
      "location2": "机柜05",
      "cpu": 59.65,
      "mem": 6.89,
      "load1": 20.32,
      "diskUtil": 80.85,
      "ioWait": 39.52,
      "health": 74.9,
      "risk": 25.1,
      "status": "关注"
    },
    {
      "hostid": "host004",
      "hostname": "server-004.hismartlab.cn",
      "owner": "王二",
      "model": "Huawei 2288H",
      "location1": "A机房",
      "location2": "机柜01",
      "cpu": 44.37,
      "mem": 8.51,
      "load1": 12.08,
      "diskUtil": 99.79,
      "ioWait": 42.92,
      "health": 76.6,
      "risk": 23.4,
      "status": "关注"
    },
    {
      "hostid": "host005",
      "hostname": "server-005.hismartlab.cn",
      "owner": "李四",
      "model": "HP DL388",
      "location1": "B机房",
      "location2": "机柜09",
      "cpu": 24.38,
      "mem": 12.52,
      "load1": 19.37,
      "diskUtil": 68.7,
      "ioWait": 41.41,
      "health": 79.0,
      "risk": 21.0,
      "status": "关注"
    },
    {
      "hostid": "host016",
      "hostname": "server-016.hismartlab.cn",
      "owner": "林四",
      "model": "Dell R750",
      "location1": "A机房",
      "location2": "机柜11",
      "cpu": 16.79,
      "mem": 28.71,
      "load1": 6.11,
      "diskUtil": 96.1,
      "ioWait": 46.4,
      "health": 81.2,
      "risk": 18.8,
      "status": "关注"
    },
    {
      "hostid": "host002",
      "hostname": "server-002.hismartlab.cn",
      "owner": "钱七",
      "model": "HP DL388",
      "location1": "B机房",
      "location2": "机柜03",
      "cpu": 55.85,
      "mem": 2.95,
      "load1": 12.38,
      "diskUtil": 62.63,
      "ioWait": 48.72,
      "health": 84.1,
      "risk": 15.9,
      "status": "关注"
    },
    {
      "hostid": "host018",
      "hostname": "server-018.hismartlab.cn",
      "owner": "刘六",
      "model": "Dell R750",
      "location1": "D机房",
      "location2": "机柜05",
      "cpu": 41.72,
      "mem": 19.74,
      "load1": 6.2,
      "diskUtil": 75.43,
      "ioWait": 46.25,
      "health": 88.5,
      "risk": 11.5,
      "status": "健康"
    },
    {
      "hostid": "host010",
      "hostname": "server-010.hismartlab.cn",
      "owner": "王五",
      "model": "HP DL388",
      "location1": "C机房",
      "location2": "机柜02",
      "cpu": 19.81,
      "mem": 30.15,
      "load1": 10.38,
      "diskUtil": 69.45,
      "ioWait": 43.94,
      "health": 88.6,
      "risk": 11.4,
      "status": "健康"
    },
    {
      "hostid": "host008",
      "hostname": "server-008.hismartlab.cn",
      "owner": "王二",
      "model": "Lenovo SR650",
      "location1": "A机房",
      "location2": "机柜03",
      "cpu": 49.19,
      "mem": 26.98,
      "load1": 8.89,
      "diskUtil": 97.02,
      "ioWait": 22.66,
      "health": 89.5,
      "risk": 10.5,
      "status": "健康"
    },
    {
      "hostid": "host003",
      "hostname": "server-003.hismartlab.cn",
      "owner": "林四",
      "model": "Dell R750",
      "location1": "E机房",
      "location2": "机柜02",
      "cpu": 7.44,
      "mem": 38.42,
      "load1": 3.61,
      "diskUtil": 65.01,
      "ioWait": 45.27,
      "health": 90.9,
      "risk": 9.1,
      "status": "健康"
    }
  ],
  "dictionaryCount": 55
};
