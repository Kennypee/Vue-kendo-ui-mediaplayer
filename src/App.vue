<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Mediaplayer/>
  </div>
</template>

<script>
import Mediaplayer from './components/Mediaplayer.vue'
export default {
  name: 'app',
  components: {
    Mediaplayer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
