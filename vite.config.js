import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { mdsvex } from 'mdsvex';

// https://vitejs.dev/config/
export default defineConfig({
  root: "src",
  publicDir: "../dist",
  plugins: [svelte({
    extensions: [".svelte", ".svexy"],
    preprocess: mdsvex()
  })],
  server: {
    port: 5000
  },
  build: {
    outDir: '../dist',
  }
})
