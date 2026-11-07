# 文章音乐播放器

这是 Archer 主题的本地扩展。文章 Front-matter 中启用 `music` 后，播放器会显示在正文之前。

## 配置示例

```yaml
---
title: 文章标题
date: 2026-01-01 00:00:00
music:
  enable: true
  title: One Last Kiss
  artist: 宇多田ヒカル
  url: /music/one.last.kiss.mp3
  cover: /intro/eva.webp
  autoplay: false
---
```

## 字段

| 字段 | 必填 | 说明 |
| --- | --- | --- |
| `enable` | 是 | 必须严格为 `true` 才会启用 |
| `title` | 否 | 歌曲标题，默认 `Unknown` |
| `artist` | 否 | 艺术家，默认 `Unknown` |
| `url` | 是 | 音频地址，启用播放器时不能为空 |
| `cover` | 否 | 封面图片地址，默认空字符串 |
| `autoplay` | 否 | 仅布尔值 `true` 会启用自动播放 |

`enable: true` 但缺少 `url` 时，Hexo 构建会直接报错并指出对应文章，避免生成不可用的播放器配置。

## 实现结构

- `layout/_partial/post-music.ejs`：播放器容器和安全序列化后的配置
- `source/css/post-music.css`：亮色、暗色播放器样式
- `source/scripts/post-music.js`：APlayer 初始化及主题同步
- `scripts/post-music.js`：Front-matter 校验和默认值处理
- `source/lib/APlayer.min.*`：本地 APlayer 资源

播放器跟随 Archer 的 `preferredThemeMode` 和系统深色模式偏好，并在页面切换主题时同步样式。

第三方资源的版本、来源和校验值见 [THIRD_PARTY.md](../THIRD_PARTY.md)。
