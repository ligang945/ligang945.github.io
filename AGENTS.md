# 项目配置信息

## 项目概述
- **类型**: 基于 Hexo 的博客
- **主题**: archer
- **托管平台**: GitHub Pages

## 开发规范

### Git 操作规范
- 代码修改完成后需要执行 `git commit`
- **禁止擅自 push 代码**，除非用户明确告知可以 push

### 本地调试
- 本地启动调试使用 **4001 端口**

## 功能配置

### 文章音乐播放器 (APlayer)
每篇文章支持独立的音乐播放器，播放器显示在正文前面。

**音乐文件存放**: COS 服务器

**使用方法** - 在文章 Front-matter 中添加：

```markdown
---
title: 文章标题
date: 2025-01-01 00:00:00
# 文章音乐播放器配置
music:
  enable: true
  title: "歌曲标题"
  artist: "艺术家"
  url: "https://your-cos-domain.com/path/to/music.mp3"
  cover: "封面图片URL(可选)"
  autoplay: false
---
```

**示例** (`EVA终章.md`):
```markdown
---
title: EVA终章
date: 2025-11-02 22:17:11
tags:
- EVA
- 青春
categories: 生活
header_image: /intro/eva.webp
# 文章音乐播放器配置
music:
  enable: true
  title: "One Last Kiss"
  artist: "宇多田ヒカル"
  url: "https://your-cos-domain.com/music/one-last-kiss.mp3"
  cover: "/intro/eva.webp"
  autoplay: false
---
```

### 内嵌音乐播放器 (可选)
如需在文章正文中内嵌播放器（另一种方式），可使用 hexo-tag-aplayer 标签：

```markdown
{% aplayer "歌曲标题" "艺术家" "音乐URL" "封面URL" %}
```
