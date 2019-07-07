<template>
    <article class="message">
    <div class="message-header">
        <p>New Quote</p>
    </div>
    <div class="message-body">
        <form>
            <textarea class="textarea quote-add-button" placeholder="Add a new Quote" rows="10"></textarea>
        <div class="column is-2 is-offset-10">
            <button class="button is-primary add-button has-text-centered">Add Button</button>
        </div>
        </form>
        
    </div>
    </article>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .add-button {
        margin-top: 10px;
    }
</style>
