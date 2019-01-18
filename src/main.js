// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由入口文件index
import router from './router'

//引入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)
//配置全局根路径
Vue.http.options.root = 'http://127.0.0.1:5000/'
Vue.http.options.emulateJSON = true;

//引入moment
import moment from 'moment'
Vue.filter('datefmt',(data,arg="YYYY-MM-DD HH:mm:ss")=>{
  return moment(data).format(arg)
})


//引入axios
// import axios from 'axios'
// Vue.prototype.$http = axios

//vant 按需引入部分
import { NavBar,Tabbar,TabbarItem,Swipe, SwipeItem,Card,Button} from 'vant';
Vue.use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Card)
  .use(Button)

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



