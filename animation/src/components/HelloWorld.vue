<template>
  <div class="container">
      <a class="button is-primary is-outlined" @click="visible = !visible">Outlined</a>
      <br> </br> 
      <transition name="fade">
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
</style>
