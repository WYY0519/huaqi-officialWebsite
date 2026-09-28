import { createRouter, createWebHistory } from 'vue-router';
// 首页同步导入，刷新优先渲染
import Home from '../views/Home.vue';
// 行业解决方案页面同步导入，刷新优先渲染
import HomeCoreIndustries from '../views/homeCoreIndustries/index.vue';
// 售后保障页面同步导入，刷新优先渲染
import AfterSales from '../views/AfterSales.vue';
// 技术支持页面同步导入，刷新优先渲染
import TechnicalSupport from '../views/TechnicalSupport.vue';
// 建议与反馈页面同步导入，刷新优先渲染
import Feedback from '../views/Feedback.vue';
// 企业简介页面同步导入，刷新优先渲染
import About from '../views/About.vue';
// 新闻动态页面同步导入，刷新优先渲染
import News from '../views/News.vue';
// 产品详情页同步导入：点击产品中心子菜单时避免路由块异步加载导致页面中间空白
import ProductDetail from '../views/products/ProductDetail.vue';
// 载荷配件页面同步导入，刷新优先渲染
import PayloadAccessories from '../views/products/PayloadAccessories.vue';

const router = createRouter({
  // 使用 history 模式：URL 不带 #，子页面直链、刷新、分享均可打开。
  // 注意：服务器 nginx 必须配置 SPA 回退，否则刷新子页面会 404：
  //   location / { try_files $uri $uri/ /index.html; }
  history: createWebHistory(),
  routes: [
    // 首页只保留一条，同步加载
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    // {
    //   path: '/products',
    //   name: 'Products',
    //   component: () => import('../views/Products.vue'),
    // },
    // {
    //   path: '/solutions',
    //   name: 'Solutions',
    //   component: () => import('../views/Solutions.vue'),
    // },
    // {
    //   path: '/support',
    //   name: 'Support',
    //   component: () => import('../views/Support.vue'),
    // },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue'),
    },
    {
      path: '/after-sales',
      name: 'AfterSales',
      component: AfterSales,
    },
    {
      path: '/technical-support',
      name: 'TechnicalSupport',
      component: TechnicalSupport,
    },
    {
      path: '/feedback',
      name: 'Feedback',
      component: Feedback,
    },
    {
      path: '/solution/:slug',
      name: 'SolutionDetail',
      component: () => import('../views/SolutionDetail.vue'),
    },
    {
      path: '/products/:slug',
      name: 'ProductDetail',
      component: ProductDetail,
    },
    {
      path: '/payload',
      name: 'PayloadAccessories',
      component: PayloadAccessories,
    },
    {
      path: '/homeCoreIndustries',
      name: 'homeCoreIndustries',
      component: HomeCoreIndustries,
    },
    // 兼容旧版链接（如 /solutions?type=城市消防）→ 行业解决方案页，保留查询参数
    {
      path: '/solutions',
      redirect: (to) => ({ path: '/homeCoreIndustries', query: to.query }),
    },
    // 可选：404兜底路由，放最后
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, _savedPosition) {
    if (to.hash) {
      // top：预留固定导航栏的高度（约 113px @1920），避免锚点模块顶部被导航遮挡
      return { el: to.hash, top: 113, behavior: 'smooth' };
    }
    return { top: 0 };
  },
});

export default router;
