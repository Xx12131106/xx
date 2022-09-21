<template>
	<div class="app">
		<el-card class="box-card">
		  <div slot="header" class="clearfix">
		    <span>Echarts列表</span>
		  </div>
		  <div class="content">
        <div class="echarts" v-for="(i,index) in echartsList">
          <xx-echarts :key="index" :id="i.id" :option="i.options"></xx-echarts>
        </div>
      </div>
		</el-card>

	</div>
</template>

<script>
import xxEcharts from "@/components/echarts/index.vue"
export default {
  name:"echartsList",
  components:{
    xxEcharts
  },
  data(){
    return {
      echartsList:[
        {
          id:"echarts1",
          options:{
            color: ['#25E7B3'],
            title: {
              text: ""
            },
            grid: {//直角坐标系内绘图网格
              left: "10%",//grid 组件离容器左侧的距离。
              right: "5%",
              bottom: "10%", //
              top: '13%'
            },
            legend: {
              data: ['最大值','最小值','平均值'],
              textStyle:{
                color:'#FFF'
              }
            },
            tooltip: {
              trigger: 'axis',
              showDelay: 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
              formatter: (p) => {
                let p0 = '';
                let p1 = '';
                let p2 = '';
                let p3 = '';

                if(p[0]) {
                  p0 = p[0].marker + ' '  + p[0].seriesName  + ' ' + p[0].value + '<br>'
                }
                if(p[1]) {
                  if(p[0].seriesName === p[1].seriesName) {
                    p0 = ''
                  }
                  p1 = p[1].marker + ' '  + p[1].seriesName  + ' ' + p[1].value + '<br>'
                }

                if(p[2]) {
                  p2 = p[2].marker  + ' ' + p[2].seriesName  + ' ' + p[2].value+ '<br>'
                }

                if(p[3]){
                  p3 = p[3].marker + ' ' + p[3].seriesName  + ' ' + p[3].value+ '<br>'
                }


                return p[0].name + '<br>' + p0 + p1 + p2 +p3

              }
            },
            // legend: {
            //   top:'1%',
            //   data:['']
            // },
            xAxis: [{
              name: '',
              type: 'category',
              data: this.xAxis,
              axisLabel: {
                textStyle: {
                  color: "#FFF",
                },
                formatter:function(value)
                {
                  var ret = "";//拼接加\n返回的类目项
                  var maxLength = 10;//每项显示文字个数
                  var valLength = value.length;//X轴类目项的文字个数
                  var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                  if (rowN > 1)//如果类目项的文字大于5,
                  {
                    for (var i = 0; i < rowN; i++) {
                      var temp = "";//每次截取的字符串
                      var start = i * maxLength;//开始截取的位置
                      var end = start + maxLength;//结束截取的位置
                      //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                      temp = value.substring(start, end) + "\n";
                      ret += temp; //凭借最终的字符串
                    }
                    return ret;
                  }
                  else {
                    return value;
                  }
                }
              },
              axisTick: false,
              axisLine: {
                show:true,
                lineStyle: {
                  color:'#3181F6'
                }
              },

            }],
            yAxis: [
              {
                name: '',
                type: 'value',
                axisLine: { show: false },
                axisTick: { show: false },
                axisLabel: {
                  textStyle: {
                    color: "#FFF"
                  },
                },
                min: 0,
                splitLine: {
                  show: true,
                  lineStyle: {
                    type: "dashed", //设置网格线类型 dotted：虚线   solid:实线
                    width: 1,
                    color:'#3181F6'
                  },
                },
              }
            ],
            series: [
              {
                name:'平均值',
                stack: 'total',
                type: 'line',
                data:  [
                  {
                    name:'2021-06-11',
                    value:'130'
                  },
                  {
                    name:'2021-06-12',
                    value:'132'
                  },
                  {
                    name:'2021-06-13',
                    value:'133'
                  },
                  {
                    name:'2021-06-14',
                    value:'139'
                  },
                  {
                    name:'2021-06-15',
                    value:'150'
                  },
                  {
                    name:'2021-06-16',
                    value:'170'
                  },
                  {
                    name:'2021-06-17',
                    value:'120'
                  },
                  {
                    name:'2021-06-18',
                    value:'110'
                  },
                  {
                    name:'2021-06-19',
                    value:'160'
                  },
                ],
                smooth: 0.5,
                symbol:'circle',
                // 拐点大小
                symbolSize: 8,
                lineStyle: {
                  color: "#25E7B3", //线条颜色
                },
                // 设置拐点颜色以及边框
                itemStyle: {
                  color: "#E9FFF9",
                  // borderColor: "#25E7B3",
                  // borderWidth: 190,
                },
              },
              {
                name:'平均值',
                type: 'line',
                data:  [
                  {
                    name:'2021-06-11',
                    value:'130'
                  },
                  {
                    name:'2021-06-12',
                    value:'132'
                  },
                  {
                    name:'2021-06-13',
                    value:'133'
                  },
                  {
                    name:'2021-06-14',
                    value:'139'
                  },
                  {
                    name:'2021-06-15',
                    value:'150'
                  },
                  {
                    name:'2021-06-16',
                    value:'170'
                  },
                  {
                    name:'2021-06-17',
                    value:'120'
                  },
                  {
                    name:'2021-06-18',
                    value:'110'
                  },
                  {
                    name:'2021-06-19',
                    value:'160'
                  },
                ],
                // 拐点大小
                symbol:'circle',
                symbolSize: 20,
                lineStyle: {
                  color: "#00000000", //线条颜色
                },
                // 设置拐点颜色以及边框
                itemStyle: {
                  color: "#00000000",
                  borderColor: "#25E7B3",
                  borderWidth: 1,
                },
              },


              {
                name:'最小值',
                type: 'bar',
                stack: 'total',
                /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
                data:  [
                  {
                    name:'2021-06-11',
                    value:'130'
                  },
                  {
                    name:'2021-06-12',
                    value:'132'
                  },
                  {
                    name:'2021-06-13',
                    value:'133'
                  },
                  {
                    name:'2021-06-14',
                    value:'139'
                  },
                  {
                    name:'2021-06-15',
                    value:'150'
                  },
                  {
                    name:'2021-06-16',
                    value:'170'
                  },
                  {
                    name:'2021-06-17',
                    value:'120'
                  },
                  {
                    name:'2021-06-18',
                    value:'110'
                  },
                  {
                    name:'2021-06-19',
                    value:'160'
                  },
                ],
                barWidth: 9,
                // barGap:'50%',
                barCategoryGap: '80%',
                emphasis: {
                  itemStyle: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#3CADE6' },
                      { offset: 1, color: '#63FAFF' }
                    ]),   //hover时改变柱子颜色
                    // shadowColor: 'rgba(102,102,102,0.50)',
                    // shadowOffsetX: 0,
                    // shadowOffsetY: 2,
                    // shadowBlur: 6,
                    borderWidth: 2,
                  }
                },
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#63FAFF' },
                    { offset: 1, color: '#3CADE6' }
                  ])
                },
              },
              {
                name:'最大值',
                type: 'bar',
                stack: 'total',
                /*itemStyle : { normal: {label : {show: true, position: 'insideTop',textStyle:{color:'#000'}}}},*/
                data:  [
                  {
                    name:'2021-06-11',
                    value:'130'
                  },
                  {
                    name:'2021-06-12',
                    value:'132'
                  },
                  {
                    name:'2021-06-13',
                    value:'133'
                  },
                  {
                    name:'2021-06-14',
                    value:'139'
                  },
                  {
                    name:'2021-06-15',
                    value:'150'
                  },
                  {
                    name:'2021-06-16',
                    value:'170'
                  },
                  {
                    name:'2021-06-17',
                    value:'120'
                  },
                  {
                    name:'2021-06-18',
                    value:'110'
                  },
                  {
                    name:'2021-06-19',
                    value:'160'
                  },
                ],
                barWidth: 9,
                // barGap:'50%',
                barCategoryGap: '80%',
                emphasis: {
                  itemStyle: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      { offset: 0, color: '#E8DD6F' },
                      { offset: 1, color: '#FFF4AA' }
                    ]),   //hover时改变柱子颜色
                    // shadowColor: 'rgba(102,102,102,0.50)',
                    // shadowOffsetX: 0,
                    // shadowOffsetY: 2,
                    // shadowBlur: 6,
                    borderWidth: 2,
                  }
                },
                itemStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#FFF4AA' },
                    { offset: 1, color: '#E8DD6F' }
                  ])
                },
              }

            ]
          }
        },
        {
          id:'echarts2',
          options: {
            colors:['#357FFF','#45CC80','#FD7171'],
            title: {
              text: "60",
              subtext: "总数",
              x: "center",
              y: "30%",
              textStyle: {
                fontSize: 26,
                fontWeight: "normal",
                color: ["#fff"],
              },
              subtextStyle: {
                color: "#fff",
                fontSize: 16,
              },
            },
            grid: {
              bottom: 0,
              left: 0,
              // right: "10%",
            },
            legend: {
              show: true,
              orient: "vertical",
              y: "bottom",
              right: "center",
              icon: "roundRect",

              textStyle: {
                rich: {
                  name: {
                    fontSize: 14,
                    color: "#fff",
                    width:120
                  },
                  num: {
                    fontSize: 18,
                    color: "#fff",
                    float:"right"
                  }
                }
              },
              formatter: function(name) {
                let tarValue;
                let data = [
                  {name:"测试一",value:"360"},
                  {name:"测试一",value:"360"},
                  {name:"测试一",value:"360"},
                ]

                    for (let i = 0; i < data.length; i++) {
                  if (data[i].name == name) {
                    tarValue = data[i].value;
                  }
                }

                return `{name|${name}}` + `{num|${tarValue}}` + "人";
              }
            },
            series: [
              // 边框的设置
              {
                radius: ["60%", "79%"],
                center: ["50%", "36%"],
                type: "pie",
                hoverAnimation:false,
                silent: true,
                label: {
                  normal: {
                    show: false,
                  },
                  emphasis: {
                    show: false,
                  },
                },
                labelLine: {
                  normal: {
                    show: false,
                  },
                  emphasis: {
                    show: false,
                  },
                },
                animation: false,
                tooltip: {
                  show: false,
                },
                itemStyle: {
                  normal: {
                    color: "rgba(250,250,250,0.95)",
                  },
                },
                data: [
                  {
                    value: 1,
                  },
                ],
              },
              // 主要展示层的
              {
                radius: ["60%", "71%"],
                center: ["50%", "36%"],
                type: "pie",
                itemStyle: {
                  normal: {
                    color: function (params) {
                      return [
                        '#FD7171', '#357FFF','#45CC80'
                      ][params.dataIndex];
                    },
                  },
                },
                label: {
                  show:false
                },
                labelLine: {
                  normal: {
                    show: false,
                    length: 15,
                    length2: 120,
                    lineStyle: {
                      color: "#d3d3d3",
                    },
                    align: "right",
                  },
                  color: "#000",
                  emphasis: {
                    show: false,
                  },
                },
                data: [
                  {name:"测试一",value:"360"},
                  {name:"测试一",value:"360"},
                  {name:"测试一",value:"360"},
                ],
              },

            ],
          }
        },
        {
          id:"echarts3",
          options:{
            backgroundColor: "#FFFFFF90",
            colors:['#45CC80','#357FFF','#FD7171'],
            tooltip: {
              trigger: "axis",
              axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
              },
            },
            grid: {
              left: "2%",
              right: "6%",
              bottom: "3%",
              top: "16%",
              containLabel: true,
            },
            legend: {
              data: [ "<7天检测人数", ">7天检测人数","未检测人数"],
              right: 10,
              top: 12,
              textStyle: {
                color: "rgba(37,37,37,0.81)",
              },
              itemWidth: 12,
              itemHeight: 10,
              icon:"circle"
              // itemGap: 35
            },
            xAxis: {
              type: "category",
              data: ["东营区", "河口区", "垦利区", "广饶县", "利津县", "开发区", "东营港", "农高区"],
              axisLine: {
                lineStyle: {
                  color: "rgba(37,37,37,0.81)",
                },
              },
              axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                  fontFamily: "Microsoft YaHei",
                },
              },
            },

            yAxis: {
              type: "value",
              axisLine: {
                show: false,
                lineStyle: {
                  color: "rgba(37,37,37,0.81)",
                },
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: "rgba(37,37,37,0.5)",
                },
              },
              axisLabel: {},
            },
            series: [
              {
                name: "<7天检测人数",
                type: "bar",
                barWidth: "15%",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#8bd46e",
                      },
                      {
                        offset: 1,
                        color: "#09bcb7",
                      },
                    ]),
                    barBorderRadius: 12,
                  },
                },
                data: [6,10,5,6,8,9],
              },
              {
                name: ">7天检测人数",
                type: "bar",
                barWidth: "15%",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [

                      {
                        offset: 0,
                        color: "#248ff7",
                      },
                      {
                        offset: 1,
                        color: "#6851f1",
                      },
                    ]),
                    barBorderRadius: 11,
                  },
                },
                data: [6,10,5,6,8,9],
              },
              {
                name: "未检测人数",
                type: "bar",
                barWidth: "15%",
                itemStyle: {
                  normal: {
                    color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: "#FD7171",
                      },
                      {
                        offset: 1,
                        color: "#ff4c4c",
                      },
                    ]),
                    barBorderRadius: 11,
                  },
                },
                data: [6,10,5,6,8,9],
              },
            ],
          }
        }
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
	.app {
		box-sizing: border-box;
		padding: 36px;
		width: 100%;
	}
	.box-card {
		height: 100%;
	}
  .box-card .content {
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  ::v-deep .el-card__body {
    height: calc(100% - 100px);
    overflow: hidden;
  }
  .echarts {
    width: 30%;
    height: 300px;
    border: 1px solid #00000030;
    background-color: #14222E;
    border-radius: 12px;
  }
</style>