<template>
  <div class="gird">
    <section class="van-doc-demo-section demo-icon">
      <div class="van-tab__pane">
        <div class="van-col van-col--6">
          <i class="van-icon">
            <img src="/static/gird/menu1.png" alt>
          </i>
          <span>新闻资讯</span>
        </div>
        <div class="van-col van-col--6">
          <i class="van-icon">
            <img src="/static/gird/menu2.png" alt>
          </i>
          <span>图片分享</span>
        </div>
        <div class="van-col van-col--6">
          <i class="van-icon">
            <img src="/static/gird/menu3.png" alt>
          </i>
          <span>商品购买</span>
        </div>
        <div class="van-col van-col--6">
          <i class="van-icon">
            <img src="/static/gird/menu4.png" alt>
          </i>
          <span>留言反馈</span>
        </div>
        <div class="van-col van-col--6">
          <i class="van-icon">
            <img src="/static/gird/menu5.png" alt>
          </i>
          <span>视频专区</span>
        </div>
        <div class="van-col van-col--6">
          <i class="van-icon">
            <img src="/static/gird/menu6.png" alt>
          </i>
          <span>联系我们</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({})
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