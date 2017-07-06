<template>
  <div id="app">
  <div class="container">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Roboto','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  margin-left: 2.5rem;
  margin-right: 0rem;
  max-width: auto;
}
</style>
