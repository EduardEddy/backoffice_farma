import Vue from 'vue'
import Router from 'vue-router'

import frontRouter from './front_router.js'
import dashboardRouter from './dashboard.js'
//import Dashboard from '@/components/Dashboard'
//import DashboardHome from '@/pages/Home'

Vue.use(Router)

const routes = [
    /*{ path: '/home', redirect: { name: 'DashboardHome' } },
    { path: '/dashboard', component: Dashboard, children: [
        { path: '/', redirect: { name: 'DashboardHome' } },
        { path: 'home', name: 'DashboardHome', component: DashboardHome }
      ]
    },*/
    ...frontRouter,
    ...dashboardRouter
]

const router = new Router({
    mode: 'history',
    routes
})

router.beforeEach( ( to, from, next )=>{
    if (to.matched.some(record => record.meta.requiresAuth)) {
  
      if( localStorage.getItem('user') == null ){
        next({
          path:'/login'
        })
      }else{
        
        let user = JSON.parse(localStorage.getItem('user'));
        if( to.matched.some( record=>record.meta.manager)){
          if( user.profile == 'manager'){
            next()
          }else{
            next({name:'dashboard'})
          }
        }
        /*
        if( to.matched.some( record => record.meta.user ) ) {
          if( user.tipo == 'usuario' ){
            next()
          }else{
            next({ name: 'dashboard'})
          }
        }
  
        if( to.matched.some( record => record.meta.comercio ) ) {
          if( user.tipo == 'comercio_auto' ){
            next()
          }else{
            next({ name: 'dashboard'})
          }
        }
        next();
        */
      }
  
    }else{ //*** La ruta no esta protegida */
      next()
    }
})

export default router