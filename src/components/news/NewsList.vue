<template>
  <div class="newslist">
    <router-link v-for="item in newslist" :key="item.id" :to="'/home/newsinfo/'+item.id">
      <van-card
        class="list"
        num="2"
        price="2"
        :title="item.title"
        :thumb="item.img_url"
      >
        <div slot="price">
          <span>发表时间:{{item.add_time | datefmt }}</span>
        </div>
        <div slot="num">
          <span>点击:{{item.click}}次</span>
        </div>
      </van-card>
    </router-link>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getNewsList();
  },
  methods: {
    async getNewsList() {
      const res = await this.$http.get("api/getnewslist");
      if (res.data.status == 0) {
        // console.log(res.data.message);
        this.newslist = res.data.message;
      } else {
        Toast("获取数据失败");
      }
    }
  }
};
</script>

<style lang='less'>
.newslist {
  .van-card__header {
    height: 60px;
  }
  .van-card__bottom {
    position: absolute;
    left: 0;
    bottom: 45px;
  }
}
</style>