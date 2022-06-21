<template>

</template>

<script>
import axios from "axios";
import {marked} from "marked";

export default {
  name: "Admin",
  data() {
    return {

    };
  },
  mounted(){
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      const _this = this;
      this.$axios({
        // 默认请求方式为get
        method: 'get',
        url: "/api/user/info-me",
      }).then(response => {
        // 请求成功
        _this.postInfo = response.data.data
        _this.postHtml = marked(_this.postInfo.body.context)
      }).catch(error => {
        // 请求失败，
        console.log(error)
      });
    }}
}
</script>

<style scoped>

</style>
