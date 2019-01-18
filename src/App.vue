<template>
  <div class="app">
    <!-- 头部header区域 -->
    <van-nav-bar :class="['header']" fixed title="vue项目"/>

    <!-- 中部路由模块 -->
    <transition>
      <router-view/>
    </transition>

    <!-- 底部导航区域 -->
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item to="/user" icon="user-o">会员</van-tabbar-item>
      <van-tabbar-item to="/shoppingcar" icon="shopping-cart-o" info="0">购物车</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜索</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    active: 0,
  })
};
</script>

<style lang="less" scope>
@color: #26a2ff;
.app {
  padding-top: 46px;
  padding-bottom: 50px;
  //当动画进行的时候显示两个页面，防止出现滚动条
  overflow-x: hidden;
}
.header {
  background-color: @color;
  color: #fff;
}

//原生的动画效果
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform:translateX(-100%);
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all .5s ease;
}
</style>
