import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// base: './' => rutas relativas, necesario para servirlo desde una subcarpeta en Vercel
export default defineConfig({
  base: './',
  plugins: [react()],
});
