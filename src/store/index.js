import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('cars') || '[]')
export default new Vuex.Store({
  state:{
    car
  },
  mutations:{
   addshop(state,goodlist){

    //假设在购物车中没有找到商品
    let flag = false
    state.car.some(item=>{
      //如果之前购物车中已经有这个商品了，只需更新数量
      if(item.id == goodlist.id){
        item.count += parseInt(goodlist.count)
        flag = true
        return true
      }
    })

    //如果之前购物车中没有这个商品，将数据跟新到car中
    if(!flag){
      state.car.push(goodlist)
    }

    // console.log(state.car);

    //将数据保存在本地的localStorage中
    localStorage.setItem('cars',JSON.stringify(state.car))
   }
  },
  getters:{
    getCount(state){//实现数量的加总并渲染到徽标上
      let c = 0;
      state.car.forEach(item => {
        c += item.count
        // console.log(c); 
      });
      return c
    },
    getGoodsCount(state){
      let o = {}
      state.car.forEach(item=>{
        o[item.id] = item.count
      })
      return o
    }
  }
})