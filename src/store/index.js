import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id:'1'
  },
  mutations: {
    getListId(state,id){
      // console.log(this.state.id);
      // console.log(this.state.id);
      return state.id = id;
    }
  },
  actions: {
  },
  modules: {
  }
})
