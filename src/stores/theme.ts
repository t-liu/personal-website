import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref<boolean>(false)

  const apply = (): void => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark.value ? 'dark' : 'light'
    )
  }

  const init = (): void => {
    const saved = localStorage.getItem('theme')

    const prefersDark = window
      .matchMedia('(prefers-color-scheme: dark)')
      .matches

    isDark.value = saved ? saved === 'dark' : prefersDark

    apply()
  }

  const toggle = (): void => {
    isDark.value = !isDark.value

    localStorage.setItem(
      'theme',
      isDark.value ? 'dark' : 'light'
    )

    document.documentElement.classList.remove(
      'no-theme-transition'
    )

    apply()
  }

  return {
    isDark,
    init,
    toggle
  }
})