<template>
  <router-view />
  <MusicConsole />
</template>

<script>
import MusicConsole from '@/components/MusicConsole'
import { computed, defineComponent, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'App',
  components: {
    MusicConsole,
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const path = computed(() => route.path)
    watch(
      path,
      (newV, oldV) => {
        if (newV === '/musicdetail') {
          store.state.showMusicConsole = false
        } else {
          store.state.showMusicConsole = true
        }
      },
      { immediate: true, deep: true }
    )
    return {}
  },
})
</script>
<style lang="less">
* {
  font-family: '微软雅黑' !important;
}
</style>
