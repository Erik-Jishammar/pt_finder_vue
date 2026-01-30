import { createStore } from "vuex";

const store = createStore({
state() {
    return {
        registeredPtIds: [] // store all ids
    };


}, mutations: {
    registerPtId(state, id){
        state.registeredPtIds.push(id);
    }
}
})


export default store