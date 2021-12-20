
A.T.Field
git冲突处理
A.T.Field
git冲突处理
git

2018/11/09
 7
 Share
以前用svn管理代码，图形界面使用TortoiseSVN，svn update出现冲突时，在log窗口点击右键就可以直接选择"以自己的为准"或"以仓库的为准"。

切换到git后，苦于没有好用的图形工具（SmartGit还凑合），一直使用命令行，更新代码出现冲突时，没有上述两个选项，感觉很不习惯，于是自己写了两个小函数来实现上述功能。

加入到~/.bash_profile就可以愉快的使用了，Windows，Linux都可以。

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
function resolve_conflict_using_mine {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --theirs
    git add -A
    git rebase --continue
}
    
function resolve_conflict_using_theirs {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --ours
    git add -A
    git rebase --continue
}
遇到冲突时，敲resolve_conflict_using_mine就可以"以自己的为准"解决冲突，反之敲resolve_conflict_using_theirs可以"以仓库的为准"解决冲突。

当然，用"自己的"，"仓库的"来描述git模型并不准确。明白就好~

上面两个函数是不是看着有点奇怪，ours和theirs感觉反了？

因为我习惯使用rebase而不是merge，全局配置了pull.rebase=true，所以ours和theirs是反的。

git help checkout 查看文档，可以看到有以下描述：

Note that during git rebase and git pull --rebase, ours and theirs may
appear swapped; --ours gives the version from the branch the changes are
rebased onto, while --theirs gives the version from the branch that holds your
work that is being rebased.

使用merge而不是rebase的同学，可以使用下面的函数。

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
function resolve_conflict_using_mine {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --ours
    git add -A
    git merge --continue
}
    
function resolve_conflict_using_theirs {
    git status --porcelain | egrep '^UU' | cut -d ' ' -f 2 | xargs git checkout --theirs
    git add -A
    git merge --continue
}

原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/09/git冲突处理/

发表日期：November 9th 2018, 7:37:00 am

更新日期：September 27th 2019, 5:05:23 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
python pip配置
Previous Post
批量将代码从GBK转为UTF-8
Powered by Hexotheme Archer
PV: 141 :)
