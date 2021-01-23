<template>
    <div>
        <navbar />
        <section1 />
        <section2 />
        <footersection />
    </div>
</template>
<script>
import section1 from '@/components/front/index/Section1'
import section2 from '@/components/front/index/Section2'
import navbar from '@/components/front/menu/NavBar'
import footersection from '@/components/front/index/Footer.vue'

export default {
    components:{
        section1,section2,navbar,footersection
    }
}
</script>