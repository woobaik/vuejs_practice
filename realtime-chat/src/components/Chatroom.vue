<template>
  <div class="chatroom">
    <div class="container">
      <div class="col s10 chatroom">
        <div class="card">
          <span class="card-title">SAMPLE CHAT ROOM</span>
          <div class="chat-body">
              <div class="chat-info" v-for="(msgBlock) in chatBody" :key="msgBlock.id">
                <div class="chat-user">{{ msgBlock.nickname }}</div>
              <div class="chat-message">{{ msgBlock.chat}}</div>
            </div>
          </div>
          <app-chat-area class="chat-area" :name="currentUser"></app-chat-area>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>

import ChatArea from '@/components/ChatArea.vue'
import db from '@/firebase/init'

export default {
  data: function() {
    return {
      currentUser: this.$route.params.nickname,
      chatBody: []
    }
  },
  components: {
    'app-chat-area': ChatArea
  },
  created: function() {
    db.collection('messages').onSnapshot( snapshot => {
      snapshot.docChanges().forEach((doc) => {
          if (doc.type === "added") {
            this.chatBody.push(doc.doc.data())
          }
      } )
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .chatroom {
    margin-top: 60px;
    min-height: 80vh;
  }



  .chat-body {
    background-color: #fff5f5;
    height: 70vh;
    text-align: left;
    padding: 1rem 0.5rem 0 1rem;
    color: white;
    overflow: scroll;
  }

  ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: rgba(0,0,0,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
}


  .chat-info {
    display: flex;
    flex-basis: 10%;
    margin-bottom: 1rem;
  }

  .chat-user {
    display: inline-block;
    color: #733c3c;
    flex-basis: 8rem;
    
    
  }

  .chat-message {
    display: inline-block;
    padding-left: 1rem;
    color: #1b471b;
    max-width: 85%;
    flex-basis: auto;
    
  }

  .chat-area {
    border: 1px solid lightgray;;
  }
  
</style>
