<template>
  <div class="loginWrapper" :class="theme">
    <h3>{{secondaryTitle}}</h3>
    <h1> {{primaryTitle}}</h1>
    <input type="text" v-model="userEmail"> 
    <button @click.native="onInputSubmit(userEmail)"><routerLink :to="goTo"> {{textLink}} </routerLink></button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    goTo : {type:String, required: true},
    textLink: {type:String, required: true},
    secondaryTitle:{type:String, required: true},
    primaryTitle:{type:String, required: true},
    theme:{type:String, required: true},
  },
  data() {
    return {
      userEmail:'',
    }
  },
  methods: {
    ...mapMutations('login',{
      setUserEmail:'setUserEmail'
    }),
    onInputSubmit(){
      this.setUserEmail(this.userEmail)
    }
  }
}
</script>
<style scoped>
  .loginWrapper{
    height: 80vh
  }
</style>
