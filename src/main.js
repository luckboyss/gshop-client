import Vue from 'vue'
import { Button } from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mockServer'
import '../static/css/reset.css'

Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
