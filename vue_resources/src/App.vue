<template>
  <div id="app">
      <div>
        <app-header></app-header>
      </div>
      <div>
        <app-carousel>

        </app-carousel>
      </div>
      <div>
        <app-footer></app-footer>
      </div>


  </div>
</template>

<script>
import Header from './components/Header-footer/Header.vue';
import Footer from './components/Header-footer/Footer.vue';
import Carousel from './components/Contents/Carousel.vue'
export default {  
  components : {
    appHeader: Header,
    appFooter: Footer,
    appCarousel: Carousel
  }
}
</script>

<style>

</style>
