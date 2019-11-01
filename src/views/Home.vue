<template>
  <div class="home">
    <p id="title">{{this.$store.state.a.count}}</p>
    <Button type="primary" @click="handelClick">Primary</Button>
    <img alt="Vue logo" src="../assets/logo.png">

    <p>{{msg}}</p>
    <Button @click="msgClick">message</Button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {State, Mutation, Getter, Action} from 'vuex-class';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import store from '@/store';

@Component({
  components: {
    HelloWorld,
  },
})

export default class Home extends Vue {
  @State private count !: number;
  @Mutation private HOME_MUTATION!: (amount: number) => void;
  @Getter private doneTodos: any;
  @Getter private anthorData: any;
  @Action private sync!: (data: any) => void;
  msg: any;
  x: [string, number] | undefined;
  Color: {
    'Red': any;
    'Green': any;
    'Blue': any;
  } | undefined;


  data () {
    return {
      theme1: this.$store.state.a.count,
      msg: 'Hello Vue.js!',

    }
  }

  handelClick():void{
    // this.HOME_MUTATION(10)
    this.$store.dispatch('sync',{
      mutationTypes:'HOME_MUTATION',
      num: 100
      }).then(res=>{

    })
  }

  msgClick(){
    this.x = ['hello', 10];
    this.x[0] = 'world';

    // console.log(this.count,this.doneTodos,this.$store.getters.anthorData,'arry')
    this.msg = this.msg.split('').reverse().join('')
  }

}
</script>

<style lang="less">
  @import "../styles/Home.less";
</style>
