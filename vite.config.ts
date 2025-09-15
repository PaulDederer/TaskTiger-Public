import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// Use function form so we know if we're building for prod.
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const isCI = process.env.GITHUB_ACTIONS === 'true'
  const repo = 'TaskTiger-Public'

  return {
    // Important for GitHub Pages project sites:
    // served at https://<user>.github.io/<repo>/
    base: isCI ? `/${repo}/` : '/',
    plugins: [
      vue(),
      vueJsx(),
      // Only enable DevTools in dev; avoid extra payload in production
      !isBuild && vueDevTools(),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    // (optional) keep the default 'dist' to match your deploy action
    build: {
      outDir: 'dist',
      // sourcemap: true, // uncomment if you want sourcemaps
    },
  }
})
