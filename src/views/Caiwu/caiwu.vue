<template>
  <div class="app1">
    <div class="lb-app1">
      <h2>财务管理</h2>
      <div class="lb-app2">
        <div class="cw-app1">
          <p>
            <i class="el-icon-s-operation"></i>
            财务统计
          </p>
          <br />
          <div class="cw-app2">
            <p>
              订单总额：￥
              <span>322000.00</span>
            </p>
            <p>
              订单总数：￥
              <span>322</span>
            </p>
          </div>
        </div>

        <p>
          <i class="el-icon-s-operation"></i>
          筛选
        </p>
        <div class="cw-app3">
          <div>
            <span class="cw-span1">订单状态</span>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="待支付"></el-checkbox>
              <el-checkbox label="已关闭"></el-checkbox>
              <el-checkbox label="学习中"></el-checkbox>
              <el-checkbox label="已完成"></el-checkbox>
            </el-checkbox-group>
          </div>
          <div>
            <span class="cw-span1">订单状态</span>
            <el-checkbox-group v-model="checkList1">
              <el-checkbox label="课程订单"></el-checkbox>
              <el-checkbox label="活动订单"></el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="lb-app3">
          输入搜索 :
          <input type="text" placeholder="输入用户昵称或手机号......" />
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
          流水列表
          <div>
            <el-table
              :data="swagger"
              ref="multipleTable"
              :header-cell-style="rowClass"
              :cell-style="cellStyle"
              tooltip-effect="dark"
              @selection-change="handleSelectionChange"
              style="width: 100%"
            >
              <el-table-column type="selection" width="55"></el-table-column>

              <el-table-column label="订单编号" width="180" class="lb-table">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.QuestionId }}</span>
                </template>
              </el-table-column>
              <el-table-column label="订单分类" width="180" class="lb-table">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.Title }}</span>
                </template>
              </el-table-column>
              <el-table-column label="标题" width="180" class="lb-table">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.Content }}</span>
                </template>
              </el-table-column>
              <el-table-column label="订单金额" width="180" class="lb-table">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.Prize }}</span>
                </template>
              </el-table-column>
              <el-table-column label="订单状态" width="180" class="lb-table">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.CreateUserId }}</span>
                </template>
              </el-table-column>

              <el-table-column label="日期" width="180" class="lb-table">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.CreateUserName }}</span>
                </template>
              </el-table-column>
            </el-table>
            <!-- <form action="form_action.asp" method="get" class="lb-form">
              <input type="checkbox" name="vehicle" class="lb-checkbox" /> 全选
              <span class="lb-span3">批量加入回收站</span>
            </form>-->
            <div class="feiye">
              <el-col
                :span="24"
                class="toolbar"
                style="text-align:center;margin-top:20px;"
                v-if="das"
              >
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
        </div>
      </div>
    </div>
    <input type="text" v-model="dx" />
    <div>{{dx| capitalize}}</div>
    <!-- <form>
      <input type="text" @keyup.enter="handleSubmit">
    </form>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dx: "",
      checkList: [""],
      checkList1: [""],
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
      swagger: [],

      pagesize: 5,
      currentPage: 1,
      tableData: [
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
        },
        {
          bh: "2019030102369669",
          fl: "课程订单",
          bt: "幼儿英语课程",
          je: "￥2366.00",
          zt: "待支付",
          date: "2016-05-02"
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
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  methods: {
    handleSubmit() {
      // 验证及验证之后的跳转
      alert("11111");
    },
    qin() {
      this.zhi1 = "";
      this.value1 = "";
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
      //获取三个选择输入框的内容字符串
      let filtersName = this.zhi1;
      let tiems = this.value2;
      alert(tiems[0]);
      alert(tiems[1]);
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
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    //  handleSelectionChange(val) {
    //         this.multipleSelection = val;
    //     },
    handleDelete(index, row) {
      console.log(index, row);
    },

    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    }
  },
  created() {
    this.$http("http://47.111.250.151:8081/api/Question/GetQuestion").then(
      res => {
        console.log(res.data);
        this.swagger = res.data.rows;
        //  this.swagger = res.data.rows.Title;
        console.log(this.swagger);
        //  console.log(this.swagger)
      }
    );
  }
};
</script>

<style scoped>
.cw-span1 {
  display: inline-block;
  margin-bottom: 10px;
}
.cw-app3 > div {
  margin: 30px 0;
}
/* el-checkbox-group{
      display: inline-block;
} */
.cw-app2 > p {
  display: inline-block;
  margin-bottom: 30px;
  font-size: 17px;
  margin-right: 60px;
}
.cw-app2 > p > span {
  font-weight: 600;
  color: red;
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