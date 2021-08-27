import { createInitiator } from '@/framework/network/request'
const request = createInitiator()

export const getSwiperList = (params) => {
  return request.get('banner', params)
}

export const getFindSongList = (limit = 10) => {
  return request.get(`/personalized?limit=${limit}`)
}