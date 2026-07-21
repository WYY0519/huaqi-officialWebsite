import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './', // 新增这一行，打包使用相对路径，静态资源不会404
  plugins: [vue()],
  server: {
    port: 3000,
    host: true,
  },
});