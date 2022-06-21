// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { install } from '@icon-park/vue/es/all'
install(Vue)
import '@icon-park/vue/styles/index.css'
import VueHighlightJS from 'vue-highlightjs'
import hljs from "highlightjs";
Vue.use(VueHighlightJS)


axios.defaults.withCredentials=true;
Vue.prototype.$axios = axios

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
