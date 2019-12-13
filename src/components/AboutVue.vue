<template>
    <div id="about-vue">
        <h1>Welcome, {{ usr }}</h1>
        Vue.js is a fancy JavaScript framework. I love vue more than my life.
        <h5 v-for="form in forms" v-bind:key="form.name">{{form.name + ' ' + form.mail}}</h5>
    </div>
</template>

<script>
export default {
    name: 'about',
    props: {
        usr: String
    },
    data() {
        return {
            forms: localStorage.form
        }
    },
    mounted() {
        if (localStorage.getItem('form')) {
            try {
                this.forms = JSON.parse(localStorage.getItem('form'));
            } catch(e) {
                localStorage.removeItem('form');
            }
        }
    },
}
</script>

<style>
#about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

