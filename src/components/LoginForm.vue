<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="main-wrapper"> 
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign" @submit.prevent="onFormSubmit(formLabelAlign)"> 
        <el-form-item label="Name">
          <el-input v-model="formLabelAlign.name" placeholder="Please, type your name">{{formLabelAlign.name}}</el-input>
        </el-form-item>
        <el-form-item label="Surname">
          <el-input v-model="formLabelAlign.surname" placeholder="Please, type your surname">{{formLabelAlign.surname}}</el-input>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="formLabelAlign.emailaddress" v-validate="'required|email'" name="email" type="text" placeholder="Please, type your email address">{{formLabelAlign.emailaddress}}</el-input>
          <span>{{ errors.first('email') }}</span>
        </el-form-item>
    </el-form> 
    </div>
  </div>
</template>

<script>
import {
    mapGetters, mapMutations
  } from 'vuex';
export default {
  name: "LoginForm",
  props: {
    msg: String
  },
  computed:{
    ...mapGetters(['formLabelAlign'])
  },
  data() {
    return {
      labelPosition: "left",
    };
  },
  methods: {
    ...mapMutations('loginForm', {
      onFormSubmit: "SET_USER_ONFORMSUBMIT"
    })
  }
};
</script>

<style scoped>
.main-wrapper{
  width: 60%;
  margin: 0 auto;
}
</style>
