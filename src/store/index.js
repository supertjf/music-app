import { createStore } from 'vuex'

export default createStore({
  namespaced: true,
  state: {
    musicPlayList: [],
    musicPlayCurrentIndex: 0,
    showMusicConsole: true
  },
  mutations: {
    setMusicPlayList(state, value) {
      state.musicPlayList = value
    },
    setMusicPlayCurrentIndex(state, value) {
      state.musicPlayCurrentIndex = value
    }
  },
  actions: {
  },
  modules: {
  }
})
