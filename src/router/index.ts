import { createRouter, createWebHistory } from 'vue-router';
// 首页同步导入：首屏优先渲染，避免首页空白
import Home from '../views/Home.vue';
// 其他页面懒加载：减小首屏 bundle 体积，新标签页/刷新加载更快；切换时由 App.vue 的 Suspense 显示 loading
const HomeCoreIndustries = () => import('../views/homeCoreIndustries/index.vue');
const AfterSales = () => import('../views/AfterSales.vue');
const TechnicalSupport = () => import('../views/TechnicalSupport.vue');
const Feedback = () => import('../views/Feedback.vue');
const About = () => import('../views/About.vue');
const News = () => import('../views/News.vue');
const ProductDetail = () => import('../views/products/ProductDetail.vue');
const PayloadAccessories = () => import('../views/products/PayloadAccessories.vue');

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
    // 主菜单「产品中心」「服务支持」无独立页面，点击跳转到对应首个子页面
    { path: '/products', redirect: '/products/H400' },
    { path: '/support', redirect: '/after-sales' },
    // 可选：404兜底路由，放最后
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
  scrollBehavior(to, _from, _savedPosition) {
    // ?scroll=xxx 查询参数：导航阶段不滚动（懒加载页面此时尚未渲染），
    // 交由页面组件挂载后自行滚动到目标区块
    if (to.query.scroll) {
      return false;
    }
    if (to.hash) {
      // top：预留固定导航栏的高度（约 113px @1920），避免锚点模块顶部被导航遮挡
      return { el: to.hash, top: 113, behavior: 'smooth' };
    }
    if (to.path === '/') {
      // 切回首页：同步立即归零滚动，避免渲染帧残留旧滚动位置（页面先显示中间模块再跳顶）
      window.scrollTo(0, 0);
    }
    return { top: 0 };
  },
});

export default router;
