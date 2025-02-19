import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import  createWywInJs  from '@wyw-in-js/vite'

const wywInJs = createWywInJs()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
   wywInJs,
   react()
  ],
})
    
 
