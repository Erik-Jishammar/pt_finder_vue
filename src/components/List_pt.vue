<template>
    <div id="list_pt">
        <h1> List of PTs</h1>
        <ul>
            <li v-for=" pt in pts" :key="pt.id">
            <div class="list-container">
            <h3> {{ pt.name }}</h3>
            <p>Cost:{{ pt.cost }}kr/h</p>
            <p>Skills preview:</p>
            <div class="skills-list" v-for="skill in pt.skills" :key="skill">
                {{ skill }}
            </div>
            <div>
                <button @click="viewDetails(pt.id)"> view details</button>
            </div>
            </div>
            
            </li>
        </ul>
    </div>

</template>

<script>
import { firebaseURL } from '@/firebase/firebase_config';
export default {
    data(){
        return {
           pts:[], 
        };
    },
    methods: {
        loadPtList(){
            fetch(firebaseURL + 'pts.json')
            .then(response => response.json())
            .then(pt => {
                const results = [];
                for (const id in pt){
                    results.push({
                        id: id,
                        name: pt[id].name,
                        cost: pt[id].cost,
                        skills: pt[id].skills
                    })
                }
                this.pts = results;
                console.log(results);
            });
        }, 
        viewDetails(id){
            this.$router.push('/pts/' + id)
        }
    },
    mounted() {
        this.loadPtList();
    }
}
</script>