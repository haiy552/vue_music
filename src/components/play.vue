<template>
    <div>
        <i class="play" @click="play">播放</i>
        <audio src=""></audio>
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
        }
    }
</script>

<style scoped lang="scss">
    div{
        margin-top: 0.5rem;
        width: 100%;
        height: 70px;
        background-color: #333;
        position: fixed;
        bottom: 0;
        left: 0;
        .play {
            position: absolute;
            bottom: 1.5rem;
            left: 6rem;
            cursor: pointer;
        }
    }
</style>