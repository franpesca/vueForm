import Router from 'vue-router'
import Homepage from './components/Homepage.vue'
import SignupForm from './components/SignupForm.vue'
import LoginForm from './components/LoginForm.vue'
import LoggedInHomePage from './components/LoggedInHomePage.vue'
// import store from './store/store'

//guardie

export default new Router ({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

    {
      path: '/',
      name: 'homepage',
      component: Homepage,
      // beforeEnter: userIsLogged,
    },
    {
      path: '/signupForm',
      name: 'signupForm',
      component: SignupForm,
      // beforeEnter: userIsLogged,
    },
    {
      path: '/loginForm',
      name: 'loginForm',
      component: LoginForm,
      // beforeEnter: userIsLogged,
    },
    {
      path: '/loggedInHomepage',
      name: 'loggedInHomepage',
      component: LoggedInHomePage,
      // beforeEnter: userIsLogged,
    },
  ]
})
