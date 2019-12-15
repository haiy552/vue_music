<template>
  <div id="app">
<home></home>
<!--    <v-about></v-about>-->
  </div>
</template>
<script>
  // @ is an alias to /src

import home from"./pages/home"
  export default {
    name: 'app',

    components: {
      home
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
    margin: auto;
    /*border: 2px solid red;*/
  }


</style>
