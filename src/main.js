// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由入口文件index
import router from './router'

//引入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)


//引入axios
// import axios from 'axios'
// Vue.prototype.$http = axios

//vant 按需引入部分
import { NavBar,Tabbar,TabbarItem,Swipe, SwipeItem } from 'vant';
Vue.use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})



