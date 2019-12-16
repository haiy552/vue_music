<template>
  <div id="app">
    <router-view></router-view>
    <play></play>
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
    overflow: hidden;
    margin: 0 auto;
    /*border: 2px solid red;*/
  }

</style>
