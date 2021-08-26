<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in swiperList" :key="index" @click="swiperClick(item)">
        <img :src="item.url" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <template v-if="swiperOption.navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>

    <!-- 如果需要滚动条 -->
    <template v-if="swiperOption.scrollbar">
      <div class="swiper-scrollbar"></div>
    </template>
  </div>
  <!-- 导航等组件可以放在container之外 -->
</template>
<script>
import { defineComponent, getCurrentInstance } from 'vue'
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default defineComponent({
  name: 'SwiperContainer',
  props: {
    swiperOption: {
      type: Object,
      default() {
        return {
          loop: true,
          effect: 'coverflow',
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
          },
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
  mounted() {
    // https://www.swiper.com.cn/api/start/new.html
    let mySwiper = new Swiper(
      '.swiper-container',
      getCurrentInstance().ctx.swiperOption
    )
  },
  setup() {
    const { ctx } = getCurrentInstance()
    const swiperClick = (item) => {
      ctx.$emit('swiperClick', item)
    }
    return {
      swiperClick,
    }
  },
})
</script>
<style lang="less">
.swiper-container {
  width: 100%;
  height: 100%;
  .swiper-wrapper {
    .swiper-slide {
      img {
        width: 100%;
        object-fit: scale-down;
      }
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #ffffff;
      opacity: 0.4;
    }
    .swiper-pagination-bullet-active {
      background-color: palevioletred;
      opacity: 1;
    }
  }
}
</style>