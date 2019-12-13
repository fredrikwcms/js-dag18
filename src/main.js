import Vue from 'vue'
import App from './App.vue'
// Import Bootstrap vue
import BootstrapVue from 'bootstrap-vue'
// Tell Vue to use Bootsrap
Vue.use(BootstrapVue)

// Import Vue Router
import VueRouter from 'vue-router'
// Tell Vue to use Vue Router
Vue.use(VueRouter)

// Import Hello World component here
import HelloWorld from './components/HelloWorld.vue'

// Import aboutVue here
import AboutVue from './components/AboutVue.vue'

// Import ContactForm
import ContactForm from './components/ContactForm.vue'

const routes = [
  // Define routes for Vue Router
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutVue },
  { path: '/contact-us', component: ContactForm }
]

const router = new VueRouter({
  routes, // Short for our const Routes
  mode: 'history'
})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
