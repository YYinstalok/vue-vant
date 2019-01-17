import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import Home from '@/components/tabbar/Home'
import User from '@/components/tabbar/User'
import Shoppingcar from '@/components/tabbar/Shoppingcar'
import Search from '@/components/tabbar/Search'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/user',component:User},
    {path:'/shoppingcar',component:Shoppingcar},
    {path:'/search',component:Search}
  ]
})
