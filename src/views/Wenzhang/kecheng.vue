<template>
  <div class="ding">
    <div class="jian1">课程管理</div>
    <div class="jian2">
      <div class="jian3 lb-div">
        <i class="el-icon-menu"></i>筛选
      </div>

      <div class="float"></div>
      <div class="shou1">
        <div class="float"></div>
        <div class="lb-div2">
          <div class="lb-div1">
            <span class="shou2">输入搜索</span>
            <input v-model="zhi1" class="shou4" type="text" placeholder="输入轮播标题..." />
          </div>
          <span class="shou2">上传时间</span>
          <input v-model="zhi1" class="shou4" type="text" placeholder="输入轮播标题..." />
          <span class="shou2">上传时间</span>
          <div class="block">
            <el-date-picker
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </div>
        </div>
        <div class="float"></div>
        <div class="shou6" @click="searchAutomobile">
          <i class="el-icon-s-open"></i>
          <span>筛选</span>
        </div>
        <div class="float"></div>
        <div class="shou0" @click="qin">清空筛选条件</div>
      </div>
      <div class="float"></div>
    </div>
    <div class="tian1">
      <div class="jian3">
        <i class="el-icon-s-unfold"></i>轮播图列表
      </div>
      <div class="tian2" @click="dialogFormVisible = true">
        <i class="el-icon-plus"></i>
        <span>新增轮播图</span>
      </div>
      <!-- <router-link tag="div" to="/zuodh/huishouzhan">
        <div class="tian3">
          <i class="el-icon-delete-solid"></i>
          <span>回收站</span>
        </div>
      </router-link> -->
      <div class="tian4">
        <el-table
          ref="multipleTable"
          :header-cell-style="rowClass"
          :cell-style="cellStyle"
          :data="showTable"
          tooltip-effect="dark"
          style="width: 100%;"
          @selection-change="selectRow"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="id" label="id" width="140" style="text-align: center;" ></el-table-column>
          <el-table-column prop="professionalName" label="上传人" width="140" style="text-align: center;" ></el-table-column>
          <!-- <el-table-column prop="img" label="缩略图" width="220" style="text-align: center;">
            <template slot-scope="scope">
              <img :src="scope.row.img" min-width="70" height="70" />
            </template>
          </el-table-column> -->
          <!-- <el-table-column label="日期" width="120">
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column> -->
          <el-table-column prop="professionalDesc" label="professionalDesc" show-overflow-tooltip></el-table-column>
          <el-table-column label="操作" width="250">
            <template slot-scope="scope">
              <el-button @click="handleEdit(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
              <el-button type="text" size="small" @click.prevent="delData(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-if="das">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            layout="total,prev, pager, next"
            :page-size="pagesize"
            :total="this.tableData.length"
          ></el-pagination>
        </el-col>
        <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-else>
          <el-pagination
            background
            @current-change="handleCurrentChangelp"
            layout="total,prev, pager, next"
            :page-size="pagesize"
            :total="this.filterAutomobileInfs.length"
          ></el-pagination>
        </el-col>
      </div>
    </div>
    <el-dialog title="新增轮播图" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="id" :label-width="formLabelWidth" prop="id">
          <el-input v-model="id" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <!-- <el-form-item label="图片：" :label-width="formLabelWidth">
          <el-input disabled="disabled" v-model="form.imgs" autocomplete="off"></el-input>
        </el-form-item>-->
        <el-form-item label="上传人" :label-width="formLabelWidth" prop="professionalName">
          <el-input v-model="name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="professionalDesc" :label-width="formLabelWidth" prop="professionalDesc">
          <el-input v-model="rj" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="序号" :label-width="formLabelWidth">
          <el-input disabled="disabled" v-model="form.indexs" autocomplete="off"></el-input>
        </el-form-item> -->
        <!-- <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input  v-model="form.id" autocomplete="off"></el-input>
        </el-form-item> -->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sumbitAddRow()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="编辑轮播图" :visible.sync="editFormVisible">
      <el-form :model="form">
        <el-form-item label="id" :label-width="formLabelWidth"  prop="id">
          <el-input v-model="id1" autocomplete="off" :disabled="true"></el-input>
        </el-form-item>
        <!-- <el-form-item label="图片：" :label-width="formLabelWidth">
          <el-input disabled="disabled" v-model="form.imgs" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="上传人" :label-width="formLabelWidth" prop="professionalName">
          <el-input v-model="name1" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="professionalDesc" :label-width="formLabelWidth" prop="professionalDesc">
          <el-input v-model="rj1" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="序号" :label-width="formLabelWidth">
          <el-input disabled="disabled" v-model="editForm.index" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input disabled="disabled" v-model="editForm.id" autocomplete="off"></el-input>
        </el-form-item> -->
       
      </el-form>
       <div slot="footer" class="dialog-footer">
        <el-button @click="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="sumbitEditRow()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import qs from "qs";
