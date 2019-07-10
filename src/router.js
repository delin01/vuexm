import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Notfound from './views/notfound.vue'
import Index from './views/index'
import List from './views/list'
import Detail from './views/Detail'
import Film from './views/film'
import Cinema from './views/cinema'
import Odds from './views/odds'
import My from './views/my'
import Cut from './components/cut'
import CityList from './components/cityList'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      redirect:{"name":"index"},
    },
    {
      path:'/detail/:id',
      name:'detail',
      component: Detail,
    },
    {
      path:'/index',
      name:"index",
      component:Index,
      redirect:{"name":"home"},
      children:[
        {
          path:'/index/home',
          name:"home",
          component:Home,
        },
        {
          path: '/index/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
       
      ]
    },
    {
      path:'/list',
      name:'list',
      component:List,
      redirect:{"name":"film"},
      children:[{
        path:'/list/film',
        name:"film",
        component:Film,
        redirect:{'name':'filmcut'},
        children:[
             {
               path:'/list/film/:type?',
               name:'filmcut',
               component:Cut,
             }
          ]       
        },
        {
          path:'/list/cinema',
          name:"cinema",
          component:Cinema,
        },
        {
          path:'/list/odds',
          name:"odds",
          component:Odds,
        },
        {
          path:'/list/my',
          name:"my",
          component:My,
        }
      ]
    },
    {
      path:'/cityList',
      name:"cityList",
      component:CityList
    },
    {
      path:'**',
      component:Notfound,
    }
    
  ]
})
