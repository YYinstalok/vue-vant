<template>
  <div class="app">
    <!-- 头部header区域 -->
    <van-nav-bar :class="['header']" fixed title="vue项目"/>

    <!-- 中部路由模块 -->
    wrqeqrwq

    <!-- 底部导航区域 -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item icon="user-o">会员</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" info="0">购物车</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data:()=>({
    active: 0
  })
};
</script>

<style lang="less" scope>
@color: #26A2FF;
.app {
  padding-top: 46px;
}
.header {
  background-color:@color;
  color: #fff;
}
</style>
