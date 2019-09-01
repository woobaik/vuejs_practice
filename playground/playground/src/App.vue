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
      users: ['Brother', 'Sister', 'Friend']
    }
  },
  components: { 
    'app-navBar': navBar
  }
}
</script>

<style>

</style>
