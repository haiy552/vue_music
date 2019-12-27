<template>
  <div id="app">
    <title_logo></title_logo>
    <router-view></router-view>
    <play></play>
<!--    <img src="./image/0.gif" alt="" class="pig_left">-->
<!--    <img src="./image/0.gif" alt="" class="pig_right">-->
  </div>
</template>
<script>
  // @ is an alias to /src

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
  background-color: #112025;
  background-image: url("image/background1.jpg");
  background-size: cover;
  background-repeat:no-repeat;
}
  #app {
    max-width: 1080px;
    max-height: 950px;
    min-width: 800px;
    margin: 0 auto;
    // position: relative;
  
  }


</style>
