<template>
  <div class="home">
    <!-- 轮播图 -->
    <swiper :bannerList="bannerList"></swiper>

    <!-- 六宫格导航 -->
    <gird></gird>
  </div>
</template>

<script>
import { Toast } from "vant";
//导入 六宫格导航
import gird from "@/components/subcomponent/gird";
import swiper from "@/components/subcomponent/Swiper";
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
    gird,
    swiper
  }
};
</script>


<style lang='less' scoped>
.home {
  
}
</style>