<template>
<div class="container">
<h1> Requests</h1>
<ul>
    <li v-for="req in allRequests" :key="req.id">
        <h3> {{ req.email }}</h3>
        <p>{{ req.msg }}</p>

    </li>
</ul>
</div>

</template>

<script>
import { firebaseURL } from '@/firebase/firebase_config';
export default{
    data(){
        return {
            allRequests: []
        }
    }, methods: {
        getRequests(){
            fetch(firebaseURL + 'requests.json')
            .then(response => response.json())
            .then(data => {
                const results =[];
                for(const key in data){
                    results.push({
                        id:key,
                        email: data[key].email,
                        msg: data[key].msg,
                        ptId: data[key].ptId
                    })
                }
                this.allRequests = results;
                
            })
        }
    }, mounted(){
        this.getRequests();
    }
} 

</script>