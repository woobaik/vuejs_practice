<template>
    <div class="container is-widescreen quote-grid">
        <app-quote></app-quote>        
    </div>
</template>

<script>
    import quote from '../components/Quote.vue'

    export default {
        components: {
            appQuote: quote
        }
    }
</script>


<style scoped>
    .quote-grid{
        padding-top: 30px;
    }
</style>
