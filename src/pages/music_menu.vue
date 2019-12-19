<template>
    <div class="music_menu">
        <ul class="music_lists">
            <li v-for="item in music_xinxi" :key="item.id" class="music_list">
                <div class="dan_music">
                    <div class=" music_img">
                        <img src="../image/play.jpg" :id="item.id" @click="get_List_Id">
                    </div>
                    <div class="music_name">
                        <p>{{item.name}}</p>
                    </div>
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
            this.musicId();
        },
        methods: {
            musicId(){
                let listId = this.$store.getters.seeId;
                axios.get(`/playlist/detail?id=${listId}`).then(res => {
                    let music_list = res.data.playlist.tracks;
                    this.music_xinxi = music_list.map(item => {
                        return {
                            id:item.id, name:item.name, url: item['al'].picUrl
                        }
                    });
                });
            },
            get_List_Id(e){
                let listId = e.target.id;
                let music_url = this.music_xinxi.find(item => item.id == listId).url;
                let music_title = this.music_xinxi.find(item => item.id == listId).name;
                this.$store.commit("change_music_photo",music_url);
                this.$store.commit("change_music_title",music_title);
                // console.log(this.$store.getters.music_music_photo_view);
                // console.log(music_url);
                axios.get(`/song/url?id=${listId}`).then(res => {
                //     // console.log(res.data);
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
                /*vertical-align: top;*/
                /*height: 25px;*/
                .dan_music{
                    display: flex;
                    .music_img{
                        /*margin-left: 2rem;*/
                        overflow: hidden;
                        /*box-sizing: border-box;*/
                        flex: 0.5;
                        vertical-align: top;
                        img {
                            display: block;
                            height: 25px;
                            border-radius: 50%;
                            cursor: pointer;
                        }
                    }
                    .music_name{
                        cursor: pointer;
                        flex: 4;
                        p{
                            display: inline-block;
                            &:hover {
                                color: pink;
                                text-decoration: underline;
                            }
                        }

                    }
                }
            }
        }
    }
</style>