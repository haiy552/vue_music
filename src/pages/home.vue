<template>
    <div class="bbox">  
        <carousel></carousel>
        <menu_list></menu_list>
        <music_list></music_list>
    </div>

</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    import music_list from "../components/music_list"
    import carousel from '../components/carousel'
    import menu_list from '../components/menu_list'

    // axios.defaults.timeout = 1000;
    export default {
        name: "home",
        data(){return{
            mag: null,
        }},
        components: {
            'music_list': music_list,
            carousel,
            menu_list

        }
    }
</script>

<style  lang="scss" scoped>
    .bbox{
        width: 100%;
        height: 100%;
        margin-top: 7rem;
        .width_100{
            width: 100%;
        }
    }


</style>