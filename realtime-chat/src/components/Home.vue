<template>
  <div class="home">
    <div class="container">
      <div class="col s10 chatroom">
        <div class="card">
          <span class="card-title">ENTER YOUR NAME</span>
          <div class="card-body">
            <div class="card nickname-box">
              <div class="nickname-description">
                Welcome to Chatroom
              </div>
              <div class="nickname-form">
                <form @submit.prevent="enterNickName">
                  <input type="text" placeholder="Enter your name" v-model="nickname">
                  <button class="btn teal" type="submit">Enter the room</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      nickname: ''
    }
  }, 
  methods: {
    enterNickName() {
      this.$router.push({name: 'Chat', params: {nickname: this.nickname}})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    margin-top: 60px;
    min-height: 100vh;
    min-height: 80vh;
  }

  .card-body {
    background-color: #fff5f5;
    height: 70vh;
    text-align: left;
    padding: 1rem 0.5rem 0 1rem;
    color: white;
  }

  .nickname-box {
    color: black;
    height: 50vh;
    margin: 4rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .nickname-description {
    margin-top: 4rem;
    font-size: 3rem;
  }

  .nickname-form {
    padding-top: 4rem;
    width: 50%;
    align-self: center;
  }

</style>
