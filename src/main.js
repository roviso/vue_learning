// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'



const app = createApp(App)
app.mount('#app')


// Adding Filter

app.config.globalProperties.$filters = {
    AddAge(value) {
      return value + 'years Old'
    }
  }
  