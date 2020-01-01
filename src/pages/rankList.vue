<template>
 
       <div class="rankList">
            排行榜
       </div>
   
</template>

<script>
    import { Loading } from 'element-ui';
    let options = {
        background: "rgba(0,0,0,0.2)"
    };
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    
    export default {
        name: "rankList",
        components: {
            
           
        },
        created(){
            this.getRankList();
        },
        methods:{
            getRankList(){
                let loadingInstance = Loading.service(options);
                axios.get("/top/list?idx=6").
                then(res=> console.log(res));
                loadingInstance.close();
            }
        } 
        
    }
</script>

<style scoped lang="scss">
    .rankList{
        width: 100%;
        height: 750px;
        background-color: pink;
    }
    
</style>