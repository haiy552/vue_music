<template>
    <div class="box">
        <h4>华语</h4>
            <ul>
                <li v-for="item in img_list" :key="item.index" >
                    <img :src="item.coverImgUrl" :id="item.id" alt="">
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
            }
        },
        created(){
            this.get_Music_List()
        },
        methods:{
            get_Music_List(){
                axios.get('/top/playlist?limit=40&cat:cat:华语&order=hot').then(res => {
                    this.img_list = res.data.playlists;
                    // console.log(this.img_list);
                });
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
        border: 2px solid red;
        border-bottom: 0;
        border-top: 0;
        box-sizing: border-box;
        /*滚动条整体样式*/
        &::-webkit-scrollbar {
            width: 10px;
            height: 1px;
        }
        /*滚动条滑块*/
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
            background: #717273;
        }
        /*滚动条轨道*/
        &::-webkit-scrollbar-track {
            -webkit-box-shadow: inset 0 0 1px rgba(0,0,0,0);
            border-radius: 10px;
            background: #ccc;
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
                flex: 2px;
                padding: 0.5rem;
                vertical-align: top;
                img {
                    width: 7rem;
                    cursor: pointer;
                }
            }
        }

    }

</style>