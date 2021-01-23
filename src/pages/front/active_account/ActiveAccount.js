import navbar from '@/components/front/menu/NavBar'
import footersection from '@/components/front/index/Footer.vue'

export default {
    name:'forgot-password',
    data() {
        return {
            token:null    
        }
    },
    components:{
        navbar, footersection
    },
    methods: {
        active(){
            this.axios.get(`active/${this.token}`)
            .then( () => {
                this.$swal({
                    icon:'success',
                    title: 'Tu cuenta se ha activado con éxito',
                    confirmButtonText: `iniciar sesión`,
                    }).then((result) => {
                    if (result.isConfirmed) {
                        this.$router.push({name:'login'})
                    }
                });
            })
            .catch( err => {
                console.log( err )
                this.$swal({
                    icon:'danger',
                    title: 'Ah ocurrido un error',
                });
            })
        }
    },
    async mounted() {
        this.token = await this.$route.params.token
        this.active()
    },
}