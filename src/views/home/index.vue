<template>
	<div class="app">
		<div class="title">
			<div class="verse" @click="change">
        {{ verse }}
      </div>
		</div>
	</div>
</template>

<script>
	export default {
		name:'home',
		data(){
			return {
				showId:'',
        verse:""
			}
		},
		methods:{
			change() {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer =  setTimeout(()=>{
          jinrishici.load((result)=> {
            this.verse = result.data.content
          });
        },600)
			}
		},
		mounted() {
      this.change()
		}
	}
</script>

<style scope>
	#app {
	
	}
	
	.title {
		font-size: 36px;
		font-weight: bold;
		color: aliceblue;
		text-align: center;
	}

  .verse {
    margin: 36px;
    width: 50px;
    font-family: "FZYBXSJW";
    font-weight: 600;
    cursor: pointer;
    color: #ffffff;
    text-shadow: 0px 0px 7px rgba(52, 255, 204, 0.1);
    background: linear-gradient(180deg, #CCFBFF 0%, #EF96C5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    writing-mode: vertical-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
    letter-spacing: 16px;
  }

	
</style>