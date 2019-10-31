<template>
  <div class="home">
    <p id="title">{{count}}</p>
    <Button type="primary" @click="handelClick">Primary</Button>
    <img alt="Vue logo" src="../assets/logo.png">

    <p>{{msg}}</p>
    <Button @click="msgClick">message</Button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import store from '@/store';

@Component({
  components: {
    HelloWorld,
  },
})

export default class Home extends Vue {
  @State private count !: number;
  @Mutation private increment!: (amount: number) => void;
  msg: any;
  x: [string, number] | undefined;
  Color: {
    'Red': any;
    'Green': any;
    'Blue': any;
  } | undefined;


  data () {
    return {
      theme1: store.state.count,
      msg: 'Hello Vue.js!',

    }
  }

  handelClick():void{
    this.increment(10)
  }
  bb(dd:any){
    console.log(dd)
  }
  msgClick(s: any){
    this.x = ['hello', 10];
    this.x[0] = 'world';
    // let xx= 5 |> this.bb
    let ary:string[] = [];
    // let dd =ary ?.length;
    // let cc = s ?? "dd"
    {...ary}
    this.msg = this.msg.split('').reverse().join('')
  }

}
</script>

<style lang="less">
  @import "../styles/Home.less";
</style>
