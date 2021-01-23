import navbar from '@/components/front/menu/NavBar'
import footersection from '@/components/front/index/Footer.vue'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
    name:'reset-password',
    data() {
        return {
            password:null,
            confirm:null,
            img_loading:false
        }
    },
    components:{
        navbar, footersection
    },
    validations: {
        password:{
            required,minLength:minLength(6)
        },
        confirm:{
            sameAsPassword:sameAs('password')
        }
    },
    methods: {
        cahngePassword(){
            this.img_loading = true
            this.axios.put(`reset-password`,{
                password:this.password,
                confirm:this.confirm
            }).then( ()=>{
                this.$swal({
                    icon:'success',
                    title: 'Éxito',
                    text:'Tu clave ha sido actualizada'
                })
                this.password=null
                this.confirm = null
                this.$v.$reset()
            }).catch( err => {
                this.img_loading=false
                if( err.response ){
                    switch (err.response.status) {
                        case 401:
                            this.$swal({
                                icon:'info',
                                title: 'Espera',
                                text:'Credenciales invalidas'
                            })
                            this.password = null
                            this.$v.$reset()
                            break;
                    
                        default:
                            this.$swal({
                                icon:'error',
                                title: 'Error interno',
                                text:'Contacta al administrador'
                            })
                            break;
                    }
                }else{
                    this.$swal({
                        icon:'warning',
                        title: 'Espera',
                        text:'Algo ha salido mal'
                    })
                }
            })
        }
    },
}