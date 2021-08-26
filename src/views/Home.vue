<template>
  <NavBar :btnList="btnList" @btnClickFun="btnClickFun" />
  <div class="swiper_container">
    <SwiperContainer :swiperList="swiperList" @swiperClick="swiperClick" />
  </div>

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SwiperContainer from '@/components/SwiperContainer.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    SwiperContainer,
  },
  computed: {},

  setup() {
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
    const swiperList = [
      {
        url: 'https://y.gtimg.cn/music/common/upload/category_area/4059019.jpg?max_age=2592000',
      },
      {
        url: 'https://y.gtimg.cn/music/common/upload/category_area/4053302.jpg?max_age=2592000',
      },
      {
        url: 'https://y.gtimg.cn/music/common/upload/category_area/2609005.jpg?max_age=2592000',
      },
      {
        url: 'https://y.gtimg.cn/music/common/upload/category_area/4054920.jpg?max_age=2592000',
      },
      {
        url: 'https://y.gtimg.cn/music/common/upload/category_area/3948388.png?max_age=2592000',
      },
      {
        url: 'https://y.gtimg.cn/music/common/upload/category_area/4048063.jpg?max_age=2592000',
      },
      {
        url: 'https://y.gtimg.cn/music/common/upload/category_area/4054181.jpg?max_age=2592000',
      },
    ]
    const swiperClick = (item) => {
      console.log(item)
    }

    return {
      btnList,
      btnClickFun,
      swiperList,
      swiperClick,
    }
  },
}
</script>
<style lang="less" scoped>
.swiper_container {
  width: 360px;
  height: 199px;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 5px auto;
  border-radius: 10px;
  overflow: hidden;
}
</style>
