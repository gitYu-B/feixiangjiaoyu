<template>
  <div>
    <div class="left">
      <el-row class="tac">
        <el-col :span="12">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <div class="hlong">
              <img src="../../public/img/zuo1.png" />
              <span>非翔教育</span>
            </div>
            <router-link to="/zuodh">
              <el-menu-item index="1" v-model="radio" label="1">
                <i class="el-icon-s-home tb"></i>
                <span slot="title" class="dh-span" tag="div" to="/zuodh/shouye">首页</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-management tb"></i>
                <span class="dh-span">文章管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/zuodh/lunbo1">
                  <el-menu-item index="1-1" tag="div" to="/wenzhang/lunbo1">轮播图管理</el-menu-item>
                </router-link>
                <router-link to="/zuodh/kecheng">
                  <el-menu-item index="1-2" tag="div" to="/wenzhang/kecheng">课程管理</el-menu-item>
                </router-link>
                <router-link to="/zuodh/jiaoyu">
                  <el-menu-item index="1-3">教育头条</el-menu-item>
                </router-link>
                <router-link to="/zuodh/huodong">
                  <el-menu-item index="1-4">活动列表</el-menu-item>
                </router-link>
                <router-link to="/zuodh/mingxing">
                  <el-menu-item index="1-5">明星教师</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
            <router-link to="/zuodh/dingdan">
              <el-menu-item index="3">
                <i class="el-icon-s-order tb"></i>
                <span slot="title" class="dh-span">订单管理</span>
              </el-menu-item>
            </router-link>
            <router-link to="/zuodh/yonghu">
              <el-menu-item index="4">
                <i class="el-icon-s-custom tb"></i>
                <span slot="title" class="dh-span">用户管理</span>
              </el-menu-item>
            </router-link>
            <router-link to="/zuodh/caiwu">
              <el-menu-item index="5">
                <i class="el-icon-c-scale-to-original tb"></i>
                <span slot="title" class="dh-span">财务管理</span>
              </el-menu-item>
            </router-link>
            <!-- <router-link to="/zuodh">
              <el-menu-item index="6">
                <i class="el-icon-service tb"></i>
                <span slot="title" class="dh-span">客服系统</span>
              </el-menu-item>
            </router-link> -->
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-s-tools tb"></i>
                <span class="dh-span">设置</span>
              </template>

              <el-menu-item-group>
                <router-link to="/zuodh/tongyong">
                  <el-menu-item index="1-1">通用设置</el-menu-item>
                </router-link>
                <!-- <router-link to="/zuodh/guanyu">
                  <el-menu-item index="1-2">关于我们</el-menu-item>
                </router-link> -->
                <router-link to="/zuodh/yuangong">
                  <el-menu-item index="1-3">员工管理</el-menu-item>
                </router-link>
                <router-link to="/zuodh/juese">
                  <el-menu-item index="1-4">角色管理</el-menu-item>
                </router-link>
                <router-link to="/zuodh/caozuo">
                  <el-menu-item index="1-5">操作日志</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>

    <div class="right">
      <div class="hlong1">
        <img src="../../public/img/dltx1.png">
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "1",
      activeName: "second"
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.left {
  float: left;
  width: 15%;
}
.right {
  float: right;
  width: 82%;
}
.dh-span {
  margin-left: 20px;
}
.hlong * {
  font-size: 26px;
  color: #9137f3;
  vertical-align: middle;
}
.hlong {
  margin-bottom: 40px;
  position: relative;
}
.hlong1 {
  /* position: absolute; */
  /* float: right; */
  /* margin-top: -474px; */
  background: #9137f3;
  height: 70px;
  width: 100%;
  position: fixed;
  z-index: 99;
}
.hlong1 > img{
   margin-left: 610px;
}
.hlong > img {
  margin-right: 10px;
}
.el-menu {
  border-right: none;
}
.tac {
  padding-top: 30px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
.el-menu-item {
  width: 200px;
  height: 51px;
  margin: 0;
  padding: 0px 10px;
  text-align: left;
}
.el-submenu {
  text-align: left;
}
.el-submenu__title {
  width: 200px;
  height: 51px;
  padding: 0px 10px;
}

.el-menu-vertical-demo {
  width: 200px;
}
.tb {
  color: #c188fd;
}
</style>