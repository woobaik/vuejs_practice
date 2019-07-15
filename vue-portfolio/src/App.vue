<template>
  <div id="app">
    <app-header></app-header>
    <app-home></app-home>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    appHome: Home,
    appHeader: Header
  }
}
</script>

<style>
#app {
  
}
</style>
