<template>
    <div class="container">
        <div class="row juice-card" v-for="(juice) in juices" :key="juice.id">
            <div class="card-title"> 
                {{ juice.name.toUpperCase()}}
                <i class="material-icons delete-icon" @click="deleteCard(juice.id)">delete</i>
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
import db from '@/firebase/init.js'

export default {
    data: function() {
        return {
            juices: []
        }
    },
    methods: {
        deleteCard(juiceId) {
            db.collection("juices").doc(juiceId).delete().then(() => {
                console.log('deleted')
                this.juices = this.juices.filter((juice) => {
                return juice.id !== juiceId
            })
            })
            
        }
    },

    created() {
        db.collection("juices").get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
              let juice = doc.data()
              juice.id = doc.id
              this.juices.push(juice)
          })
        })
    }
}
</script>

<style scoped>
    .container { 
        display: flex;
        flex-basis: 20%;
        width: 100vw;
        flex-wrap: wrap;
    }
    .juice-card {
        width: 33%;
        margin-top: 2rem;
        text-align: center;
        border-radius: 1rem;
        background-color: bisque;
        padding: 1rem;
        margin-left: 2rem;
        
    }

    .card-title {
        font-weight: 600;
        letter-spacing: 0.3rem;
        display: flex;
        justify-content: space-evenly;
    }

    .delete-icon {
        cursor: pointer;
        color: white;
        transition: color 0.5s ease-in-out;
    }

    .delete-icon:hover {
        color: black;
    }

    .card-body {
        display: flex;
        flex-wrap: wrap;
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