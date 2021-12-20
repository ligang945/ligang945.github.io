
A.T.Field
Linux下测试磁盘读写速度
A.T.Field
Linux下测试磁盘读写速度
Linux

2018/11/10

 Share
1.测/目录所在磁盘的纯写速度：

time dd if=/dev/zero bs=1024 count=1000000 of=/1Gb.file

2.测/目录所在磁盘的纯读速度：

time dd if=/1Gb.file bs=64k |dd of=/dev/null

3.测读写速度：

time dd if=/1Gb.file of=/data0/2.Gb.file bs=64k

理论上复制量越大测试越准确。

命令解释：

time有计时作用，dd用于复制，从if读出，写到of。

if=/dev/zero不产生IO，因此可以用来测试纯写速度。

同理of=/dev/null不产生IO，可以用来测试纯读速度。

bs是每次读或写的大小，即一个块的大小，count是读写块的数量。

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/10/Linux下测试磁盘读写速度/

发表日期：November 10th 2018, 4:25:00 am

更新日期：September 27th 2019, 5:07:00 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
xml格式化工具
Previous Post
修改乱码文件名
Powered by Hexotheme Archer
PV: :)
