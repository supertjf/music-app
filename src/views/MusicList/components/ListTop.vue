<template>
  <img class="icon_bg" :src="playlist.coverImgUrl" alt="">
  <div class="list_top ub">
    <img class="icon_go_back" @click="goBack" src="../../../assets/img/pages/icon-b-go-back.png" alt="">
    <div class="list_top_title">
      歌单
      <img class="icon_R" src="../../../assets/img/pages/icon-b-R.png" alt="">
    </div>
    <img class="icon_find" src="../../../assets/img/pages/icon-b-find.png" alt="">
    <img class="icon_list_operation" src="../../../assets/img/pages/icon-b-list-operation.png" alt="">
  </div>
  <div class="list_top_container ub ub-pb">
    <div class="container_left">
      <div class="right_title_count">
        <img src="../../../assets/img/components/icon-play-count.svg" alt="">
        {{ playCountFun(playlist.playCount) }}
      </div>
      <img :src="playlist.coverImgUrl" alt="">
    </div>
    <div class="container_right">
      <div class="right_title">
        {{ playlist.name }}
      </div>
      <div class="right_head"></div>
      <div class="right_detail"></div>
    </div>
  </div>

</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'ListTop',
  props: {
    playlist: {
      type: Object,
      defult() {
        return {}
      },
    },
  },
  setup() {
    const router = useRouter()
    onMounted(() => {})
    const goBack = () => {
      router.push({ path: '/' })
    }
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
      goBack,
      playCountFun,
    }
  },
})
</script>
<style lang="less" scoped>
.list_top {
  width: 100%;
  height: 1rem;
  padding: 0.1rem 0.2rem;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.3);
  .icon_go_back {
    height: 100%;
  }
  .list_top_title {
    height: 100%;
    font-size: 0.4rem;
    color: #ffffff;
    font-weight: bold;
    margin-left: 0.3rem;
    position: relative;
    line-height: 0.8rem;
    .icon_R {
      width: 0.3rem;
      height: 0.3rem;
      position: absolute;
      top: 0;
      right: -0.3rem;
    }
  }
  .icon_find {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.2rem;
    right: 1.3rem;
  }
  .icon_list_operation {
    width: 0.6rem;
    height: 0.6rem;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
  }
}
.icon_bg {
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  filter: blur(0.8rem);
}
.list_top_container {
  width: 100%;
  padding: 0.5rem 0.3rem;
  box-sizing: border-box;
  background-color: red;
  .container_left {
    width: 3rem;
    height: 3rem;
    position: relative;
    .right_title_count {
      font-size: 0.24rem;
      font-weight: 1;
      color: #ffffff;
      padding: 0.1rem 0.1rem 0.1rem 0.5rem;
      box-sizing: border-box;
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      img {
        width: 0.3rem;
        position: absolute;
        top: 0.05rem;
        left: 0.15rem;
      }
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 0.2rem;
    }
  }
  .container_right {
    width: 3.5rem;
    height: 100%;
    text-align: justify;
    word-wrap: break-word;
    .right_title {
      font-size: 0.36rem;
      font-weight: bold;
      color: #ffffff;
      position: relative;
    }
  }
}
</style>