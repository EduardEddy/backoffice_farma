import Vue from 'vue'
import Router from 'vue-router'

import demo from '@/pages/Demo'
import index from '@/pages/front/Index'
import login from '@/pages/front/login/Login.vue'
import register from '@/pages/front/register/Register.vue'
import ForgotPassword from '@/pages/front/forgot_password/ForgotPassword.vue'
import ResetPassword from '../pages/front/reset_password/ResetPassword.vue'
import ActiveAccount from '../pages/front/active_account/ActiveAccount.vue'


Vue.use(Router)

const routes = [
    { path:'/demo', component:demo },
    { path: '/', component: index },
    { path:'/login', name:'login', component: login},
    { path:'/register', name:'register', component: register},
    { path:'/forgot-password', name:'forgot_password', component: ForgotPassword },
    { path:'/reset-password/:token', name:'reset_password', component: ResetPassword },
    { path:'/active-account/:token', name:'active_account', component:ActiveAccount }
]

export default routes;