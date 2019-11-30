import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import axioss from './untils/authorization';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false
Vue.prototype.$http = axioss
Vue.use(ElementUI);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
