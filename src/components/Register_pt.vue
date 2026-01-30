<template>
    <div class="container"> <!-- in case we want to style later on-->
        <form @submit.prevent="submitForm" id="form-container">
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

            if(this.name.trim() === ''){
                console.error('You need to enter your name!')
                return;
            }
            if(this.cost <= 0 || this.cost.trim() === ''){
                console.error('You need to enter your cost per hour!')
                return;
            }
            if(this.skills.length === 0){
                console.error('You need to select atleast one skill!')
                return;
            }
            console.log("PT registrated:", this.name + this.cost + this.skills);

            const ptFormData = {
                name: this.name, 
                cost: this.cost,
                skills: this.skills
            }
            fetch('https://ptfinderex-default-rtdb.europe-west1.firebasedatabase.app/pts.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ptFormData)

            })
            .then((response) =>{
                if(response.ok){
                 console.log('PtFormData collected to db');
                 this.name = ''
                 this.cost = ''
                 this.skills = []
                    
                } else {
                    throw new Error('Could not save data to db')
                }
               
            })


                
        }
        
    }
}   


</script>