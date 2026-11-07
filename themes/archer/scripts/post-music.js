'use strict'

/**
 * Validate and normalize the post music front-matter.
 * Returns null when music is not enabled for this post.
 */
hexo.extend.helper.register('post_music_config', function postMusicConfig(page) {
  const music = page.music
  if (!music || music.enable !== true) return null

  if (typeof music.url !== 'string' || music.url.trim() === '') {
    throw new Error(
      `[archer] page.music.url is required when page.music.enable is true (${page.source || page.path || 'unknown page'})`
    )
  }

  return {
    audio: {
      name: typeof music.title === 'string' && music.title ? music.title : 'Unknown',
      artist: typeof music.artist === 'string' && music.artist ? music.artist : 'Unknown',
      url: music.url,
      cover: typeof music.cover === 'string' ? music.cover : ''
    },
    autoplay: music.autoplay === true
  }
})
