<template>
  <header class="header"
    :class="{ scrolled: isSolid, 'menu-open': isMobileMenuOpen, 'product-hovered': isProductHovered }">
    <div class="header-container">
      <div class="logo">
        <img class="logo-icon" :src="logoIcon" alt="华启天成" />
        <div class="logo-text-group">
          <span class="logo-name">华启天成</span>
        </div>
      </div>
      <nav class="nav-menu">
        <template v-for="(item, i) in navItems" :key="i">
          <ProductDropdown v-if="item.children" :label="item.label" :href="item.href" :categories="item.children"
            :is-active="hoveredItem ? hoveredItem === item.id : activeSection === item.id" :width="item.width"
            @click="handleNavClick(item.id)" @mouseenter="isProductHovered = true; hoveredItem = item.id"
            @mouseleave="isProductHovered = false; hoveredItem = ''" />
          <router-link v-else :to="item.href" class="nav-link"
            :class="{ active: (hoveredItem ? hoveredItem === item.id : activeSection === item.id) && item.id !== 'home' }"
            @click="handleNavClick(item.id)">{{
              item.label }}</router-link>
        </template>
      </nav>
      <div class="header-actions">
        <router-link to="/contact" class="contact-btn">
          联系我们
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </router-link>
      </div>
      <button class="mobile-menu-btn" :class="{ open: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- 移动端菜单 -->
  <div class="mobile-nav" :class="{ open: isMobileMenuOpen }">
    <div class="mobile-nav-header">
      <button class="mobile-nav-close" @click="toggleMobileMenu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
      <div class="mobile-nav-logo">
        <img class="mobile-nav-logo-icon" :src="logoIcon" alt="华启天成" />
      </div>
      <div class="mobile-nav-actions">
        <button class="mobile-nav-search">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
        <a href="#" class="mobile-nav-shop-btn">商城</a>
      </div>
    </div>
    <div class="mobile-nav-list">
      <div class="mobile-nav-item">
        <router-link to="/" class="mobile-nav-link" @click="handleNavClick('home')">首页</router-link>
      </div>
      <div v-for="(item, i) in navItems.filter(item => item.children)" :key="i" class="mobile-nav-item">
        <div class="mobile-nav-link-row" @click="toggleMobileSubmenu(item.id)">
          <span class="mobile-nav-link-text">{{ item.label }}</span>
          <span class="mobile-nav-expand-icon">{{ openMobileSubmenu === item.id ? '×' : '+' }}</span>
        </div>
        <div :class="{ 'mobile-nav-submenu': true, 'is-open': openMobileSubmenu === item.id }">
          <div v-for="(category, ci) in item.children" :key="ci" class="mobile-nav-submenu-group">
            <div v-if="'category' in category && category.category" class="mobile-nav-submenu-category">{{
              category.category }}</div>
            <div v-for="(subItem, si) in category.items" :key="si" class="mobile-nav-submenu-item">
              <router-link :to="item.href + '?type=' + encodeURIComponent(subItem)" class="mobile-nav-submenu-link"
                @click="handleNavClick(item.id)">{{ subItem }}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-nav-item">
        <router-link to="/contact" class="mobile-nav-link" @click="handleNavClick('contact')">联系我们</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProductDropdown from './ProductDropdown.vue'

// 图标路径
const logoIcon = new URL('../assets/home/图标/logo.png', import.meta.url).href

const router = useRouter()
const route = useRoute()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')
const isProductHovered = ref(false)
const openMobileSubmenu = ref('')
const hoveredItem = ref('')

// 非首页路由：页面顶部是浅色背景，强制导航栏使用实心白底深字样式（否则白字不可见）
const isSolid = computed(() => isScrolled.value || route.path !== '/')

