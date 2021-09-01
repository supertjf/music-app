<template>
  <ListTop :playlist="state.playlist" />
  <ListScroll :playlist="state.playlist" />
</template>
<script>
import { defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import store from '@/store/index.js'
import { getSongListDetail } from '@/api/index'
import ListScroll from './components/ListScroll'
import ListTop from './components/ListTop'
export default defineComponent({
  name: 'MusicList',
  components: { ListTop, ListScroll },
  setup() {
    const route = useRoute()
    let state = reactive({
      list: [],
      playlist: {},
    })
    onMounted(async () => {
      try {
        let id = route.query.id
        let res = await getSongListDetail(id)
        if (res.data.code === 200) {
          state.playlist = res.data.playlist
          store.commit('setMusicPlayList', res.data.playlist.tracks)
        }
      } catch (err) {
        console.log(err)
      }
    })

    return {
      state,
    }
  },
})
</script>