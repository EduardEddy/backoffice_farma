<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <nav class="" style="background: #0EA5E9">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <!-- Mobile menu button-->
                <button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <!-- Icon when menu is closed. -->
                <!--
                    Heroicon name: menu

                    Menu open: "hidden", Menu closed: "block"
                -->
                <svg class="h-6 w-6" :class="{'block':burguer_icon,'hidden':!burguer_icon}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" @click="mobile_menu = true, burguer_icon=false">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Icon when menu is open. -->
                <!--
                    Heroicon name: x

                    Menu open: "block", Menu closed: "hidden"
                -->
                <svg class="h-6 w-6"  :class="{'block':!burguer_icon,'hidden':burguer_icon}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" @click="mobile_menu = false, burguer_icon=true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
            </div>
            <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex-shrink-0 flex items-center">
                    <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
                    <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow">
                </div>
                <div class="hidden sm:block sm:ml-6">
                    <div class="flex space-x-4">
                        
                    </div>
                </div>
            </div>
            <div class="hidden  sm:block sm:ml-6 absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ul class="flex">
                    <li class="mr-6">
                        <router-link to="/" class="text-white hover:text-blue-800 px-3 py-2" href="#">
                            <i class="fas fa-home"></i> Inicio
                        </router-link>
                    </li>
                    <li class="mr-6">
                        <router-link to="/login" class="text-white hover:text-blue-800">
                            Login
                        </router-link>
                    </li>
                    <li class="mr-6">
                        <router-link to="/register" class="text-white hover:text-blue-800">
                            Registrate
                        </router-link>
                    </li>
                </ul>
            </div>
            </div>
        </div>

        <!--
            Mobile menu, toggle classes based on menu state.

            Menu open: "block", Menu closed: "hidden"
        -->
        <div class="sm:hidden" :class="{'hidden':!mobile_menu}">
            <div class="px-2 pt-2 pb-3 space-y-1">
            <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <!--a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a-->
            <router-link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Inicio
            </router-link>
            <router-link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Login
            </router-link>
            <router-link to="/register" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Registrate
            </router-link>
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
            </div>
        </div>
        
    </nav>
</template>
<script>

export default {
    data() {
        return {
            mobile_menu:false,
            burguer_icon:true,
        }
    },
}
</script>
<style lang="css" scoped>
    a.router-link-exact-active{
        background-color: #1a202c;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        border-radius: 0.375rem;
    }
</style>