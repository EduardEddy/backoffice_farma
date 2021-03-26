import { mapState } from 'vuex'

import Sidebar from '@/components/dashboard/sidebar/Sidebar.vue'
import Navbar from '@/components/dashboard/navbar/Navbar.vue'
import Footer from '@/components/dashboard/footer/Footer.vue'
import { required } from 'vuelidate/lib/validators'
import InputText from 'primevue/inputtext';
import FileUpload from 'primevue/fileupload';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import DialogMassive from '@/pages/backoffice/products/massive/MassiveProducts.vue'

export default {
    name:'Products',
    data() {
        return {
            name:"",
            description:"",
            component:"",
            cant:"",
            price:0,
            file:"",
            img_loading:"",

            err_name:null,
            err_description:null,
            err_component:null,
            err_cant:null,
            err_price:null,
            err_image:null,
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
        InputText, FileUpload, Textarea, InputNumber, Button,
        DialogMassive
    },
    validations:{
        name:{required}
    },
    methods: {
		onUpload() 
        {
			this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
		},

        createProduct() 
        {
            this.img_loading=true
            
            let formData = new FormData();
            formData.append('file', this.file);
            formData.append('store_id',this.user.store.id)
            formData.append('name', this.name)
            formData.append('description', this.description)
            formData.append('components', this.component)
            formData.append('cant', this.cant)
            formData.append('price', this.price)
            this.axios.post( '/products',formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization':`Bearer ${this.user.token}`
                }
            })
            .then( () => {
                this.img_loading=false
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
                            this.err_name= data.name ? data.name[0] : null
                            this.err_cant= data.cant ? data.cant[0] : null
                            this.err_component= data.components ? data.components[0] : null
                            this.err_price= data.price ? data.price[0] : null
                            this.err_image= data.file ? data.file[0] : null
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
        clearError(){
            this.err_name=null;
            this.err_description=null;
            this.err_component=null;
            this.err_cant=null;
            this.err_price=null;
            this.err_image=null;
        },
        openDialog(){
            this.$refs.dialog_massive.display = true
        }
	},
    async created() {
        await this.user
    },
}