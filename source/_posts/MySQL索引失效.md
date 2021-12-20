
A.T.Field
MySQL索引失效
A.T.Field
MySQL索引失效
mysql

2018/11/25
 3
 Share
Google了很多"MySQL索引失效"的文章，写的都很杂乱，于是自己综合了几篇文章，整理了一下。

参考资料：

https://www.jianshu.com/p/932bcdf2c89f

https://blog.csdn.net/u010796790/article/details/52194850

¶索引失效的场景
like 以%开头，索引无效；当like前缀没有%，后缀有%时，索引有效。
or语句前后没有同时使用索引。当or左右查询字段只有一个是索引，该索引失效，只有当or左右查询字段均为索引时，才会生效。
组合索引，不是使用第一列索引，索引失效。
数据类型出现隐式转化。如varchar不加单引号的话可能会自动转换为int型，使索引无效，产生全表扫描。
在索引列上使用 IS NULL 或 IS NOT NULL操作。索引是不索引空值的，所以这样的操作不能使用索引，可以用其他的办法处理，例如：数字类型，判断大于0，字符串类型设置一个默认值，判断是否等于默认值即可。
在索引字段上使用not，<>，!=。不等于操作符是永远不会用到索引的，因此对它的处理只会产生全表扫描。 优化方法： key<>0 改为 key>0 or key<0。
对索引字段进行计算操作。
在索引字段上使用函数。
当全表扫描速度比索引速度快时，mysql会使用全表扫描，此时索引失效。
¶索引失效分析工具
可以使用explain命令加在要分析的sql语句前面，在执行结果中查看key这一列的值，如果为NULL，说明没有使用索引。

explain命令的详细用法，可以查看这篇文章：https://segmentfault.com/a/1190000008131735

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/25/MySQL索引失效/

发表日期：November 25th 2018, 8:00:00 am

更新日期：September 27th 2019, 5:06:48 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
海量数据处理面试题六大套路
Previous Post
2018阿里巴巴在线编程题--将数组分割为和相等的三段
Powered by Hexotheme Archer
PV: 136 :)
1. ¶索引失效的场景
2. ¶索引失效分析工具
