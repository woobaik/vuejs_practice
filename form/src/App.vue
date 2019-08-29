<template>
  <div id="app">
    <div class="container">
      <h1>First Form</h1>
      <div class="form-contrl">
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="formData.name">
      </div>

      <div class="form-control">
        <label for="email">Email :</label>
        <input type="text" id="email" v-model="formData.email">
      </div>

      <div class="form-control">
        <textarea name="description" cols="30" rows="10" id="text-area" v-model="formData.description">
          Enter Description
        </textarea>
      </div>

      <div class="form-control">
        <label for="notification">Notification</label>
        <input type="checkbox" id="notification" v-model="formData.emailType.notification">
        <label for="promotion">Promotion</label>
        <input type="checkbox" id="promotion" v-model="formData.emailType.promotion">
      </div>

      <div class="form-control">
        <select name="plan" id="plan" v-model="formData.plan">
          <option value="basic">Basic</option>
          <option value="premium">primium</option>
          <option value="payasyougo">Pay as You Go</option>
          <option value="unlimited">unlimited</option>
        </select>
      </div>
      <button @click="submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      formData: {
        name: '',
        email: '',
        description: '',
        emailType: {
          notification: false, 
          promotion: false
        },
        plan: ''
      }

    }
  }, 
  methods: {
    submit() {
      console.log(this.formData)
      this.formData = {
        name: '',
        email: '',
        description: '',
        emailType: {
          notification: false, 
          promotion: false
        },
        plan: ''
      }
    }
  }
}
</script scoped>

<style>
  .container { 
    text-align: center;
  }
</style>
