store使用
1.  
    import {State, Mutation, Getter} from 'vuex-class';
    
    @State private count !: number;
    @Mutation private increment!: (amount: number) => void;
    @Getter private doneTodos: any;
    
    this.count  this.increment  this.doneTodos
    
2.
    import store from '@/store';
    
    store.state.count   store.getters.anthorData
    
3.  
    this.$store.state.count
    this.$store.getters.doneTodos

4.
     this.$store.dispatch('sync',{
          mutationTypes:'HOME_MUTATION',
          num: 100
          }).then(res=>{
    
        })
