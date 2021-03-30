import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';

export default {
    name:'massiveProducts',
    data() {
        return {
            display:false,
            file:"",
            err_file:null,
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
            this.axios.post( '/products/massive-loads',formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${this.user.token}`
                }
            })
            .then( () => {
                this.img_loading = false
                this.file = ""
                this.display = false
                this.$swal({
                    icon:'success',
                    title: 'Exito',
                    text:'El registro ha sido creado'
                })
            })
            .catch( err => {
                this.img_loading=false
                if( err.response ){
                    switch (err.response.status) {
                        case 422:
                            var data = err.response.data.errors
                            this.err_file= data.file ? data.file[0] : null
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
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
    },
}