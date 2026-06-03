import { ref } from 'vue'

const isDark = ref(false)
let initialized = false

export function useTheme() {
  const applyTheme = () => {
    document.documentElement.setAttribute(
      'data-theme',
      isDark.value ? 'dark' : 'light'
    )
  }

  const toggle = () => {
    isDark.value = !isDark.value
    applyTheme()
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    document.documentElement.classList.remove('no-theme-transition')
  }

  if (!initialized && typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = saved ? saved === 'dark' : prefersDark
    applyTheme()
    initialized = true
  }

  return { isDark, toggle }
}
