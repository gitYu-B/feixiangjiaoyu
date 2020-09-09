import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import denglu from '../views/denglu.vue'
import zuodh from '../views/zuodh.vue'
import shouye from '../views/Shouye'
import lunbo from '../views/Wenzhang/lunbo.vue'
import lunbo1 from '../views/Wenzhang/lunbo1.vue'
import xzlunbo from '../views/Wenzhang/xzlunbo.vue'
import kecheng from '../views/Wenzhang/kecheng.vue'
import jiaoyu from '../views/Wenzhang/jiaoyu.vue'
import dingdan from '../views/Dingdan/dingdan.vue'
import yonghu from '../views/Yonghu/yonghu.vue'
import huodong from '../views/Wenzhang/huodong.vue'
import mingxing from '../views/Wenzhang/mingxing.vue'
import caiwu from '../views/Caiwu/caiwu.vue'
import tongyong from '../views/Shezhi/tongyong.vue'
import yuangong from '../views/Shezhi/yuangong.vue'
import huishouzhan from '../views/Wenzhang/huishouzhan.vue'
import caozuo from '../views/Shezhi/caozuo.vue'
import juese from '../views/Shezhi/juese.vue'
import guanyu from '../views/Shezhi/guanyu.vue'


// import guanli from '../views/Shezhi/guanli.vue'
Vue.use(VueRouter)


const routes = [

  {
    path: '/',
    name: 'denglu',
    component: denglu,
    meta:{
      needLogin: false
     }
  },
  {
    path: '/zuodh',
    name: 'zuodh',
    component: zuodh,
    children: [{
      name:shouye,
      path: 'shouye',
      component: shouye,
     
      meta:{
        needLogin: true
       }
    }
    ,
    {
      path: '/zuodh',
      redirect: '/zuodh/shouye'
    },
    {
      path: 'lunbo',
      component: lunbo,
     
      meta:{
        needLogin: true
       }
    }
    ,
    {
      path: 'lunbo1',
      component: lunbo1,
      
      meta:{
        needLogin: true
       }
    }
    ,
    {
      path: 'xzlunbo',
      component: xzlunbo,
    }
    ,
    {
      path: 'kecheng',
      component: kecheng,
    }
    ,
    {
      path: 'jiaoyu',
      component: jiaoyu,
    }
    ,
    {
      path: 'dingdan',
      component: dingdan,
    }
    ,
    {
      path: 'yonghu',
      component: yonghu,
    }
    ,
    {
      path: 'huodong',
      component: huodong,
    }
    ,
    {
      path: 'mingxing',
      component: mingxing,
    }
    ,
    {
      path: 'caiwu',
      component: caiwu,
    }
    ,
    {
      path: 'tongyong',
      component: tongyong,
    }
    ,
    {
      path: 'yuangong',
      component: yuangong,
    }
    ,
    {
      path: 'huishouzhan',
      component: huishouzhan,
    }
    ,
    {
      path: 'caozuo',
      component: caozuo,
    }
    ,
    {
      path: 'juese',
      component: juese,
    }
    ,
    {
      path: 'guanyu',
      component: guanyu,
    }
    ]

  }

]



const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  
})

// router.beforeEach(function(to, from, next) {
//   // console.log('--' + localStorage.getItem('userToken') + to.path)
//    if (!localStorage.getItem('userToken')) {
//      if (to.path !== '/denglu') {
//        return next('/denglu')
//      }
//    }
//    next()
//  })

export default router
