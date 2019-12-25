<template>
   <div>
      <p>{{music_lyric}}</p>
   </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.baseURL = 'http://localhost:3000';
    export default {
        name: "lyric_com",
        data() {
            return{
                music_lyric:''
            }
        },
        created() {
            this.lyric_init()
        },
        methods: {
            lyric_init(){
                let music_id = this.$route.query.id;
                axios.get(`/lyric?id=${music_id}`)
                .then(res => {res.data})
                .then(data => this.music_lyric = data)
            }
        }
    }
</script>

<style scoped lang="scss">

</style>