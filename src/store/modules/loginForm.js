//perchè esporto una costante?
export const SET_USER_ONFORMSUBMIT = "set_user_onformsubmit"

const loginForm = {
  state:{
    formLabelAlign: {
      name: "",
      surname: "",
      emailaddress: ""
    }
  },
  mutations:{
    [SET_USER_ONFORMSUBMIT](state, formLabelAlign){
      state.formLabelAlign=formLabelAlign
    },
  },
  actions:{},
  getters:{
    formLabelAlign: state => state.formLabelAlign
  }
}

export default loginForm;