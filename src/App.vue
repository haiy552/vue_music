<template>
  <div id="app">
    <title_logo></title_logo>
    <router-view class="hight"></router-view>
    <play></play>
<!--    <img src="./image/0.gif" alt="" class="pig_left">-->
<!--    <img src="./image/0.gif" alt="" class="pig_right">-->
  </div>
</template>
<script>


  import play from './components/play'
  import title_logo from './components/title_logo'
  export default {
    name: 'app',
    components: {
     play,
     title_logo
    },
  }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  width: 100%;
  height: 90vh;
  // background:linear-gradient(#fff1eb,#ace0f9,#243949,#517fa4);
  background:linear-gradient(#fff1eb,#ace0f9);
  opacity:0.9;
  // background-image: url("image/background1.jpg");
  background-size: cover;
  background-repeat:no-repeat;
}
  #app {
    max-width: 1080px;
    height: 100%;
    min-width: 800px;
    margin: 0 auto;
    // position: relative;
  
  }
  .hight{
    margin-top: 7rem;
    height: 750px;
  }


</style>
