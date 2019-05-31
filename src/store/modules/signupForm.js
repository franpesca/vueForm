import router from '../../routes'

const signupForm = {
  namespaced: true,
  state:{
    signupForm: {
      name: "",
      surname: "",
      email: ""
    }
  },
  mutations:{
    setUserOnFormSubmit(state, payload){
      state.signupForm=payload
      router.push('/loggedInHomepage')
    },
  },
  actions:{},
  getters:{}
}

export default signupForm;