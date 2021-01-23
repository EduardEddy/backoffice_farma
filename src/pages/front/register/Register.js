import navbar from '@/components/front/menu/NavBar'
import footersection from '@/components/front/index/Footer.vue'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
    name:'register',
    data() {
        return {
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
    components:{
        navbar, footersection
    },
    validations: {
        name:{ required },
        last_name:{ required },
        email: {
          required,email
        },
        password: {
            required,
            minLength:minLength(6)
        },
        confirm:{
            sameAsPassword:sameAs('password')
        }
    },
    methods: {
        register(){
            this.clearError()
            this.img_loading = true
            let data={
                email:this.email,
                name:this.name,
                last_name:this.last_name,
                password:this.password,
                confirm:this.confirm
            }

            this.axios.post(`managers`,{
                ...data
            }).then( () => {
                this.img_loading = false
                this.$swal({
                    icon:'success',
                    title: 'Éxito',
                    text:`Se ha enviado un correo a tu cuenta ${this.email} para que puedas activar tu cuenta`
                })
                this.clearInput()
                this.$v.$reset()
            }).catch( err => {
                this.img_loading=false
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
        },
        clearInput(){
            this.email=null;
            this.name=null;
            this.last_name=null;
            this.password=null;
            this.confirm=null;
        },
        clearError(){
            this.err_email = null
            this.err_name = null
            this.err_last_name = null
            this.err_password = null
        }
    },
}