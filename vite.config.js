import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [vue()],
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            fontawesome: ['@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome']
          }
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    define: {
      'process.env': env
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome']
    }
  }
})


