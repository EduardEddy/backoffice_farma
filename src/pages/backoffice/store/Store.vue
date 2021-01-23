<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <Sidebar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

                <Navbar />
                    <div class="px-10 mx-10 pt-10 mt-10 body-content">
                        <div class="card">
                            <Steps :model="items" :readonly="false" />
                        </div>

                        <!--router-view v-slot="{Component}" :formData="formObject" @prev-page="prevPage($event)" @next-page="nextPage($event)" @complete="complete">
                            <keep-alive>
                                <component :is="Component" />
                            </keep-alive>
                        </router-view-->
                        <router-view />
                    </div>
        <StepsDoc />

                <Footer />
            </div>
        </div>
    </div>
</template>
<script src="./Store.js"></script>
<style lang="css" scoped>
    .body-content{
        min-height: 75vh;
    }
</style>