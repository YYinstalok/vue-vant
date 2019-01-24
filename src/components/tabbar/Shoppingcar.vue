<template>
  <div class="shop">
    <div class="cart" v-for="item in goodslist" :key="item.id">
      <div class="cart-l">
        <van-switch v-model="checked"/>
      </div>
      <div class="cart-r">
        <div class="img">
          <img :src="item.img_url" alt>
        </div>
        <div class="info">
          <h3>{{item.title}}</h3>
          <div class="bottom">
            <span class="price">¥{{item.sell_price}}</span>
            <van-stepper v-model="value"/>
            <span class="del">删除</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: true,
    value: 1,
    goodslist:[]
  }),
  created(){
    this.getGoodsList()
  },
  methods: {
    async getGoodsList() {
      // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = [];
      this.$store.state.car.forEach(item => idArr.push(item.id));
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
      if (idArr.length <= 0) {
        return;
      }
      // 获取购物车商品列表
      const {
        data: { status, message }
      } = await this.$http.get("api/goods/getshopcarlist/" + idArr.join(","));
      if (status === 0) {
        this.goodslist = message;
        // console.log(message);
      }
    }
  }
};
</script>

<style lang='less'>
.shop {
  .cart {
    display: flex;
    height: 80px;
    padding: 7px;
    .cart-l {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .cart-r {
      flex: 1;
      display: flex;
      .img {
        width: 80px;
        img {
          width: 100%;
        }
      }
      .info {
        h3 {
          padding: 0;
          margin: 10px 0;
          font-size: 14px;
        }
        .bottom {
          display: flex;
          line-height: 30px;
          .van-stepper {
            margin: 0 10px;
          }
          .price {
            font-size: 14px;
            color: red;
            font-weight: 600;
          }
          .del {
            font-size: 12px;
            color: #26a2ff;
          }
        }
      }
    }
  }
}
</style>