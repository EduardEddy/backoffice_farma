import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/pages/backoffice/dashboard/Dashboard.vue'
import StorePage from "@/pages/backoffice/store/Store.vue";
import Step1 from '@/pages/backoffice/store/form_step/step1.vue'

Vue.use(Router)

const routes = [
    { 
        path:'/dashboard',
        name:'dashboard', 
        component:Dashboard,
        meta:{ requiresAuth:true, manager:true } 
    },{
        path:'/store',
        name:'store',
        component:StorePage,
        meta:{ requiresAuth:true, manager:true }
    },{
        path:'/step1',
        name:'step1',
        component:Step1,
        meta:{ requiresAuth:true, manager:true }
    }
]

export default routes;