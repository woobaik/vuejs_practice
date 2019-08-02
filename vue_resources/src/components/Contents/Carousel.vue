<template>
    <div class="">
        <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" :autoplayHoverPause="true" class="carousel">
            <slide v-for="(slide,idx) in slides" :key="idx" class="slide-img" :style="{ backgroundImage: `url( ${ slide.backgroundImg } )`}">
                <div class="carousel-text">
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
        background-position: top left;
        background-size: 100%;
        height: 700px;
        
        
    }

    .carousel-text {
    position: relative;
    left: 131px;
    top: 92px;
    line-height: 18px;
    font-weight: 900;
    letter-spacing: 2.54px;
    font-size: 29px;
    color: white;
    }

</style>