<template>
    <div class="bbox">  
        <carousel></carousel>
        <menu_list :options="data" :dataName1="dataName" @getMenuValue="getMenu"></menu_list>
        <!-- <music_list></music_list> -->
        <transition mode="out-in">
            <router-view></router-view>
        </transition>
        
    </div>

</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    // import music_list from "../components/music_list"
    import carousel from '../components/carousel'
    import menu_list from '../components/menu_list'

    // axios.defaults.timeout = 1000;
    export default {
        name: "home",
        data(){return{
            // mag: null,
            data:["华语","粤语","欧美","日语","韩语"],
            dataName:"请选择"
        }},
        methods:{
            getMenu(val){
                this.dataName = val
            }
        },
        components: {
            // 'music_list': music_list,
            carousel,
            menu_list
        },
        watch:{
            dataName(dataName){
                this.$store.commit("change_music_style",dataName);
            }
        }
    }   
</script>

<style  lang="scss" scoped>
    .bbox{
        width: 100%;
        height: 100%;
        margin-top: 6rem;
        .width_100{
            width: 100%;
        }
    }
    .v-enter,
    .v-leave-to{
        opacity:0;
        transform: translateX(150px);
    }
    .v-enter-active,
    .v-leave-active{
        transition: all 0.5s ease;
    }

</style>