import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Warning limit increase karein (500kb se 1000kb)
    chunkSizeWarningLimit: 1000,
    
    rollupOptions: {
      output: {
        manualChunks: {
          // React ecosystem ko alag chunk mein rakhein
          vendor: ['react', 'react-dom', 'react-router-dom'],
          
          // UI libraries ko alag chunk mein
          ui: ['react-icons', 'recharts'],
          
          // Axios ko alag chunk mein (API calls ke liye)
          api: ['axios']
        }
      }
    }
  },
  
  // Optimizations
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios', 'recharts']
  }
})