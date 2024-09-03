import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const nodeModules = path.resolve(__dirname, './node_modules')

  return {
    base: '/megaport-assessment/',
    plugins: [
      vue(),
    ],
    server: {
      port: 3000,
    },
    build: {
      commonjsOptions: {
        include: ['node_modules/**']
      }
    },
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm-bundler.js',
        '@': path.resolve(__dirname, 'src')
      },
      extensions: ['.js', '.ts', '.vue']
    },
    test: {
      globals: true,
      environment: 'jsdom',
    },
  }
})
