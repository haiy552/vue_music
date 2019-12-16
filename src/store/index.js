import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id:'',
    music_id:'',
    music_scr:""
  },
  mutations: {
    getListId(state,id){
      return state.id = id;
    },
    change_music_id(state, music_id){
      return state.music_id = music_id;
    },
    change_music_scr(state, scr){
      return state.music_scr = scr;
    }
  },
  actions: {
  },
  getters: {
    seeId(state){
      return state.id;
    },
    music_scr_view(state){
      return state.music_scr;
    },
  },
  modules: {
  }
})
