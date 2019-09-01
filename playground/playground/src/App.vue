<template>
  <div id="app">
    <app-navBar></app-navBar>
     <router-view></router-view>
  </div>
</template>

<script>
import navBar from '@/components/NavBar.vue'
export default {
  name: 'app',
  components: { 
    'app-navBar': navBar
  }
}
</script>

<style>

</style>
