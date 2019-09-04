<template>
  <div class="container">
      <div class="center">
          <h3>NEW JUICE</h3>
      </div>
      <div class="row">
          <form class="col s12" @submit.prevent="addNewJuice">
              <div class="input-field col s12">
                  <input type="text" class="validate" id="name" v-model="name" @keydown.tab="addName" autofocus> 
                  <label for="name">Juice Name</label>
              </div>
              <div class="input-field col s11">
                  <input type="text" class="validate" id="ingredient" @keydown.tab.prevent="addIngredient" v-model="ingredient">
                  <label for="ingredient">Ingredient</label>
              </div>
              <div class="col s1">
                  <i class="material-icons plus-icon" @click="addIngredient">add</i>
              </div>
            <div class="chips-field col s12">
                <div class="chip" v-for="(ingredient,index) in ingredients" :key="index" @click.prevent="removeIngredient(index)">
                    {{ ingredient }}
                    <span class="removeBtn">X</span>
                </div>
            </div>             

              <div v-if="notification" class="notification col">
                  {{ notification }}
              </div>
              
              <div class="col s12 submitBtn" >
                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>              
              </div>
                
          </form>
      </div>

  </div>
</template>

<script>

import db from '@/firebase/init.js'

export default {
    data: function() {
        return {
            name:'',
            ingredient:'',
            ingredients:[],
            notification: ''
        }
    },

    methods: {
        addNewJuice() {
            if ( this.name === '' || this.ingredients.length === 0 ) {
                this.notification = 'There was someting wrong with your input'
            } else {
                db.collection('juices').add({
                    name: this.name, 
                    ingredients: this.ingredients
                })
                .then((docRef) => {
                    this.$router.push({name: 'Home'})
                }).catch((error) => {
                    this.notification = 'Something wrong with your entry, try again'
                    console.error('Error adding document: ', error)
                })
            }
        },

        addName() {
            if (this.name == '') {
                if (this.name === '') {
                this.notification = 'Please Enter Valid Name for Juice'
                }
            } else {
                this.notification = ''
            }
        },

        addIngredient() {
            if (this.ingredient === '') {
                this.notification = 'Please Enter Valid Ingredient for Juice'

            } else {
                this.ingredients.push(this.ingredient)
                this.notification = ''
                this.ingredient =''
            }
        },

        removeIngredient(index) {
            this.ingredients.splice(index,1)
        }
    }
}
</script>

<style scoped>
    .container {
        padding-top: 3rem;
    }
    .plus-icon {
        padding-top: 15px;
        cursor: pointer;
        font-size: 2rem;
        color: darkgray;
        transition: all 0.3s ease-in-out;
        
    }
    .plus-icon:hover {
        color: black;
        font-size: 2.5rem;
    }

    .notification {
        display: block; 
        color: red;
    }

    .chips-field {
        display: block;
    }

    .submitBtn {
        margin-top: 2rem;
    }

    .removeBtn {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        padding-left: 1rem;
        font-weight: 900;
    }

    .removeBtn:hover {
        color: black;
        font-size: 1.2rem;
    }
</style>

