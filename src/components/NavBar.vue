<template>
  <header class="header" :class="{ scrolled: isScrolled, 'menu-open': isMobileMenuOpen }">
    <div class="header-container">
      <div class="logo">
        <img class="logo-icon" src="../assets/home/图标/logo.png" alt="华启天成" />
        <div class="logo-text-group">
          <span class="logo-name">华启天成</span>
        </div>
      </div>
      <nav class="nav-menu" :class="{ open: isMobileMenuOpen }">
        <router-link
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.href"
          class="nav-link"
          :class="{ active: activeSection === item.id }"
          @click="handleNavClick(item.id)"
        >{{ item.label }}</router-link>
      </nav>
      <div class="header-actions">
        <a href="/contact" class="contact-btn">
          联系我们
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
      <button class="mobile-menu-btn" :class="{ open: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

const navItems = [
  { id: 'home', label: '首页', href: '/' },
  { id: 'products', label: '产品中心', href: '/products' },
  { id: 'solutions', label: '行业解决方案', href: '/solutions' },
  { id: 'support', label: '服务支持', href: '/support' },
  { id: 'about', label: '关于我们', href: '/about' }
]

const preventScroll = (e: TouchEvent | WheelEvent) => {
  e.preventDefault()
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // 禁止/允许页面滚动
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
    // 防止iOS弹性滚动
    document.body.style.position = 'fixed'
    document.body.style.width = '100%'
    document.body.style.top = `-${window.scrollY}px`
    // 防止触摸滚动
    document.addEventListener('touchmove', preventScroll, { passive: false })
    // 防止鼠标滚轮滚动
    document.addEventListener('wheel', preventScroll, { passive: false })
  } else {
    const scrollY = document.body.style.top
    document.body.style.overflow = ''
    document.body.style.position = ''
    document.body.style.width = ''
    document.body.style.top = ''
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    // 移除滚动阻止
    document.removeEventListener('touchmove', preventScroll)
    document.removeEventListener('wheel', preventScroll)
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleNavClick = (id: string) => {
  activeSection.value = id
  isMobileMenuOpen.value = false
  // 恢复页面滚动
  const scrollY = document.body.style.top
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
  // 移除触摸滚动阻止
  document.removeEventListener('touchmove', preventScroll)
  if (id === 'home') {
    router.push('/')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // 确保组件卸载时恢复滚动
  const scrollY = document.body.style.top
  document.body.style.overflow = ''
  document.body.style.position = ''
  document.body.style.width = ''
  document.body.style.top = ''
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
  // 移除滚动阻止
  document.removeEventListener('touchmove', preventScroll)
  document.removeEventListener('wheel', preventScroll)
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
  z-index: 1000;
  transition: background 0.3s, box-shadow 0.3s;
  font-family: 'Noto Sans SC', 'Source Han Sans CN', sans-serif;
}

.header.scrolled {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header.scrolled .logo-name,
.header.scrolled .logo-sub,
.header.scrolled .nav-link {
  color: #0f1419;
}

.header.scrolled .logo-icon {
  filter: invert(1) brightness(0);
}

.header.scrolled .nav-link:hover,
.header.scrolled .nav-link.active {
  color: #00D4ff;
}

.header.scrolled .contact-btn {
  background: #00D4ff;
  color: white;
}

.header.scrolled .mobile-menu-btn span {
  background: #0f1419;
}

.header-container {
  width: 100%;
  margin: 0 auto;
  padding: 36px 80px 0;
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
  color: #fff;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: #00D4ff;
  transition: width 0.3s, left 0.3s;
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

.mobile-menu-btn span:nth-child(1) { top: 3px; }
.mobile-menu-btn span:nth-child(2) { top: 11px; }
.mobile-menu-btn span:nth-child(3) { top: 19px; }

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
    background: rgba(0, 30, 60, 0.97);
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
</style>
