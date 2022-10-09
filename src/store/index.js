import Vue from 'vue'
import Vuex from 'vuex'
import MaskModule from "@/store/MaskModule";
Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return{
      data: null,
      place: {},
    }
  },
  getters: {
  },
  mutations: {
    getWeatherData(state, data){
      state.data = data;
    }
  },
  actions: {
    async getWeatherData(context){
      console.log(context);
    }
  },
  modules: {
    MaskModule
  }
})
