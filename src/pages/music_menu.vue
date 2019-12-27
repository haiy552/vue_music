<template>
        <div class="music_menu">
            
            <ul class="music_lists">
                <!-- 歌曲列表 -->
                <li v-for="(item, index) in music_xinxi" :key="item.id" class="music_list" >
                    <div class="dan_music">
                        <!-- 序号 -->
                        <span class="order">{{index + 1}}</span>
                        <!-- 播放图片 -->
                        <div class=" music_img">
                            <!-- 点击此图片播放音乐 -->
                            <img src="../image/play.jpg" :id="item.id" @click="get_List_Id">
                        </div>
                        <!-- 歌曲名 -->
                        <div class="music_name">
                            <router-link :to="{path: 'lyric',query:{id: item.id}}" tap="a">
                                <p>{{item.name}}</p>
                            </router-link>
                        </div>
                        <!-- 歌曲总时间 -->
                        <div class="music_time" >
                            <span>{{item.music_time}}</span>
                        </div>
                        <!-- 歌手 -->
                        <span class="list_music_songer">{{item.songer}}</span>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "music_menu",
        data(){
            return {
                //歌曲信息, 里面存放歌曲id、歌曲名、歌手、专辑图片url
                music_xinxi: {},
            }
        },
        created() {
            //在刷新网页后加载此方法
            this.create_music_list();

        },
        update () {
                
        },
        components:{
            
        },
        methods: {
            //通过url里的id，get请求后获取歌曲信息
            create_music_list(){
                let listId = this.$route.query.id;
                axios.get(`/playlist/detail?id=${listId}`).then(res => {
                    let music_list = res.data.playlist.tracks;
                    this.music_xinxi = music_list.map(item => {
                        return {
                            id:item.id, name:item.name, url: item['al'].picUrl, songer: item['ar'][0].name, music_time: this.clean_time(item.dt)
                        }
                    });
                });
            },
            // 获取img绑定的歌曲id、图片、名字，改变play里面的图片和歌曲url
            get_List_Id(e){
                //把之前的url取消
                this.$store.commit("change_music_scr","");
                let listId = Number(e.target.id);
                this.$store.commit("change_music_id", listId);
                //获取当前数组
                let music_list = this.music_xinxi.find(item => item.id === listId);
                //获取当前歌曲总时间
                let music_time = music_list.music_time;
                //获取歌曲url，歌曲名和歌手
                let [music_url, music_title] = [music_list.url, `${music_list.name}~(❤ ω ❤)~${music_list.songer}`];
                //在store中存放url
                this.$store.commit("change_music_photo",music_url);
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
            //歌曲时间整理，只针对1小时以内的
            clean_time(time) {
               let min = Math.floor(time / (1000*60));
               min = min >= 10 ? min : `0${min}`;
               let sec = Math.floor((time /1000) %60);
               sec = sec >= 10 ? sec : `0${sec}`;
               return `${min}:${sec}`
            },
            timer(){
                
            }
        }
    }
</script>

<style scoped lang="scss">
    .left {
        float:left
    }
    
    .music_menu{
        width: 100%;
        height: 750px;
        margin-top: 3.5rem;
        border-right: 2px solid red;
        overflow: auto;
        box-sizing: border-box;
        margin-top: 7rem;
        &::-webkit-scrollbar {
            width: 5px;
            height: 1px;
        }
        /*滚动条滑块*/
        &::-webkit-scrollbar-thumb {
            border-radius: 2.5px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: #717273;
        }
        .music_lists{
            display: flex;
            flex-direction: column;
            height: 25px;
            .music_list{
                flex: 1;
                padding: 0.5rem 0 0.5rem 0;
                line-height: 27px;
                /*vertical-align: top;*/
                /*height: 25px;*/
                .dan_music{
                    display: flex;
                    .order {
                        flex: 0.3;
                        height: 100%;
                    }
                    .music_img{
                        /*margin-left: 2rem;*/
                        overflow: hidden;
                        /*box-sizing: border-box;*/
                        flex: 0.3;
                        height: 100%;
                        img {
                            height: 25px;
                            border-radius: 50%;
                            cursor: pointer;
                            -webkit-box-shadow: inset 5px 5px 5px rgba(0,0,0,0.5);
                        }
                    }
                    .music_name{
                        cursor: pointer;
                        flex: 2.5;
                        height: 100%;
                        text-wrap: none;
                        overflow: hidden;
                        a{
                            color:#000000;
                            text-decoration: none;
                            p{
                                display: block;
                                height: 100%;
                                &:hover {
                                    color: pink;
                                }
                            }
                        }
                    }
                    .music_time{
                        // cursor: pointer;
                        flex: 2;
                    }
                    .list_music_songer {
                        display: block;
                        flex: 2;
                    }

                }
            }
        }
    }
</style>