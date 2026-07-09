import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue')
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: () => import('../views/Solutions.vue')
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('../views/Support.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router
