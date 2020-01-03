<template>
  <div class="menu_list">
    <div class="musicStyle flex" @mouseenter="show(true)" @mouseleave="show(false)">{{dataName1 === "请选择"? dataName1: this.$store.getters.music_music_style}}
      <div class="musicStyle_Box"  v-show="flag">
        <router-link to="list" class="musicStyle_Sbox"
        v-for="(item, index) in options" 
        :key="index">
        <span @click="getMenuValue1($event.target.innerText)" >
        {{item}}
        </span>
        </router-link>
      </div>
    </div>
    <h4 class="rank flex "><router-link class="button" to="rank">排行榜</router-link></h4>
    <h4 class="songer flex "><router-link class="button" to="songer">歌手</router-link></h4>
  </div>


</template>
<script>
 export default {
    name: 'menu_list',
    props:["options", "dataName1"],

    data(){
      return {
        flag:false
      }
    },
    components: {
     
    },
    methods:{
      show(val){
        this.flag = val
      },
      getMenuValue1(val){
        this.$emit("getMenuValue",val)
      }
    },
    create(){
      this.$store.commit("change_music_style",this.dataName1);
    },
    watch:{
      // value(val){
      //     this.$store.commit("change_music_style",val);
      // }
    }
  }
</script>

<style scoped lang="scss">
    
    @import '../common/css/common.scss';
    .menu_list{
        widows: 100%;
        height: 2rem;
        line-height: 2rem;
        display: flex;
        text-align: center;
        box-sizing: border-box;
        // padding-bottom: 0.3rem;
      .musicStyle{
        position: relative;
        z-index: 1;
        color: white;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        background-color: rgba(0, 0, 0,0.7);
        .musicStyle_Box{
            height: 10rem;
            width: 100%;
            // left: 50%;
            bottom:-10rem;
            // transform: translateX(-50%);
            border-radius: 0 0 1rem 1rem;
            background-color: rgba(0, 0, 0,0.7);
            position: absolute;
            z-index: 10;
            display: flex;
            flex-direction: column;
            align-items: center;
            .musicStyle_Sbox{
             
              color: white;
              flex:1;
            }
        }
        
      }
      .rank,
      .songer{
        border: 1px solid rgb(204, 57, 57);
        border-left: 0;
      }
    }

</style>