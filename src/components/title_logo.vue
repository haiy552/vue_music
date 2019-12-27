<template>
        <div class="title_big_box absolute">
            <div class="title_box absolute">
               <div class="music_list flex" @click="back">
                   <span>歌单 </span>
                   <span class="iconfont icon-ziyuan"></span>
                </div>
               <div class="my_music flex put_red">
                   <span>我的音乐 </span>
                   <span class="iconfont icon-me"></span>
                </div>
               <div class="search flex ">
                   <input clss="search_box" type="text" placeholder="歌曲、歌手">
                   <span class="iconfont icon-fangdajing rearch_icon"></span>
               </div>
                <div class="login flex put_red">
                   <span>登入 </span>
                   <span class="iconfont icon-logindengru"></span>
                </div>    
            </div>
        </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "title_logo",
        data() {
            return{
                music_lyric:''
            }
        },
        created() {
          
        },
        
        methods: {
            back(){ 
                this.$router.push({path:'/home'})  
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../common/css/font/iconfont.css';
@import '../common/css/common.css';
    .put_red{
        transition: 0.4s;
        cursor: pointer;
        &:hover{
            background-color: red;
            color:#000;
            
        }
    }
    .absolute{
        position: absolute;
        top:0;
        left: 50%;
        transform: translateX(-50%);
    }
    .title_big_box{
        width: 100%;
        height: 5rem;
        background-color: rgba(0,0,0,0.7);
    }
   .title_box{
        width: 1080px;
        height: 100%;
        line-height: 5rem;
        color:#fff;
        text-align: center;
        display: flex;
       .music_list{
           background-color: red;
           cursor: pointer;
       }
       .my_music{
           
       }
       .search{
           position: relative;
           .search_box{
               outline: none;
            //    display: block;
               height:100%;
               width: 100%;    
           }
           .rearch_icon{
               position:absolute;
               right: 0;
           }  
       }
       .login{

       }
   }
</style>