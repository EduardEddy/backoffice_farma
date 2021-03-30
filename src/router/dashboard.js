import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '@/pages/backoffice/dashboard/Dashboard.vue'
import StorePage from "@/pages/backoffice/store/Store.vue";
import SellerPage from '@/pages/backoffice/seller/Seller.vue'
import ProductPage from '@/pages/backoffice/products/Product.vue'
import ProductListPage from '@/pages/backoffice/products/list/ListProduct.vue'

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
        path:'/seller',
        name:'seller',
        component:SellerPage,
        meta:{ requiresAuth:true, manager:true }
    },{
        path:'/products',
        name:'product',
        component:ProductPage,
        meta:{ requiresAuth:true, manager:true }
    },{
        path:'/products/my-Lists',
        name:'product_list',
        component:ProductListPage,
        meta:{ requiresAuth:true, manager:true }
    }
]

export default routes;