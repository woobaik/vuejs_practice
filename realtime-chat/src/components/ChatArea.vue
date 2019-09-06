<template>
  <div class="chatArea">
      <form @submit.prevent="submitMsg">
          <input type="text" placeholder="Leave a message" class="input-box" v-model="chat" autofocus>
          <button class="btn">Enter</button>
      </form>
  </div>
</template>

<script>

import firebase from 'firebase'
import db from '@/firebase/init.js'


export default {
    
    data: function() {
        return {
            chat: ''
        }
    },
    props: ['name'],
    
    methods: {

        submitMsg() {
            console.log(new Date())
            if (this.chat.trim() !== '') {
                db.collection('messages').add({
                    chat: this.chat,
                    nickname: this.name,
                    created: firebase.firestore.Timestamp.fromDate(new Date())
                })
                .then(() => {
                    this.chat = ''
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error)
                })
            } else {
                console.log('this is empty ')
            }
            
        }
    }
    

}
</script>

<style>
    .input-box {
       margin-left: 1em !important;
       width: 85% !important;
    }
</style>