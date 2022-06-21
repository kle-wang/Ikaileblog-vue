
<template>

  <div class="main">
    <div v-if="postInfo.category" class="post-header">
      <div class="post-title">
      <h1>{{postInfo.title}}</h1>
      </div>
      <icon-category-management theme="outline" size="15" fill="#333"/>
      <el-link :href="'category/'+postInfo.category.category_name">{{postInfo.category.category_name}}</el-link>
      <icon-schedule theme="outline" size="15" fill="#333"/>
      {{postInfo.create_data}}
      <icon-preview-open theme="outline" size="15" fill="#333"/>
      {{postInfo.view_count}}
    </div>
    <div v-if="postInfo" class="post-context">
      <div v-html="postHtml" style="width: 96%;margin-bottom: 50px;" class="markdown-body" v-highlight ></div>
    </div>

  </div>
</template>

<script>
import {marked} from 'marked'
export default {
  name: "Post",
  data(){
    return{
      postName:this.$route.params.id,
      postInfo:{},
      postHtml:"Loading.."
    }
  },
  mounted() {
    this.getPostInfo()
  },
  methods:{
    getPostInfo(){
      const _this = this;
      this.$axios({
        // 默认请求方式为get
        method: 'post',
        url: "/api/post/article/name/"+this.postName,
      }).then(response => {
        // 请求成功
        _this.postInfo = response.data.data
        _this.postHtml = marked(_this.postInfo.body.context)
      }).catch(error => {
        // 请求失败，
        console.log(error)
      });
    }
  }
}

</script>


<style>
@import '../static/css/github-markdown-light.css';
.main{
  margin: auto;
  width: 50%;
}
.post-header{
  text-align: center;
  min-height: 100px;
}
.post-title{
  font-size: 24px;
}



</style>
