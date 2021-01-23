export default {
    namespaced:true,
    state:{
        user:{
            country: null,
            email: null,
            id: null,
            identification: null,
            last_name: null,
            name: null,
            phone: null,
            profile: null,
            token: null,
            type_identification: null,
        }
    },
    mutations:{
        addToState(state, payload){
            
            state.user.name= payload.name,
            state.user.country= payload.country,
            state.user.email= payload.email,
            state.user.id= payload.id,
            state.user.identification= payload.identification,
            state.user.last_name= payload.last_name,
            state.user.phone= payload.phone,
            state.user.profile= payload.profile,
            state.user.token= payload.token,
            state.user.type_identification= payload.type_identification
            
        }
    },
    actions:{
        storageToState({commit}){
            let user = JSON.parse(localStorage.getItem("user"));
            if( user != null ){
                commit('addToState',user );
            }
            
            if( user == null || user == '' ){
                this.$router.push('/')
            }
        }
    }
}