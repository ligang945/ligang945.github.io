
A.T.Field
git配置文件
A.T.Field
git配置文件
git

2018/11/04

 Share
我的git配置文件，主要包括三部分：

命令简写
写日志的图形界面编辑器
配置beyond compare 3做diff和merge
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
21
22
23
24
25
26
27
28
[alias]
    co = checkout
    ci = commit
    st = status
    br = branch
    his = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
    type = cat-file -t
    dump = cat-file -p
    ls = ls-files
    bcd = difftool --dir-diff --tool=bc --no-prompt
[core]
    autocrlf = false
    safecrlf = true
    quotepath = false
    whitespace = trailing-space
    pager = head
[push]
    default = simple
[diff]
    tool = bc
[difftool "bc"]
    path = /usr/local/bin/bcomp
[merge]
    tool = bc
[mergetool "bc"]
    path = /usr/local/bin/bcomp
[pull]
    rebase = true

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/04/git配置文件/

发表日期：November 4th 2018, 7:37:00 am

更新日期：January 17th 2020, 4:52:55 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
vi配置文件
Previous Post
多进程完成批量任务
Powered by Hexotheme Archer
PV: :)
