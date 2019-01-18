<template>
  <div class="home">
    <!-- 轮播图 -->
    <van-swipe class="dome-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="item" v-for="item in bannerList" :key="item.url">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>

    <!-- 六宫格导航 -->
    <gird></gird>
  </div>
</template>

<script>
import { Toast } from "vant";
//导入 六宫格导航
import gird from "@/components/subcomponent/gird";
export default {
  data() {
    return {
      bannerList: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    // getBanner() {
    //   //获取轮播图的数据
    //   this.$http.get("http://localhost:5000/api/getlunbo").then(res => {
    //     if (res.status == 200) {
    //       this.bannerList = res.data.message;
    //     } else {
    //       Toast("获取失败");
    //     }
    //   });
    // }

    //es7写法
    async getBanner() {
      const res = await this.$http.get("api/getlunbo");
      if (res.status == 200) {
        this.bannerList = res.data.message;
      } else {
        Toast("获取失败");
      }
    }
  },
  components: {
    gird
  }
};
</script>


<style lang='less' scoped>
.home {
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