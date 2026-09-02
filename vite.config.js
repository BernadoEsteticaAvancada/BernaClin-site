import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BernaClin-site/', // <--- Adicione esta linha com o nome do repositório
})