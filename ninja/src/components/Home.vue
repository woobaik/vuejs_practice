<template>
    <div class="container">
        <div class="row" v-for="juice in juices" :key="juice.id">
            <div class="card-title"> 
                {{ juice.name.toUpperCase()}}
            </div>
            <div class="card-body">
                <div class="card-ingredient" v-for="ingredient in juice.ingredients" :key="ingredient">
                    {{ ingredient.toUpperCase()}}
                </div>
                
            </div>

            
        </div>       
    </div>
    
            
</template>

<script>
export default {
    props: ['juices']
}
</script>

<style scoped>
    .container{ 
        display: flex;
        flex-basis: 25%;
    }
    .row {
        margin-top: 2rem;
        text-align: center;
        border-radius: 1rem;
        background-color: bisque
    }

    .card-title {
        font-weight: 600;
        letter-spacing: 0.3rem;
    }


    
    .card-body {
        display: flex;
        
    }

    .card-ingredient {
        color: white;
        background-color: blueviolet;
        padding: 0.5rem 1rem;
        margin: 1rem;
        border-radius: 10%;
        cursor: pointer;
    }
</style>