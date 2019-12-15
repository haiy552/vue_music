import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router/index'
import store from './store'
// import axios from 'axios'
Vue.use("vuex");
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
