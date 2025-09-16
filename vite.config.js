// vite.config.js (ESM, porque seu package.json tem "type":"module")
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // não force PostCSS aqui; deixe o Tailwind rodar via CLI (se você escolheu essa rota)
})
