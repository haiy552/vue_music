<template>
   <div class="lyric_box">
       <ul>
            <li v-for="item in music_lyric" :key="item.index"  class="lyric">
                {{item}}
            </li>
            <!-- <li v-else-if="music_lyric =='没有歌词'"  class="lyric">{{music_lyric}}</li> -->
       </ul>
   </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "lyric_com",
        data() {
            return{
                music_lyric:''
            }
        },
        created() {
            this.lyric_init()
        },
        methods: {
            lyric_init(){
                let music_id = this.$route.query.id;
                axios.get(`/lyric?id=${music_id}`)
                .then(res => {
                    let items = Object.entries(res.data);
                    for( let item of items){
                        if(item[0] === "lrc"){
                            // this.music_lyric = res.data.lrc.lyric
                            this.music_lyric =this.put_lyric(res.data.lrc.lyric);
                        }else if(item[0] === "nolyric"){
                            this.music_lyric = "没有歌词"
                        }
                    }
                }) 
            },
            put_lyric(lyric){
                let req = /[\u4e00-\u9fa5A-Za-z\s\t]+/g;
                let lyric_list = lyric.match(req);
                return lyric_list
                // this.this.music_lyric = lyric_list
                // console.log(lyric_list);
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../common/css/common.css';
    .lyric_box {
        width: 100%;
        text-align: center;
        height: 30rem;
        overflow: auto;
        // border-right: 2px solid red;
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
    }
</style>