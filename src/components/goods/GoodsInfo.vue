<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="isBall" ref="ball"></div>
    </transition>
    <!-- 图片轮播区域 -->
    <div class="swipe">
      <!-- <img src="http://localhost:5000/share/ithumbs/images/6.jpg" alt> -->
      <swiper :bannerList="bannerList"></swiper>
    </div>

    <!-- 内容区域 -->
    <div class="content">
      <p class="title">{{info.title}}</p>
      <div class="body">
        <p class="price">
          市场价:
          <del>¥{{info.market_price}}</del>&nbsp;&nbsp;
          销售价:
          <span>¥{{info.sell_price}}</span>
        </p>
        <div class="count">购买数量:
          <van-stepper v-model="value" :max="info.stock_quantity"/>
        </div>
        <div class="car">
          <van-button class="primary" size="small">立即购买</van-button>
          <van-button class="danger" :disabled="btnFlag" size="small" @click="goBall">加入购物车</van-button>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="info">
      <p class="title">商品参数</p>
      <div class="body">
        <p>商品货号：{{info.goods_no}}</p>
        <p>库存情况：{{info.stock_quantity}}件</p>
        <p>上架时间：{{info.add_time | datefmt}}</p>
      </div>
      <div class="foot">
        <van-button class="img" size="large">图文介绍</van-button>
        <van-button class="comment" size="large">商品评论</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import swiper from "@/components/subcomponent/Swiper";
export default {
  data() {
    return {
      //购买数据步进器刚开始显示的数据
      value: 1,
      //地址栏id
      id: this.$route.params.id,
      //轮播图数据
      bannerList: [],
      //详情数据
      info: {},
      //小球状态的值
      isBall: false,
      //小球开始和结束的位置差值
      xClien:0,
      yClien:0,
      // 按钮禁用的值
      btnFlag:false
    };
  },
  created() {
    this.getlunbotu();
    this.getinfo();
  },
  methods: {
    async getlunbotu() {//获取轮播图数据
      let id = parseInt(this.id) + 100;
      const res = await this.$http.get("api/getthumimages/" + id);
      if (res.body.status == 0) {
        // console.log( res.body.message);
        this.bannerList = res.body.message;
      } else {
        Toast("获取数据失败");
      }
    },
    async getinfo() {//获取详情数据
      const res = await this.$http.get("api/goods/getinfo/" + this.id);
      if (res.body.status == 0) {
        // console.log( res.body.message);
        this.info = res.body.message;
      } else {
        Toast("获取数据失败");
      }
    },
     goBall() {//点击加入购物车小球的动画开始的时间
      this.isBall = !this.isBall;
      //节流阀控制按钮
      this.btnFlag = true;
      setTimeout(() => {
        this.btnFlag = false;
      },500);
    },
    getOffset() {//获取小球和徽标的位置
        // 获取小球的 在页面中的位置  left   top    (x,y)
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置 不涉及到数据渲染的时候 可以使用少量的 js 原生
      const cartPosition = document
        .querySelector("#cart .van-info")
        .getBoundingClientRect();
      // 移动的位置 = 目标位置  -  起点位置
      const xClien = cartPosition.left - ballPosition.left;
      const yClien = cartPosition.top - ballPosition.top;
      this.xClien = xClien;
      this.yClien = yClien;
    },
    //小球移动半场动画钩子函数
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;
      this.getOffset()
      el.style.transform = `translate(${this.xClien}px,${this.yClien}px)`;
      el.style.transition = "all .5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.isBall = !this.isBall;
    }
  },
  components: {
    swiper
  }
};
</script>

<style lang='less' scoped>
.goodsinfo {
  padding: 7px;
  background-color: #eee;
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    left: 73px;
    top: 395px;
    // transform: translate(88px,200px)
  }
  .swipe {
    box-sizing: border-box;
    width: 100%;
    height: 200px;
    // padding: 15px;
    margin-bottom: 7px;
    border: 1px solid #ddd;
    border-radius: 3px;
    background-color: #fff;
    text-align: center;
  }
  .content {
    box-sizing: border-box;
    width: 100%;
    height: 218px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    .title {
      margin: 0;
      height: 24px;
      border-bottom: 1px solid #ccc;
      padding: 10px 15px;
    }
    .body {
      padding: 15px;
      .price {
        font-size: 14px;
        color: #8f8f94;
      }
      .count {
        font-size: 15px;
        color: #8f8f94;
      }
      .car {
        margin-top: 10px;
        .primary {
          background-color: #26a2ff;
          color: #fff;
          border-radius: 4px;
        }
        .danger {
          background-color: #ef4f4f;
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
  .info {
    margin-top: 7px;
    width: 100%;
    height: 270px;
    background-color: #fff;
    .title {
      margin: 0;
      height: 24px;
      border-bottom: 1px solid #ccc;
      padding: 10px 15px;
    }
    .body {
      padding: 0 15px;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      color: #8f8f94;
    }
    .foot {
      padding: 10px;
      .img,
      .comment {
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
      }
      .img {
        border: 1px solid #26a2ff;
      }
      .comment {
        margin-top: 10px;
        border: 1px solid #ef4f4f;
      }
    }
  }
}
</style>