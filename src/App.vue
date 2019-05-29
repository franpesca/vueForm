<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LoginForm msg="Welcome to my Form" class="secondary"/>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "app",
  components: {
    LoginForm
  },
  data () {
      return {
        
      };
    }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
