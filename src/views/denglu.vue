<template>
  <div id="dl">
    <div class="dl-div1">
      <div class="dl-left">
        <img src="../../public/img/dl1.png" />
      </div>
      <div class="dl-right">
        <p class="dl-p1">
          登录
          <br />
          <span>非翔教育后台管理系统</span>
        </p>
        <p class="d1-p2" v-show="show1">
          <i class="el-icon-warning"></i>
          {{text}}
        </p>
        <form class="dl-form">
          <i class="el-icon-user-solid"></i>
          <input type="text" placeholder="请输入账号" v-model="userName" />
          <br />
          <i class="el-icon-lock"></i>
          <input type="password" placeholder="请输入密码" v-model="passWord" />
          <br />
          <template>
            <el-radio v-model="radio" label="1">1个月免登录</el-radio>
            <span class="dl-span1">忘记密码请联系管理员</span>
            <br />
          </template>
        </form>
        <button @click="denglu()">登录</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      radio: "1",
      text:"账号或密码不正确",
      userName:"",
      passWord:"",
      dlname:[],
      dlmm:[],
      show1:false
    };
  },
  methods: {
     denglu(){
      //  const self = this;
   this.$http.post('https://www.fastmock.site/mock/99dca75a85994f13a2f4a3496af31183/suiyuewan/suiyuewanjson').then(response=>{
    var res =response.data.data,
      len = res.length,
      userNameArr= [],
      passWordArr= [],
      ses= window.sessionStorage; 
       // 拿到所有的username
    for(var i=0; i<len; i++){
     userNameArr.push(res[i].username);
     passWordArr.push(res[i].password);
    }
      console.log(userNameArr, passWordArr);
      if(userNameArr.indexOf(this.userName) === -1){
         this.show1= true;
    
    }else{
     var index = userNameArr.indexOf(this.userName);
     if(passWordArr[index] === this.passWord){
      // 把token放在sessionStorage中
      ses.setItem('data', res[index].token);
      this.$parent.$data.userTitle = res[index].usertitle;
      //验证成功进入首页
      // this.startHacking ('登录成功！');
      //跳转到首页
      this.$router.push('/zuodh');
      // console.log(this.$router);
     }else {
    
      this.show1= true;
     }
    }
   })
  //  .catch(err=>{
  //   console.log('连接数据库失败！')
  //  })

        //  if(this.userName=="" || this.mm==""||this.userName!=this.dlname||this.mm!=this.dlmm ){
        //         this.show1= true;
        //          console.log(this.dlname)
        //       console.log(this.dlname)
        //        console.log(this.userName)
        //       console.log(this.mm)
               
        //  }else if(this.userName==this.dlname&&this.mm==this.dlmm ){
        //      this.$router.push({ path:'/zuodh'  })
            
        //  }
     }
  },
  // created() {
    
  //   this.$http(
  //       "https://www.fastmock.site/mock/99dca75a85994f13a2f4a3496af31183/suiyuewan/suiyuewanjson",
      
  //   ).then((res) => {
  //     const self = this;
  //     console.log(res.data)
  //     this.dlname = res.data.data.name;
  //      this.dlmm = res.data.data.pw;
  //      console.log(this.dlname)
  //             console.log(this.dlmm)
      
  //   });
  // },
};
</script>

<style scoped>
.d1-p2 {
  font-size: 13px;
  color: #77ccb1;
  background: #e6faf5;
  padding: 3px 5px;
  text-align: left;
  margin-top: -23px;
}
button {
  width: 263px;
  height: 42px;
  background: #9137f3;
  color: white;
  border: 1px solid #9137f3;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
}
.dl-span1 {
  font-size: 12px;
  color: #999999;
}
.dl-form {
  position: relative;
}
.dl-form > i {
  color: #7c50ba;
  position: absolute;
  left: 15px;
  top: 12px;
  font-size: 26px;
}
.dl-form > i:nth-of-type(2) {
  top: 65px;
}
.dl-form > input {
  width: 260px;
  height: 40px;
  background: #f5ebff;
  border: 1px solid #f5ebff;
  border-radius: 10px;
  text-indent: 50px;
  margin: 5px 0px;
}
.dl-p1 {
  color: #9933ff;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 30px;
}
.dl-p1 > span {
  font-size: 14px;
}
.dl-left {
  float: left;
  margin-top: 90px;
  margin-left: 30px;
}
.dl-right {
  float: right;
  margin-right: 45px;
  margin-top: 30px;
}
#dl {
  background-image: url("../../public/img/dl-1.png");
  width: 100%;
  height: 729px;
  /* position: relative; */
  padding-top: 1px;
}
.dl-div1 {
  width: 702px;
  height: 407px;
  background: white;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 127px;
  /* position: absolute;
        top: 127px; */
}
</style>