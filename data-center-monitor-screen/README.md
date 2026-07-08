# 数据中心运行监控大屏

## 1. 作业目标

本项目基于 4 个原始数据文件开发运维监控可视化大屏：

- `host_detail.dat`：主机基础信息表
- `mod_detail.dat`：指标字典表
- `pref_tsar.dat`：性能监控数据表
- `disk_tsar.dat`：磁盘监控数据表

大屏用于展示数据中心服务器运行状态，包括主机总数、在线数量、健康度、告警处理情况、机房健康分布、硬件类型分布、主机风险 Top、健康度仪表盘、实时告警、磁盘读写 Top、CPU/内存利用率等。

## 2. 文件说明

| 文件 | 说明 |
| --- | --- |
| `index.html` | 大屏入口页面，双击即可打开 |
| `styles.css` | 大屏样式 |
| `app.js` | 可视化渲染逻辑 |
| `data/metrics.js` | 由 4 个 `.dat` 文件处理得到的指标数据 |
| `build_dashboard.py` | 数据处理脚本，可重新生成 `data/metrics.js` |

## 3. 运行方式

直接打开：

```text
data-center-monitor-screen/index.html
```

如果需要重新处理数据：

```powershell
G:\Python\Python313\python.exe data-center-monitor-screen\build_dashboard.py
```

## 4. 数据处理逻辑

### 4.1 表关联

大屏采用“维度表 + 事实表”的分析模型：

- `host_detail.hostid = pref_tsar.hostid`
- `host_detail.hostid = disk_tsar.hostid`
- `mod_detail.mod = pref_tsar.mod` 且 `mod_detail.type = pref_tsar.type`
- `mod_detail.mod = disk_tsar.mod` 且 `mod_detail.type = disk_tsar.type`

### 4.2 时间戳转换

原始监控表中的 `ts` 是 13 位毫秒时间戳。处理方式：

```python
datetime.fromtimestamp(int(ts) / 1000)
```

转换后可拆分为年、月、日、小时、分钟，并按小时或天进行聚合。

### 4.3 在线数量

由于原始数据没有真实在线/离线字段，本项目用最新性能监控日期内是否存在采样记录来判断在线状态。若主机在最新性能监控日期中存在采样，则认为在线。

### 4.4 健康度计算

健康度基于最新采样中的 CPU、内存、负载、磁盘使用率、I/O 等待时间综合计算：

- CPU 使用率越高，扣分越多
- 内存利用率越高，扣分越多
- 磁盘使用率越高，扣分越多
- I/O 等待越高，扣分越多
- 负载越高，扣分越多

健康度状态：

| 健康度 | 状态 |
| ---: | --- |
| `>= 85` | 健康 |
| `70 - 84.9` | 关注 |
| `55 - 69.9` | 风险 |
| `< 55` | 严重 |

### 4.5 实时告警规则

由于原始数据没有告警表，本项目根据阈值规则从监控指标中生成告警：

| 指标 | 警告阈值 | 严重阈值 |
| --- | ---: | ---: |
| CPU 使用率 | `>= 80%` | `>= 90%` |
| 内存利用率 | `>= 80%` | `>= 90%` |
| 磁盘使用率 | `>= 80%` | `>= 90%` |
| 磁盘 I/O 等待 | `>= 35ms` | `>= 45ms` |
| 1 分钟负载 | `>= 12` | `>= 16` |

告警处理状态为模拟字段，用于满足“告警处理情况”展示需求。

## 5. 已实现功能

- 主机总数、在线数量、平均健康度、待处理告警 KPI
- 健康度仪表盘
- 机房健康分布
- 硬件类型分布
- CPU / 内存利用率趋势
- 主机风险 Top 10
- 实时告警列表
- 磁盘读写 Top
- CPU 使用率 Top
- 内存利用率 Top
- 主机运行明细表

## 6. 技术说明

本项目采用前后端分离思想：

- 数据处理层：`build_dashboard.py` 读取 4 个 `.dat` 文件并生成 `data/metrics.js`
- 展示层：`index.html` + `styles.css` + `app.js` 读取处理后的数据并绘制大屏

为保证离线可提交和直接打开，本项目没有依赖外部 CDN。图表使用 Canvas 原生绘制，实现效果类似 ECharts 的仪表盘、柱状图、折线图和排行图。
