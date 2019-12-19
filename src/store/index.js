import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    music:{
      muisc_lits_id:'',
      music_id:'',
      music_scr:'',
      music_photo: '',
      music_title:''
    }
  },
  mutations: {
    getListId(state,id){
      return state.music.muisc_lits_id = id;
    },
    change_music_id(state, music_id){
      return state.music.music_id = music_id;
    },
    change_music_scr(state, scr){
      return state.music.music_scr = scr;
    },
    change_music_photo(state, music_photo){
      return state.music.music_photo = music_photo;
    },
    change_music_title(state, music_title){
      return state.music.music_title = music_title;
    }
  },
  actions: {
  },
  getters: {
    seeId(state){
      return state.music.muisc_lits_id;
    },
    music_id_view(state){
      return state.music.music_id;
    },
    music_scr_view(state){
      return state.music.music_scr;
    },
    music_photo_view(state){
      return state.music.music_photo;
    },
    music_title_view(state){
      return state.music.music_title;
    },
  },
  modules: {
  }
})
