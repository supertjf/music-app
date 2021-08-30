import { createInitiator } from '@/framework/network/request'
const request = createInitiator()

// 获取轮播列表
export const getSwiperList = (params) => {
  return request.get('banner', params)
}

// 获取推荐歌单
export const getFindSongList = (limit = 10) => {
  return request.get(`/personalized?limit=${limit}`)
}

// 获取歌单详情
export const getSongListDetail = (id) => {
  return request.get(`/playlist/detail`, {
    params: {
      id
    }
  })
}