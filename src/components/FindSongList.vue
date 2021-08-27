<template>
  <div class="find_song_list">
    <div class="find_song_list_title ub">
      <slot name="title"></slot>
    </div>
    <div class="find_song_list_list ub">
      <slot name="list"></slot>
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FindSongList',
})
</script>
<style lang="less" scoped>
.find_song_list {
  width: 7.2rem;
  // height: 4rem;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0.2rem auto;
  .find_song_list_title {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
  }
  .find_song_list_list {
    width: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>