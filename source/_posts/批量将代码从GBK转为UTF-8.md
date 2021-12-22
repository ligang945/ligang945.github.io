---
title: 批量将代码从GBK转为UTF-8
date: 2018-11-09 19:51:10
tags:
- shell
categories: 代码
---

最近需要批量的将java代码从GBK编码转换为UTF-8编码。

用Intellij IDEA转换太麻烦，自己写小工具又懒得写。

想到Linux的iconv命令可以转换文件的格式，就在此基础上，写了个批量处理的函数：查找当前目录下所有的java代码文件，并转换格式。

将这段函数加入到~/.bashrc中，就可以愉快的使用了。

```shell
function iconv_java_to_utf8 {
    for JAVA_FILE in $(find -name "*.java")
    do
        if [ "$(file $JAVA_FILE | grep -v UTF-8)" != "" ] ;then
            echo convert $JAVA_FILE
            iconv -f GBK -t UTF-8 $JAVA_FILE -o $JAVA_FILE
        fi
    done
}
```
