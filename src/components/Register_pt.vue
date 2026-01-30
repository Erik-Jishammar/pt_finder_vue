<template>
    <div class="container"> <!-- in case we want to style later on-->
        <form method="POST" @submit.prevent="submitForm" id="form-container">
         <h1> Register PT</h1>
            <div>
                 <label for="name">Name:</label>
                 <input type="text" v-model="name" required id="name">
            </div>
             <div>
                <label for="cost">Cost p/h: </label>
                <input type="text" v-model="cost" required id="cost">
            </div>
            <div>
                <h2>Select your skills</h2>
                <label>
                    <input type="checkbox" value="bodybuilding" v-model="skills"> Bodybuilding
                </label>
                  <label>
                    <input type="checkbox" value="strength" v-model="skills"> Strength
                </label>
                  <label>
                    <input type="checkbox" value="balance" v-model="skills"> Balance
                </label>
                <label>
                    <input type="checkbox" value="cardio" v-model="skills"> Cardio
                </label>
                <label>
                    <input type="checkbox" value="yoga" v-model="skills"> Yoga
                </label>
                  <label>
                    <input type="checkbox" value="nutrition" v-model="skills"> Nutrition
                </label>
                  <label>
                    <input type="checkbox" value="mobility" v-model="skills"> Mobility
                </label>
                  <label>
                    <input type="checkbox" value="rehab" v-model="skills"> Rehab
                </label>
            </div>
            <button type="submit">Submit</button>

        </form>
        

    </div>
  </template>

<script>
export default {
    data(){
        return{
            name: '',
            cost: '',
            skills: []
            
        } 
        
        
    }, methods: {
        submitForm(){ // validation rules

                console.log("PT:", this.name + this.cost + this.skills);
        }
    }
}   


</script>