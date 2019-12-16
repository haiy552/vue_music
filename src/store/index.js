import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id:'1'
  },
  mutations: {
    getListId(state,id){
      return state.id = id;
    },

  },
  actions: {
  },
  getters: {
    seeId(state){
      return state.id;
    }
  },
  modules: {
  }
})
