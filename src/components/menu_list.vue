<template>
  <div class="menu_list">
    <div class="menu_list_se flex">
        <el-select v-model="value" 
        size="small"
        >
            <el-option
            v-for="item in options"
            :key="item.index"
            :value="item">
            </el-option>
        </el-select>
    </div>
    
    <h4 class="rank flex"><span>排行榜</span></h4>
    <h4 class="singer flex"><span>歌手</span></h4>
  </div>
</template>
<script>
 export default {
    name: 'menu_list',
    data(){
      return {
        options: ["华语","粤语","欧美","日语","韩语"],
        value: '华语',
      }
    },
    components: {
     
    },
    create(){
      this.$store.commit("change_music_style",this.value);
    },
    watch:{
      value(val){
          this.$store.commit("change_music_style",val);
      }
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
    }
    .menu_list_se{
        width: 100%;
        height: 100%;

        // background-color: red;
        border-radius: 0.5rem;
        
    }
    

</style>