// var _index;
export default {
  data() {
    return {
      editForm: [],
      editFormVisible: false,
      dialogFormVisible: false,
       name: "",
       id: "130",
       rj: "",
        name1: "",
       id1: "",
       rj1: "",
      // form: {
      //   name: "",
      //   imgs: require("../../../public/img/lb-slt.png"),
      //   datae: "",
      //   rj: "",
      //   indexs: 1,
      //   id: "",
      //   delivery: false,
      //   con: true
      // },
      formLabelWidth: "120px",
      zhi1: "",
      das: true,
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value2: "",
      pagesize: 4, //设置每页显示条目个数为10
      currentPage: 1, //设置当前页默认为1
      tableData: [
       
      ],
      multipleSelection: [],
      filterAutomobileInfs: [],
      selectlistRow: []
    };
  },
  computed: {
    //showTable计算属性通过slice方法计算表格当前应显示的数据
    showTable() {
      if (this.das) {
        return this.tableData.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
      } else {
        return this.filterAutomobileInfs.slice(
          (this.currentPage - 1) * this.pagesize,
          this.currentPage * this.pagesize
        );
      }
    }
  },
  methods: {
    //编辑数据
    handleEdit(index, rows) {
      this.editFormVisible = true;
      this.editForm = Object.assign({index}, rows);
       this.name1=rows.professionalName
       this.id1=rows.id,
       this.rj1=rows.professionalDesc
        console.log(rows)
    //   _index = index;
    //   console.log(index)
    //   console.log(_index)
      //取到这一栏的值，也就是明白是在那一栏进行操作，从而将编辑后的数据存到表格中
    },
    //保存编辑
    sumbitEditRow() {
         let date = qs.stringify({// eslint-disable-line no-unused-vars
        "id": this.id1,
        "professionalName": this.name1,
        "professionalDesc": this.rj1
      });
     
        this.$http
          .post("http://139.9.169.87:8081/examsystem/updateProfessional",date)
          .then(res => {
               this.dialogFormVisible = false;
               console.log(res.data.success)  
            if (res.data.success) {
                this.editFormVisible = false;
              alert("编辑成功");
             
             
            }
          });
    //   var editData = _index;
    //   this.tableData[editData].name = this.editForm.name;
    //   this.tableData[editData].data = this.editForm.data;
    //   this.tableData[editData].address = this.editForm.address;
    //   this.editFormVisible = false;
    },
    //新增
    sumbitAddRow() {
      let date = qs.stringify({// eslint-disable-line no-unused-vars
        "id": this.id,
        "professionalName": this.name,
        "professionalDesc": this.rj
      });
     //console.log(this.con)
     console.log(date)
        this.$http
          .post("http://139.9.169.87:8081/examsystem/addProfessional",date)
          .then(res => {
            //    console.log(date)  
            if (res.data.success) {
                //console.log(res.data.success)  
                 this.dialogFormVisible = false;
              alert("新增成功");
            
            }
          });
      

      //   if (this.form.name != "" && this.form.datae != "" && this.form.rj != "") {
      //     this.form.indexs = this.form.indexs + 1;
      //     this.form.id = this.form.id + 1;
      //     this.tableData = this.tableData || [];
      //     this.tableData.push({
      //       index: this.form.indexs,
      //       name: this.form.name,
      //       img: this.form.imgs,
      //       date: this.form.datae,
      //       address: this.form.rj
      //     });
      //     this.dialogFormVisible = false;
      //   } else {
      //     alert("内容不能有为空值的！");
      //   }
    },
    // 获取表格选中时的数据
    selectRow(val) {
      this.selectlistRow = val;
      // console.log(val);
    },
    // 删除方法
    // 删除选中行
    delData(index, rows) {
        // alert(rows.id)
     this.$http.get('http://139.9.169.87:8081/examsystem/deleteProfessional?id=' + rows.id)
					.then(res => {
                        console.log(res.data.success) 
						if (res.data.success) {
							alert('删除成功！')
							rows.splice(index, 1);
						}
					})
    },
    qin() {
      this.zhi1 = "";
      this.value2 = "";
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    rowClass() {
      return "text-align:center";
    },
    cellStyle() {
      return "text-align:center";
    },
    //设置当前页为点击页
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    handleCurrentChangelp(currentPage) {
      this.currentPage = currentPage;
    },
    searchAutomobile() {
      //currentPage赋值为1
      this.currentPage = 1;
      //筛选方法
      this.filterAutomobile();
    },
    filterAutomobile() {
      //获取选择输入框的内容字符串
      let filtersName = this.zhi1;
      let tiems = this.value2;
      console.log(tiems[0], tiems[1]);
      //筛选原始数组并赋值给filtersAutomobile数组
      let filtersAutomobile = this.tableData.filter(item => {
        //定义筛选条件，默认为true，这样就可以让不符合动态选择条件时不影响筛选条件
        var isFiltersName = true;
        //符合动态选择条件就给筛选条件赋值
        if (filtersName.length != 0) {
          isFiltersName = item.name.indexOf(filtersName) != -1;
          this.das = false;
        }
        //返回筛选条件
        return isFiltersName;
      });
      //把筛选后的数组赋值给列表显示数组
      this.filterAutomobileInfs = filtersAutomobile;
    }
  },
  created() {
    // this.form.indexs = this.tableData.length + 1;
    // this.form.id = this.tableData.length + 1;
    this.$http
      .get("http://139.9.169.87:8081/examsystem/getProfessionalNoPage")
      .then(res => {
        this.tableData = res.data.data;
        console.log(res);

        //   .catch(err => {
        //     console.log(err);
        //   });
      });
    //   let duix = this.$route.params.duix
	// 		// console.log(duix)
	// 		if(duix != null){
	// 			this.add1 = duix.professional.id
	// 			this.add2 = duix.professional.professionalName
	// 			this.add3 = duix.professional.professionalDesc
	// 			this.add4 = duix.courseName
	// 			this.add5 = duix.id
	// 			this.add6 = duix.courseDesc
	// 			this.con=false
	// 		}
  }
};
</script>

<style scoped>
.lb-div1 > input {
  width: 185px;
  height: 37px;
  text-indent: 10px;
  border: 1px solid rgba(228, 228, 228, 1);
  border-radius: 5px;
}
.lb-div {
  text-align: left;
}
.lb-div2 {
  margin-right: 40%;
  width: 800px;
}
.lb-div1 {
  float: left;
  /* display: inline-block; */
}
.ding {
  float: left;
  /* margin-left: 23%; */
  margin-top: 8%;
  width: 100%;
}
.float {
  clear: both;
}

.jian1 {
  font-size: 25px;
  font-weight: bold;
  color: blue;
  text-align: left;
  margin-top: 10px;
}

.jian2 {
  width: 100%;
  height: 130px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
  margin-top: 20px;
}

.jian3 {
  margin-top: 10px;
  margin-left: 10px;
  color: #666666;
  font-weight: 400;
  text-align: left;
}

.jian3 i {
  margin-left: 10px;
  margin-right: 10px;
}

.shou1 {
  margin-top: 25px;
}

.shou2 {
  font-size: 15px;
  margin-left: 20px;
  margin-right: 20px;
}

.block {
  margin-left: 450px;
  margin-top: -28px;
}

.shou6 {
  width: 80px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: white;
  background-color: rgba(145, 55, 243, 1);
  border-radius: 4px;
  cursor: pointer;
  float: right;
  margin-top: -33px;
  margin-right: 150px;
}

.shou0 {
  font-size: 14px;
  float: right;
  margin-top: -30px;
  cursor: pointer;
  margin-right: 50px;
  color: #9137f3;
}

.tian1 {
  width: 100%;
  height: 488px;
  box-sizing: border-box;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(228, 228, 228, 1);
  margin-top: 20px;
  margin-bottom: 10px;
}

.tian2 {
  width: 120px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  color: rgba(145, 55, 243, 1);
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  margin-top: -22px;
  margin-right: 160px;
  border: 1px solid rgba(145, 55, 243, 1);
}

.tian3 {
  width: 120px;
  height: 30px;
  font-size: 16px;
  text-align: center;
  line-height: 30px;
  color: rgba(145, 55, 243, 1);
  background-color: white;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  margin-top: -22px;
  margin-right: -250px;
  border: 1px solid rgba(145, 55, 243, 1);
}

.el-table th > .cell {
  text-align: center;
}

.el-table .cell {
  text-align: center;
}
</style>
