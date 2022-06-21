<template>
  <div class="login-main">
    <el-input v-model="inputUser" placeholder="账号"></el-input>
    <el-input v-model="inputPswd" placeholder="密码" show-password></el-input>
    <el-button type="primary" @click="login">登录</el-button>
  </div>
</template>

<script>
import {marked} from "marked";

export default {
  name: "Login",
  data(){
    return{
      inputUser: '',
      inputPswd: '',
      userInfo:{}
    }
  },
  methods:{
    login(){
      const _this = this;
      this.$axios({
        // 默认请求方式为get
        method: 'post',
        url: "/api/auth/login?"+"username="+_this.inputUser+"&password="+_this.inputPswd+"&remember=true",
      }).then(response => {
        // 请求成功
        _this.userInfo = response.data.data
        console.log(_this.userInfo);
      }).catch(error => {
        // 请求失败，
        console.log(error)
      });
    }}
}
</script>

<style scoped>

</style>
