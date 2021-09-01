<template>
  <div class="list_scroll">
    <div class="list_scroll_top ub ub-ac">
      <img class="icon_play_all" @click="setMusicPlayCurrentIndex(1)" src="../../../assets/img/pages/icon-play-all.png" alt="">
      <span class="font_1">播放全部</span><span class="font_2" v-if="playlist.tracks">(共{{ playlist.tracks.length }}首)</span>
      <div class="btn">
        + 收藏 ({{ playCountFun(playlist.subscribedCount) }})
      </div>
    </div>
    <div class="tracks_list ub ub-ac" v-for="(item, index) in playlist.tracks" :key="index" @click="setMusicPlayCurrentIndex(index)">
      <div class="index">{{ index + 1 }}</div>
      <div class="content">
        <div class="title">{{ item.name }}</div>
        <div class="author ub">
          <span class="tag" v-if="item.no === 1">原唱</span>
          <span v-for="(value, n) in item.ar" :key="n">{{ value.name }} - </span>
          {{ item.al.name }}
        </div>
      </div>
      <img class="movie" v-if="item.mv != 0" src="../../../assets/img/pages/icon-play-movie.png" alt="">
      <img class="operation" src="../../../assets/img/pages/icon-list-operation.png" alt="">
    </div>
    <div style="width:100%;height:1.2rem;"></div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { mapMutations } from 'vuex'
export default defineComponent({
  name: 'ListScroll',
  props: {
    playlist: {
      type: Object,
      defult() {
        return {}
      },
    },
  },
  setup() {
    const playCountFun = (count) => {
      if (count >= 100000000) {
        return (count / 100000000).toFixed(2) + '亿'
      } else if (count >= 10000) {
        return (count / 10000).toFixed(2) + '万'
      } else {
        return count
      }
    }
    return {
      playCountFun,
      ...mapMutations(['setMusicPlayCurrentIndex']),
    }
  },
})
</script>
<style lang="less" scoped>
.list_scroll {
  width: 100%;
  background-color: #fff;
  border-radius: 0.4rem;
  .list_scroll_top {
    width: 100%;
    height: 1.2rem;
    padding: 0.2rem;
    box-sizing: border-box;
    position: sticky;
    top: 1rem;
    z-index: 100;
    background-color: #fff;
    border-radius: 0.4rem;
    .icon_play_all {
      width: 0.6rem;
      height: 0.6rem;
    }
    .font_1 {
      font-size: 0.34rem;
      font-weight: 500;
      text-indent: 0.2rem;
    }
    .font_2 {
      font-size: 0.3rem;
      color: rgba(0, 0, 0, 0.5);
    }
    .btn {
      padding: 0.2rem;
      background-color: orangered;
      font-size: 0.3rem;
      color: #ffffff;
      border-radius: 1rem;
      position: absolute;
      top: 50%;
      right: 0.2rem;
      transform: translateY(-50%);
      &:active {
        background-color: rgb(255, 96, 38);
      }
    }
  }
  .tracks_list {
    width: 100%;
    height: 1.2rem;
    padding: 0.2rem;
    box-sizing: border-box;
    .index {
      min-width: 0.6rem;
      font-size: 0.32rem;
      color: rgba(0, 0, 0, 0.4);
      text-align: center;
    }
    .content {
      width: 5rem;
      .title {
        font-size: 0.32rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        white-space: nowrap;
      }
      .author {
        font-size: 0.2rem;
        line-height: 0.4rem;
        color: rgba(0, 0, 0, 0.5);
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
        white-space: nowrap;
        .tag {
          font-size: 0.1rem;
          color: red;
          margin-right: 0.1rem;
        }
      }
    }
    .movie {
      width: 0.6rem;
      height: 0.6rem;
    }
    .operation {
      width: 0.6rem;
      height: 0.6rem;
      position: absolute;
      right: 0.2rem;
    }
  }
}
</style>