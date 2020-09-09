<template>
  <div class="app1">
    <div class="lb-app1">
      <h2>新增轮播图</h2>
      <router-link to="/zuodh/lunbo">
        <h4>返回</h4>
      </router-link>
      <div class="float"></div>
      <div class="lb-app2">
        <div class="gy-div1">请填写轮播图信息</div>
        <div class="lb-app3">
          <div class="xz-div1">
            轮播图名称 :
            <input type="text" value="请输入轮播图名称" />
          </div>
          <div class="xz-div2">
            轮播图 :
            <el-upload
              class="avatar-uploader xz-sc"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="xz-div3">
            轮播图状态 :
            <el-switch v-model="value1"></el-switch>
          </div>
          <div class="xz-div4">
            链接 :
            <input type="text"  />
          </div>
          <div>
            上传时间：
            <el-time-picker
              v-model="value2"
              :picker-options="{
                  selectableRange: '18:30:00 - 20:30:00'
              }"
              placeholder="任意时间点"
            ></el-time-picker>
          </div>
          <div class="xz-div5">
            排序号 : <input type="text" v-model="pxh" /> 请填写数字，数字越大越靠前
          </div>
          <div class="xz-div6">
            <el-button :plain="true" @click="open2">保存</el-button> 
             <router-link to="/zuodh/lunbo">
                 <el-button :plain="true" >取消</el-button>
             </router-link>
          </div>
           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: "",
      value1: false,
      value2: new Date(2016, 9, 10, 18, 40),
      pxh:"0"
    };
  },
  methods: {
     
      open2() {
        this.$message({
          message: '保存成功',
          type: 'success',
        });
         this.$router.push('/zuodh/lunbo')
      },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
/* .xz-div6{
 
} */
.xz-div5 > input {
  width: 185px;
  height: 37px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  text-indent: 10px;
 
}
.xz-div4 > input {
  width: 487px;
  height: 37px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}
.el-icon-plus {
  border: 1px solid #d9d9d9;
  display: inline-block;
  border-radius: 5px;
  margin-left: 95px;
}
/* .xz-sc{
  width: 73px;
  height: 70px;
} */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.xz-div1 > input {
  width: 185px;
  height: 37px;
  text-indent: 20px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  color: #999999;
}
.gy-div1 {
  border-bottom: 1px solid #f2f2f2;
  padding-bottom: 15px;
  color: #999999;
}
.lb-form {
  margin-left: 13px;
  margin-top: 40px;
  display: inline-block;
}
.feiye {
  display: inline-block;
  margin-left: 500px;
}
.el-pager > li {
  border: 1px solid #9137f3;
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
  margin: 22px 50px;
  font-size: 16px;
}
.lb-app3 > div {
  margin: 30px 0px;
}
/* .lb-app3 > input {
  height: 37px;
  width: 185px;
  border: 1px solid #9137f3;
  border-radius: 5px;
  text-indent: 10px;
  margin-right: 50px;
} */
.app1 {
  background: #fbfbfb;
  margin-top: 70px;
}
.lb-app1 {
  padding: 22px 31px;
}
.lb-app1 > h2 {
  color: #9137f3;
  float: left;
}
h4 {
  color: #9137f3;
  float: right;
  margin-right: 30px;
  border: 1px solid #9137f3;
  width: 80px;
  height: 34px;
  border-radius: 5px;
  line-height: 34px;
}
.float {
  clear: both;
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