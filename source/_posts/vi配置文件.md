
A.T.Field
vi配置文件
vi配置文件
vi

2018/11/04

 Share
我的vi配置文件

touch ~/.vimrc

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
vim自带的一些colors scheme，在/usr/share/vim/vim72/colors路径下：

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


原文作者：ligang

原文链接：http://ligang945.github.io/2018/11/04/vi配置文件/

发表日期：November 4th 2018, 7:43:00 am

更新日期：September 27th 2019, 5:07:31 pm

版权声明：All Rights Reserved. 未经许可 不得转载

Next Post
批量将代码从GBK转为UTF-8
Previous Post
git配置文件
Powered by Hexotheme Archer
PV: :)
