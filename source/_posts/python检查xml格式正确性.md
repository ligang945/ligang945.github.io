---
title: python检查xml格式正确性
date: 2018-11-09 19:51:10
tags: python
categories: 代码
---

有时帮同事定位问题，一顿分析之后才发现是同事修改xml配置文件，把文件格式改错了，解析失败导致的故障。

低级错误浪费大量时间啊~

一个简单的办法是把xml文件拖动到IE浏览器中打开，如果文件格式不正确的话，IE就会提示。

然而有时文件在服务器上，导到Windows上，再用IE打开，还是略繁琐了一些，因此用python写了一段，来验证xml格式的正确性。

不得不说，sax方式解析xml挺繁琐，但是用来验证xml还是出乎意料的简短。

```python
import sys
from xml.sax.handler import ContentHandler
from xml.sax import make_parser

def parseFile(fileName):
    parser = make_parser()
    parser.setContentHandler(ContentHandler())
    parser.parse(fileName)

if __name__ == '__main__':
    args = sys.argv
    try:
        filename = args[1]
    except Exception:
        print('\tERROR: no input file!')
    try:
        parseFile(filename)
        print('\n\t:), %s is OK!\n' % filename)
    except Exception as e:
        print('\n\t:(,  Error found in file:%s\n' % e)
```
