
<template>
  <div class="app1">
    <div class="sy-app1">
      <h2>首页</h2>
      <div class="sy-app2">
        <p>
          经营概况
          <i class="el-icon-s-operation"></i>
        </p>
        <!-- <ul class="sy-ul1">
                    <li></li>
        </ul>-->
        <img src="../../../public/img/sy1.png" />
      </div>
      <div class="sy-app2">
        <p>
          代办事项
          <i class="el-icon-s-operation"></i>
        </p>
        <img src="../../../public/img/sy3.png" />
      </div>
     <div class="sy-app2">
        <p>
          收入趋势
          <i class="el-icon-s-operation"></i>
        </p>
        <div id="myChart" style="height:600px;"></div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  // created () {
  //     alert('1231')
  // }
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["8-12", "8-13", "8-14", "8-15", "8-16", "8-17", "8-18", "8-19", "8-20", "8-21", "8-22", "8-23"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320, 1360, 1230, 1110, 1430, 1230, 1330],
            type: "line",
            areaStyle: {},
             itemStyle: {
         normal: {
           color: "#B9DDFF",//折线点的颜色
           lineStyle: {
           color: "#1890FF"//折线的颜色
          }
        }
     },
          }
          
        ]
      });
    }
  }
};
</script>
 

<style scoped>
#myChart{
  width: 100%;
}
.sy-ul1 > li {
  width: 210px;
  height: 103px;
  background: #9921ff;
  border-radius: 5px;
  display: inline-block;
}
.sy-app2 {
  padding: 22px 31px;
  background: white;
  margin-top: 20px;
  text-align: left;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}
.sy-app2>img{
  width: 100%;
}
.sy-app1 {
  padding: 22px 31px;
}
.app1 {
  background: #fbfbfb;
  margin-top: 70px;
}
.sy-app1 > h2 {
  text-align: left;
  color: #9137f3;
}
</style>