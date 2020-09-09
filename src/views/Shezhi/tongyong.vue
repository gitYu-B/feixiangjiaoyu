<template>
  <div class="app1">
    <div class="lb-app1">
      <h2>通用设置</h2>
      <div class="lb-app2">
          <div class="ty-app1">
              待付款订单取消时间：拍下未付款订单<input type="text" class="ty-input" value="60">
              分钟内未付款，自动取消订单 <br/><br/>
              累计消费满<input type="text" class="ty-input1" value="10000">元，升一级；最高<input type="text" class="ty-input" value="11">级<br/><br/>
              每<input type="text" class="ty-input2" value="100">积分可抵扣<input type="text" class="ty-input" value="10">元
          </div>
          <div><el-button :plain="true" @click="open2" class="ty-button"><i class="el-icon-mobile
"></i> 保存</el-button></div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
    methods: {
      open2() {
        this.$message({
          message: '保存成功',
          type: 'success',
          center: true
        });
      },
    }
};
</script>

<style scoped>
.ty-button{
  width: 98px;
  height: 40px;
  background: #9137F3;
  color:white;
  margin-left: 505px;
  margin-top: 200px;
}
.ty-app1{
    margin: 50px 10px;
}
.ty-input2{
    width: 75px;
    height: 37px;
    border: 1px solid #9137F3;
    border-radius: 5px;
}
.ty-input1{
    width: 116px;
    height: 37px;
    border: 1px solid #9137F3;
    border-radius: 5px;
}
.ty-input{
    width: 44px;
    height: 37px;
    border: 1px solid #9137F3;
    border-radius: 5px;
   
}
.ty-app1>input{
     margin: 0px 20px;
     text-align: center;
}
/* .ty-app1{

} */
.lb-form {
  margin-left: 13px;
  margin-top: 40px;
  display: inline-block;
}
.feiye{
  display: inline-block;
  margin-left: 500px;
}
.el-pager>li{
  border: 1px solid #9137F3;
}
.lb-span3 {
  color: #b1b1b1;
  margin-left: 10px;
}
.lb-table {
  margin: 0px 50px;
}

.lb-checkbox {
  width: 14px;
  height: 14px;
  background-color: white;
}

.lb-hsz {
  float: right;
}
.lb-hsz > p {
  border: 1px solid #9137f3;
  width: 107px;
  height: 32px;
  border-radius: 5px;
  display: inline-block;
  margin: 0px 10px;
  text-align: center;
  line-height: 32px;
  color: #9137f3;
}
.lb-span1 {
  margin-left: 50px;
}
.lb-span2 {
  color: #9137f3;
  font-size: 16px;
  margin-left: 30px;
}
.el-button1 {
  background: #9137f3;
  border: 1px solid #9137f3;
  width: 98px;
  height: 40px;
  color: white;
  border-radius: 5px;
  font-size: 18px;
}
.lb-app3 {
  margin: 22px 0px;
  font-size: 18px;
}
.lb-app3 > input {
  height: 37px;
  width: 185px;
  border: 1px solid #9137f3;
  border-radius: 5px;
  text-indent: 10px;
  margin-right: 50px;
}
.app1 {
  background: #fbfbfb;
  margin-top: 70px;
}
.lb-app1 {
  padding: 22px 31px;
}
.lb-app1 > h2 {
  text-align: left;
  color: #9137f3;
}
.lb-app2 {
  padding: 22px 31px;
  background: white;
  margin-top: 20px;
  text-align: left;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}
</style>