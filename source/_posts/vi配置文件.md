---
title: vi配置文件
date: 2018-11-04 19:51:10
tags: vi
categories: 代码
---

我的vi配置文件

`touch ~/.vimrc`

```shell
colorscheme delek
filetype on
syntax on
autocmd FileType c,cpp :set cindent
set number
set history=100
set autoindent
set expandtab
set tabstop=4
set shiftwidth=4
set showmatch
```

vim自带的一些colors scheme，在/usr/share/vim/vim72/colors路径下：

```shell
blue.vim
default.vim
desert_lg.vim
elflord.vim
fu.vim
morning.vim
pablo.vim
shine.vim
SolarizedDark.vim
zellner.vim
darkblue.vim
delek.vim
desert.vim
evening.vim
koehler.vim
murphy.vim
peachpuff.vim
ron.vim
slate.vim
torte.vim
```
