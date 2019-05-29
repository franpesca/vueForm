import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

import loginForm from './modules/loginForm';

Vue.use(Vuex)

const store = new Vuex.Store({
   strict: false,
  namespaced: true,
  modules: {
    loginForm,
  }
})

export default store
