<template>


  <div class="home-main">

    <div class="home-welcome">
      <div class="home-welcome-header">
        <h1> 🙈 Hello there!</h1>
      </div>
      <div class="home-welcome-context">
        🤓 Welcome on to my personal blog.Have a good time!<br>
        🚧 The blog is still under development.
      </div>
      <div class="home-welcome-footer">
        <el-link href="mailto:i@ikaile.cn"><icon-mail theme="outline" size="28" fill="#333"/></el-link>
        <el-link href="https://github.com/kle-wang" target="_blank"><icon-github theme="outline" size="28" fill="#333"/></el-link>
      </div>
    </div>
    <div class="home-post">


      <div class="post">
        <div class="post-contain" v-for="(o,index) in posts" :key="index">

            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>
                  <el-link :href="'post/'+o.friendName+'.html'">{{ o.title }}</el-link>
                </span>
              </div>

              <div class="text item">
                {{o.context}}
              </div>
              <div class="text info">
                <icon-category-management theme="outline" size="15" fill="#333"/>
                <el-link :href="'category/'+o.category.id">{{o.category.categoryName}}</el-link>
                <icon-schedule theme="outline" size="15" fill="#333"/>
                {{o.createTime}}
                <icon-preview-open theme="outline" size="15" fill="#333"/>
                {{o.view_count}}
              </div>
            </el-card>



        </div>




      </div>


    </div>

  </div>



</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      currentDate: new Date(),
      posts:{}
    };
  },
  mounted(){
    this.getAllPost({
      page: "1",
      pageSize: "10"
    })
  },
  methods:{
    getAllPost(data){
      const _this = this;
      this.$axios({
        // 默认请求方式为get
        method: 'post',
        url: 'api/listPost',
        // 传递参数
        data: {
          page: data.page,
          pageSize: data.pageSize
        },
        responseType: 'json'
      }).then(response => {
        // 请求成功
        _this.posts = response.data.data
      }).catch(error => {
        // 请求失败，
        console.log(error)
      });
    }
  }
}
</script>

<style>
.home-welcome{
  margin: auto;
  width: 50%;
  min-height: 240px;
}
.home-welcome-header{
  text-align: center;
  font-size: 30px;
}
.home-welcome-context{
  text-align: center;
  font-size: 20px;
  min-height: 70px;
}
.home-welcome-footer{
  text-align: center;
  font-size: 15px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 580px;
  margin: auto auto 38px;
}
</style>
