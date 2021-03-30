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
                            <li>Registro de producto</li>
                        </ol>
                    </nav>
                    <div class="container mx-auto mt-5 pt-3 mb-5 bg-white rounded-lg border-2">
                        <h3 class="text-center pt-5 text-4xl">
                            Crear Producto
                            <Button label="Carga Masiva" icon="pi pi-external-link" @click="openDialog"/>
                        </h3>
                        <DialogMassive ref="dialog_massive" :user="user"/>
                        <div class="px-10 mx-10 pt-0 mt-5 body-content">
                            <div class="mx-10 pb-5">
                                <form>
                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Nombre*: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <InputText class="w-full" v-model="$v.name.$model"/>
                                            <small class="text-red-500">{{ err_name }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Ficha Tecnica: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <Textarea v-model="description" :autoResize="true" rows="5" class="w-full" placeholder="Marca" />
                                            <small class="text-red-500">{{ err_description }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Componentes: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <Textarea v-model="component" :autoResize="true" rows="5" class="w-full" placeholder="trimetoprim"/>
                                            <small class="text-red-500">{{ err_component }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Cantidad: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <Textarea v-model="cant" :autoResize="true" rows="5" class="w-full" placeholder="10 capsulas 50mm c/u"/>
                                            <small class="text-red-500">{{ err_cant }}</small>
                                        </div>
                                    </div>

                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Precio: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <InputNumber id="locale-user" v-model="price" mode="decimal" :minFractionDigits="2" class="w-full" />
                                            <small class="text-red-500">{{ err_price }}</small>
                                        </div>
                                    </div>
                                    
                                    <div class="grid sm:grid-cols-4 mb-4">
                                        <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                            Imagen: &nbsp;
                                        </label>
                                        <div class="mb-4 col-span-3">
                                            <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                            <small class="text-red-500">{{ err_image }}</small>
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-5">
                                        <div>
                                            <br>
                                            <img src="@/assets/images/front/loading.gif" alt="" width="50" style="float:right" v-if="img_loading">
                                        </div>
                                        <div class="col-start-5 col-span-1">
                                            <Button 
                                                icon="pi pi-save" 
                                                iconPos="right" 
                                                label="Guardar" 
                                                @click="createProduct()"
                                                class="w-full bg-blue-700 rounded-full font-bold text-white py-3 transition duration-300 ease-in-out hover:bg-blue-600 p-button-rounded"
                                            />
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
<script src="./Product.js"></script>
<style lang="css" scoped>
    .body-content{
        min-height: 75vh;
    }
</style>