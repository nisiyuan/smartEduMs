<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family:PingFangSC-Semibold, 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
html,body{
  height: 100%;
  width: 100%;
}
*{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style: none;
}
</style>
