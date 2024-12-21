import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/* path */
//import.meta.url 사용 : __dirname 구현
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url) //current file url
const __dirname = dirname(__filename) //current file directory path


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      "@components":path.resolve(__dirname,"src/components"),
      "@pages":path.resolve(__dirname,"src/pages"),
      "@datas":path.resolve(__dirname,"src/datas"),
      "@layouts":path.resolve(__dirname,"src/layouts"),
      "@redux":path.resolve(__dirname,"src/redux"),
      "@types":path.resolve(__dirname,"src/types"),
      "@styles":path.resolve(__dirname,"src/styles"),
      "@fonts":path.resolve(__dirname,"src/fonts"),
    }
  }
})
