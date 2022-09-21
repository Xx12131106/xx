<template>
  <div id="echarts">
    <div :id="id"></div>
  </div>
</template>

<script>
export default {
  name: "index",
  props:['id',"option"],
  data() {
    return {
      options:{
        ...this.option
      },
      myEcharts:""
    }
  },
  methods:{
    drawEcharts() {
      this.myEcharts = this.$echarts.init(
          document.getElementById(this.id)
      );
      //将图表配置项赋给图表,true参数表示不和之前的数据合并
      this.myEcharts.setOption(this.options, true);
    }
  },
  mounted() {
    setTimeout(()=>{
      this.drawEcharts()
    },600)
  }
}
</script>

<style scoped>
  #echarts {
    width: 100%;
    height: 100%;
  }
  #echarts >div {
    width: 100%;
    height: 100%;
  }
</style>