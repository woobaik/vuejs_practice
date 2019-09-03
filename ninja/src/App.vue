<template>
  <div id="app">
    <app-nav-bar></app-nav-bar>    
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from '@/components/NavBar.vue'


export default {
  data: () => {
    return {
      juices: []
    }
  },
  components: {
    "app-nav-bar": navBar,

  }
}
</script>

<style>

</style>
