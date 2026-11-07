(function () {
  'use strict'

  const LIGHT_THEME_COLOR = '#b7daff'
  const DARK_THEME_COLOR = '#5a8bc7'
  const DARK_STYLESHEET_ID = 'stylesheet-theme-dark'

  function isDarkMode() {
    const preferred = localStorage.getItem('preferredThemeMode')
    if (preferred) return preferred === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  function readConfig() {
    const configNode = document.getElementById('post-music-config')
    if (!configNode) return null

    try {
      return JSON.parse(configNode.textContent)
    } catch (error) {
      console.error('[archer] Invalid post music configuration', error)
      return null
    }
  }

  function initPostMusic() {
    const container = document.getElementById('post-music-player')
    const config = readConfig()
    if (!container || !config || !config.audio || !config.audio.url) return

    if (typeof APlayer === 'undefined') {
      console.error('[archer] APlayer failed to load')
      return
    }

    const player = new APlayer({
      container,
      fixed: false,
      mini: false,
      theme: isDarkMode() ? DARK_THEME_COLOR : LIGHT_THEME_COLOR,
      audio: [config.audio],
      autoplay: config.autoplay === true,
      preload: 'metadata'
    })

    function updateTheme() {
      const dark = isDarkMode()
      container.classList.toggle('aplayer-dark', dark)
      if (player.setTheme) {
        player.setTheme(dark ? DARK_THEME_COLOR : LIGHT_THEME_COLOR)
      }
    }

    updateTheme()

    // Archer switches themes by adding/removing the dark stylesheet in <head>.
    const observer = new MutationObserver(function (mutations) {
      const themeChanged = mutations.some(function (mutation) {
        return Array.from(mutation.addedNodes)
          .concat(Array.from(mutation.removedNodes))
          .some(function (node) {
            return node.id === DARK_STYLESHEET_ID
          })
      })
      if (themeChanged || document.getElementById(DARK_STYLESHEET_ID)) updateTheme()
    })

    observer.observe(document.head, { childList: true })
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPostMusic, { once: true })
  } else {
    initPostMusic()
  }
})()
