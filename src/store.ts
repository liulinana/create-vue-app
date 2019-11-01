import Vue from 'vue'
import Vuex from 'vuex'
import {modelA} from "@/vuex/modules/HomeModules";

Vue.use(Vuex);

// @ts-ignore
export default new Vuex.Store({
  modules:{
    a: modelA
  }
});

