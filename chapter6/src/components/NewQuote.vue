<template>
    <article class="message">
        <div class="message-header">
            <p>New Quote</p>
        </div>
        <div class="message-body">
        <form>
            <textarea class="textarea quote-add-button" 
                    placeholder="Add a new Quote" 
                    rows="5" 
                    v-model="message"
                    
                    @keyup.enter.exact="addNewQuote"></textarea>
            <div class="column">
                <button class="button is-primary is-normal add-button" 
                    @click.prevent="addNewQuote" >
                        Add Button
                </button>
            </div>
        </form>
            
        </div>
    </article>
</template>

<script>
    export default {
        data: function() {
            return {
                message: ''
            }
        },
        methods: {
            addNewQuote: function() {
                this.$emit('newQuoteUpdated', this.message)
                this.message = ''
            }
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-button {
        margin-top: 10px;
    }
</style>
