<template>
  <div class="menu_list">
    <select class="menu_list_se flex">
        <option value="volvo">华语</option>
        <option value="volvo">粤语</option>
        <option value="saab">欧美</option>
        <option value="mercedes">日本</option>
        <option value="audi">韩国</option>
    </select>
    <h4 class="rank flex">排行榜</h4>
    <h4 class="singer flex">歌手</h4>
  </div>
</template>
<script>
 export default {
    name: 'menu_list',
    components: {
     
    },

  }
</script>

<style scoped lang="scss">
    @import '../common/css/common.css';
    .menu_list{
        widows: 100%;
        height: 2rem;
        line-height: 2rem;
        display: flex;
        text-align: center;
    }
    .menu_list_se{
        width: 100%;
        height: 100%;
        background-color: red;
        border-radius: 0.5rem;
    }
    

</style>