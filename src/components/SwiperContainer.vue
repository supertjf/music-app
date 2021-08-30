<template>
  <van-swipe class="my_swiper" :autoplay="swiperOption.autoplay" :loop="swiperOption.loop" :show-indicators="swiperOption.showIndicators" :indicator-color="swiperOption.indicatorColor">
    <van-swipe-item v-for="(item, index) in swiperList" :key="index" @click="swiperClick(item)">
      <img :src="item.imageUrl" alt="">
    </van-swipe-item>
  </van-swipe>
</template>
<script>
import { defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'SwiperContainer',
  props: {
    swiperOption: {
      type: Object,
      default() {
        return {
          autoplay: 3000,
          loop: true,
          showIndicators: true,
          indicatorColor: '#ff6034',
        }
      },
    },
    swiperList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  components: {},
  setup() {
    const { ctx } = getCurrentInstance()
    const swiperClick = (data) => {
      ctx.$emit('swiperClick', data)
    }
    return {
      swiperClick,
    }
  },
})
</script>
<style lang="less">
.my_swiper {
  width: 100%;
  height: 100%;
  .van-swipe-item {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>