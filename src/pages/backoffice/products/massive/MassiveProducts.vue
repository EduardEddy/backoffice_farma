<template>
    <div>
        
        <Dialog header="Header" :visible.sync="display" :style="{width: '50vw'}">
            <div class="px-10 mx-10 pt-0 mt-5 body-content">
                <div class="mx-10 pb-5">
                    <form>
                        <div class="grid sm:grid-cols-4 mb-4">
                            <label for="" class="text-2xl pr-4" style="vertical-align: bottom;">
                                Imagen: &nbsp;
                            </label>
                            <div class="mb-4 col-span-3">
                                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                                <small class="text-red-500">{{ err_image }}</small>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <template #footer>
                <ProgressSpinner style="width:50px;height:50px" strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"  v-if="img_loading"/>
                
                <Button label="Cancelar" icon="pi pi-times" @click="display = false" class="p-button-text"/>
                <Button label="Enviar" icon="pi pi-check" @click="createMassiveProduct" autofocus />
            </template>
        </Dialog>
    </div>
</template>
<script src="./MassiveProducts.js"></script>