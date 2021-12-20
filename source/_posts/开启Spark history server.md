
A.T.Field
开启Spark history server
A.T.Field
开启Spark history server
Spark

2018/11/09

 Share
配置 spark-defaults.conf

1
2
3
4
5
spark.eventLog.enabled             true
spark.eventLog.dir                 file:///home/spark-2.1.1-bin-hadoop2.7/history_log
spark.history.update.interval      1
spark.history.retainedApplications 50
spark.history.ui.port              18080
然后启动

1
sbin/start-history-server.sh /home/spark-2.1.1-bin-hadoop2.7/history_log

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/09/开启Spark history server/

发表日期：November 9th 2018, 8:05:00 am

更新日期：September 27th 2019, 5:04:47 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
python检查xml格式正确性
Previous Post
python pip配置
Powered by Hexotheme Archer
PV: :)
