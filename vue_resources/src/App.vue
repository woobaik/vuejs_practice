<template>
  <div id="app">
      <div>
        <app-header></app-header>
      </div>
      <div>
        
      </div>
      <div>
        <app-footer></app-footer>
      </div>


  </div>
</template>

<script>
import Header from './components/Header-footer/Header.vue';
import Footer from './components/Header-footer/Footer.vue';
export default {  
  components : {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>

<style>

</style>
