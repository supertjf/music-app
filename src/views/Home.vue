<template>
  <NavBar :btnList="btnList" @btnClickFun="btnClickFun" />
  <div class="swiper_container">
    <SwiperContainer :swiperList="swiperList" @swiperClick="swiperClick" />
  </div>
  <IconList :iconList="iconList" @iconClick="iconClick" />
  <FindSongList>
    <template #title>
      <span class="span_title">
        寻找最美歌单
      </span>
      <div class="btn_list">
        更多
      </div>
    </template>
    <template #list>
      <div class="list_div" v-for="(item, index) in songList" :key="index" @click="songClick(item)">
        <div class="paly_count">
          <img src="../assets/img/components/icon-play-count.svg" alt="">
          {{ item.playCount }}
        </div>
        <img :src="item.picUrl" alt="">
        {{ item.name }}
      </div>
    </template>
  </FindSongList>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SwiperContainer from '@/components/SwiperContainer.vue'
import IconList from '@/components/IconList.vue'
import FindSongList from '@/components/FindSongList.vue'
import { getSwiperList, getFindSongList } from '@/api/index'

import { getCurrentInstance, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Home',
  components: {
    NavBar,
    SwiperContainer,
    IconList,
    FindSongList,
  },
  computed: {},
  setup() {
    const router = useRouter()
    onMounted(() => {
      getSwiperListFun()
      getFindSongListFun()
    })
    // Navbar
    const btnList = [
      {
        name: '我的',
      },
      {
        name: '发现',
      },
      {
        name: '云村',
      },
      {
        name: '视频',
      },
    ]
    const btnClickFun = (data) => {
      console.log(data)
    }

    // SwiperContainer
    const swiperList = ref([])
    const swiperClick = (item) => {
      console.log(item)
    }
    const getSwiperListFun = async () => {
      try {
        let res = await getSwiperList({ type: 1 })
        if (res.data.code === 200) {
          swiperList.value = res.data.banners
        }
      } catch (err) {
        console.log(err)
      }
    }

    // IconList
    const iconList = [
      {
        class: 'icon-tuijian',
        title: '每日推荐',
      },
      {
        class: 'icon-tuijian',
        title: '私人FM',
      },
      {
        class: 'icon-tuijian',
        title: '歌单',
      },
      {
        class: 'icon-tuijian',
        title: '排行榜',
      },
      {
        class: 'icon-tuijian',
        title: '数字专辑',
      },
      {
        class: 'icon-tuijian',
        title: '专注冥想',
      },
      {
        class: 'icon-tuijian',
        title: '歌房',
      },
    ]
    const iconClick = (data) => {
      console.log(data)
    }

    // FindSongList
    const songList = ref([])
    const getFindSongListFun = async () => {
      try {
        let res = await getFindSongList()
        if (res.data.code === 200) {
          res.data.result.map((item) => {
            if (item.playCount >= 100000000) {
              item.playCount = (item.playCount / 100000000).toFixed(2) + '亿'
              return item
            } else if (item.playCount >= 10000) {
              item.playCount = (item.playCount / 10000).toFixed(2) + '万'
              return item
            }
          })
          songList.value = res.data.result
        }
      } catch (err) {
        console.log(err)
      }
    }
    const songClick = (data) => {
      router.push({ path: '/musiclist', query: { id: data.id } })
    }

    return {
      btnList,
      btnClickFun,

      swiperList,
      swiperClick,
      getSwiperListFun,

      iconList,
      iconClick,

      songList,
      getFindSongListFun,
      songClick,
    }
  },
}
</script>
<style lang="less" scoped>
.swiper_container {
  width: 7.2rem;
  height: 2.66rem;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 0.1rem auto;
  border-radius: 0.2rem;
  overflow: hidden;
}
.span_title {
  font-size: 0.4rem;
  font-weight: bold;
}
.btn_list {
  font-size: 0.18rem;
  text-align: center;
  line-height: 0.3rem;
  width: 0.9rem;
  height: 0.3rem;
  border: 0.02rem solid rgba(0, 0, 0, 0.3);
  border-radius: 0.2rem;
  position: absolute;
  top: 50%;
  right: 0.2rem;
  transform: translateY(-50%);
}
.list_div {
  width: 2rem;
  margin: 0 0.2rem 0 0;
  font-size: 0.24rem;
  line-height: 0.3rem;
  color: rgba(0, 0, 0, 0.7);
  position: relative;
  margin-top: 0.1rem;
  &::before {
    content: '';
    width: 85%;
    height: 0.1rem;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: -0.1rem;
    left: 50%;
    border-radius: 1rem 1rem 0 0;
    transform: translateX(-50%);
  }
  .paly_count {
    padding: 0.05rem 0.15rem 0.05rem 0.45rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: #ffffff;
    position: absolute;
    top: 0.05rem;
    right: 0.05rem;
    img {
      width: 0.3rem;
      height: 0.3rem;
      position: absolute;
      left: 0.15rem;
    }
  }
  img {
    width: 2rem;
    border-radius: 0.2rem;
  }
}
</style>
