<template>
    <div class="songerBox scorrbar">
            
                <li class="songerList" v-for="item in songerList" :key="item.Id">
                    
                    <img class="songerImg1" :src="item.picUrl" @click="get_List_Id(item.id)">
                   
                    <span class="songerName">{{item.name}}</span>
                </li>
    </div>
</template>

<script>
    import { Loading } from 'element-ui';
    let options = {
        background: "rgba(0,0,0,0.2)"
    };
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    // import { mapGetters } from 'vuex';
    export default {
        name: "songer",
        data(){
            return{
               songerList: {
                         
                }
            }
        },
        created(){
            this.getSongerList();
        },
        methods:{
            getSongerList(){
                let loadingInstance = Loading.service(options);
                axios.get("/top/artists?limit=56").
                then(res=> {
                // console.log(res);
                let arr = res.data.artists;
                // console.log(arr);
                this.songerList = arr;
                })
                loadingInstance.close();
            },
            get_List_Id(id){
                this.$router.push({
                    path:`/rankList?id=${id}`
                })
                this.$store.commit("getListId", id);
            },
        }
        
    }
</script>
<style scoped lang="scss">
@import '../common/css/common.scss';
   .songerBox{
       width: 100%;
        height: 450px;
        overflow: auto;
        margin-top: 1rem;
        border-right: 2px solid red;
        border-bottom: 0;
        border-top: 0;
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        .songerList{
            flex:1;
            width:25%;
            height: 9rem;
            display:flex;
            flex-direction: column;
            align-items: center;
            padding: 0.5rem;
            padding-top: 0.5rem;
            
            .songerImg1{
                // width: 100%;
                width:8rem;
                height: 7rem;
                display: block;
                padding: 0;
                cursor: pointer;
                border-radius: 1rem;
                box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.3);
                background-image: url("../image/play.jpg");
                background-size: cover;
                &:hover{
                    // box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.3);
                    transition: 0.2s;
                    transform: translateY(-8px);
                }
            }
            .songerName{
                flex: 1;
                // width: 100%;
                // height: 100%;
                line-height: 2rem;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
            
        }

   }

</style>