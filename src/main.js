import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store  from './store/store';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
