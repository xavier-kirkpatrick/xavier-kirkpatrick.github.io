import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
const _plugins = [react(), TanStackRouterVite()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins,
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});