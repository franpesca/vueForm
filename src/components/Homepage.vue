<template>
  <div class="homepage-wrapper">
    <Login theme="blueTheme" goTo="/signupForm" textLink="Registrati subito" secondaryTitle="crea la tua" :primaryTitle="primaryTitle" />
    <Login theme="whiteTheme" goTo="/loggedInHomepage" textLink="Login" secondaryTitle="visualizza la tua" :primaryTitle="primaryTitle" />  
  </div>
</template>

<script>
import Login from "./Login.vue";

export default {
  name: "app",
  components: {
    Login,
  },
  data () {
    return {
        primaryTitle: "carta decathlon"
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

.homepage-wrapper{
  display: flex;
  justify-content: center;
}

.blueTheme{
    background: #0085ff;
    color: rgb(255, 255, 255);
}

.whiteTheme{
    background: rgb(255, 255, 255);;
    color: #0085ff;
}

</style>

