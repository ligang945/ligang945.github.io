# 第三方前端资源

`source/lib` 中的部分文件由上游项目直接引入。升级或替换时请同步更新版本和 SHA-256，并确认许可证要求。

| 文件 | 项目 | 版本 | 许可 |
| --- | --- | --- | --- |
| `APlayer.min.js`、`APlayer.min.css` | [APlayer](https://github.com/DIYgod/APlayer) | 1.10.1 | MIT |
| `fancybox.umd.js`、`fancybox.css` | [Fancyapps UI](https://github.com/fancyapps/ui) | 5.0.36 | [Fancyapps UI License](https://github.com/fancyapps/ui/blob/v5.0.36/LICENSE.md)，非开源许可 |
| `jquery.min.js` | [jQuery](https://github.com/jquery/jquery) | 3.6.0 | MIT |

## 来源

- APlayer JS：`https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js`
- APlayer CSS：`https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css`
- Fancybox JS：`https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0.36/dist/fancybox/fancybox.umd.js`
- Fancybox CSS：`https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0.36/dist/fancybox/fancybox.css`
- jQuery：`https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js`

## SHA-256

```text
5ed9a37db062077c50e58c05e488684215f8f2066e133032911487ee0f928e86  APlayer.min.js
504208bfe4202249ba2eff317d189f249faa785f1631d99f0f6d93803fa6750a  APlayer.min.css
862504070144a4b17a0e507cb065e52a8e243d9e3a522e2a1a9774beb5643a6e  fancybox.umd.js
cccf165ed1b87949fb74a28d313ba8599b9bfbe56749f68ea40ffc3c97ef4c1a  fancybox.css
80f04717f32ea0320c5e8618fbacedd1fee3a8775ad8292140a6113551d4b5b0  jquery.min.js
```

## 维护说明

- 仓库未保存 APlayer 的 source map，因此已删除两个文件末尾的 `sourceMappingURL` 注释，避免浏览器产生无效请求。
- 替换 APlayer 时保持 `APlayer.min.js`、`APlayer.min.css` 版本一致。
- Fancybox 使用 Fancyapps UI License，商业使用前应确认上游授权条款。
