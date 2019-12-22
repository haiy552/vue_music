<template>
    <div class="box">
        <h4>华语</h4>
            <ul>
                <li v-for="item in img_list" :key="item.index" >
                    <router-link :to="{path: 'music_menu',query:{id: $store.getters.seeId}}">
                        <img :src="item.coverImgUrl"  :list_Id="item.id"  alt='' @click="get_List_Id">
                    </router-link>
                    <span style="color:#403636">{{item.name}}</span>
                </li>
            </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';

    export default {
        name: "music_list",
        data(){
            return{
                img_list: [],
                music_id: ''
            }
        },
        created(){
            this.get_Music_List()
        },
        methods:{
            get_Music_List(){
                axios.get('/top/playlist?limit=56&cat:cat:华语&order=hot').then(res => {
                    this.img_list = res.data.playlists;
                    // console.log(this.img_list);
                });
                // console.log(this.$router)
            },
            // 通过歌单的id,请求歌单数据获取歌名和歌的id，然后通过歌的id获取歌的地址
            get_List_Id(e){
                let listId = Number(e.target.attributes.list_id.value);
                // console.log(id);
                this.$store.commit("getListId", listId);

            }
        }
    }
</script>

<style scoped lang="scss">
    .box{
        //框架尺寸定型
        width: 100%;
        height: 550px;
        overflow: auto;
        margin-top: 1rem;
        border-right: 2px solid red;
        border-bottom: 0;
        border-top: 0;
        box-sizing: border-box;
        /*滚动条整体样式*/
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