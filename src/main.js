import { createApp } from 'vue'
import App from './App.vue'
import { initRouter } from './router.js'
import './assets/main.css'

const app = createApp(App)

// v-reveal: fade sections in as they enter the viewport
app.directive('reveal', {
  mounted(el) {
    el.classList.add('reveal')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  },
})

app.mount('#app')
initRouter()
