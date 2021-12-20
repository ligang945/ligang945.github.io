
A.T.Field
批量将代码从GBK转为UTF-8
A.T.Field
批量将代码从GBK转为UTF-8
Shell

2018/11/09
 4
 Share
最近需要批量的将java代码从GBK编码转换为UTF-8编码。

用Intellij IDEA转换太麻烦，自己写小工具又懒得写。

想到Linux的iconv命令可以转换文件的格式，就在此基础上，写了个批量处理的函数：查找当前目录下所有的java代码文件，并转换格式。

将这段函数加入到~/.bashrc中，就可以愉快的使用了。

1
2
3
4
5
6
7
8
9
function iconv_java_to_utf8 {
    for JAVA_FILE in $(find -name "*.java")
    do
        if [ "$(file $JAVA_FILE | grep -v UTF-8)" != "" ] ;then
            echo convert $JAVA_FILE
            iconv -f GBK -t UTF-8 $JAVA_FILE -o $JAVA_FILE
        fi
    done
}

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/09/批量将代码从GBK转为UTF-8/

发表日期：November 9th 2018, 6:57:00 am

更新日期：September 27th 2019, 5:04:11 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
git冲突处理
Previous Post
vi配置文件
Powered by Hexotheme Archer
PV: 142 :)
