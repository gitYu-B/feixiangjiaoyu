import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
// import qs from 'qs'



Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.use(ElementUI);

  

//路由守卫
router.beforeEach((to, from, next)=>{
  //路由中设置的needLogin字段就在to当中 
  if(window.sessionStorage.data){
   console.log(window.sessionStorage);
   // console.log(to.path) //每次跳转的路径
   if(to.path === '/'){
    //登录状态下 访问login.vue页面 会跳到index.vue
    next({path: '/zuodh'});
   }else{
    next();
   }
  }else{
   // 如果没有session ,访问任何页面。都会进入到 登录页
   if (to.path === '/') { // 如果是登录页面的话，直接next() -->解决注销后的循环执行bug
    next();
   } else { // 否则 跳转到登录页面
    next({ path: '/' });
   }
  }
})

new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
