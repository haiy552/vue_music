<template>
   <div class="lyric_box scorrbar">
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
    @import '../common/css/common.scss';
    .lyric_box {
        width: 100%;
        text-align: center;
        height: 30rem;
        overflow: auto;
        box-sizing: border-box;
       
    }
</style>