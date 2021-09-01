<template>
  <div class="nav_bar ub">
    <div class="left">
      <i class="iconfont icon-liebiao2"></i>
    </div>
    <div class="content ub-f1">
      <span class="btn" :class="btnIndex==index?'active':''" v-for="(item, index) in btnList" :key="index" @click="btnClickFun(index)">{{item.name}}</span>
    </div>
    <div class="right">
      <i class="iconfont icon-icon-"></i>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    btnList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  setup(props, { emit }) {
    const btnIndex = ref('0')
    const btnClickFun = (index) => {
      btnIndex.value = index
      emit('btnClickFun', ctx.btnList[index])
    }
    return {
      btnIndex,
      btnClickFun,
    }
  },
})
</script>
<style lang="less" scoped>
.nav_bar {
  width: 100%;
  height: 1rem;
  padding: 0.1rem;
  box-sizing: border-box;
  .left,
  .right {
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
  }
  .content {
    font-size: 0.32rem;
    font-weight: 500;
    line-height: 0.8rem;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    .btn {
      margin: 0 0.14rem;
    }
    .active {
      font-size: 0.36rem;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .iconfont {
    font-size: 0.6rem;
  }
}
</style>