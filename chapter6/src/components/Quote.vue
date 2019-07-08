<template>
    <div class="card column is-one-third">
        <div class="card-content">
            <p class="title">
                <slot></slot>
            </p>
   
        </div>

    </div>    
</template>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card {
    width: 32%;
    margin-right: 5px;
    margin-bottom: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    }

    .card:hover {
        background-color: bisque;
        border-radius: 5%
    }
</style>
