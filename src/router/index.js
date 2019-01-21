import Vue from 'vue'
import Router from 'vue-router'

//引入组件
import Home from '@/components/tabbar/Home'
import User from '@/components/tabbar/User'
import Shoppingcar from '@/components/tabbar/Shoppingcar'
import Search from '@/components/tabbar/Search'
import NewsList from '@/components/news/NewsList'
import NewsInfo from '@/components/news/NewsInfo'
import PhotoList from '@/components/photos/PhotoList'
import PhotoInfo from '@/components/photos/PhotoInfo'
import GoodsList from '@/components/goods/GoodsList'
import GoodsInfo from '@/components/goods/GoodsInfo'



Vue.use(Router)

export default new Router({
  routes: [//路由配置规则
    {path:'/',redirect:'/home'},
    {path:'/home',component:Home},
    {path:'/user',component:User},
    {path:'/shoppingcar',component:Shoppingcar},
    {path:'/search',component:Search},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photolist',component:PhotoList},
    {path:'/home/photoinfo/:id',component:PhotoInfo},
    {path:'/home/goodslist',component:GoodsList},
    {path:'/home/goodsinfo/:id',component:GoodsInfo}
  ]
})
