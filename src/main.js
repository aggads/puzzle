import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Not supported yet for vue 3...
// import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.config.productionTip = false

createApp(App).use(router).mount('#app')
