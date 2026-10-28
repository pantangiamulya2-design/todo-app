import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Required for a project deployed at https://USERNAME.github.io/todo-app/
  base: '/todo-app/',
})
