import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    target: 'esnext',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  },
  server: {
    port: 3000,
    headers: {
      // Enable SharedArrayBuffer for high-performance audio processing
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  preview: {
    port: 3000,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    }
  },
  define: {
    // Enable AudioWorklet support
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  assetsInclude: ['**/*.worklet.js'],
  worker: {
    format: 'es'
  }
})