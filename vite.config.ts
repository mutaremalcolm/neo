import { defineConfig } from 'vite'
import wyw from '@wyw-in-js/vite'

// https://vite.dev/config/
export default defineConfig(()=> ({
  plugins: [
    wyw({
      include: ['**/*.{ts,tsx}'],
      babelOptions: {
        presets: ['@babel/preset-typescript', '@babel/preset-react'],
      },
    }),
  ],
}));
    
 
