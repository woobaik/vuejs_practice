<template>
  <div class="container">
      <a class="button is-primary is-outlined" @click="visible = !visible">Outlined</a>
      <br> </br> 
      <transition name="fade" appear>
        <div class="notification" v-if="visible">
          This container is <strong>centered</strong> on desktop.
      </div>
      </transition>
      <transition name="slide" type="animation" appear>
          <div class="notification" v-if="visible">
            This container is <strong>centered</strong> on desktop.
        </div>
      </transition>
      <transition 
        @beforeEnter="beforeEnter"
        @enter="enter"
        @afterEnter="afterEnter"
        @EnterCancelled="enterCancelled"
        appear
        >
          <div class="notification" v-if="visible">
            THIS IS A TEST FOR JAVASCRIPT HOOKS
        </div>
      </transition>
      
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      visible: true
    }
  },
  methods: {
    beforeEnter: function(el) {
      console.log(this)
      
    },
    enter: function(el, done) {
      console.log(`Enter ${el}, ${done()}`)      
    },
    afterEnter: function(el) {
      console.log(`after Enter ${el}`)
    },
    enterCancelled: function(el) {
      console.log(`enter Cancelled ${el}`)
    }
 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s ease-in-out;
  }

  .fade-leave {
    /* opacity: 1; */
  }

  .fade-leave-active {
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }

  .slide-enter {

  }
  .slide-enter-active {
    animation: slide-in 1s ease-in-out forwards
  }
  .slide-leave {
    
  }
  .slide-leave-active {
    animation: slide-out 1s ease-in-out forwards
  }

  @keyframes slide-in {
    from {
      transform: translateY(20px)
    }    
    to {
      transform: translateY(0px)
    }
  }

  @keyframes slide-out {
    from {
      transform: translateY(0px)
    }  
    to {
      transform: translateY(20px)
    }
  }

</style>
