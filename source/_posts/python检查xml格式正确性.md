
A.T.Field
python检查xml格式正确性
A.T.Field
python检查xml格式正确性
python

2018/11/09

 Share
有时帮同事定位问题，一顿分析之后才发现是同事修改xml配置文件，把文件格式改错了，解析失败导致的故障。

低级错误浪费大量时间啊~

一个简单的办法是把xml文件拖动到IE浏览器中打开，如果文件格式不正确的话，IE就会提示。

然而有时文件在服务器上，导到Windows上，再用IE打开，还是略繁琐了一些，因此用python写了一段，来验证xml格式的正确性。

不得不说，sax方式解析xml挺繁琐，但是用来验证xml还是出乎意料的简短。

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
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

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/09/python检查xml格式正确性/

发表日期：November 9th 2018, 1:19:00 pm

更新日期：September 27th 2019, 5:07:39 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
修改乱码文件名
Previous Post
开启Spark history server
Powered by Hexotheme Archer
PV: :)
