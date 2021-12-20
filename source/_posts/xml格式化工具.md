
A.T.Field
xml格式化工具
A.T.Field
xml格式化工具
C++

2018/11/10

 Share
工作中有大量的xml配置文件，经常被人改的乱七八糟，作为强迫症患者，必须要把它整理整理~

曾经用MFC写过一个，Windows下用起来是不错，Linux下就麻烦了，于是重写了一个命令行版本的，全部代码如下：

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
#include 
#include "tinyxml2.h"

using namespace std;
using namespace tinyxml2;

int main(int argc, char *argv[])
{
    if (argc != 2) {
        cout << "error: need input file" << endl;
        return 0;
    }

    XMLDocument doc(true, COLLAPSE_WHITESPACE);
    doc.LoadFile(argv[1]);
    doc.SaveFile(argv[1]);
    cout << "beautified " << argv[1] << endl;
    return 0;
}
其实就是用tinyxml打开一次再保存就可以啦，利用了tinyxml可以自动整理格式的特性~

by the way，写命令行程序比写MFC容易太多了，MFC需要写大量图形界面交互的代码，而核心代码其实没多少

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/10/xml格式化工具/

发表日期：November 10th 2018, 7:35:00 am

更新日期：September 27th 2019, 5:07:24 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
JavaScript中的柯里化
Previous Post
Linux下测试磁盘读写速度
Powered by Hexotheme Archer
PV: :)
