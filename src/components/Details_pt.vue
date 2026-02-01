<template>
    <div v-if="selectedPt" class="container"> <!-- in case we want to style later on-->
        <h1> Details PT </h1>
        <h3> Name: {{ selectedPt.name }}</h3>
        <p> Cost: {{ selectedPt.cost }}</p>
        <p> Skills: {{ selectedPt.skills }}</p>        
    </div>
    <div v-else>
        <h1>Loading...</h1>
    </div>
  </template>

<script>
import { firebaseURL } from '@/firebase/firebase_config';
export default {
    data (){
      return {
        id: this.$route.params.id,
        selectedPt: null
      }
      
    }, 
    methods: {
        loadPtDetails(){
          fetch(firebaseURL + 'pts/' + this.id +'.json')
          
          .then(response => response.json())

          .then(data => {
            this.selectedPt = data
          });
        }
    },
    created(){
        this.loadPtDetails();
    }
} 
</script>