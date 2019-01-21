<template>
  <div class="photolist">
    <!-- 新闻列表导航栏 -->
    <van-tabs @click="onClick">
      <van-tab v-for="item in categorylist" :title="item.title" :key="item.id"></van-tab>
    </van-tabs>

    <!-- 新闻列表图片区域 -->
    <router-link v-for="img in imgList" :key="img.id" :to="'/home/photoinfo/'+img.id">
      <img  v-lazy="img.img_url" >
    </router-link>
  </div>
</template>

<script>
import {Toast} from 'vant'
export default {
  data: () => ({
    categorylist:[],
    imgList:[]
  }),
  created(){
    this.getAllCategiry()
    this.getImg(0)
  },
  methods:{
    async getAllCategiry(){//获取导航条名称
      const res = await this.$http.get('api/getimgcategory')
      if(res.body.status == 0){
        res.body.message.unshift({title:"全部",id:0})
        this.categorylist = res.body.message
        // console.log(this.categorylist);
        
      } else {
        Toast('获取数据失败')
      }
    },
    async getImg(cateId){//获取图片数据
      const res = await this.$http.get('api/getimages/'+cateId)
      if(res.body.status == 0){
        // console.log(res.body.message);
        this.imgList = res.body.message
      }
    },
    onClick(index) {//点击对应的导航栏获取对应栏的数据
      this.getImg(index)
    }
  }
};
</script>

<style lang='less' >
.photolist {
  padding:0 10px;
  .van-tab--active {
    color:#26a2ff;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
}
 
</style>