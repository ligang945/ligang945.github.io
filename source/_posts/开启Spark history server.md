---
title: 开启Spark history server
date: 2018-11-09 19:51:10
tags: 分享
categories: 代码
---

配置 spark-defaults.conf

```shell
spark.eventLog.enabled             true
spark.eventLog.dir                 file:///home/spark-2.1.1-bin-hadoop2.7/history_log
spark.history.update.interval      1
spark.history.retainedApplications 50
spark.history.ui.port              18080
```
然后启动

```shell
sbin/start-history-server.sh /home/spark-2.1.1-bin-hadoop2.7/history_log
```
