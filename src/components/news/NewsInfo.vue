<template>
  <div class="newsinfo">
    <h3>{{newslist.title}}</h3>
    <div class="tit">
      <span>发表时间:{{newslist.add_time | datefmt }}</span>
      <span>点击:{{newslist.click}}次</span>
    </div>

    <hr>

    <div class="content">{{newslist.content}}</div>

    <!-- 评论模块 -->
    <comment :id='id'></comment>
  </div>
</template>

<script>
import {Toast} from 'vant'
import comment from '../subcomponent/Comment'
export default {
  data(){
    return {
      id:this.$route.params.id,
      newslist:{}
    }
  },
  created(){
    this.getnewsInfo()
  },
  methods:{
    async getnewsInfo(){
      const {data:{status,message}} = await this.$http.get('api/getnew/'+this.id)
      // console.log(message);
      
      if(status == 0) {
        this.newslist = message
      } else {
        Toast('获取数据失败')
      }
    }
  },
  components:{
    comment
  }
};
</script>

<style lang='less' scoped>
  .newsinfo {
    padding: 3px;
    h3 {
      margin: 10px 0;
      padding: 0;
      font-size: 16px;
      text-align: center;
      color: red;
      font-weight: 600;
    }
    .tit {
      display: flex;
      justify-content: space-between;
      color:  #26a2ff;
      font-size: 12px;
    }
    .content {
      line-height: 35px;
      color: #666;
    }
  }
</style>