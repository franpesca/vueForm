import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
import signupForm from './modules/signupForm'
import login from './modules/login'

import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const store = new Vuex.Store({

  strict: false,
  
  state: {},
  getters,
  mutations,
  actions,
  modules: {
    signupForm,
    login,
  }
})

export default store
