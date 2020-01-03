<template>
        <div class="title_big_box ">
            <div class="title_box ">
               <div class="music_list flex" @click="back">
                   <span>歌单 </span>
                   <!-- <span class="iconfont icon-ziyuan color_zi"></span> -->
                </div>
               <div class="my_music flex put_red">
                    <span>我的音乐 </span>
                   <span class="iconfont icon-me"></span>
                </div>
               <div class="search flex ">
                   <div class="search1">
                       <span class="iconfont icon-fangdajing"></span>
                        <input 
                        class="searchBox" 
                        type="text"
                        placeholder="歌手|歌曲"
                        >
                        
                   </div>
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
                this.$router.push({path:'/home/list'})  
            }
        }
    }
</script>

<style scoped lang="scss">
@import '../common/css/font/iconfont.css';
@import '../common/css/common.scss';
    .put_red{
        transition: 0.5s;
        cursor: pointer;
        &:hover{
            background-color: rgb(52, 180, 127);
            color:#000;
            // font-size: 20px;
            
        }
    }
    .title_big_box{
        position: fixed;
        top:0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 5rem;
        background-color: rgba(0,0,0,0.7);
        box-sizing: border-box;
        display: flex;
    }
   .title_box{
        min-width: 1080px;
        height: 100%;
        line-height: 5rem;
        margin: 0 auto;
        color:#fff;
        text-align: center;
        display: flex;
       .music_list{
           background-color: red;
           cursor: pointer;
           flex:1;
           box-sizing: border-box;
       }
       .my_music{ 
       }
       .search{
        //    position: relative;
           flex:1;
           display: flex;
           align-items: center;
           justify-content: center;
           color: black;
           .search1{
               width: 80%;
               height: 2rem;
               box-sizing: border-box;
               position: relative;
           .iconfont{
               position:absolute;
               z-index: 10;
               top: -23px;
               right:8px;
           }
           .searchBox{
              display: block;
              width: 100%;
              height: 100%; 
              border-radius: 1rem;
              outline: none;
              padding: 0.1rem 0.5rem;
              box-sizing: border-box;
           }
           }
        }  
    }
   
   
</style>