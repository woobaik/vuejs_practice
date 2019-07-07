<template>
    <div class="box is-widescreen quote-grid">
        <newQuote></newQuote>
        <div class="columns is-multiline">
            <app-quote v-for="(quote) in quotes" :key="quote">{{quote}}</app-quote>
        </div>
        
    </div>
</template>

<script>
    import newQuote from '../components/NewQuote.vue'
    import quote from '../components/Quote.vue'

    export default {
        data: function() {
            return {
                quotes: [1,2,3,4,5,6]
            }
        },
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
    .card{
        width: 33%;
        display: flex;
        flex-direction: column;
    }
</style>

