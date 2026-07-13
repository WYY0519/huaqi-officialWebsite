import { createRouter, createWebHistory } from 'vue-router';
// 首页同步导入，刷新优先渲染
import Home from '../views/Home.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 首页只保留一条，同步加载
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue'),
    },
    {
      path: '/solutions',
      name: 'Solutions',
      component: () => import('../views/Solutions.vue'),
    },
    {
      path: '/support',
      name: 'Support',
      component: () => import('../views/Support.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue'),
    },
    // 可选：404兜底路由，放最后
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

export default router;
