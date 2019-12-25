<template>
   <div class="music_logo">
       <div class="music_logo_box">
         <img src="../image/music_logo.jpg" alt="" class="music_log_photo">
       </div>
   </div>
</template>

<script>
    
    export default {
        name: "music_logo",
        components: {
        
        }
        
    }
</script>

<style scoped lang="scss">
    .music_logo_box {
        width: 24rem;
        height: 24rem;
        background-color: #4250cc;
        border-radius: 50%;
        padding: 1rem;
        border: 1rem solid #3bc76a;
        box-sizing: border-box;
        .music_log_photo {
            width: 20rem;
            height: 20rem;
            border-radius: 50%;
            animation:bottom_top 8s linear infinite;
        }
    }

@keyframes bottom_top
{
  0%   {transform:rotateZ(0);}
  25%  {transform:rotateZ(90deg);}
  50%  {transform:rotateZ(180deg);}
  75%  {transform:rotateZ(270deg);}
  100% {transform:rotateZ(360deg);}
}
</style>