<template>
    <div class="music_menu">
        <ul class="music_lists">
            <li v-for="(item, index) in music_xinxi" :key="item.id" class="music_list">
                <div class="dan_music">
                    <span class="order">{{index + 1}}</span>
                    <div class=" music_img">
                        <img src="../image/play.jpg" :id="item.id" @click="get_List_Id">
                    </div>
                    <div class="music_name">
                        <p>{{item.name}}</p>
                    </div>
                    <span class="list_music_songer">{{item.songer}}</span>
                </div>
            </li>
        </ul>
<!--        {{this.$store.state.music_scr}}-->
    </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "music_menu",
        data(){
            return {
                music_xinxi: {},
                // photo_src: {}
            }
        },
        created() {
            // console.log(this.$route);
            this.musicId();
        },
        methods: {
            //通过url里的id，get请求后获取歌曲信息
            musicId(){
                let listId = this.$route.query.id;
                axios.get(`/playlist/detail?id=${listId}`).then(res => {
                    console.log(res.data);
                    let music_list = res.data.playlist.tracks;
                    this.music_xinxi = music_list.map(item => {
                        return {
                            id:item.id, name:item.name, url: item['al'].picUrl, songer: item['ar'][0].name
                        }
                    });
                });
            },
            // 获取img绑定的歌曲id、图片、名字，改变play里面的图片和歌曲url
            get_List_Id(e){
                let listId = Number(e.target.id);
                let music_list = this.music_xinxi.find(item => item.id === listId);
                let [music_url, music_title] = [music_list.url, `${music_list.name}=♥♥♥=${music_list.songer}`];
                // let music_title = this.music_xinxi.find(item => {item.id === listId ).name;
                this.$store.commit("change_music_photo",music_url);
                this.$store.commit("change_music_title",music_title);

                axios.get(`/song/url?id=${listId}`).then(res => {
                   let music_url = res.data.data[0].url;
                   this.$store.commit("change_music_scr",music_url);

                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .left {
        float:left
    }
    .cir {

    }
    .music_menu{
        width: 100%;
        height: 700px;
        margin-top: 10rem;
        border-right: 2px solid red;
        overflow: auto;
        box-sizing: border-box;
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
            .music_list{
                flex: 1;
                padding: 0.5rem 0 0.5rem 0;
                line-height: 27px;
                /*vertical-align: top;*/
                /*height: 25px;*/
                .dan_music{
                    display: flex;
                    .order {
                        flex: 0.2;
                        height: 100%;
                    }
                    .music_img{
                        /*margin-left: 2rem;*/
                        overflow: hidden;
                        /*box-sizing: border-box;*/
                        flex: 0.3;
                        height: 100%;
                        img {
                            /*float: right;*/
                            /*margin-right: 3rem;*/
                            height: 25px;
                            border-radius: 50%;
                            cursor: pointer;
                        }
                    }
                    .music_name{
                        cursor: pointer;
                        flex: 3;
                        p{
                            display: block;
                            height: 100%;
                            /*vertical-align: middle;*/
                            &:hover {
                                color: pink;
                                text-decoration: underline;
                            }
                        }
                    }
                    .list_music_songer {
                        display: block;
                        flex: 1;
                    }
                }
            }
        }
    }
</style>