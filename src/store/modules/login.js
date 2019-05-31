// import router from '../../routes'

const login = {
  namespaced: true,
  state:{
    userEmail: ""
  },
  mutations:{
    setUserEmail(state, payload){
      console.log("lallero")
      state.userEmail=payload
    },
  },
  actions:{},
  getters:{}
}

export default login;