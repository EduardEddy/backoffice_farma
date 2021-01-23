import { mapActions } from 'vuex'
import navbar from '@/components/front/menu/NavBar'
import footersection from '@/components/front/index/Footer.vue'
import { required, email } from 'vuelidate/lib/validators'
export default {
    name:'login',
    data() {
        return {
            email:null,
            password:null,
            img_loading:false
        }
    },
    components:{
        navbar, footersection
    },
    validations: {
        email: {
          required,email
        },
        password: {
            required,
        }
    },
    methods: {
        ...mapActions('UserActiveNameSpaced',['storageToState']),
        login(){
            this.img_loading=true
            let data = {
                email:this.email,
                password:this.password
            }
            this.axios.post(`login`,{
                ...data
            }).then( resp => {
                this.img_loading=false
                let user = resp.data.data;
                localStorage.setItem('user',JSON.stringify(user))
                this.storageToState()
                this.$router.push({name:'dashboard'})
                
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