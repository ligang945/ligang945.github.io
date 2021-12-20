
A.T.Field
JNI调用两层C++动态库
A.T.Field
JNI调用两层C++动态库
JNI

2019/07/16
 3
 Share
最近的Spark项目需要访问TSSD存储，由后台同学提供一个 C++ 动态库，包含读写接口，然后我通过JNI包装so库，调用C++方法。

在Spark中如何使用JNI调用C++动态库，这篇文章讲的很清楚了 http://icejoywoo.github.io/2018/07/25/spark-jni.html

在后台同学给我提供so之前，我按照这篇文章实操了一遍，感觉问题不大，就把这项工作降低优先级，放一边了，等后台做完我稍微搞下就好了。

然而拿到后台的动态库之后，才发现不太一样。

常规使用 JNI 的方法的步骤如下：

1、写一个Java类，包含native方法

2、javah命令生成h文件，包含native方法的c++声明

3、编写cpp，实现h文件的声明

4、g++把h和cpp编译为动态库

5、javac编译Java类，并执行，完毕

其中h和cpp文件不是常规的c++代码，包含了一坨JNIEXPORT，JNICALL，JNIEnv等关键字。

然而后台给我的so和h文件是已经写好的，并不是我生成的，没有那些关键字，也就意味着我不能直接使用。

deadline快到了，我慌的一匹……

冷静下来，思考了一下，解决方案有两个：

1、我按照上述常规方法，生成h文件，让后台按照h文件实现cpp，然后编译为so给我。

2、我生成h文件，自己编写cpp，对后台的so再封装一层，编译为so。我的Java应用调用我的so，我的so再调用后台的so。

两个方案的优缺点比较：

方案1

1、后台同学只会c++，没玩过JNI。JNIEXPORT，JNICALL，JNIEnv这些关键字估计能给他搞蒙，deadline之前不一定能做完。

2、我看似不用写cpp，省了些工作，但后台的编码、编译都需要我支持，沟通协作工作量也少不了。

方案2

1、我好多年没碰c++，语法忘差不多了。IDE，编译器也没有。

2、JNI我也是第一次用，网上的教程都是包一层so的，包两层的没见过。具体有哪些坑不确定。

至于耦合性方面，两种方案差不多。在接口不变的情况下，都不需要重新编译，接口改变的话，都需要重新编译。

最终选择方案2，开干吧！

过程中的辛酸泪就不说了……主要是在g++编译方面踩了大把的坑，什么编译错误，运行时找不到符号，段错误等等。

最终参考这篇文章搞定了 https://blog.csdn.net/Maybe_Lee/article/details/78586198

最后回顾一下完整过程：

1、后台的libtssd.so放入/usr/lib64中，省去设置环境变量，库路径的烦恼

2、编写TssdUtil.java

3、javah TssdUtil.java，生成TssdUtil.h

4、编写TssdUtil.cpp，实现TssdUtil.h

5、编译libtssdutil.so，依赖libtssd.so

g++ -Wall /usr/lib64/libtssd.so TssdUtil.cpp -I/data/fk_package/jdk1.8.0_181/include -I/data/fk_package/jdk1.8.0_181/include/linux -I. -fPIC -shared -o libtssdutil.so

6、libtssdutil.so放入/usr/lib64中

7、编译并运行TssdUtil

javac TssdUtil.java && java TssdUtil

最关键的就是步骤5

原文作者：ligang

原文链接：http://ligang945.github.io/2019/07/16/JNI调用两层C++动态库/

发表日期：July 16th 2019, 7:49:00 am

更新日期：September 27th 2019, 5:07:11 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
我最喜欢的电影
Previous Post
node js调试的三种方法
Powered by Hexotheme Archer
PV: 133 :)
