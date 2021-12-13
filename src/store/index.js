import Vuex from "vuex";
import Vue from "vue";
import pokemon from "@/store/modules/pokemon.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    pokemon
  }
});
