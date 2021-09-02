<template>
  <div class="music_detail_container">
    <div class="bg" :style="{ backgroundImage:`url(${musicDetail?.al?.picUrl})` }"></div>
    <div class="play_top ub ub-pb">
      <img class="left" src="../assets/img/pages/icon-b-go-back.png" alt="">
      <div class="content">
        <span>很爱很爱你哈哈哈</span>
        <p>飒飒</p>
      </div>
      <img src="../assets/img/pages/icon-b-share.png" alt="" class="right">
    </div>
    <div class="play_container"></div>
    <div class="play_lyric"></div>
    <div class="play_menu"></div>
    <div class="play_progress"></div>
    <div class="play_console"></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  props: {
    musicDetail: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  setup(props) {
    console.log(props.musicDetail, '------')
  },
})
</script>
<style lang="less" scoped>
.music_detail_container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgb(78, 75, 75);
  z-index: 200;

  // transform: translateX(100%);
  .bg {
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: auto 100%;
    filter: blur(0.5rem);
  }
  .play_top {
    width: 100%;
    height: 1rem;
    padding: 0.1rem;
    box-sizing: border-box;
    img {
      width: 0.8rem;
      height: 0.8rem;
    }
    .content {
      width: 70%;
      overflow: hidden;
      text-align: center;
      font-size: 0.38rem;
      color: #fff;
      p {
        font-size: 0.3rem;
        color: rgba(255, 255, 255, 0.5);
        line-height: 0.6rem;
      }
    }
  }
}
</style>