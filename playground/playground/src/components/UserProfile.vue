<template>
  <div class="profile">
      why
      {{ user_id }}
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            user_id: this.$route.params.user_id
        }
    },
    methods: {
        updateId() {
            this.user_id = this.$route.params.user_id
        }
    },
    watch: {
        $route: 'updateId'
    }
}
</script>

<style>

</style>