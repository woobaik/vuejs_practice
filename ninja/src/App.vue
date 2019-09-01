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
      juices: [
        {
          id: 1,
          name: 'Orange Party',
          ingredients: ['orange', 'walnut', 'banana', 'milk']
        }, 
        {
          id: 2,
          name: 'Strawberry hell',
          ingredients: ['Strawberry', 'blueberry', 'blackberry', 'milk']
        }
      ]
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
