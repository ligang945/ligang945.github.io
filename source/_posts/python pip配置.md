---
title: python pip配置
date: 2018-11-09 19:51:10
tags: python
categories: 代码
---

Windows下和Linux配置文件路径不一样，感觉和git，bash的配置套路不太一致~~

Windows： `C:\Users\genius\pip\pip.ini`

Linux ： `~/.pip/pip.conf`

使用清华大学的源，配置文件内容：


```shell
[global]
    index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
    trusted-host = mirrors.aliyun.com
```
