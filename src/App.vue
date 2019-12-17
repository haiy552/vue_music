<template>
  <div id="app">
    <router-view></router-view>
    <play></play>
    <img src="./image/0.gif" alt="" class="pig_left">
    <img src="./image/0.gif" alt="" class="pig_right">
  </div>
</template>
<script>
  // @ is an alias to /src

  import play from './components/play'
  export default {
    name: 'app',
    components: {
     play
    },
  }
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: #f44336;
}
  #app {
    max-width: 1080px;
    max-height: 950px;
    min-width: 800px;
    /*overflow: hidden;*/
    margin: 0 auto;
    /*border: 2px solid red;*/
    position: relative;
    .pig_left,
    .pig_right{
      width: 200px;
      display: block;
      position: absolute;
      bottom: 10px;
      animation:bottom_top 5s linear infinite;
    }
    .pig_left{
      left: -300px;
    }
    .pig_right{
      right:-300px;
    }
  }

@keyframes bottom_top
{
  0%   {bottom:10px;}
  25%  {bottom:100px;}
  50%  {bottom:200px;}
  75%  {bottom:100px;}
  100% {bottom:10px;}
}

</style>