const navItems = [
  { id: 'home', label: '首页', href: '/' },
  {
    id: 'products', label: '产品中心', href: '/products', children: [
      { category: '多旋翼飞行平台', items: ['H400', 'H200', 'TF100', 'F140', 'F100', 'F60', 'RT100', 'X6-10', 'X4-10'] },
      { category: '固定翼飞行平台', items: ['WRCQ-32A', 'HQ-600', 'XF-200', 'Q150', 'Q80', 'Q50', 'Q40', 'Q32', 'Q20', 'Q13'] },
      { category: '系留无人机', items: ['20公斤级系留', '10公斤级系留', '5公斤级系留', '影视照明系留10公斤级', '2公斤级系留'] },
      { category: '无人机消防车', items: ['无人机消防车'] },
      { category: '载荷配件', items: ['消防水枪', '消防水桶', '索降器', '灭火弹投抛器', '干粉水基灭火弹', '森林灭火弹', '喊话器', '探照灯'] }
    ]
  },
  {
    id: 'solutions', label: '行业解决方案', href: '/solutions', children: [
      { items: ['城市消防', '森林消防', '清洗系列', '挂载系列适配', '固定翼巡检系列', '系留系列', '科研定制服务'] }
    ]
  },
  {
    id: 'support', label: '服务支持', href: '/support', width: '138px', children: [
      { items: ['售后保障', '技术支持', '建议与反馈'] }
    ]
  },
  {
    id: 'about', label: '关于我们', href: '/about', width: '127px', children: [
      { items: ['企业简介', '资质荣誉', '新闻动态', '加入我们'] }
    ]
  }
]

const toggleMobileSubmenu = (id: string) => {
  openMobileSubmenu.value = openMobileSubmenu.value === id ? '' : id
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  openMobileSubmenu.value = ''
  // 禁止/允许页面滚动
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  isScrolled.value = scrollTop > 50
}

const handleNavClick = (id: string) => {
  activeSection.value = id
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
  if (id === 'home') {
    router.push('/')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* 顶部导航栏 */
.header {
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1003;
  transition: all 0.3s ease;
  font-family: 'Noto Sans SC', 'Source Han Sans CN', sans-serif;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.97);
  /* 1920 时 = 10px */
  backdrop-filter: blur(0.52083vw);
  /* 1920 时 = 0 2px 20px */
  box-shadow: 0 0.10417vw 1.04167vw rgba(0, 0, 0, 0.1);
}

.header.scrolled .logo-name {
  color: #0f1419;
}

.header.scrolled .logo-icon {
  filter: invert(1) brightness(0);
}

.header.scrolled :deep(.nav-link) {
  color: #0f1419 !important;
}

.header.scrolled .contact-btn {
  background: #00D4ff;
  color: black;
}

.header.scrolled .mobile-menu-btn span {
  background: #0f1419;
}

/* 产品中心悬浮时导航栏变为白色背景 */
.header.product-hovered {
  background: rgba(255, 255, 255, 0.97);
  /* 1920 时 = 10px */
  backdrop-filter: blur(0.52083vw);
  /* 1920 时 = 0 2px 20px */
  box-shadow: 0 0.10417vw 1.04167vw rgba(0, 0, 0, 0.1);
}

.header.product-hovered .logo-name {
  color: #0f1419;
}

.header.product-hovered .logo-icon {
  filter: invert(1) brightness(0);
}

.header.product-hovered :deep(.nav-link) {
  color: #0f1419 !important;
}

.header.product-hovered :deep(.product-dropdown .nav-link:hover::after),
.header.product-hovered :deep(.product-dropdown .nav-link.active::after) {
  content: '';
  position: absolute;
  /* 1920 时 = -33px */
  bottom: -1.71875vw;
  left: 0;
  width: 100%;
  /* 1920 时 = 1px */
  height: 0.05208vw;
  background: #000000;
}

.header.product-hovered .contact-btn {
  background: #00D4ff;
  color: black;
}

.header.product-hovered .mobile-menu-btn span {
  background: #0f1419;
}



.header-container {
  width: 100%;
  margin: 0 auto;
  /* 1920 时 = 23px 92px 23px 74px */
  padding: 1.19792vw 4.79167vw 1.19792vw 3.85417vw;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  /* 1920 时 = 15px */
  margin-right: 0.78125vw;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
}

.logo-name {
  /* 1920 时 = 23px */
  font-size: 1.19792vw;
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  /* 1920 时 = 2px */
  letter-spacing: 0.10417vw;
}

.logo-sub {
  /* 1920 时 = 13px */
  font-size: 0.67708vw;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  /* 1920 时 = 1px */
  letter-spacing: 0.05208vw;
}

.nav-menu {
  /* 1920 时 = 21px */
  font-size: 1.09375vw;
  display: flex;
  align-items: center;
  /* 1920 时 = 40px */
  gap: 2.08333vw;
  padding: 0 22.0833vw 0 21.875vw;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  /* 1920 时 = 21px */
  font-size: 1.09375vw;
  font-weight: 500;
  transition: color 0.3s;
  /* 1920 时 = 8px 0 */
  padding: 0.41667vw 0;
  position: relative;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
  color: inherit;
}

.nav-link:active,
.mobile-nav-link:active,
.mobile-nav-link-row:active,
.mobile-nav-submenu-link:active,
.col-item:active {
  color: inherit !important;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  /* 1920 时 = -8px */
  bottom: -0.41667vw;
  left: 50%;
  width: 0;
  /* 1920 时 = 2px */
  height: 0.10417vw;
  background: currentColor;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
  left: 0;
}

.header-actions {
  flex-shrink: 0;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* 1920 时 = 9px */
  gap: 0.46875vw;
  background: #00D4ff;
  color: black;
  border: none;
  /* 1920 时 = 12px */
  border-radius: 0.625vw;
  cursor: pointer;
  /* 1920 时 = 16px (1rem) */
  font-size: 0.83333vw;
  font-weight: bold;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  /* 1920 时 = 49px */
  height: 2.55208vw;
  /* 1920 时 = 153px */
  width: 7.96875vw;
}

.contact-btn svg {
  /* 1920 时 = 10px */
  width: 0.52083vw;
  height: 0.52083vw;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.contact-btn:hover {
  background: #00D4ff;
  /* 1920 时 = -2px */
  transform: translateY(-0.10417vw);
  /* 1920 时 = 0 4px 12px */
  box-shadow: 0 0.20833vw 0.625vw rgba(0, 0, 0, 0.15);
}

.contact-btn:hover::before {
  left: 100%;
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 24px;
  position: relative;
  z-index: 1001;
  padding: 0;
  transition: transform 0.3s ease;
}

.mobile-menu-btn:hover {
  transform: scale(1.1);
}

.mobile-menu-btn span {
  display: block;
  width: 100%;
  height: 2px;
  background: #fff;
  position: absolute;
  left: 0;
  transition: all 0.3s ease;
  transform-origin: center;
}

.mobile-menu-btn span:nth-child(1) {
  top: 3px;
}

.mobile-menu-btn span:nth-child(2) {
  top: 11px;
}

.mobile-menu-btn span:nth-child(3) {
  top: 19px;
}

.mobile-menu-btn.open span:nth-child(1) {
  transform: rotate(45deg);
  top: 11px;
}

.mobile-menu-btn.open span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 11px;
}

/* iPad / 平板 (768px ~ 1024px) */
@media (max-width: 1024px) {
  .header-container {
    padding: 24px;
  }

  .nav-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 30, 60, 0.97);
    backdrop-filter: blur(12px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 80px;
    gap: 0;
    z-index: 998;
  }

  .nav-menu.open {
    display: flex;
  }

  .nav-link {
    width: 100%;
    text-align: center;
    padding: 16px 20px;
    font-size: 23px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.9);
  }

  .nav-link:hover,
  .nav-link.active {
    color: inherit;
    background: rgba(255, 255, 255, 0.06);
  }

  .nav-link::after {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .header-actions {
    display: none;
  }

  .header.menu-open {
    z-index: -1;
  }
}

