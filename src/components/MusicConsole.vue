<template>
  <div class="music_console ub ub-pb" @click="goMusicDetailPage" v-if="showMusicConsole">
    <img class="music_img" :src="musicPlayList[musicPlayCurrentIndex]?.al?.picUrl || musicImg" alt="">
    <div class="content ub ub-ver ub-pa">
      <div class="title">{{ musicPlayList[musicPlayCurrentIndex]?.name || '歌曲名字' }}</div>
      <div class="lyric">横滑可以切换上下首哦</div>
    </div>
    <img class="music_play" src="../assets/img/pages/icon-music-play.png" alt="" @click.stop="playMusicFun" v-if="showPlay">
    <img class="music_play" src="../assets/img/pages/icon-music-pause.png" alt="" @click.stop="playMusicFun" v-else>

    <img class="music_list" src="../assets/img/pages/icon-list.png" alt="">
  </div>
  <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${musicPlayList[musicPlayCurrentIndex]?.id}.mp3`"></audio>
</template>
<script>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
} from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  setup() {
    const router = useRouter()
    const { ctx } = getCurrentInstance()
    const store = useStore()
    const musicPlayList = computed(() => store.state.musicPlayList)
    watch(musicPlayCurrentIndex, () => {
      showPlay.value = true
    })
    const musicPlayCurrentIndex = computed(
      () => store.state.musicPlayCurrentIndex
    )
    watch(musicPlayCurrentIndex, () => {
      setTimeout(() => ctx.$refs.audio.play())
      showPlay.value = false
    })

    const showPlay = ref(true)
    const playMusicFun = () => {
      if (ctx.$refs.audio.paused) {
        ctx.$refs.audio.play()
        showPlay.value = false
      } else {
        ctx.$refs.audio.pause()
        showPlay.value = true
      }
    }
    const showMusicConsole = computed(() => store.state.showMusicConsole)
    const goMusicDetailPage = () => {
      router.push({
        path: '/musicdetail',
      })
    }

    return {
      musicImg: require('../assets/img/pages/icon-bigpan.png'),
      musicPlayList,
      musicPlayCurrentIndex,
      showPlay,
      playMusicFun,
      goMusicDetailPage,
      showMusicConsole,
    }
  },
})
</script>
<style lang="less" scoped>
.music_console {
  width: 100%;
  height: 1.3rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 0.15rem;
  box-sizing: border-box;
  .music_img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .content {
    width: 4rem;
    .title {
      font-size: 0.34rem;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      white-space: nowrap;
    }
    .lyric {
      font-size: 0.28rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: block;
      white-space: nowrap;
    }
  }
  .music_play {
    width: 0.7rem;
    height: 0.7rem;
    margin-top: 0.15rem;
  }
  .music_list {
    width: 0.7rem;
    height: 0.7rem;
    margin-top: 0.15rem;
  }
}
</style>