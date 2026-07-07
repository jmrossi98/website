import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    // Jenkins/Docker expect the production bundle in build/ (CRA convention)
    outDir: 'build',
  },
})
