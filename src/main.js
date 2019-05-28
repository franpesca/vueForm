import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { store } from './store/store.js';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(Vuex)
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
