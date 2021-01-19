// vite.config.js
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: {
    '/drift/': resolve(__dirname, '../../src'),
  },
}
