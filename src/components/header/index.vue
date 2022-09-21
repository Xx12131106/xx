<template>
	<div class="header">
		<div v-for="(i,index) in headerList" :key="index" @click="to(i.path)">
      {{ i.name }}
    </div>
    <music style="position: absolute;right: 0"></music>
	</div>
</template>

<script>
import music from "../../views/music";
export default {
  components:{
    music
  },
  data(){
    return {
      headerList:[
        {
          name: "首页",
          path: "/home"
        },
        {
          name: "Echarts",
          path: "/echarts"
        },
        {
          name: "音乐列表",
          path: "/music"
        }
      ]
    }
  },
  methods:{
    to(x) {
      this.$router.push(x)
    }
  }
}
</script>

<style scoped>
	.header {
    background-color: #FFFFFF10;
    border-bottom: 1px solid #00000020;
    height: 50px;
    display: flex;
    align-items: center;
    color: #FFFFFF90;
  }
  .header >div {
    min-width: 90px;
    text-align: center;
    cursor: pointer;
  }
  .header >div:hover {
    color: #FFFFFF;
  }
</style>