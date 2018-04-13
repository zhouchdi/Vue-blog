import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import My from '@/components/my/my'

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias:'/home'
    },
    {
      path:'/resume',
      name:'My',
      component:My
    }
  ]
})
