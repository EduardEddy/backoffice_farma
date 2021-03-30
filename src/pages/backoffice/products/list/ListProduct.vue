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
                        <li>Listado de producto</li>
                    </ol>
                </nav>
                <div class="container mx-auto mt-5 pt-3 mb-5 bg-white rounded-lg border-2">
                    <h3 class="text-center pt-5 text-4xl">
                        Mi lista de productos
                        <!--Button label="Carga Masiva" icon="pi pi-external-link" @click="openDialog"/-->
                    </h3>
                    <div class="px-10 mx-10 pt-0 mt-5 body-content">
                        <DataTable :value="products" :paginator="true" :rows="10"
                            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                            :rowsPerPageOptions="[10,20,50]" :scrollable="true" scrollHeight="40rem"
                        >
                            <Column field="index" header="#"></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="cant" header="Cantidad"></Column>
                            <Column field="description" header="Descripcion"></Column>
                            <Column field="components" header="Componentes"> label="Secondary"</Column>
                            <Column field="id" header="Ediar">
                                <template #body="slotProps">
                                    <Button class="p-button-primary" icon="pi pi-pencil" iconPos="right" @click="msj(slotProps.data.id)" />
                                </template>
                            </Column>
                        </DataTable>
                        <ProgressSpinner v-if="img_progress" style="width:50px;height:50px" strokeWidth="8" fill="#EEEEEE" animationDuration=".5s"/>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script src="./ListProduct.js"></script>
<style lang="css" scoped>
    .body-content{
        min-height: 75vh;
    }
</style>