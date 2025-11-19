import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',  // GitHub Pages部署配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})
