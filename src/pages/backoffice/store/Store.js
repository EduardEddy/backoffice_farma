import { mapState } from 'vuex'

import Sidebar from '@/components/dashboard/sidebar/Sidebar.vue'
import Navbar from '@/components/dashboard/navbar/Navbar.vue'
import Footer from '@/components/dashboard/footer/Footer.vue'
import Steps from 'primevue/steps';
import StepsDoc from 'StepsDoc';

export default {
    name:'store',
    data() {
        return {
            items: [{
                label: 'Personal',
                to: '/step1'
            },
            {
                label: 'Seat',
                to: '/steps/seat'
            },
            {
                label: 'Payment',
                to: '/steps/payment'
            },
            {
                label: 'Confirmation',
                to: '/steps/confirmation'
            }],
            formObject: {} 
        }
    },
    computed: {
        ...mapState(['sideBarOpen'])
      },
    components: {
        Sidebar,
        Navbar,
        Footer,
        Steps,
        'StepsDoc':StepsDoc
    },
    methods: {
        nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
    }
}