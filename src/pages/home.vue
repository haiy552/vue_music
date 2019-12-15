<template>
    <div class="bbox">
        <carousel></carousel>
        <music_list></music_list>
        {{this.$store.state.id}}
        <play></play>

    </div>

</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    import music_list from "../components/music_list"
    import play from '../components/play'
    import carousel from '../components/carousel'
    // axios.defaults.timeout = 1000;
    export default {
        name: "home",
        data(){return{
            mag: null,
        }},
        components: {
            'music_list': music_list,
            'play':play,
            carousel
        }
    }
</script>

<style  lang="scss" scoped>
    .bbox{
        width: 100%;
        height: 100%;

    }


</style>