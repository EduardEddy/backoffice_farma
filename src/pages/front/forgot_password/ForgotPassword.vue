<template>
    <div>
        <navbar />
        <div style="min-height: 53.8vh">
            <div class="grid sm:grid-cols-2 pt-10 mt-10">
                
                <div class="pr-5 pt-4 border-r-4 md-auto">
                    <img src="@/assets/images/front/mail_sent.svg" width="250" alt="" style="float: right">
                </div>
                <div class="sm:w-8/12">
                    <p class="text-center text-3xl font-black mb-4">
                        Recuperar clave
                    </p>
                    <div class="mx-10">
                        <div class="grid sm:grid-cols-3">
                            <label for="" class="text-right text-2xl pr-4" style="vertical-align: bottom;">
                                Email: &nbsp;
                            </label>
                            <div class="mb-4 col-span-2">
                                <input class="input border border-gray-400 appearance-none rounded w-full px-3 py-3 pb-2 focus focus:border-indigo-600 focus:outline-none active:outline-none active:border-indigo-600"
                                    id="email"
                                    type="text"
                                    autofocus
                                    v-model="$v.email.$model">
                                <div v-if="$v.email.$error" class="text-red-500 text-1xl">
                                    <span v-if="!$v.email.required">Este campo es requerido </span>
                                    <span v-if="!$v.email.email">El email ingresado es invalido </span>
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
                                    @click="changePassword"
                                >
                                    <i class="fas fa-sign-in-alt"></i>
                                    Enviar
                                </button>
                            </div>
                        </div>

                        <div class="grid grid-cols-3">
                            <div></div>
                            <div class="text-center col-span-2 mt-5">
                                Ya tienes cuenta? <router-link to="/login" style="color:blue">Inciar sesión</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footersection />
    </div>
</template>
<script src="./ForgotPassword.js"></script>