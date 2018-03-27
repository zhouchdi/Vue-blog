import Vue from 'vue'
import Router from 'vue-router'
// import Loading from '@/common/_loading'
import Navbar from '@/common/_navbar.vue'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Navbar',
      component: Navbar
    }
  ]
})
