<template>
  <div class="chatArea">
      <form>
          <input type="text" placeholder="Leave a message" class="input-box">
          <button class="btn">Enter</button>
      </form>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            chat: ''
        }
    }
}
</script>

<style>
    .input-box {
       margin-left: 1em !important;
       width: 85% !important;
    }
</style>