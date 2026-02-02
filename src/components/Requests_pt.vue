<template>
    <div class="container"> <!-- in case we want to style later on-->
      <h2>Send a request to your selected PT </h2>
      <form @submit.prevent="submitForm">

        <div>
        <label for="email">Your email: </label>
          <input type="email" id="email" v-model="email" required placeholder="name@example.com">
        </div>

        <div>
        <label for="msg"> Messege: </label>
          <textarea id="msg" v-model="msg" rows="4" placeholder="Enter a message to your PT of choice"></textarea>
        </div>
        <button type="submit">Send request</button>
      </form>  
    </div>
  </template>

<script>
import { firebaseURL } from '@/firebase/firebase_config';
export default {
  data(){
    return{
      email:'',
      msg: '',
      ptId:this.$route.params.id // get id from url
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
        msg: this.msg,
        ptId: this.ptId
     };     

      fetch(firebaseURL + 'requests.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(msgData)
    })
      .then(response => {
        if(response.ok){
          return response.json();
        } else {
          throw new Error('Could not send your request');
        }
      })
      .then(data => {
         console.log("Request sent, ID:", data.name); 
        
        // empty form 
        this.email = "";
        this.msg = '';
        alert('Request sent');
      })
      .catch(error => console.log(error));

    }
  }
    
}

</script>