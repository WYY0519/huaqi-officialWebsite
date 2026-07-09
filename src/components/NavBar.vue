<template>
  <header class="header"
    :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen, 'product-hovered': isProductHovered }">
    <div class="header-container">
      <div class="logo">
        <img class="logo-icon" src="../assets/home/图标/logo.png" alt="华启天成" />
        <div class="logo-text-group">
          <span class="logo-name">华启天成</span>
        </div>
      </div>
      <nav class="nav-menu" :class="{ open: isMobileMenuOpen }">
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
        <a href="/contact" class="contact-btn">
          联系我们
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </a>
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
        <img class="mobile-nav-logo-icon" src="../assets/home/图标/logo.png" alt="华启天成" />
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
        <div v-if="openMobileSubmenu === item.id" class="mobile-nav-submenu">
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import ProductDropdown from './ProductDropdown.vue'

const router = useRouter()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('')
const isProductHovered = ref(false)
const openMobileSubmenu = ref('')
const hoveredItem = ref('')

const navItems = [
  { id: 'home', label: '首页', href: '/' },
  {
    id: 'products', label: '产品中心', children: [
      { category: '多旋翼飞行平台', items: ['H400', 'H200', 'TF100', 'F140', 'F100', 'F60', 'RT100', 'X6-10', 'X4-10'] },
      { category: '固定翼飞行平台', items: ['WRCQ-32A', 'HQ-600', 'XF-200', 'Q150', 'Q80', 'Q50', 'Q40', 'Q32', 'Q20', 'Q13'] },
      { category: '系留无人机', items: ['20公斤级系留', '10公斤级系留', '5公斤级系留', '影视照明系留10公斤级', '2公斤级系留'] },
      { category: '无人机消防车', items: ['无人机消防车'] },
      { category: '载荷配件', items: ['消防水枪', '消防水桶', '索降器', '灭火弹投抛器', '干粉水基灭火弹', '森林灭火弹', '喊话器', '探照灯'] }
    ]
  },
  {
    id: 'solutions', label: '行业解决方案', children: [
      { items: ['城市消防', '森林消防', '清洗系列', '挂载系列适配', '固定翼系统巡检系列', '系留系列', '科研定制服务'] }
    ]
  },
  {
    id: 'support', label: '服务支持', width: '138px', children: [
      { items: ['售后保障', '技术支持', '建议与反馈'] }
    ]
  },
  {
    id: 'about', label: '关于我们', width: '127px', children: [
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
  transition: background 0.3s, box-shadow 0.3s;
  font-family: 'Noto Sans SC', 'Source Han Sans CN', sans-serif;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
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
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
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
  bottom: -33px;
  left: 0;
  width: 100%;
  height: 1px;
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
  padding: 22px 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  margin-right: 15px;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-size: 17.5px;
  font-weight: 900;
  color: #fff;
  line-height: 1.2;
  letter-spacing: 2px;
}

.logo-sub {
  font-size: 10px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 1px;
}

.nav-menu {
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 40px;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;
  padding: 8px 0;
  position: relative;
  white-space: nowrap;
}

.nav-link:hover,
.nav-link.active {
  color: inherit;
}

.nav-link:hover::after,
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
}

.header-actions {
  flex-shrink: 0;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  background: #00D4ff;
  color: black;
  border: none;
  padding: 18px 30px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 12px;
  transition: background 0.3s, transform 0.3s;
  text-decoration: none;
}

.contact-btn:hover {
  background: #00D4ff;
  transform: translateY(-1px);
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
    font-size: 17px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    color: rgba(255, 255, 255, 0.9);
  }

  .nav-link:hover,
  .nav-link.active {
    color: #00D4ff;
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
    font-size: 15px;
    letter-spacing: 1px;
  }

  .logo-sub {
    font-size: 8px;
  }
}

/* 移动端导航菜单 */
.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 1004;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-nav.open {
  display: flex;
}

.mobile-nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
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
}

.mobile-nav-logo {
  flex: 1;
  display: flex;
  justify-content: center;
}

.mobile-nav-logo-icon {
  height: 36px;
  object-fit: contain;
}

.mobile-nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
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
}

.mobile-nav-shop-btn {
  background: #0066cc;
  color: #fff;
  padding: 8px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.mobile-nav-list {
  flex: 1;
  padding: 0;
  overflow-y: auto;
}

.mobile-nav-item {
  border-bottom: 1px solid #e5e5e5;
}

.mobile-nav-link {
  display: block;
  padding: 18px 20px;
  color: #1a1a1a;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.mobile-nav-link-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 20px;
  cursor: pointer;
}

.mobile-nav-link-text {
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 600;
}

.mobile-nav-expand-icon {
  color: #666;
  font-size: 22px;
  font-weight: 300;
  width: 24px;
  text-align: center;
}

.mobile-nav-submenu {
  background: #f8f8f8;
  padding: 12px 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 16px;
}

.mobile-nav-submenu-category {
  color: #666;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 0 6px;
  grid-column: 1 / -1;
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 4px;
}

.mobile-nav-submenu-item {
  padding: 4px 0;
}

.mobile-nav-submenu-link {
  color: #333;
  text-decoration: none;
  font-size: 13px;
  line-height: 1.6;
}

.mobile-nav-submenu-link:hover {
  color: #00D4ff;
}
</style>
