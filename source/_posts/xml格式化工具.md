---
title: xml格式化工具
date: 2018-11-10 19:51:10
tags: C++
categories: 代码
---

工作中有大量的xml配置文件，经常被人改的乱七八糟，作为强迫症患者，必须要把它整理整理~

曾经用MFC写过一个，Windows下用起来是不错，Linux下就麻烦了，于是重写了一个命令行版本的，全部代码如下：

```C++
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
```

其实就是用tinyxml打开一次再保存就可以啦，利用了tinyxml可以自动整理格式的特性~

by the way，写命令行程序比写MFC容易太多了，MFC需要写大量图形界面交互的代码，而核心代码其实没多少
