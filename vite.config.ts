import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  // 项目根目录
  root: './',
  // 开发或生产环境服务的公共基础路径
  base: './',
  // base: '/api',
  // 作为静态资源服务的文件夹
  publicDir: 'public',
  server: {
    // 指定服务器应该监听哪个 IP 地址
    host: 'localhost',
    // 指定开发服务器端口
    port: 3000,
    // 为开发服务器配置自定义代理规则
    proxy: {
      // http://localhost:8080/api/bar -> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    // 别名
    alias: {
      // '@': path.resolve(__dirname, 'src'),
      '@': path.join(__dirname, './src/')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  plugins: [react(), eslintPlugin({})],
  build: {
    outDir: "build"
  }
});
