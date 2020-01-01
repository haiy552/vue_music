<template>
    <div class="rankBox scorrbar">
            <ul>
                <li class="rank_Small_box" v-for="(item,index) in rankList" :key="item.id">
                    <div class="index">{{index+1}}</div>
                    <div class="rangImage">
                        <router-link to="/rankList"><img class="rangImage1" :src="item.coverImgUrl" alt=""></router-link>
                    </div>
                    <div class="rangTitle">
                        <span class="rangName">{{item.name}}</span>
                        <span class="rangTitle1">{{item.updateFrequency}}</span>
                    </div>
                    <!-- <div class="kongbai"></div> -->
                </li>
            </ul>
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
        name: "rank",
        data(){
            return{
               rankList:[]
            }
        },
        created(){
            this.getRank();
        },
        methods:{
            getRank(){
                let loadingInstance = Loading.service(options);
                axios.get("/toplist").
                then(res=> 
                {
                    console.log(res.data.list);
                this.rankList = res.data.list
                }
                );
                loadingInstance.close();
            }
        }
        
    }
</script>
<style scoped lang="scss">
    @import '../common/css/common.scss';
   .rankBox{
       display: flex;
       flex-direction: column;
       height: 450px;
       overflow: auto;
       margin-top: 1rem;
       border-right: 2px solid red;
       box-sizing: border-box;
       .rank_Small_box{
           flex:1;
           padding: 0.5rem 0;
           height: 4rem;
           display: flex;
           flex-direction: row;
        //    justify-content:center;
            .rangImage{
                flex:2;
                height: 100%;
                text-align: left;
                .rangImage1{
                    height: 100%;
                }
            }
            .rangTitle{
                flex:3;
                // text-align: center;
                display: flex;
                flex-direction: column;
                align-items: left;
                line-height: 2rem;
                .rangName{
                    flex:1;
                }
                .rangTitle1{
                    flex:1;
                }
            }
            .index{
                flex: 0.5;
                text-align: center;
                line-height: 4rem;
            }
       }
   }

</style>