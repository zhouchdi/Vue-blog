import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import My from '@/components/my/my'
import Articlesimple from '@/components/articles/simpleEssay'
import Articlecomplex from '@/components/articles/complexEssay'

Vue.use(Router);

import store from '@/vuex/store'

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      alias:'/home',
      // beforeEnter:(to,from,next) => {
        // if(store.state.isIntoHome){
        //   next();
        //   store.state.isIntoHome = false;
        // }else{
        //   window.location.reload();
        //   store.state.isIntoHome = true;
        // }
      // }
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
