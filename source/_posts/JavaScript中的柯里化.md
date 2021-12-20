
A.T.Field
JavaScript中的柯里化
A.T.Field
JavaScript中的柯里化
JavaScript

2018/11/10

 Share
今天在博客园首页看到一篇好文章 【译】理解JavaScript中的柯里化

加上最近工作中的一些感悟，算是对函数式编程语言（scala, python, javascrtpt）中的闭包，偏函数、柯里化有了更进一步的认识。

之前学Scala被绕的云里雾里的各种名词，现在也开始慢慢理解了。

上面那篇文章写的很好，这里就只说一下自己实际用到的一个例子。

现在需要对流速进行转换，流速的单位有 bps、Kbps、Mbps、Gbps、Tbps，从一个单位转换到另一个单位需要除N次1000。

可能需要有从bps转换到Gbps的，也可能有需要从Kbps转换到Gbps的，按照普通的写法就会很丑很杂。

这里出现个除1000，那里出现个除1000000，可读性、维护性极差。

使用闭包就可以让代码变得优雅：

定义一个流速转换函数：

1
2
3
4
5
function flowVelocityFormater(base, power) {
    return function(v) {
        return (v / Math.pow(base, power)).toFixed(2);
    }
}
在此基础上，得到几个基本的转换函数：

1
2
var bps2Gbps = flowVelocityFormater(1000, 9);
var Kbps2Gbps =  flowVelocityFormater(1000, 6);
实际转换时就可以使用

1
newValue = bps2Gbps(value);
语义简洁清晰多了。

未来有一天，单位转换需要按1024而不是1000转换时，也只需要修改

1
bps2Gbps = flowVelocityFormater(1024, 9);
即可，或者定义一个新的函数。代码的维护性大大增强。

函数式编程还是蛮爽的~

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/10/JavaScript中的柯里化/

发表日期：November 10th 2018, 11:08:00 am

更新日期：September 27th 2019, 5:05:04 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
我的上网配置
Previous Post
xml格式化工具
Powered by Hexotheme Archer
PV: :)
