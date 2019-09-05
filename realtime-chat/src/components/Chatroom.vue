<template>
  <div class="chatroom">
    <div class="container">
      <div class="col s10 chatroom">
        <div class="card">
          <span class="card-title">SAMPLE CHAT ROOM</span>
          <div class="chat-body">
            <div class="chat-info">
              <div class="chat-user">Name</div>
              <div class="chat-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum veniam eveniet, dignissimos modi aspernatur. Expedita cupiditate non dolore sit harum minus cum, odit libero optio velit aperiam, repudiandae error.</div>
            </div>
              <div class="chat-info">
                <div class="chat-user">Joungwoo Baik</div>
              <div class="chat-message">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt rerum veniam eveniet, dignissimos modi aspernatur. Expedita cupiditate non dolore sit harum minus cum, odit libero optio velit aperiam, repudiandae error.</div>
            </div>
          </div>
          <app-chat-area class="chat-area"></app-chat-area>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>

import ChatArea from '@/components/ChatArea.vue'

export default {
  components: {
    'app-chat-area': ChatArea
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
