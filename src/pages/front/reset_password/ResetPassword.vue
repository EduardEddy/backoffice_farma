<template>
    <div>
        <navbar />
        <div style="min-height: 53.8vh">
            <div class="grid sm:grid-cols-2 pt-10 mt-10">
                
                <div class="pr-5 pt-4 border-r-4 md-auto">
                    <img src="@/assets/images/front/contrasena.svg" width="250" id="img" calt="" style="float: right">
                </div>
                <div class="sm:w-8/12">
                    <p class="text-center text-3xl font-black mb-4">
                        Actualizar clave
                    </p>
                    <div class="mx-10">
                        <div class="grid sm:grid-cols-3">
                            <label for="" class="text-right text-2xl pr-4" style="vertical-align: bottom;">
                                Clave: &nbsp;
                            </label>
                            <div class="mb-4 col-span-2">
                                <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" 
                                    id="password" 
                                    type="password" 
                                    autofocus
                                    v-model="$v.password.$model">
                                <div v-if="$v.password.$error" class="text-red-500 text-1xl">
                                    <span v-if="!$v.password.required">Este campo es requerido </span>
                                    <span v-if="!$v.password.minLength">Debe ingresar al menos {{ $v.password.$params.minLength.min }} caracteres </span>
                                </div>
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-3">
                            <label for="" class="text-right text-2xl pr-4" style="vertical-align: bottom;">
                                Confirmar Clave: &nbsp;
                            </label>
                            <div class="mb-4 col-span-2">
                                <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600" 
                                    id="password" 
                                    type="password" 
                                    autofocus
                                    v-model="$v.confirm.$model">
                                <div v-if="$v.confirm.$error" class="text-red-500 text-1xl">
                                    Las claves son diferentes
                                </div>
                            </div>
                        </div>

                        <div class="grid sm:grid-cols-3">
                            <div>
                                <br>
                                <img src="@/assets/images/front/loading.gif" alt="" width="50" style="float:right" v-if="img_loading">
                            </div>
                            <div class="text-center col-span-2 mt-5">
                                <button class="w-full bg-blue-700 rounded-full font-bold text-white px-20 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-6"
                                    style="font-size: 1.2em"
                                    :disabled="$v.$invalid"
                                    @click="cahngePassword"
                                >
                                    <i class="fas fa-sign-in-alt"></i>
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footersection />
    </div>
</template>
<script src="./ResetPassword.js"></script>
<style lang="css" scoped>
@media screen and (max-width: 320px) {
    #img{
        width:100 !important;
        float: center !important;
    }
    .text-right{
        text-align: left;
    }
}
</style>