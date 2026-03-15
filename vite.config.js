import { resolve } from 'path'
export default {
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, 'index.html'),
        impressum:  resolve(__dirname, 'impressum.html'),
        datenschutz:resolve(__dirname, 'datenschutz.html'),
        faq:        resolve(__dirname, 'faq.html'),
        ueberuns:   resolve(__dirname, 'ueber-uns.html'),
      }
    }
  }
}
