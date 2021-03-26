import { mapState } from 'vuex'
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

import Sidebar from '@/components/dashboard/sidebar/Sidebar.vue'
import Navbar from '@/components/dashboard/navbar/Navbar.vue'
import Footer from '@/components/dashboard/footer/Footer.vue'
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';

export default {
    name:'seller',
    data() {
        return {
            id:null,
            email:null,
            name:null,
            last_name:null,
            password:null,
            confirm:null,
            img_loading:false,

            err_email:null,
            err_name:null,
            err_last_name:null,
            err_password:null
        }
    },
    computed: {
        ...mapState(['sideBarOpen']),
        ...mapState('UserActiveNameSpaced',['user'])
    },
    components: {
        Sidebar,
        Navbar,
        Footer,
        InputText, Password, Button
    },
    validations: {
        last_name: { required },
        name: { required },
        email:{ required, email },
        password:{ required, minLength:minLength(6) },
        confirm:{ sameAsPassword:sameAs('password') }
    },
    methods: {
        async getSeller()
        {
            await this.user
            this.axios.get(`/store-sellers/${this.user.store.id}/active`,
            {
                headers:{
                    'accept':'Application/json',
                    'Authorization':`Bearer ${this.user.token}`
                }
            }).then( resp => {
                if( resp.data != null ){
                    let data = resp.data.data
                    this.id=data.id
                    this.email=data.email
                    this.name=data.name
                    this.last_name=data.last_name
                }
            }).catch( err => {             
                if( err.response ){
                    switch (err.response.status ) {
                        case 404:
                            /*this.$swal({
                                icon:'warning',
                                title: 'Espera',
                                text:'No existen registros para esta seccion'
                            })*/
                            break;
                    
                        default:
                            break;
                    }
                }else{
                    console.log( err )
                    this.$swal({
                        icon:'warning',
                        title: 'Algo salio mal',
                        text:'Contacta al administrador'
                    })
                }
            })
        },
        createSeller()
        {
            this.img_loading = true
            let data = {
                email:this.email,
                name:this.name,
                last_name:this.last_name,
                password:this.password,
            }
            this.axios.post(`/store-sellers/${this.user.store.id}/seller`,{
                ...data
            },{
                headers:{
                    'accept':'Application/json',
                    'Authorization':`Bearer ${this.user.token}`
                }
            }).then( resp => {
                this.img_loading = false
                console.log(resp)
                this.$swal({
                    icon:'success',
                    title: 'Exito',
                    text:'El registro ha sido creado'
                })
            }).catch( err => {
                this.img_loading = false
                if( err.response ){
                    switch (err.response.status) {
                        case 422:
                            var data = err.response.data.errors
                            this.err_email= data.email ? data.email[0] : null
                            this.err_name= data.name ? data.name[0] : null
                            this.err_last_name= data.last_name ? data.last_name[0] : null
                            this.err_password= data.password ? data.password[0] : null
                            setTimeout(() => {
                                this.clearError()
                            }, 5000);
                            break;
                    
                        default:
                            break;
                    }
                }else{
                    console.log( err )
                    this.$swal({
                        icon:'warning',
                        title: 'Algo salio mal',
                        text:'Contacta al administrador'
                    })
                }

            })
        },
        clearError(){
            this.err_email = null
            this.err_name = null
            this.err_last_name = null
            this.err_password = null
        }
    },
    mounted() {
        this.getSeller()
    },
    async created() {
        await this.user
    },
}