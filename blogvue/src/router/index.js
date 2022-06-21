import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import Home from "../components/Home";
import Categories from "../components/Categories";
import Tags from "../components/Tags";
import About from "../components/About";
import Post from "../components/Post";
import Admin from "../components/Admin";
import Login from "../components/Login";



Vue.use(Router);
Vue.use(ElementUI);

const originalPush = Router.prototype.replace
Router.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  mode: 'history',
  routes: [
    { path: '', component: Home},
    { path: '/', component: Home},
    { path: '/categories', component: Categories},
    { path: '/tags', component: Tags},
    { path: '/about', component: About},
    { path: '/post/:id.html', component: Post},
    { path: '/admin',component: Admin},
    { path: '/login',component: Login}
  ]
})