/* 手机 (≤768px) */
@media (max-width: 768px) {
  .header-container {
    padding: 16px;
  }

  .logo-icon {
    width: 20%;
  }

  .logo-name {
    font-size: 20px;
    letter-spacing: 1px;
  }

  .logo-sub {
    font-size: 11px;
  }
}

/* 移动端导航菜单 */
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, #fff 0%, #f8f8f8 100%);
  z-index: 1004;
  flex-direction: column;
  overflow-y: auto;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  visibility: hidden;
  opacity: 0;
}

.mobile-nav.open {
  transform: translateX(0);
  visibility: visible;
  opacity: 1;
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #000 0%, #1a1a1a 100%);
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.mobile-nav-close {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.mobile-nav-close:hover {
  transform: rotate(90deg);
  color: #00D4ff;
}

.mobile-nav-logo {
  flex: 1;
  display: flex;
  justify-content: center;
}

.mobile-nav-logo-icon {
  height: 36px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.mobile-nav-logo-icon:hover {
  transform: scale(1.1);
}

.mobile-nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  opacity: 0;
  animation: fadeIn 0.3s ease 0.2s forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.mobile-nav-search {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.mobile-nav-search:hover {
  transform: scale(1.1);
  color: #00D4ff;
}

.mobile-nav-shop-btn {
  background: #0066cc;
  color: #fff;
  padding: 8px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 19px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.mobile-nav-shop-btn:hover {
  background: #0052a3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.mobile-nav-list {
  flex: 1;
  padding: 0;
  overflow-y: auto;
  opacity: 0;
  animation: fadeIn 0.3s ease 0.1s forwards;
}

.mobile-nav-item {
  border-bottom: 1px solid #e5e5e5;
  opacity: 0;
  transform: translateX(-20px);
  animation: slideInLeft 0.3s ease forwards;
}

.mobile-nav-item:nth-child(1) {
  animation-delay: 0.1s;
}

.mobile-nav-item:nth-child(2) {
  animation-delay: 0.15s;
}

.mobile-nav-item:nth-child(3) {
  animation-delay: 0.2s;
}

.mobile-nav-item:nth-child(4) {
  animation-delay: 0.25s;
}

.mobile-nav-item:nth-child(5) {
  animation-delay: 0.3s;
}

.mobile-nav-item:nth-child(6) {
  animation-delay: 0.35s;
}

.mobile-nav-item:nth-child(7) {
  animation-delay: 0.4s;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.mobile-nav-link {
  display: block;
  padding: 18px 20px;
  color: #1a1a1a;
  text-decoration: none;
  font-size: 21px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.mobile-nav-link::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  /* background: rgba(0, 212, 255, 0.1); */
  transition: width 0.3s ease;
  z-index: -1;
}

.mobile-nav-link:hover {
  color: #00D4ff;
}

.mobile-nav-link:hover::before {
  width: 100%;
}

.mobile-nav-link-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.mobile-nav-link-row::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  /* background: rgba(0, 212, 255, 0.1); */
  transition: width 0.3s ease;
  z-index: -1;
}

.mobile-nav-link-row:hover {
  color: #00D4ff;
}

.mobile-nav-link-row:hover::before {
  width: 100%;
}

.mobile-nav-link-text {
  color: #1a1a1a;
  font-size: 21px;
  font-weight: 600;
}

.mobile-nav-expand-icon {
  color: #666;
  font-size: 29px;
  font-weight: 300;
  width: 24px;
  text-align: center;
  transition: transform 0.3s ease;
  display: inline-block;
}

.mobile-nav-link-row:hover .mobile-nav-expand-icon {
  transform: rotate(45deg);
}

.mobile-nav-submenu {
  background: linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%);
  padding: 12px 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 16px;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0 16px;
}

.mobile-nav-submenu.is-open {
  max-height: none;
  opacity: 1;
  padding: 12px 16px;
}

.mobile-nav-submenu-category {
  color: #666;
  font-size: 17px;
  font-weight: 600;
  padding: 8px 0 6px;
  grid-column: 1 / -1;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 4px;
  transition: color 0.3s ease;
}

.mobile-nav-submenu-category:hover {
  color: #00D4ff;
}

.mobile-nav-submenu-item {
  padding: 4px 0;
  opacity: 0;
  transform: translateY(5px);
  animation: fadeInUp 0.2s ease forwards;
}

.mobile-nav-submenu-item:nth-child(1) {
  animation-delay: 0.1s;
}

.mobile-nav-submenu-item:nth-child(2) {
  animation-delay: 0.12s;
}

.mobile-nav-submenu-item:nth-child(3) {
  animation-delay: 0.14s;
}

.mobile-nav-submenu-item:nth-child(4) {
  animation-delay: 0.16s;
}

.mobile-nav-submenu-item:nth-child(5) {
  animation-delay: 0.18s;
}

.mobile-nav-submenu-item:nth-child(6) {
  animation-delay: 0.2s;
}

.mobile-nav-submenu-item:nth-child(7) {
  animation-delay: 0.22s;
}

.mobile-nav-submenu-item:nth-child(8) {
  animation-delay: 0.24s;
}

.mobile-nav-submenu-item:nth-child(9) {
  animation-delay: 0.26s;
}

.mobile-nav-submenu-item:nth-child(10) {
  animation-delay: 0.28s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-nav-submenu-link {
  color: #333;
  text-decoration: none;
  font-size: 17px;
  line-height: 1.6;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.mobile-nav-submenu-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #00D4ff;
  transition: width 0.3s ease;
}

.mobile-nav-submenu-link:hover {
  color: inherit;
}

.mobile-nav-submenu-link:hover::before {
  width: 100%;
}
</style>
