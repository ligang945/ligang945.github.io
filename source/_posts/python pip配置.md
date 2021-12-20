
A.T.Field
python pip配置
A.T.Field
python pip配置
python

2018/11/09

 Share
Windows下和Linux配置文件路径不一样，感觉和git，bash的配置套路不太一致~~

Windows： C:\Users\genius\pip\pip.ini

Linux ： ~/.pip/pip.conf

使用清华大学的源，配置文件内容：

1
2
3
4
[global]
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
    trusted-host = mirrors.aliyun.com

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/09/python pip配置/

发表日期：November 9th 2018, 7:57:00 am

更新日期：September 27th 2019, 5:06:26 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
开启Spark history server
Previous Post
git冲突处理
Powered by Hexotheme Archer
PV: :)
