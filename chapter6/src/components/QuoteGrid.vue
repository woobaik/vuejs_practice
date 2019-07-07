<template>
    <div class="container is-widescreen quote-grid">
        <newQuote></newQuote>
    </div>
</template>

<script>
    import quote from '../components/Quote.vue'
    import newQuote from '../components/NewQuote.vue'

    export default {
        components: {
            appQuote: quote,
            newQuote: newQuote
        }
    }
</script>


<style scoped>
    .quote-grid{
        padding-top: 30px;
    }
</style>
