<template>
    <div class="bottom_box">
        <div class="music_play_box">
             <div class="music_play">
                 <span class="iconfont icon-shangyishou music_pre" ></span>
                 <span class="iconfont icon-bofang1 music_playing" ></span>
                 <span class="iconfont icon-xiayishou music_next" ></span>
             </div>
             <div class="music_log">
                 <img src="../image/play.jpg" alt="" class="songer_photo">
                 <div class="music_jindu">
                     <span class="music_title">歌名</span>
                     <div class="music_line"></div>
                 </div>

             </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "play",

        methods: {
            play(){
            }
        },
        components: {
        },
        created(){
            // this.videoUpload.music.url = this.$store.getters.music_scr_view
        }

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

                    border-radius: 50%;
                    margin: 0.5rem;
                    margin-top: 0.6rem;
                }
                .music_jindu{
                    position: relative;
                    flex: 3;
                     .music_title {
                         /*margin-left: 2rem;*/
                         display: block;
                         position: absolute;
                         bottom: 3rem;
                         /*margin-top: 1rem;*/
                     }
                     .music_line {
                         height: 0.1rem;
                         width: 50rem;
                         background:#7e8c8d;
                         /*border-radius: 0.05rem;*/
                         position: absolute;
                         bottom: 50%;
                         transform: translateY(50%);
                     }
                }
            }
        }

    }
</style>