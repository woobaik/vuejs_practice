<template>
    <div class="box is-widescreen quote-grid">
        <label for="bar">Progress Bar</label>
        <progress class="progress is-primary" value="50" max="100" name="bar">15%</progress>
        <newQuote @newQuoteUpdated="addNewQUote"></newQuote>
        <div class="columns is-multiline">
            <app-quote v-for="(quote,index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{quote}}</app-quote>
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
                        "Let's see if we can append"],
                maxQuote: 5
            }
        },
        components: {
            appQuote: quote,
            newQuote: newQuote
        },
        methods: {
            addNewQUote: function(quote) {
                if (this.quotes.length > this.maxQuote - 1 ) {
                    alert(`MAXIMUM NUMBER OF QUOTES IS ${this.maxQuote}`)
                } else {
                    this.quotes.push(quote)
                }
                console.log(this.max)
            },
            deleteQuote: function(idx) {
                this.quotes.splice(idx,1)
            }
        }
    }
</script>


<style scoped>
    .quote-grid{
        padding-top: 30px;
    }

</style>

