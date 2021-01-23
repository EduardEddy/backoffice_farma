<template>
    <div>
        <navbar />
        <div style="min-height: 53.8vh">
            <div class="grid pt-10 mt-10">
                <h1 class="text-center text-5xl">Tu cuenta se ha activado</h1>
                <h1 class="text-center text-blue-500 text-2xl underline">
                    <router-link to="/login">Ya puedes iniciar sesion</router-link>
                </h1>
            </div>
        </div>
        <footersection />
    </div>
</template>
<script src="./ActiveAccount.js"></script>