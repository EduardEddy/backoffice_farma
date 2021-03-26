<template>
    <div class="leading-normal tracking-normal" id="main-body">
        <div class="flex flex-wrap">

            <Sidebar />

            <div class="w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen" :class="sideBarOpen ? 'overlay' : ''" id="main-content">

                <Navbar />
                    <nav class="bg-grey-light p-3 rounded font-sans w-full m-4">
                        <ol class="list-reset flex text-grey-dark">
                            <li>
                                <router-link to="/dashboard" class="text-blue font-bold">
                                    <i class="pi pi-home"></i>
                                </router-link>
                            </li>
                            <li><span class="mx-2">/</span></li>
                            <li>Establecimineto</li>
                        </ol>
                    </nav>
                    <div class="container mx-auto mt-5 pt-3 mb-5 bg-white rounded-lg border-2">
                        
                        
                        <h3 class="text-center pt-5 text-4xl">Mi Establecimineto</h3>
                        <div class="px-10 mx-10 pt-0 mt-5 body-content">
                            <div class="mx-10 pb-5">
                                <form>
                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Nombre: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <InputText v-model="$v.name.$model" class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"/>
                                            <div v-if="$v.name.$error" class="text-red-500 text-1xl">
                                                Este campo es requerido
                                            </div>
                                            <small class="text-red-500">{{ err_name }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4">
                                        <label for="" class=" text-2xl pr-4" style="vertical-align: bottom;">
                                            Número: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <InputText class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                v-model="bussnise_id"
                                            />
                                            <small class="text-red-500"></small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Pais: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                type="text"
                                                autofocus
                                                v-model="$v.country.$model"
                                                readonly>
                                            <div v-if="$v.country.$error" class="text-red-500 text-1xl">
                                                <span>Este campo es requerido </span>
                                                <span>El email ingresado es invalido </span>
                                            </div>
                                            <small class="text-red-500">{{err_country}}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Ciudad:
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                type="text" 
                                                autofocus
                                                v-model="$v.city.$model"
                                                readonly>
                                            <div v-if="$v.city.$error" class="text-red-500 text-1xl">
                                                <span>Este campo es requerido </span>
                                                <span>Debe ingresar al menos caracteres </span>
                                            </div>
                                            <small class="text-red-500">{{err_city}}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4">
                                        <label for="" class="text-2xl pr-4 mr-2" style="vertical-align: bottom;">
                                            Dirección:
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                type="text"
                                                v-model="$v.address.$model"
                                                autofocus>
                                            <div v-if="$v.address.$error" class="text-red-500 text-1xl">
                                                Las claves son diferentes
                                            </div>
                                            <small class="text-red-500">{{err_address}}</small>
                                        </div>
                                    </div>
                                    <div class="grid sm:grid-cols-4">
                                        <label for="lat" class="text-2xl pr-4 mr2">
                                            Latitud
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <input class="input border border-gray-400  appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                type="text"
                                            >
                                        </div>
                                    </div>
                                    <div style="min-height:20rem">
                                        <MglMap :accessToken="accessToken" :mapStyle="mapStyle" @load="onMapLoad">
                                            <MglMarker :coordinates="coordinates" color="blue" draggable="true" />
                                        </MglMap>
                                    </div>
                                    <div class="grid grid-cols-5">
                                        <div class="col-start-4 col-span-2">
                                            <button type="button" class="w-full bg-blue-700 rounded-full font-bold text-white py-3 transition duration-300 ease-in-out hover:bg-blue-600"
                                                :class="{'disabled:opacity-50':$v.$invalid}"
                                                @click="postStore()"
                                                :disabled="$v.$invalid"
                                            >
                                                <i class="pi pi-save"></i>
                                                &nbsp;
                                                <span v-if="id==null">Crear</span>
                                                <span v-if="id!=null">Actualizar</span>
                                            </button>
                                        </div>
                                    </div>
                                
                                </form>
                            </div>
                        </div>
                    </div>
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