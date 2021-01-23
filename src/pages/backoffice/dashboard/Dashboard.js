import { mapState } from 'vuex'

import Sidebar from '@/components/dashboard/sidebar/Sidebar.vue'
import Navbar from '@/components/dashboard/navbar/Navbar.vue'
import Footer from '@/components/dashboard/footer/Footer.vue'

export default {
  data() {
        return {
            
        }
    },
  name: 'Dashboard',
  computed: {
    ...mapState(['sideBarOpen'])
  },
  components: {
    Sidebar,
    Navbar,
    Footer,
  }
}