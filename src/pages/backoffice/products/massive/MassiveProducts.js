import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';

export default {
    name:'massiveProducts',
    data() {
        return {
            display:true,
            file:"",
            err_image:null,
            img_loading:false,

        }
    },
    props:{
        user:Object
    },
    components:{
        Dialog, Button, ProgressSpinner
    },
    methods: {
        createMassiveProduct()
        {
            this.img_loading=true
            
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('store', this.user.store.id);
            this.axios.post( '/carga/masiva',formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${this.user.token}`
                }
            })
            .then( () => {
                this.img_loading = false
                this.$swal({
                    icon:'success',
                    title: 'Exito',
                    text:'El registro ha sido creado'
                })
            })
            .catch( err => {
                this.img_loading = false
                console.log( err )
                this.$swal({
                    icon:'error',
                    title: 'Espera',
                    text:'Algo salio mal'
                })
            })
        },     
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
    },
}