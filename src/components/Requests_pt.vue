<template>
    <div class="container"> <!-- in case we want to style later on-->
      <form @submit.prevent="submitForm">

        <div>
        <label>Your email: 
          <input type="text" value="email" v-model="email" required>
        </label>
        </div>

        <div>
        <label> Messege: 
          <textarea name="msg" v-model="msg" placeholder="Enter a message to your PT of choice"></textarea>
        
        </label>
        </div>
      </form>  
    </div>
  </template>

<script>
import { firebaseURL } from '@/firebase/firebase_config';
export default {
  data(){
    return{
      email:this.email,
      msg: this.msg,
      ptId:this.$route.params.id
    }
  }, methods: {
    submitForm(){ 
      if(this.email.trim() === ''){
        console.error('You need to enter your email!')
        return;
      } 
     if(this.msg.trim() === ''){
      console.error('You need to enter your message')
     } 
     const msgData = {
        email: this.email,
        msg: this.msg
     }     

      fetch()

    }
  }
    
}

</script>