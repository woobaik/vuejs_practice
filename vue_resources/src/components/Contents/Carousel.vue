<template>
    <div class="container">
        <carousel :per-page="1" :autoplay="true" :autoplayTimeout="4000" :autoplayHoverPause="true">
            <slide v-for="(slide,idx) in slides" :key="idx" class="slide-img" :style="{ backgroundImage: `url( ${ slide.backgroundImg } )`}">
                <div>
                    {{slide.text}}
                </div>
            </slide>
            
        </carousel>
    </div>    
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
import bgi1 from '../../assets/images/contents/pizza-1.jpg'
import bgi2 from '../../assets/images/contents/pizza-2.jpg'
export default {
    data: function() {
        return {
            slides: [
                {
                    text: '20% OFF ON CARRYOUT ORDER',
                    backgroundImg:  bgi1,
                },
                {
                    text: 'BUY TWO, GET ONE FREE PIZZA',
                    backgroundImg: bgi2
                }
            ]
        }
    },
    components: {
        Carousel,
        Slide
  }
        
}
</script>

<style scoped>
    .slide-img {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        background-size: 100%;
    }

</style>