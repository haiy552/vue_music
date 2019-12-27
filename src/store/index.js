import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    music:{
      music_style: '',
      muisc_lits_id:'',
      music_id:'',
      music_scr:'',
      music_photo: '',
      music_title:'',
      music_time: '00:00',
      music_play: false,
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
    },
    change_music_time(state, music_time){
      return state.music.music_time = music_time;
    },
    change_music_play(state, bool){
      return state.music.music_play = bool;
    },
    change_music_style(state, music_style){
      return state.music.music_style = music_style;
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
    music_time_view(state){
      return state.music.music_time;
    },
    music_music_play(state){
      return state.music.music_play;
    },
    music_music_style(state){
      return state.music.music_style;
    },
  },
  modules: {
  }
})
