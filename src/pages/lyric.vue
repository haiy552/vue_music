<template>
   <div class="music_lyric">
       <music_logo class="music_logo"></music_logo>
       <ryric_com class="lyric"></ryric_com>
   </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    import ryric_com from "../components/lyric_com"
    import music_logo from "../components/music_logo"
    
    export default {
        name: "lyric",
        components: {
            ryric_com,
            music_logo
        }
        
    }
</script>

<style scoped lang="scss">
    .music_lyric {
        display: flex;
        .music_logo{
            flex: 1
        }
        .lyric {
            flex: 1
        }
    }
</style>