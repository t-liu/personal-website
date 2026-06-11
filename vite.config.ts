import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig(({ mode }) => ({
  plugins: [
    vue(),
    sitemap({ hostname: 'https://thomasliu.click' }),
  ],

  server: {
    port: 3000,
    open: true
  },

  build: {
    outDir: 'dist',
    assetsDir: 'assets',

    minify: 'terser',

    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    }
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/vue-fontawesome'
    ]
  }
}))