<template>
  <div class="category-main">
    <div class="category-header">
      <h1>Categories</h1>
    </div>
    <div class="category-context">
      <el-button v-for="(o,index) in categories" :key="index" type="info" round>{{o.category_name}}</el-button>

    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  data(){
    return{
      categories: []
    }
  },
  mounted() {
    this.getAllCategories()
  },
  methods:{
    getAllCategories(){
      const _this = this;
      this.$axios({
        // 默认请求方式为get
        method: 'get',
        url: 'api/category',
        // 传递参数
        responseType: 'json'
      }).then(response => {
        // 请求成功
        _this.categories = response.data.data
        console.log(response.data.data);
      }).catch(error => {
        // 请求失败，
        console.log(error)
      });
    }
  }
}
</script>

<style>
.category-main{
  margin: auto;
  width: 50%;
  height: 100%;
}
.category-header{
  font-size: 30px;
}


</style>
