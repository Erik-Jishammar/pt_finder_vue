<template>
    <div>
        <h1> List of PTs</h1>
        <ul>
            <li v-for=" pt in pts" :key="pt.id">
            
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
        }
    },
    mounted() {
        this.loadPtList();
    }
}
</script>