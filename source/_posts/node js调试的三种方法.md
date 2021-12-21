---
title: node js调试的三种方法
date: 2019-02-15 19:51:10
tags: JavaScript
categories: 代码
---
### 1、类似GDB在命令行界面调试
执行命令：

node debug helloword-debug.js

就可以进入调试模式。

界面和交互和GDB很像，梦回C++开发时代，哈哈，可以玩一下，但是没有图形界面，不怎么实用。

参考资料：https://github.com/i5ting/node-debug-tutorial

### 2、在chrome调试界面调试
很多旧的资料说需要安装node-inspector，其实不用了，安装还报错。我的node版本v10.15.0。

执行命令：

node --inspect-brk ./helloword-debug.js

界面输出

Debugger listening on ws://127.0.0.1:9229/12f2b3e6-f94c-42fe-8dfb-
7c68827b6f4d

此时打开浏览器，输入http://127.0.0.1:9292，然后打开调试工具，点击node图标，就可以在浏览器里调试了。

参考资料：http://www.ruanyifeng.com/blog/2018/03/node-debugger.html

### 3、使用webstorm调试
现在vs code很流行，用vs code调试也是可以的，但我还是喜欢JetBrains全家桶。

使用起来比较简单，不赘述了。

参考资料：https://www.cnblogs.com/jinguangguo/p/4809886.html
