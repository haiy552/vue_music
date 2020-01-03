<template>
        <div class="search" >
            <div class="searchMenu">
                <div class="songer hen">
                    <span >歌手</span>
                </div>
                <div class="sing hen">
                    <span >歌曲</span>
                </div>
                <div class="mv hen">
                    <span>MV</span>
                </div>
                <div class="kong">
                </div>
            </div>
            <router-view></router-view>
        </div>
</template>

<script>
    import axios from 'axios';
    // import {Loading} from 'element-ui';
    
    // let option = {
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
        .hen {
            &:hover{
                
                border-bottom: 2px solid rgb(49, 3, 255);
            }
        }
        .search{
            width: 100%;
            height: 750px;
            margin-top: 7rem;
            overflow: auto;
            .searchMenu{
                width: 100%;
                height: 2.5rem;
                display: flex;
                text-align: center;
                line-height: 2.5rem;
                // border-bottom: 1px solid red;
                box-sizing: border-box;
                .songer{
                    flex: 1;
                    height: 100%;
                    // border-right: 1px solid red;
                    // border-left: 1px solid red;
                    // border-top: 1px solid red;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                .sing{
                    flex: 1;
                    height: 100%;
                    // border-right: 1px solid red;
                    // border-top: 1px solid red;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                .mv{
                    flex: 1;
                    height: 100%;
                    // border-right: 1px solid red;
                    // border-top: 1px solid red;
                    box-sizing: border-box;
                    cursor: pointer;
                }
                .kong{
                    flex: 7;
                    height: 100%;
                }
            }
        }
</style>