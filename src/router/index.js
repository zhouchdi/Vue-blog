import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import My from '@/components/my/my'
import Articlesimple from '@/components/articles/simpleEssay'
import Articlecomplex from '@/components/articles/complexEssay'

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
    },
    {
      path:'/simple',
      name:'Articlesimple',
      component:Articlesimple
    },
    {
      path:'/complex',
      name:'Articlecomplex',
      component:Articlecomplex
    }
  ]
})
