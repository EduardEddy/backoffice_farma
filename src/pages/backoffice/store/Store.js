import { mapState, mapActions } from 'vuex'

import Sidebar from '@/components/dashboard/sidebar/Sidebar.vue'
import Navbar from '@/components/dashboard/navbar/Navbar.vue'
import Footer from '@/components/dashboard/footer/Footer.vue'
import { required } from 'vuelidate/lib/validators'
import InputText from 'primevue/inputtext';

import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

export default {
    name:'store',
    data() {
        return {
            id:null,
            name:null,
            bussnise_id:null,
            country:null,
            city:null,
            address:null,
            lat:0,
            lng:0,

            err_name:null,
            err_bussnise_id:null,
            err_country:null,
            err_city:null,
            err_address:null,

            mapStyle:'mapbox://styles/mapbox/streets-v11',
            accessToken:'pk.eyJ1IjoiZWR1YXJ4IiwiYSI6ImNrMzg2MW5rbTA2NmwzaHFoZ3B4Y2Y1eGsifQ.3eK22_LxNiyKxoulk-2Gog',
            coordinates: [0, 0]
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
        InputText,
        MglMap, MglMarker
    },
    validations: {
        address: { required },
        name: { required },
        country:{ required },
        city:{ required },
    },
    methods: {
        ...mapActions('UserActiveNameSpaced',['storageToState']),

        postStore(){
            let data ={
                address:this.address,
                business_name:this.name,
                country:this.country,
                city:this.city,
                bussiness_id: this.bussnise_id,
                lat:this.lat,
                lng:this.lng
            }
            var url = null;
            if( this.id == null){
                url = this.axios.post(`/stores`,{...data },
                {
                    headers:{'Authorization':`Bearer ${this.user.token}`}
                })
            }else{
                url = this.axios.put(`/stores/${this.id}`,{...data },
                {
                    headers:{'Authorization':`Bearer ${this.user.token}`}
                })
            }
            
            url.then( (resp) => {
                //this.user.store = resp.data.store
                var user = JSON.parse(localStorage.getItem("user"));
                user.store=resp.data.data
                localStorage.setItem('user',JSON.stringify(user))
                this.storageToState()

                this.$swal({
                    icon:'success',
                    title: 'Éxito',
                    text:'Establecimiento creado'
                })
            })
            .catch( err => {
                console.log( err )
                if( err.response ){
                    switch (err.response.status) {
                        case 422:
                            this.$swal({
                                icon:'info',
                                title: 'Espera',
                                text:'Debes completar los datos correctamente'
                            })
                            var error = err.response.data.errors
                            this.showError(error)
                            break;
                    
                        default:
                            break;
                    }
                }else{
                    this.$swal({
                        icon:'warning',
                        title: 'Espera',
                        text:'Algo salio mal'
                    })
                }
            })
        },
        showError(error){
            this.err_name= error.business_name ?error.business_name[0]:null
            this.err_country = error.country?error.country[0] : null
            this.err_city = error.city ? error.city[0] : null
            this.err_address = error.address ? error.address[0] : null
            setTimeout(() => {
                this.err_name = null
                this.err_country = null
                this.err_city = null
                this.err_address = null
            }, 5000);
        },
        async getStore(){
            await this.user
            this.axios.get(`/managers/${this.user.id }`,
                {
                    headers:{
                        'accept':'Application/json',
                        'Authorization':`Bearer ${this.user.token}`
                    }
                }
            ).then( resp => {
                let data = resp.data.data.store
                if( data != null ){
                    this.id = data.id
                    this.name = data.business_name
                    this.country = data.country
                    this.city = data.city
                    this.bussnise_id = data.bussiness_id
                    this.address = data.address
                    this.lat = data.lat
                    this.lng = data.lng
                    this.coordinates=[this.lng, this.lat]
                    
                }else{
                    this.getInfo()
                }
                
            }).catch( err => {
                console.log( err )
                this.$swal({
                    icon:'warning',
                    title: 'Espera',
                    text:'Algo salio mal'
                })
            })
        },
        getInfo(){
            this.axios.get('https://ipinfo.io?token=9dce4e5a9333b1')
            .then( resp => {
                let data = resp.data
                this.city = data.city
                this.country = data.country
                let loc = data.loc.split(",")
                if( loc.length > 0){
                    this.lat = loc[0]
                    this.lng = loc[1]
                    this.coordinates=[this.lng, this.lat]
                }
            }).catch( err => console.log( err ))
        },
        async onMapLoad(event) {
            // Here we cathing 'load' map event
            const asyncActions = event.component.actions
      
            const newParams = await asyncActions.flyTo({
              center: [this.lng, this.lat],
              zoom: 15,
              speed: 1,
            })
            console.log(newParams)
            /* => {
                    center: [30, 30],
                    zoom: 9,
                    bearing: 9,
                    pitch: 7
                  }
            */
          }
    },
    mounted() {
        this.getStore()
    },
    async created() {
        await this.user
        this.mapbox = Mapbox;
    },
}