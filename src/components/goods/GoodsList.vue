<template>
  <div class="goodslist">
    <div class="good-item" v-for="item in goodslist" :key="item.id" @click='getInfo(item.id)'>
      <img :src="item.img_url" alt>
      <h3 class="title">{{item.title}}</h3>
      <div class="info">
        <div class="price">
          <span class="new">¥{{item.sell_price}}</span>
          <span class="old">¥{{item.market_price}}</span>
        </div>
        <div class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </div>
      </div>
    </div>

    <van-button class="btnmore" size="large" @click="more" v-html="pageindex < 3 ?'加载更多':'没有更多数据了'"></van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    pageindex: 1,
    goodslist: []
  }),
  created() {
    this.getGoodsList();
  },
  methods: {//获取商品列表数据
    async getGoodsList() {
      const res = await this.$http.get(
        "api/getgoods?pageindex=" + this.pageindex
      );
      if (res.body.status == 0) {
        // console.log(res.body.message);
        this.goodslist = res.body.message;
      } else {
        Toast("获取数据失败");
      }
    },
    more() {//加载更多
      if (this.pageindex < 3) {
        this.pageindex++;
        this.getGoodsList();
      } else {
        return;
      }
    },
    getInfo(id){//使用导航路由跳转到详情页面
      this.$router.push('/home/goodsinfo/'+id)
    }
  }
};
</script>

<style lang='less' scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7px;
  .good-item {
    box-sizing: border-box;
    width: 49%;
    height: 293px;
    padding: 3px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 7px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .title {
      margin: 0;
      padding: 0;
      margin: 5px 0;
      font-size: 14px;
    }
    .info {
      background-color: #eee;
      .price {
        padding: 6px;
        .new {
          color: red;
          font-weight: 700;
        }
        .old {
          font-size: 13px;
          color: #666;
          margin-left: 10px;
          text-decoration: line-through;
        }
      }
      .sell {
        padding: 6px;
        display: flex;
        justify-content: space-between;
        color: #666;
        font-size: 13px;
      }
    }
  }
  .btnmore {
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    background-color: #ef4f4f;
    color: #fff;
  }
}
</style>