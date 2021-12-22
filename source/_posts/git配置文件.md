---
title: git配置文件
date: 2018-11-04 19:51:10
tags: 
- git
- shell
- 配置
categories: 代码
---

我的git配置文件，主要包括三部分：

命令简写
写日志的图形界面编辑器
配置`beyond compare 3`做diff和merge

```bash
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
```
