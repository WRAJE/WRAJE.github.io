import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 使用 History 模式（更干净的 URL），并配合 GitHub Pages 的 404 fallback 解决刷新/直达子路由 404
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.path.startsWith('/blog/')) {
      return { top: 0, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/SkillsView.vue')
    },
    {
      path: '/links',
      name: 'links',
      component: () => import('../views/LinksView.vue')
    },
    // 博客文章路由
    {
      path: '/blog/postbox-development',
      name: 'postbox-development',
      component: () => import('../views/blog/PostboxDevelopment.vue')
    },
    {
      path: '/blog/snail-ai-tech',
      name: 'snail-ai-tech',
      component: () => import('../views/blog/SnailAiTech.vue')
    },
    {
      path: '/blog/arp-spoofing',
      name: 'arp-spoofing',
      component: () => import('../views/blog/ArpSpoofing.vue')
    },
    {
      path: '/blog/rescue-algorithm',
      name: 'rescue-algorithm',
      component: () => import('../views/blog/RescueAlgorithm.vue')
    }
  ]
})

export default router
