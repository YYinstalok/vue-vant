<template>
<!-- 轮播图抽取模块 -->
  <div class="swiper">
    <van-swipe class="dome-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="item" v-for="item in bannerList" :key="item.url">
        <img :src="item.img || item.src" alt>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props:['bannerList']
};
</script>

<style lang='less'>
.swiper {
  .dome-swipe {
    width: 100%;
    height: 200px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>