import Vue from 'vue'
import Vuex from 'vuex'
import UserActiveNameSpaced from '../modules/UserActive'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        UserActiveNameSpaced
    },
    state: {
        sideBarOpen: false
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        }
    },
    actions: {
        toggleSidebar(context) {
            context.commit('toggleSidebar')
        }
    }
})
