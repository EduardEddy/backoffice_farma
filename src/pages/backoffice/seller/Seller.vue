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
                        <li>Vendedor</li>
                    </ol>
                </nav>
                <div class="container mx-auto mt-5 pt-3 mb-5 bg-white rounded-lg border-2">
                        <h3 class="text-center pt-5 text-4xl">Vendedor</h3>
                        <div class="px-10 mx-10 pt-0 mt-5 body-content">
                            <div class="mx-10 pb-5">
                                <form>
                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="name" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Nombre: &nbsp;
                                        </label>
                                        <div class="col-mb-4 col-span-3">
                                            <InputText class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                id="name"
                                                autofocus
                                                v-model="$v.name.$model"
                                            />
                                            
                                            <div v-if="$v.name.$error" class="text-red-500 text-1xl">
                                                Este campo es requerido
                                            </div>
                                            <small class="text-red-500">{{ err_name }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="last_name" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Apellido: &nbsp;
                                        </label>
                                        <div class="col-mb-4 col-span-3">
                                            <InputText class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                id="last_name"
                                                autofocus
                                                v-model="$v.last_name.$model"
                                            />
                                            <div class="text-red-500 text-1xl" v-if="$v.last_name.$error">
                                                Este campo es requerido
                                            </div>
                                            <small class="text-red-500">{{err_last_name}}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="email" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Email: &nbsp;
                                        </label>
                                        <div class="col-mb-4 col-span-3">
                                            <InputText class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                id="email"
                                                autofocus
                                                v-model="$v.email.$model"
                                            />
                                            <div class="text-red-500 text1xl" v-if="$v.email.$error">
                                                <span v-if="!$v.email.required">Este campo es requerido</span>
                                                <span v-if="!$v.email.email">El email ingresado es invalido </span>
                                            </div>
                                            <small class="text-red-500">{{ err_email }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="password" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Clave: &nbsp;
                                        </label>
                                        <div class="col-mb-4 col-span-3">
                                            <Password class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                id="password"
                                                autofocus
                                                v-model="$v.password.$model"
                                                toggleMask
                                                :feedback="false" 
                                            />
                                            <div class="text-red-500 text1xl" v-if="$v.password.$error">
                                                <span v-if="!$v.password.required">Este campo es requerido</span>
                                                <span v-if="!$v.password.minLength">Debe ingresar al menos 6 caracteres </span>
                                            </div>
                                            <small class="text-red-500">{{ err_password }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="confirm" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Confirmar Clave: &nbsp;
                                        </label>
                                        <div class="col-mb-4 col-span-3">
                                            <Password class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                                id="confirm"
                                                v-model="$v.confirm.$model"
                                                toggleMask
                                                :feedback="false" 
                                            />
                                            <div v-if="$v.confirm.$error" class="text-red-500 text-1xl">
                                                Las claves son diferentes
                                            </div>
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-5">
                                        <div>
                                            <br>
                                            <img src="@/assets/images/front/loading.gif" alt="" width="50" style="float:right" v-if="img_loading">
                                        </div>
                                        <div class="col-start-3 col-span-1">
                                            <Button icon="pi pi-trash" 
                                                iconPos="right" 
                                                label="Eliminar" 
                                                class="w-full bg-red-700 rounded-full font-bold text-white py-3 transition duration-300 ease-in-out hover:bg-red-600 p-button-danger p-button-rounded"
                                                v-if="id!=null"
                                            />
                                        </div>
                                        <div class="col-start-5 col-span-1">
                                            <Button 
                                                icon="pi pi-save" 
                                                iconPos="right" 
                                                label="Guardar" 
                                                @click="createSeller"
                                                class="w-full bg-blue-700 rounded-full font-bold text-white py-3 transition duration-300 ease-in-out hover:bg-blue-600 p-button-rounded"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="./Seller.js"></script>