import { createRouter, createWebHashHistory } from 'vue-router';
// 首页同步导入，刷新优先渲染
import Home from '../views/Home.vue';

const router = createRouter({
  // 使用 hash 模式：静态空间（对象存储/虚拟主机等）无需任何服务端 rewrite 配置，
  // 直链或刷新 /#/products 等子页面都不会 404，菜单与其它页面均能正常显示
  history: createWebHashHistory(),
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
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/solution/:slug',
      name: 'SolutionDetail',
      component: () => import('../views/SolutionDetail.vue'),
    },
    {
      path: '/homeCoreIndustries',
      name: 'homeCoreIndustries',
      component: () => import('../views/homeCoreIndustries/index.vue'),
    },
    // 可选：404兜底路由，放最后
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

export default router;
