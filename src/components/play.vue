<template>
    <div class="bottom_box">
        <div class="music_play_box">
             <div class="music_play">
                 <!-- 上一首 -->
                 <span class="iconfont icon-shangyishou music_pre" ></span>
                 <!-- 播放 -->   
                <span class="iconfont icon-bofang1 music_playing"   @click="play" ref="play"></span>

                 <!-- 下一首 -->
                 <span class="iconfont icon-xiayishou music_next" ></span>
                 <!-- 歌曲url存放 -->
                 <audio :src="this.$store.getters.music_scr_view" autoplay="autoplay" ref="au"></audio>
             </div>
             <div class="music_log">
                 <!-- 专辑图片 -->
                <router-link :to="{path: 'lyric',query:{id: $store.getters.music_id_view}}">
                    <img :src="this.$store.getters.music_photo_view" alt="" class="songer_photo" >
                </router-link>
                 <div class="music_jindu">
                     <!-- 歌名+歌手名 -->
                     <span class="music_title">{{this.$store.getters.music_title_view}}</span>
                     <!-- 歌曲进度条 -->
                     <div class="music_line" ref="music_line" >
                        <!-- {{line_view}} -->
                         <div class="line" :style="{width:line_view+'px'}"></div>
                     </div>
                 </div>
                 <!-- 歌曲时间 -->
                 <span class="music_time" ref="musicTime">{{step_time}}/{{this.$store.getters.music_time_view}}</span>
             </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "play",
            data(){
             return {
                 line_view: '',
                 line_width: null,
                 all_time: '',
                 step: '',
                 step_time: "00:00",
                 falg: this.$store.getters.music_music_play
             }
            },
        methods: {
            clean_time(time) {
               let min = Math.floor(time /60);
               min = min >= 10 ? min : `0${min}`;
               let sec = Math.floor(time % 60);
               sec = sec >= 10 ? sec : `0${sec}`;
               return `${min}:${sec}`
            },
            play(){
                if(this.$store.getters.music_music_play){
                    this.$refs.au.pause();
                    this.$store.commit("change_music_play", false);
                    this.$refs.play.className = "iconfont icon-bofang1 music_playing";
                }else{
                    this.$refs.au.play();
                    this.$store.commit("change_music_play", true);
                    this.$refs.play.className = "iconfont icon-bofang music_playing";
                }
            },
            
        },
        components: {

        },
        mounted(){
            this.$refs.au.addEventListener('canplay', () => {
            [this.line_width, this.all_time] = [this.$refs.music_line.offsetWidth, this.$refs.au.duration];
            this.$refs.play.className = "iconfont icon-bofang music_playing";
            // this.line_view = this.line_width / (this.all_time / this.$refs.au.currentTime);
            })
            this.$refs.au.addEventListener('timeupdate', () => {
                this.step =  this.$refs.au.currentTime;
                this.step_time = this.clean_time(this.step);
                this.line_view = this.line_width / (this.all_time / this.step);
            })
        },
        computed: {

        },
        watch: {
            // all_time: function(){
            //     if(this.line_width){
            //         return this.all_time = this.$refs.au.duration
            //     }
            // },

            // step: function(){
            //     if(this.line_width){
            //         return this.step = this.$refs.au.currentTime
            //     // return this.line_width / (this.all_time / this.step)
            //     }
            // },
            // line_view: function() {
            //     if(this.line_width){
            //         return this.line_view = this.line_width / (this.all_time / this.step) + "px";
            //     }
            // }
        },      
        

    }

</script>

<style scoped lang="scss">
    @import '../common/css/font/iconfont.css';

    .font_size {
        font-size: 2.5rem;
    }
    .bottom_box{
        margin-top: 0.5rem;
        width: 100%;
        height: 70px;
        background-color: #333;
        position: fixed;
        bottom: 0;
        left: 0;
        .music_play_box{
            width: 1080px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            vertical-align: middle;
            .music_play{
                flex: 1;
                text-align: center;
                position: relative;
                .music_pre,
                .music_next{
                    font-size: 2rem;
                    line-height: 70px;
                    position: absolute;
                    cursor: pointer;
                    color: #4cd964;
                }
                .music_pre{
                    left: 0.5rem;
                }
                .music_playing {
                    font-size: 2.5rem;
                    line-height: 70px;
                    position: absolute;
                    color: #4cd964;
                    left: 4.3rem;
                    cursor: pointer;
                }
                .music_next {
                    right: 3rem;
                }
            }
            .music_log{
                flex:4;
                /*vertical-align: middle;*/
                display: flex;
                .songer_photo {
                    display: block;
                    height: 3rem;
                    flex: 0.2;
                    width: 3rem;
                    margin: 0.5rem;
                    margin-top: 0.6rem;
                }
                .music_jindu{
                    position: relative;
                    flex: 3;
                     .music_title {
                         margin-left: 1rem;
                         display: block;
                         position: absolute;
                         bottom: 3rem;
                         color:#DC4C40;
                         /*margin-top: 1rem;*/
                     }
                     .music_line {
                         height: 0.1rem;
                         width: 100%;
                         background:#7e8c8d;
                         /*border-radius: 0.05rem;*/
                         position: absolute;
                         bottom: 50%;
                         transform: translateY(50%);
                         .line {
                             height: 100%;
                            //  width: 12px;
                             position: absolute;
                             background-color: rgb(192, 35, 35);
                         }
                     }
                }
                .music_time {
                    display: block;
                    text-align: center;
                    line-height: 4.5rem;
                    flex: 0.5;
                }
            }
        }

    }
</style>