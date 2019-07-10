import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/flexble.js'
import MintUI from "mint-ui"
import 'mint-ui/lib/style.css'
import {Indicator} from 'mint-ui'
Vue.config.productionTip = false;
import './module/module'
Vue.use(MintUI)
Vue.prototype.$axios=axios;
axios.interceptors.request.use((config)=>{
  Indicator.open();
  return config;
});
axios.interceptors.response.use((res)=>{
  Indicator.close();
  return res;
});
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
