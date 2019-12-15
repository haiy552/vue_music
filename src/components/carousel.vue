<template>
    <div class="carousel">
        <el-carousel  :interval="4000" type="card" height="220px" >
            <el-carousel-item class="yd" v-for="item in mag" :key="item.index" >
                <img :src="item.imageUrl" alt="">
            </el-carousel-item>
        </el-carousel>

    </div>
</template>

<script>

    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "home",
        data(){return{
            mag: null,
        }},
        mounted(){
            this.crDoubai();
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

<style scoped>
    .carousel {
        margin-top: 1rem;
    }

    .el-carousel__item img {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;

    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    img {
        width: 100%;
        height: 100%;
    }
</style>