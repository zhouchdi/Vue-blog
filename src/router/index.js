import Vue from 'vue'
import Router from 'vue-router'
// import Loading from '@/common/_loading'
import v from '@/common/article/articlecomplex'
import Home from '@/components/home/home'
import Nav from '@/common/navbar/_navbar'

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
      path:'/nav',
      component:Nav
    }
  ]
})
