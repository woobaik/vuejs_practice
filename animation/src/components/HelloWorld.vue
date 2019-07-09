<template>
  <div class="container">
      <a class="button is-primary is-outlined" @click="visible = !visible">Outlined</a>
      <br> </br> 
      <transition name="fade">
        <div class="notification" v-if="visible">
          This container is <strong>centered</strong> on desktop.
      </div>
      </transition>
      <transition name="slide">
          <div class="notification" v-if="visible">
            This container is <strong>centered</strong> on desktop.
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
