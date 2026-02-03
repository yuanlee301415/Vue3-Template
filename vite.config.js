import { fileURLToPath, URL } from 'node:url'
import { cwd } from 'node:process'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { createHtmlPlugin } from 'vite-plugin-html'
import terser from '@rollup/plugin-terser'

import pkg from './package.json'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const root = cwd()
  const env = loadEnv(mode, root)
  console.log('ENV:\n', env)
  const { VITE_PORT, VITE_INTERNAL_VERSION } = env
  const __APP_VERSION__ = [pkg.version, VITE_INTERNAL_VERSION].join('.')
  const __APP_BUILD_TIME__ = new Date().toISOString()

  return {
    plugins: [
      vue(),
      vueDevTools(),
      createHtmlPlugin({
        entry: 'src/main.js',
        minify: true,
        inject: {
          data: {
            mode,
            __APP_VERSION__,
            __APP_BUILD_TIME__,
          },
        },
      }),
    ],

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    server: {
      port: Number(VITE_PORT),
    },

    define: {
      __APP_VERSION__: JSON.stringify(__APP_VERSION__),
      __APP_BUILD_TIME__: JSON.stringify(__APP_BUILD_TIME__),
    },

    build: {
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name].[hash].js',
          entryFileNames: 'assets/js/[name].[hash].js',
          assetFileNames: 'assets/[ext]/[name].[hash].[ext]',
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia'],
          },
        },
        plugins: [
          terser({
            compress: {
              drop_debugger: true,
              pure_funcs: Object.keys(console)
                .filter((key) => !['debug', 'error'].includes(key))
                .map((key) => `console.${key}`),
            },
          }),
        ],
      },
    },
  }
})
