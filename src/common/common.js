import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
export function getListId(val){
    //把之前的url取消
    
    this.$store.commit("change_music_scr","");
    let listId = Number(val.target.id);
    this.$store.commit("change_music_id", listId);
    //获取当前数组
    let music_list = this.music_xinxi.find(item => item.id === listId);
    //获取当前歌曲总时间
    let music_time = music_list.music_time;
    //获取歌曲url，歌曲名和歌手
    let [music_url, music_title] = [music_list.url, `${music_list.name}~(❤ ω ❤)~${music_list.songer}`];
    //在store中存放url
    this.$store.commit("change_music_photo",music_url);
    //在store中存放歌曲名和歌手
    this.$store.commit("change_music_title",music_title);
    //通过歌曲id获取mp3的url
    axios.get(`/song/url?id=${listId}`).then(res => {
       let music_url = res.data.data[0].url;
    //存放mp3 url
       this.$store.commit("change_music_scr",music_url);
    })
    //存放歌曲总时间
    this.$store.commit("change_music_time", music_time);
    this.$store.commit("change_music_play", true);
    
}