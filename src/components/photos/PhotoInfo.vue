<template>
  <div class="photoinfo">
    <h3>{{imgInfo.title}}</h3>
    <div class="tit">
      <span>发表时间:{{imgInfo.add_time | datefmt}}</span>
      <span>点击:{{imgInfo.click}}次</span>
    </div>

    <hr>

    <!-- 缩略图 -->
    <div class="thums">
      <img
        v-for="(item,index) in list"
        :key="item.src"
        :src="item.src"
        alt
        @click="handleImg(index)"
      >
    </div>

    <div class="content" v-html="imgInfo.content"></div>

    <!-- 评论子组件 -->
    <comment :id="id"></comment>
  </div>
</template>

<script>
import { Toast } from "vant";
//导入评论子组件
import comment from "../subcomponent/Comment";
//导入缩略图vant模块
import {ImagePreview} from "vant";
export default {
  data() {
    return {
      id: this.$route.params.id,
      imgInfo: {},
      list: []
    };
  },
  created() {
    this.getimgInfo();
    this.getThums();
  },
  methods: {
    async getimgInfo() {//获取标题等区域的内容
      const res = await this.$http.get("api/getimageInfo/" + this.id);
      if (res.body.status == 0) {
        this.imgInfo = res.body.message;
      } else {
        Toast("获取数据失败");
      }
    },
    async getThums() {//获取缩略图图片数据
      const res = await this.$http.get("api/getthumimages/" + this.id);
      if (res.body.status == 0) {
        this.list = res.body.message;
        // console.log(res.body.message);
      } else {
        Toast("获取数据失败");
      }
    },
    handleImg(startPosition) {//点击缩略图事件

      //筛选得到的数据，将图片数据筛选出来
      let images = [];
      this.list.forEach(item => {
        if (item.src != null) {
          images.push(item.src);
        }
      }); 
      //tartPosition 传递进来的索引 ，用于设置图片预览起始位置
      //img是要展示的图片
      ImagePreview({
        images,
        startPosition
      });
    }
  },
  components: {//注册评论子组件
    comment
  }
};
</script>

<style lang='less'>
.photoinfo {
  padding: 3px;
  h3 {
    margin: 10px 0;
    padding: 0;
    font-size: 16px;
    text-align: center;
    color: #26a2ff;
    font-weight: 600;
  }
  .tit {
    display: flex;
    justify-content: space-between;
    color: #333;
    font-size: 12px;
  }
  .content {
    line-height: 35px;
    color: #666;
  }
  .thums {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>