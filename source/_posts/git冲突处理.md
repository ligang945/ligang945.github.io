---
title: git冲突处理
date: 2018-11-09 19:51:10
tags: git
categories: 代码
---

以前用svn管理代码，图形界面使用TortoiseSVN，`svn update`出现冲突时，在log窗口点击右键就可以直接选择"以自己的为准"或"以仓库的为准"。

切换到git后，苦于没有好用的图形工具（SmartGit还凑合），一直使用命令行，更新代码出现冲突时，没有上述两个选项，感觉很不习惯，于是自己写了两个小函数来实现上述功能。

加入到`~/.bash_profile`就可以愉快的使用了，Windows，Linux都可以。


```shell
function resolve_conflict_using_mine {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --theirs
    git add -A
    git rebase --continue
}
```
    
```shell
function resolve_conflict_using_theirs {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --ours
    git add -A
    git rebase --continue
}
```
遇到冲突时，敲`resolve_conflict_using_mine`就可以"以自己的为准"解决冲突，反之敲`resolve_conflict_using_theirs`可以"以仓库的为准"解决冲突。

当然，用"自己的"，"仓库的"来描述git模型并不准确。明白就好~

上面两个函数是不是看着有点奇怪，ours和theirs感觉反了？

因为我习惯使用rebase而不是merge，全局配置了`pull.rebase=true`，所以ours和theirs是反的。

`git help checkout` 查看文档，可以看到有以下描述：

> Note that during git rebase and git pull --rebase, ours and theirs may
appear swapped; --ours gives the version from the branch the changes are
rebased onto, while --theirs gives the version from the branch that holds your
work that is being rebased.

使用merge而不是rebase的同学，可以使用下面的函数。


```shell
function resolve_conflict_using_mine {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --ours
    git add -A
    git merge --continue
}
```    

```shell
function resolve_conflict_using_theirs {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --theirs
    git add -A
    git merge --continue
}
```
