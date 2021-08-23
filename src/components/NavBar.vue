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
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'App',
  setup() {
    const btnList = ref([
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
    ])
    const btnIndex = ref('0')
    const btnClickFun = (index) => {
      btnIndex.value = index
    }
    return {
      btnList,
      btnIndex,
      btnClickFun,
    }
  },
})
</script>
<style lang="less">
.nav_bar {
  width: 100%;
  height: 50px;
  padding: 5px;
  box-sizing: border-box;
  .left,
  .right {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .content {
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    .btn {
      margin: 0 7px;
    }
    .active {
      font-size: 18px;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .iconfont {
    font-size: 30px;
  }
}
</style>