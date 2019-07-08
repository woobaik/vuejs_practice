<template>
    <div class="box is-widescreen quote-grid">
        <newQuote @newQuoteUpdated="addNewQUote"></newQuote>
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
                quotes: ['tonight is the night', 'MONKEY PATCHING!', 'Turn on the computer, future is there.',
                        "Let's see if we can append"]
            }
        },
        components: {
            appQuote: quote,
            newQuote: newQuote
        },
        methods: {
            addNewQUote: function(quote) {
                console.log(quote)
                this.quotes.push(quote)
            }
        }
    }
</script>


<style scoped>
    .quote-grid{
        padding-top: 30px;
    }

</style>

