import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/musiclist',
    name: 'MusicList',
    component: () => import('../views/MusicList/MusicList.vue')
  },
  {
    path: '/musicdetail',
    name: 'MusicDetail',
    component: () => import('../views/MusicDetail/MusicDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
