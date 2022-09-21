<template>
  <div>
<!--    <iframe id="music" class="musicContent" frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 :src="'//music.163.com/outchain/player?type=2&id='+musicId+'&auto=0&height=66'"></iframe>-->
      <div style="display: flex;align-items: center">
        <el-input v-model="name"></el-input>
        <div style="white-space: nowrap" @click="start">{{ isMusic?"播放":"停止" }}</div>
      </div>
  </div>
</template>

<script>

export default {
  name: "index",
  data(){
    return {
      musicId:"",
      auto:0,
      music:null,
      isMusic:true,
      name:"洛城"
    }
  },
  watch:{
    musicId(val) {
      setTimeout(()=>{
        // $("body").click()
      },2000)
    }
  },
  mounted() {
    this.searchMusic(this.name)
    this.musicId = "1867107328"
    this.auto = 1
  },
  methods:{
    async start() {
      console.log('播放状态',this.isMusic)
      if(this.isMusic) {
        if(this.name !== ""){
          await this.searchMusic(this.name)
        }
      }else {
        this.music.pause()
      }
      this.isMusic = !this.isMusic
    },
    searchMusic(a) {
      //then后面为两个函数参数，第一个为成功时，第二个为失败时
      // http://music.163.com/song/media/outer/url?id=416388799.mp3
      this.axios.get("https://music.cyrilstudio.top/search?keywords="+a).then(
          (res)=>
          {
            // that.musiclist=response.data.result.songs;
            this.musicId = res.data.result.songs[0].id
            console.log('获取id')
            this.musicCreate(this.musicId)
            this.music.play()

          },
          function(err){
            console.log(err)
          })
    },
    musicCreate(x) {
      if( this.music !== null ) {
        this.music.pause();
        this.music = null;
      }
      console.log('创建audio')
      this.music = new Audio();
      //音频地址
      this.music.src = 'http://music.163.com/song/media/outer/url?id='+x+'.mp3';
    }
  }
}
</script>

<style>
  .musicContent {
    position: absolute;
    top: 0;
    left: 190px;
    /*opacity: 0.2;*/
  }

  ::v-deep .player-mid .pause-bg {
    position: absolute;
    left: 0px!important;
    top: 0px!important;
    width: 62px!important;
    height: 62px!important;
    border: 1px solid!important;
  }
</style>