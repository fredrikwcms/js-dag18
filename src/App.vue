<template>
  <div id="app">
    <header id="site-header">
      <router-link v-bind:to="'/'">Home</router-link><br>
      <router-link v-bind:to="'/about'">About Vue</router-link><br>
      <router-link v-bind:to="'/contact-us'">Contact us</router-link>
      <UserLogin v-if="!childData" @inputData="getUser"/>
      <h1 v-if="childData">Logged in user: {{childData}}</h1>
    </header>
    <!-- <a href="/"></a> -->
    <router-view></router-view>
  </div>
</template>

<script>
// We dont need this one anymore, since we get it in our main.js instead
import UserLogin from './components/UserLogin.vue'

export default {
  name: 'app',
  components: {
    UserLogin
  },
  data() {
    return {
      childData: ""
    }
  },
  methods: {
    getUser(userName) {
      this.childData = userName;
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#site-header {
  background-color: yellow;
  display: flex;
}
</style>
