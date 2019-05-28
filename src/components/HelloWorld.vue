<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="main-wrapper">
      <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
        <el-form-item label="Name">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="Surname">
          <el-input v-model="formLabelAlign.surname"></el-input>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="formLabelAlign.emailaddress" v-validate="'required|email'" name="email" type="text"></el-input>
          <span>{{ errors.first('email') }}</span>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      labelPosition: "left",
      formLabelAlign: {
        name: "",
        surname: "",
        emailaddress: ""
      }
    };
  }
};
</script>

<style scoped>
.main-wrapper{
  width: 60%;
  margin: 0 auto;
}
</style>
