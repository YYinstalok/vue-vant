<template>
  <div class="comment">
    <h3>发表评论</h3>
    <textarea placeholder="请输入要BB的内容(最多吐槽120字)" maxlength="120"></textarea>
    <van-button class="btn" size="large">发表评论</van-button>

    <div class="list">
      <div class="item" v-for="(item,i) in comment" :key="item.id">
        <div class="title">第{{i+1}}楼&nbsp;&nbsp; 用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | datefmt }}</div>
        <div class="body">{{item.content}}</div>
      </div>

    </div>

    <van-button class="btnmore" size="large" @click="more" v-html="pageindex < 8 ?'加载更多':'没有更多数据了'"></van-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    pageindex:1,
    comment:[]
  }),
  props:['id'],
  created(){
    this.getComment()
  },
  methods:{
    async getComment(){//加载评论数据
      const {data:{status,message}} = await this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageindex+'')
      if(status == 0) {
        // console.log(message);
        this.comment = this.comment.concat(message) 
      }
    },
    more(){//加载更多
     if (this.pageindex < 8) {
        this.pageindex++;
        this.getComment();
     } else {
       return
     }
    }
  }

};
</script>

<style lang='less' scoped>
.comment {
  padding: 4px;
  h3 {
    margin: 10px 0;
  }
  textarea {
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    height: 80px;
    width: 100%;
    font-size: 14px;
  }
  .btn {
    background-color: #26a2ff;
    color: #fff;
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
  }
  .btnmore {
    border-radius: 4px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ef4f4f;
    color: #ef4f4f;
  }
  .list {
    margin: 5px 0;
    .item {
      font-size: 12px;
      .title {
        height: 35px;
        line-height: 35px;
        background-color: #ccc;
      }
      .body {
        height: 35px;
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>