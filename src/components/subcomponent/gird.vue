
<template>
 <!-- 页面首页导航链接 -->
  <div class="gird">
    <section class="van-doc-demo-section demo-icon">
      <div class="van-tab__pane">
        <router-link v-for="item in list" :key="item.id" :to="item.to" tag="div" class="van-col van-col--6">
          <i class="van-icon">
            <img :src="item.src" alt>
          </i>
          <span>{{item.name}}</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    list:[
      {id:1,to:'/home/newslist',name:'新闻资讯',src:'/static/gird/menu1.png'},
      {id:2,to:'/home/photolist',name:'图片分享',src:'/static/gird/menu2.png'},
      {id:3,to:'/home/goodslist',name:'商品购买',src:'/static/gird/menu3.png'},
      {id:4,to:'/home/liyanlist',name:'留言反馈',src:'/static/gird/menu4.png'},
      {id:5,to:'/home/videolist',name:'视频专区',src:'/static/gird/menu5.png'},
      {id:6,to:'/home/lixilist',name:'联系我们',src:'/static/gird/menu6.png'},
    ]
  })
};
</script>

<style lang='less' >
.gird {
  .demo-icon {
    font-size: 0;
    img {
      width: 60px;
      height: 60px;
    }
    .van-col {
      float: none;
      text-align: center;
      width: 33.33%;
      height: 100px;
      display: inline-block;
      vertical-align: middle;
      span {
        display: block;
        padding: 0 5px;
        font-size: 14px;
        line-height: 14px;
      }
    }
    .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #455a64;
    }
    .van-tab__pane {
      padding-top: 10px;
    }
  }
  .demo-icon-list {
    padding-top: 10px;
    box-sizing: border-box;
    min-height: calc(100vh - 65px);
  }
}
</style>