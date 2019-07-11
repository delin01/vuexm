import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './views/index'
import Mail from './views/mail'
import Classify from './views/classify'
import Enshrine from './views/enshrine'
import My from './views/my' 
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:{"name":"index"},
      children:[
        {
          path:'/home/index',
          name:'index',
          component:Index,
        },
        {
          path:'/home/mail',
          name:'mail',
          component:Mail,
        },
        {
          path:'/home/classify',
          name:'classify',
          component:Classify,
        },
        {
          path:'/home/enshrine',
          name:'enshrine',
          component:Enshrine

        },
        {
          path:'/home/my',
          name:'my',
          component:My
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
