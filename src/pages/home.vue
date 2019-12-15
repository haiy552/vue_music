<template>
    <div>
        <ul class="borad">
            <li v-for="item in mag" :key="item.index" ><img :src="item.imageUrl" alt=""></li>
        </ul>
        <music_list></music_list>
        <play></play>
    </div>

</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    import music_list from "../components/music_list"
    import play from '../components/play'
    // axios.defaults.timeout = 1000;
    export default {
        name: "home",
        data(){return{
            mag: null,
        }},
        mounted(){
            this.crDoubai();
        },
        components: {
            'music_list': music_list,
            'play':play
        },
        methods:{
            crDoubai(){
                axios.get('/banner').then(res => {
                    this.mag = res.data.banners;
                });
           }
        }
    }
</script>

<style  lang="scss" scoped>
    .borad {
        margin: 0 auto;
        max-width: 810px;
        height: 300px;
        list-style: none;
        overflow: hidden;
        margin-bottom: 0.2rem;

        li {
            float: left;
            img {
                height: 300px;
            }
        }
    }


</style>