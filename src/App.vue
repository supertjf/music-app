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
})
</script>
<style lang="less">
* {
  font-family: '微软雅黑' !important;
}
</style>
