<template>
  <div id="app">
    <app-navBar :users="users"></app-navBar>
     <router-view></router-view>
  </div>
</template>

<script>
import navBar from '@/components/NavBar.vue'
export default {
  name: 'app',
  data: function() {
    return {
      users: [1,2,3,4,5]
    }
  },
  components: { 
    'app-navBar': navBar
  }
}
</script>

<style>

</style>
