import { mapState, mapActions } from 'vuex'

export default {
    name:'sidebar',
    computed: {
      ...mapState(['sideBarOpen']),
      ...mapState('UserActiveNameSpaced',['user'])
    },
    methods:{
      ...mapActions('UserActiveNameSpaced',['storageToState']),
    },
    created(){
      if( !this.user.name ){
        this.storageToState()
      }
    }
}