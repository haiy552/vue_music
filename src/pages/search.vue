<template>
         <div class="searchBox">  
            <!-- <ul class="music_lists scorrbar"> -->
                <!-- 歌曲列表 -->
            <div class="music_menu scorrbar" ref="menu" @click="getScollHeight">
                <li v-for="(item, index) in singList" :key="item.id" class="music_list yingyin"  >
                    <div class="index">
                    <!-- 序号 -->
                        <span>{{index + 1}}</span>
                    <!-- 播放图片 -->
                    </div>
                    <div class="music_img" >
                        <!-- 点击此图片播放音乐 -->
                        <img class="music_img1" src="../image/play.jpg" :id="item.id" @click="get_List_Id">
                    </div>
                    <!-- 歌曲名 -->
                    <div class="music_name">
                        <!-- <router-link :to="{path: 'lyric',query:{id: item.id}}" > -->
                            <p class="shenLue" @click="getListId(item.id)">{{item.name}}</p>
                        <!-- </router-link> -->
                    </div>
                    <!-- 歌曲总时间 -->
                    <div class="music_time" >
                        <p class="shenLue" >{{item.music_time}}</p>
                    </div>
                    <!-- 歌手 -->
                    <div class="list_music_songer">
                        <span >{{item.songer}}</span>
                    </div>
                </li>
            </div>
             
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
                // word: this.$route.query.keywords,
                count: '',
                singList:[],
                scollHeight:'',
                num: 30,
                page: 1
                
            }
        },
        beforeMount() {
            
            this.getRankList()
            
            
        },
        mounted() {
            
           
        },
        components:{
            
        },
        methods: {
           getRankList(page = 1){
                // let loadingInstance = Loading.service(options);
                axios.get(`/search?keywords=${this.$route.query.keywords}&limit=${this.num*page}`).
                then(res=> {
                    let arr = res.data.result;
                    // console.log(arr);
                    // console.log(arr['songs']);
                    this.count = arr.songCount;
                    this.singList = arr.songs.map(item => {
                        return {
                            id: item.id, name: item.name, music_time: this.clean_time(item.duration), songer: item.artists[0].name 
                        }
                    })
                   
                })
                
                
            },
            get_List_Id(e){
                //把之前的url取消
                this.$store.commit("change_music_scr","");
                let listId = Number(e.target.id);
                // console.log(listId);
                this.$store.commit("change_music_id", listId);
                //获取当前数组
                let music_list = this.singList.find(item => item.id === listId);
                //获取当前歌曲总时间
                let music_time = music_list.music_time;
                //获取歌曲url，歌曲名和歌手
                let [music_title] = [ `${music_list.name}~(❤ ω ❤)~${music_list.songer}`];
                //在store中存放url
                // this.$store.commit("change_music_photo",music_url);
                //在store中存放歌曲名和歌手
                this.$store.commit("change_music_title",music_title);
                //通过歌曲id获取mp3的url
                axios.get(`/song/url?id=${listId}`).then(res => {
                   let music_url = res.data.data[0].url;
                //存放mp3 url
                   this.$store.commit("change_music_scr",music_url);
                })
                //存放歌曲总时间
                this.$store.commit("change_music_time", music_time);
                this.$store.commit("change_music_play", true);
                
            },
            clean_time(time) {
               let min = Math.floor(time / (1000*60));
               min = min >= 10 ? min : `0${min}`;
               let sec = Math.floor((time /1000) %60);
               sec = sec >= 10 ? sec : `0${sec}`;
               return `${min}:${sec}`
            },
            getListId(id){
                this.$router.push({
                    path:`/lyric?id=${id}`
                })
                this.$store.commit("getListId", id);
            },
            scrollFuc() {
                // let [mSH, mCH, mST] = [this.$refs.menu.scrollHeight,this.$refs.menu.clientHeight,this.$refs.menu.scrollTop];
            //    let flag = this.$refs.menu.scrollHeight - this.$refs.menu.clientHeight - this.$refs.menu.scrollTo <= 50;
               let c = this.$refs.menu.clientHeight;
               if(this.h - this.t - c <= 50){
                   console.log(1);
                   this.page++;
                   this.getRankList(this.page)
               }
            //    return flag ?  this.page++ : ""
            },
            getScollHeight(){
                console.dir(this.$refs.menu);
                console.log(this.$refs.menu.scrollHeight,this.$refs.menu.clientHeight,this.$refs.menu.scrollTop)

            }
           
        },
        computed:{
            allNum(){
              return Math.ceil(this.count/this.num)
            },
            // ready(){
            // return this.scrollFuc(this.flag);
            // },
            
            h(){
                return this.$refs.menu.scrollHeight
            },
            Height(){
              return  this.$refs.menu.addEventListener("scroll", this.scrollFuc, true);
            }
            
        },
        watch:{
            // singList(){
            //     this.getRankList()  
            // },
            // scollHeight:function(){
            //     console.log(1);
            //     return this.$refs.menu.scrollTop
            // }
            scollHeight(){
                 this.$refs.menu.scrollTop
            },
            
        }
     
    }
</script>

<style scoped lang="scss">
     @import '../common/css/common.scss';
     
    .searchBox{
        width: 100%;
        height: 770px;
        position: relative;
        .music_menu{
            width: 100%;
            height: 700px;
            // margin-top: 7rem;
            overflow: auto;
            box-sizing: border-box;
            border-right: 2px solid red;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;

            .music_list{
                flex: 1;
                flex-shrink:1;
                display: flex;
                width: 100%;
                // height: 50%;
                // justify-content: flex-start;
                align-items: center;
                padding: 0.5rem 0;
                .index{
                    flex: 0.2;
                    text-align: center;
                }
                .music_img{
                    flex: 0.2;
                    width: 100%;
                    height: 1.5rem;
                    display: flex;
                    text-align: center;
                    .music_img1{
                        // width: 25%;
                        height: 100%;
                        display: block;
                        border-radius: 50%;
                        cursor: pointer;
                        // height: 100%;
                    }
                }
                .music_name{
                    flex: 1.5;
                    height: 100%;
                    width: 60%;
                    -webkit-align-items: center;
                    align-items: center;
                    display: flex;
                    .shenLue{
                        cursor: pointer;
                    }
                }
                .music_time{
                    flex: 1.5;
                }
                .list_music_songer{
                    flex: 1.5;
                    
                }
            }
        }
        .num{
            position: absolute;
            overflow: hidden;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 50%;
            height: 4rem;
            display: flex;
            align-items: center;
            text-align: center;
            .num1{
                flex: 1;
                span{
                    display: block;
                    width: 2rem;
                    height: 2rem;
                    line-height: 2rem;
                    background-color: #fff;
                    margin: 0 auto;
                    cursor: pointer;
                }
                
                
            }
        }
    }
</style>