<template>
  <div class="icon_list">
    <div class="icon_container ub">
      <div class="icon_container_childer" v-for="(item, index) in iconList" :key="index" @click="iconClick(item)">
        <i class="iconfont" :class="item.class"></i>
        <span>{{item.title}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  name: 'IconList',
  props: {
    iconList: {
      type: Array,
      defaul() {
        return []
      },
    },
  },
  setup(props, { emit }) {
    const iconClick = (data) => {
      emit('iconClick', data)
    }
    return {
      iconClick,
    }
  },
})
</script>
<style lang="less" scoped>
.icon_list {
  width: 7.2rem;
  height: 1.6rem;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
  margin: 0 auto;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .icon_container {
    min-width: 7.2rem;
    height: 1.6rem;
    .icon_container_childer {
      height: 1.6rem;
      margin: 0 0.4rem;
      text-align: center;
      .iconfont {
        font-size: 1rem;
        width: 1rem;
        height: 1rem;
      }
      span {
        font-size: 0.24rem;
      }
    }
  }
}
</style>