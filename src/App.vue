<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<div class="content-box">
			<xx-header></xx-header>
			<router-view class="view" key="1"></router-view>
		</div>
	</div>
</template>

<script>
	import xxHeader from '@/components/header/index.vue'
	export default {
		name: 'App',
		components: {
			xxHeader
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	html{
		height: 100%;
	}
	body{
		height: 100%;
	}
	/* html {
		position: fixed;
		width: 100%;
		height: 100%;
		background-image: url(https://demo2.yixiang.co/static/img/bg.05cf2596.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		overflow: hidden;
	} */
	#app {
		width: 100%;
		height: 100%;
		user-select: none;
		/* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
	}

	.content-box {
		height: 100%;
    overflow: hidden;
	}
  .view {
    height: calc(100% - 51px);
  }
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>
