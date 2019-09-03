<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>    
    <app-home :juices="juices"></app-home>
  </div>
</template>

<script>
import navBar from '@/components/NavBar.vue'
import Home from '@/components/Home.vue'

export default {
  data: () => {
    return {
      juices: []
    }
  },
  components: {
    "app-nav-bar": navBar,
    "app-home": Home
  }
}
</script>

<style>

</style>
