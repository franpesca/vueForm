<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="main-wrapper"> 
      <el-form :label-position="labelPosition" label-width="100px" :model="signupForm" > 
        <el-form-item label="Name">
          <el-input v-model="signupForm.name" placeholder="Please, type your name">{{signupForm.name}}</el-input>
        </el-form-item>
        <el-form-item label="Surname">
          <el-input v-model="signupForm.surname" placeholder="Please, type your surname">{{signupForm.surname}}</el-input>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input 
            v-model="signupForm.email" 
            v-validate="'required|email'" 
            name="email" 
            type="text" 
            placeholder="Please, type your email address"
            >
            {{signupForm.email}}
          </el-input>
          <span>{{ errors.first('email') }}</span>
        </el-form-item>
        <el-form-item>
          <el-button @click.native="onFormSubmit(signupForm)"></el-button></el-form-item>
    </el-form> 
    </div>
  </div>
</template>

<script>
import {
    mapMutations
  } from 'vuex';

export default {
  name: "signupForm",
  props: {
    msg: String
  },
  data() {
    return {
      labelPosition: "left",
      signupForm: {
        name: "",
        surname: "",
        email: ""
     }
    };
  },
  methods: {
    // onFormSubmit(){
    //   console.log("2miao")
    //   this.$store.commit('signupForm/setUserOnFormSubmit',this.signupForm)
    //   console.log( this.$store.getters['signupForm/signupForm'])
    // }
    ...mapMutations('signupForm', {
      setUserOnFormSubmit: 'setUserOnFormSubmit'
    }),
    onFormSubmit(){
       this.setUserOnFormSubmit(this.signupForm)
     }
  }
};
</script>

<style scoped>
.main-wrapper{
  width: 60%;
  margin: 0 auto;
}
</style>

