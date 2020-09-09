<template>
  <div class="app1">
    <div class="lb-app1">
      <h2>轮播图管理</h2>
      <div class="lb-app2">
        <p>
          <i class="el-icon-s-operation"></i>
          筛选
        </p>
        <div class="lb-app3">
          输入搜索 :
          <input type="text" placeholder="输入轮播图标题......" />
          上传时间 :
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
          <span class="lb-span1">
            <button type="primary" class="el-button1">
              <i class="el-icon-ice-cream-square"></i> 筛选
            </button>
          </span>
          <span class="lb-span2">清空筛选条件</span>
        </div>
      </div>
      <div class="lb-app2">
        <div>
          <i class="el-icon-s-operation"></i>
          轮播图列表
          <div class="lb-hsz">
           
            <p>
               <router-link to="/zuodh/xzlunbo">
              <i class="el-icon-plus"></i> 新增轮播图
               </router-link>
            </p>
            <p>
               <router-link to="/zuodh/huishouzhan">
                <i class="el-icon-delete-solid"></i> 回收站
              </router-link>
            </p>
          </div>
          <div>
            <el-table
              :data="showTable"
              ref="multipleTable"
              :header-cell-style="rowClass"
              :cell-style="cellStyle" 
              tooltip-effect="dark"
              @selection-change="handleSelectionChange"
              style="width: 100%"
            >
              <el-table-column type="selection" width="55"></el-table-column>

              <el-table-column label="轮播图名称" width="180" class="lb-table">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.text }}</span>
                </template>
              </el-table-column>
              <el-table-column label="缩略图" width="180" class="lb-table">
                <template slot-scope="scope">
                  <img :src="scope.row.img">
                </template>
              </el-table-column>
              <el-table-column label="姓名" width="180" class="lb-table">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="日期" width="180" class="lb-table">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="操作" class="lb-table">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index)"
                  >加入回收站</el-button>
                </template>
              </el-table-column>
            </el-table>
            <form action="form_action.asp" method="get" class="lb-form">
              <input type="checkbox" name="vehicle" class="lb-checkbox" /> 全选
              <span class="lb-span3">批量加入回收站</span>
            </form>
            <div class="feiye">
            <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-if="das">
                <el-pagination background @current-change="handleCurrentChange" layout="total,prev, pager, next" :page-size="pagesize" :total="this.tableData.length">
                </el-pagination>
            </el-col>
            <el-col :span="24" class="toolbar" style="text-align:center;margin-top:20px;" v-else>
                <el-pagination background @current-change="handleCurrentChangelp" layout="total,prev, pager, next" :page-size="pagesize" :total="this.filterAutomobileInfs.length">
                </el-pagination>
            </el-col>
            </div>
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
      value1: "",
      value2: "",
       
      pagesize:5,
      currentPage:1,
      tableData: [
        {
          text: "banner",
          img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          text: "banner",
          img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          text: "banner",
           img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          text: "banner",
           img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          text: "banner",
           img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          text: "banner",
           img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          text: "banner",
           img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          text: "banner",
           img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          text: "banner",
           img: require('../../../public/img/lb-slt.png'),
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      multipleSelection: [],
       filterAutomobileInfs: []
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
  

     qin() {
            this.zhi1 = "";
            this.value1 = "";
            this.value2 = "";
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        rowClass() {
            return "text-align:center"
        },
        cellStyle() {
            return "text-align:center"
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
            //获取三个选择输入框的内容字符串
            let filtersName = this.zhi1;
            let tiems = this.value2;
            alert(tiems[0])
            alert(tiems[1])
            //筛选原始数组并赋值给filtersAutomobile数组
            let filtersAutomobile = this.tableData.filter(item => {
                //定义筛选条件，默认为true，这样就可以让不符合动态选择条件时不影响筛选条件
                var isFiltersName = true;
                //符合动态选择条件就给筛选条件赋值
                if (filtersName.length != 0) {
                    isFiltersName = item.name.indexOf(filtersName) != -1;
                    this.das = false
                }
                //返回筛选条件
                return isFiltersName;
            });
            //把筛选后的数组赋值给列表显示数组
            this.filterAutomobileInfs = filtersAutomobile;
        },
    handleEdit(index, row) {
      console.log(index, row);
    },
    //  handleSelectionChange(val) {
    //         this.multipleSelection = val;
    //     },
    handleDelete(index) {
      console.log(index);
      // var that=this;
      this.tableData.splice(index, 1);
      //  this.$api.branch.remove(data => {
      //    window.location.reload();
      //    },{
      //      id:index,    //传递对应id给后端，
      //   });
    },
    
    
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
  
  }
};
</script>

<style scoped>


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