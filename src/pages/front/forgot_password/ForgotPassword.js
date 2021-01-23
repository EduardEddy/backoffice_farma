import navbar from '@/components/front/menu/NavBar'
import footersection from '@/components/front/index/Footer.vue'
import { required, email } from 'vuelidate/lib/validators'

export default {
    name:'forgot-password',
    data() {
        return {
            email:null,
            img_loading:false
        }
    },
    components:{
        navbar, footersection
    },
    validations: {
        email: {
          required,email
        }
    },
    methods: {
        changePassword(){
            this.img_loading=true
            this.axios.post(`reset-password`,{
                email:this.email
            }).then(()=>{
                this.$swal({
                    icon:'success',
                    title: 'Éxito',
                    text:`Hemos enviado un email a ${this.email} para que puedas actualizar tu clave`
                })
                this.email=null
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