<template>
    <div v-if="selectedPt" class="container"> <!-- in case we want to style later on-->
        <h1> Details PT </h1>
        <h3> Name: {{ selectedPt.name }}</h3>
        <p> Cost: {{ selectedPt.cost }}</p>
        <p> Skills: {{ selectedPt.skills }}</p>    
        <button @click="showForm = !showForm"> Contact me</button>
        <div v-if="showForm">
           <Requests_pt />

        </div> 
         
    </div>
    <div v-else>
        <p> You havent selected a PT from the list</p>
    </div>
   
  </template>

<script>
import Requests_pt from './Requests_pt.vue';
import { firebaseURL } from '@/firebase/firebase_config';
export default {
      components: { Requests_pt },
    data (){
      return {
        id: this.$route.params.id,
        selectedPt: null,
        showForm: false
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