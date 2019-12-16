<template>
    <div class="bottom_box">
        <vuePlay :music="videoUpload.music"></vuePlay>
    </div>
</template>

<script>
    import vuePlay from "vue-aplayer";
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "play",
        data(){
            return {
                music_url:"",
                videoUpload: {
                    progress: false,
                    progressPercent: 0,
                    successPercent: 0,
                    music: {
                        title: '小艾',
                        author: '',
                        url: '',
                        lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                    }
                },
            }
        },
        methods: {
            play(){
            }
        },
        components: {
            vuePlay
        },
        created(){
            this.videoUpload.music.url = this.$store.getters.music_scr_view
        }

    }

</script>

<style scoped lang="scss">
    .bottom_box{
        margin-top: 0.5rem;
        width: 100%;
        height: 70px;
        /*background-color: #333;*/
        position: fixed;
        bottom: 0;
        left: 0;

    }
</style>