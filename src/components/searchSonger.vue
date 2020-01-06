<template>
        <div class="searchSonger scorrbar" >  
            <!-- <ul class="music_lists scorrbar"> -->
                <!-- 歌曲列表 -->
                
            
            <!-- </ul> -->
        </div>
</template>

<script>
    import axios from 'axios';
    // import {Loading} from 'element-ui';
    
    // let options = {
    //     background: "rgba(0,0,0,0.2)"
    // };
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "music_menu",
        data(){
            return {
                
            }
        },
        created() {
            //在刷新网页后加载此方法
            // this.create_music_list();
            
        },
        update () {
                
        },
        components:{
            
        },
        methods: {
            
        }
    }
</script>

<style scoped lang="scss">
     @import '../common/css/common.scss';
        
</style>