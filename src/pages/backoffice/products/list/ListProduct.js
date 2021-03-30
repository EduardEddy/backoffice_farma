import { mapState } from 'vuex'

import Sidebar from '@/components/dashboard/sidebar/Sidebar.vue'
import Navbar from '@/components/dashboard/navbar/Navbar.vue'
import Footer from '@/components/dashboard/footer/Footer.vue'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';

export default {
    name:'listProduct',
    data() {
        return {
            products:[],
            img_progress:true
        }
    },
    computed: {
        ...mapState(['sideBarOpen']),
        ...mapState('UserActiveNameSpaced',['user'])
    },
    components:{
        Sidebar, Navbar, Footer,
        DataTable, Column, ProgressSpinner, Button
    },
    methods: {
        async getList()
        {
            await this.user
            this.axios.get(`/products`,
            {
                headers: {
                    'Authorization':`Bearer ${this.user.token}`
                }
            }).then( resp => {
                this.img_progress = false
                resp.data.data.forEach((element,i) => {
                    console.log(element)
                    element.index = i+1;
                    this.products.push(element)
                });
            }).catch ( err => {
                this.img_progress = false
                    console.log( err )
                    this.$swal({
                    icon:'warning',
                    title: 'Algo salio mal',
                    text:'Contacta al administrador'
                })
            })
        },
        msj( id )
        {
            alert( id )
        }
    },
    mounted() {
        this.getList()
    },
    async created() {
        await this.user
    },
}