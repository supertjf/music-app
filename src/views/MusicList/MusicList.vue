<template>
  <!-- <ListScroll></ListScroll> -->
  <ListTop :playlist="state.playlist" />
</template>
<script>
import { defineComponent, getCurrentInstance, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
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
          console.log(res)
          state.playlist = res.data.playlist
          console.log(state.playlist, '--------')
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