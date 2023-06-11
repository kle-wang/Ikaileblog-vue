<template>
  <div id="app">
    <el-container>
        <el-header>
        <div class="header">
        <div class="header-link">
          <el-link class="header-link-name">凯乐窝</el-link>
        </div>
        <div class="header-menu">
          <el-menu class="menu" mode="horizontal" @select="redirectUrl">
            <el-menu-item index="#">主页</el-menu-item>
            <el-menu-item index="categories">分类</el-menu-item>
            <el-menu-item index="tags">标签</el-menu-item>
            <el-menu-item index="about">关于</el-menu-item>
          </el-menu>
        </div>
        </div>

        </el-header>

        <el-main>
          <div class="app-contain">
            <router-view/>
          </div>
        </el-main>


        <el-footer>

<!--          分割线-->

          <div class="footer-main">
            <el-divider></el-divider>
            <div class="footer-copyrights">
              <span class="footer-span"><el-link>CopyRights By KeyL.Wang 2015-2023 All Rights Reserved.</el-link></span>
            </div>
            <div class="footer-icp">
              <el-link href="https://beian.miit.gov.cn/" target="_blank">晋ICP备20000958号</el-link>
              <br>
              <br>
            </div>

          </div>

        </el-footer>
      </el-container>



  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      url: "https://file.91pa.cn/2021/07/23/8ac56b55c4aa8.jpeg",
    }
  },
  methods: {
    redirectUrl(key) {
        this.$router.replace('/'+key)
    },
  }
}


</script>

<style>
.header{
  display: flex;
  height: 50px;
  width: 100%;
}
.header-menu{
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex: 1;
  margin-right: 40px;
}
.header-link{
  font-size: 30px;
}
.header-link-name{
  font-size: 20px;
}
.footer-main{
  height: 20px;
  text-align: center;
  bottom: 0;
}

.el-container {
  min-height: 90vh;
}
</style>
