<template>
    <div class="box scorrbar">
            <ul>
                <li v-for="item in img_list" :key="item.index" >
                    <router-link :to="{path:'/music_menu',query:{id: $store.getters.seeId}}">
                        <img :src="item.coverImgUrl"  :list_Id="item.id"  alt='' @click="get_List_Id">
                    </router-link>
                    <span style="color:#403636">{{item.name}}</span>
                </li>
            </ul>
    </div>
</template>

<script>
    import { Loading } from 'element-ui';
    let options = {
        background: "rgba(0,0,0,0.2)"
    };
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    // import { mapGetters } from 'vuex';
    export default {
        name: "music_list",
        data(){
            return{
                img_list: [],
                music_id: '',
            }
        },
        created(){
            window.scroll(0, 0);
            this.get_Music_List(this.$store.getters.music_music_style);
        
        },
        
        watch:{
            "$store.getters.music_music_style":function(val){
                this.get_Music_List(val);
            },
            
        },
        methods:{
            get_Music_List(val){
                let loadingInstance = Loading.service(options);
                axios.get(`/top/playlist?limit=56&cat=${val}&order=hot`).then(res => {
                    this.img_list = res.data.playlists;
                });
                loadingInstance.close();
            },
            // 通过歌单的id,请求歌单数据获取歌名和歌的id，然后通过歌的id获取歌的地址
            get_List_Id(e){
                let listId = Number(e.target.attributes.list_id.value);
                this.$store.commit("getListId", listId);
            },
            get_demo(){
                axios.get('/playlist/catlist').then(res => {
                    console.log(res.data)
                });
            },
        }
    }
</script>
<style scoped lang="scss">
    @import '../common/css/common.scss';
    .box{
        //框架尺寸定型
        width: 100%;
        height: 450px;
        overflow: auto;
        margin-top: 1rem;
        border-right: 2px solid red;
        border-bottom: 0;
        border-top: 0;
        box-sizing: border-box;
        /*滚动条整体样式*/
       
        h4 {
            margin-top: 0.2rem;
            margin-left: 1.5rem;
            cursor: pointer;
            border-radius: 0.3rem;
            background-color: cornflowerblue;
            padding: 0.3rem;
            text-align: center;
            width: 6rem;
        }
        ul {
            list-style: none;
            margin: 0 auto;
            width: 97%;
            height: 100%;
            padding: 0.5rem;
            display: flex;
            /*justify-content:space-between;*/
            flex-wrap: wrap;
            li{
                flex: 2;
                padding: 0.5rem;
                vertical-align: top;
                img {
                    width: 7rem;
                    /*display: block;*/
                    cursor: pointer;
                    border-radius: 1rem;
                    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.3);
                    &:hover{
                    // box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.3);
                    transition: 0.2s;
                    transform: translateY(-8px);
                    background-image: url("../image/play.jpg");
                    background-size: cover;
                }
                }
                span{
                    width: 7rem;
                    display: block;
                    box-sizing: border-box;
                }
            }
        }

    }

</style>