<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="header-container">
        <div class="logo">
          <img class="logo-icon" src="./assets/home/图标/logo.png" alt="华启天成" />
          <div class="logo-text-group">
            <span class="logo-name">华启天成</span>
          </div>
        </div>
        <nav class="nav-menu" :class="{ open: isMobileMenuOpen }">
          <router-link v-for="(item, i) in navItems" :key="i" :to="item.href" class="nav-link"
            :class="{ active: activeSection === item.id }" @click="handleNavClick(item.id)">{{ item.label
            }}</router-link>
          <!-- <button class="mobile-login-btn" @click="isMobileMenuOpen = false">联系我们</button> -->
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

    <!-- 页面内容 -->
    <router-view />

    <!-- 页脚 -->
    <Footer />

    <!-- 右侧浮动联系栏 -->
    <div class="float-toolbar">
      <a href="tel:400-xxx-xxxx" class="float-btn" title="电话咨询">
        <img src="./assets/home/图标/n.png" alt="">
      </a>
      <a href="#" class="float-btn" title="在线客服" @click.prevent="showChatModal = true">
        <img src="./assets/home/图标/n.png" alt="在线客服">
      </a>
      <a href="#" class="float-btn" title="公司地址">
        <img src="./assets/home/图标/n.png" alt="公司地址">
      </a>
    </div>

    <!-- 在线客服弹窗 -->
    <div v-if="showChatModal" class="chat-modal-overlay" @click.self="showChatModal = false">
      <div class="chat-modal">
        <div class="chat-modal-header">
          <h3>在线客服</h3>
          <button class="chat-modal-close" @click="showChatModal = false">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="chat-modal-body">
          <div class="chat-messages" ref="chatMessagesRef">
            <div v-for="message in chatMessages" :key="message.id" class="chat-message" :class="message.type">
              <div class="chat-message-avatar">
                <template v-if="message.type === 'bot'">🤖</template>
                <template v-else>👤</template>
              </div>
              <div class="chat-message-content">
                {{ message.content }}
              </div>
            </div>
          </div>
          <div class="chat-input-area">
            <input type="text" class="chat-input" placeholder="输入您的问题..." v-model="chatInput">
            <button class="chat-send-btn" @click="sendChatMessage">发送</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Footer from './components/home/Footer.vue'

const router = useRouter()

// 移动端菜单状态
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('home')

// 客服弹窗状态
const showChatModal = ref(false)
const chatInput = ref('')
const chatMessages = ref([
  {
    id: 1,
    type: 'bot',
    content: '您好！我是华启天成智能客服，很高兴为您服务。请问有什么可以帮助您？',
    timestamp: new Date().toLocaleTimeString()
  }
])
const chatMessagesRef = ref<HTMLElement | null>(null)

// 导航数据
const navItems = [
  { id: 'home', label: '首页', href: '/' },
  { id: 'products', label: '产品中心', href: '/products' },
  { id: 'solutions', label: '行业解决方案', href: '/solutions' },
  { id: 'support', label: '服务支持', href: '/support' },
  { id: 'about', label: '关于我们', href: '/about' }
]

// 发送客服消息
const sendChatMessage = () => {
  if (!chatInput.value.trim()) return

  chatMessages.value.push({
    id: Date.now(),
    type: 'user',
    content: chatInput.value.trim(),
    timestamp: new Date().toLocaleTimeString()
  })

  chatInput.value = ''

  nextTick(() => {
    if (chatMessagesRef.value) {
      chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
    }
  })

  setTimeout(() => {
    chatMessages.value.push({
      id: Date.now() + 1,
      type: 'bot',
      content: '感谢您的咨询！我们的客服人员将尽快回复您。请问还有其他问题吗？',
      timestamp: new Date().toLocaleTimeString()
    })

    nextTick(() => {
      if (chatMessagesRef.value) {
        chatMessagesRef.value.scrollTop = chatMessagesRef.value.scrollHeight
      }
    })
  }, 1000)
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleNavClick = (id: string) => {
  activeSection.value = id
  isMobileMenuOpen.value = false
  if (id === 'home') {
    router.push('/')
  }
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('.solution-card, .product-card, .news-card, .coverage-item').forEach(el => {
    observer?.observe(el)
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  observer?.disconnect()
})
</script>

<style>
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  overflow-x: hidden;
  max-width: 100vw;
}

.app {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 140px 0 151px;
  box-sizing: border-box;
}

/* 滚动动画 */
.fade-in-section {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.solution-card,
.product-card,
.news-card,
.coverage-item {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s;
}

.solution-card.visible,
.product-card.visible,
.news-card.visible,
.coverage-item.visible {
  opacity: 1;
  transform: translateY(0);
}

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
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.header.scrolled .logo-name,
.header.scrolled .logo-sub,
.header.scrolled .nav-link {
  color: #fff;
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
  background: #fff;
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
  margin-right: 15px
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
  /* margin-left: auto;
  margin-right: 40px; */
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
  /* font-weight: 500; */
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

/* 主视觉区域 */
.hero-section {
  position: relative;
  height: auto;
  overflow: hidden;
}

/* 轮播容器 */
.slider-wrapper {
  position: relative;
  line-height: 0;
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.8s ease-in-out;
  pointer-events: none;
}

.slide.active {
  position: relative;
  height: auto;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.slide-bg {
  position: relative;
  width: 100%;
  z-index: 0;
}

.slide-bg-img {
  width: 100%;
  height: auto;
  display: block;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.slide-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.slide-logos {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 32px;
}

.hero-title,
.slide-title {
  font-size: 52px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  line-height: 1.3;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding-left: 6%
}

:deep(.slide-title) .highlight,
.slide-content :deep(.highlight),
.slide-content .highlight {
  color: #00D4ff !important;
}

.slide-content h1 .highlight {
  color: #00D4ff !important;
}

.hero-subtitle,
.slide-subtitle {
  font-size: 22px;
  color: #fff;
  margin-bottom: 28px;
  /* 缩小副标题和按钮间距 */
  font-weight: 400;
  letter-spacing: 2px;
  padding-left: 6%
}

.hero-btn {
  /* 删除原来的 align-self: flex-start; */
  align-self: unset;
  display: inline-block;
  padding: 12px 36px;
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 30px;
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
  background: transparent;
  margin-left: 6%
    /* 自动跟随父容器居中 */
}

.hero-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
}

/* 轮播箭头 */
/* 轮播箭头 */
.banner-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 50px;
  height: 80px;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  backdrop-filter: blur(4px);
}

.banner-arrow:hover {
  background: rgba(0, 0, 0, 0.4);
}

.banner-arrow-left {
  left: 0;
  border-radius: 0 4px 4px 0;
}

.banner-arrow-right {
  right: 0;
  border-radius: 4px 0 0 4px;
}



/* 轮播分页指示器 */
.swiper-pagination {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;
  align-items: center;
}

.pagination-dot {
  width: 32px;
  height: 3px;
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background 0.3s, width 0.3s;
}

.pagination-dot.active {
  background: 00D4ff;
  width: 48px;
}

/* 通用区块样式 */
.section-title {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', sans-serif;
  text-align: center;
  font-size: 41.5px;
  font-weight: 900;
  color: #000;
  margin-bottom: 30px;
  position: relative;
}

.section-line {
  width: 161px;
  height: 1px;
  background: #00D4ff;
  margin: 0 auto;
}

.section-subtitle {
  text-align: center;
  font-size: 15px;
  color: #adb1b5;
  margin-top: 24px;
  margin-bottom: 52px;
  position: relative;
}

/* 解决方案区块 - 左右交替布局 */
.solutions-section {
  padding: 80px 0;
  background: #f4f8fd;
}

.sol-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.sol-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  align-items: stretch;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 28px;
  box-shadow: 0 2px 20px rgba(0, 100, 200, 0.07);
  transition: box-shadow 0.3s;
}

.sol-row:hover {
  box-shadow: 0 8px 36px rgba(0, 100, 200, 0.13);
}

/* 偶数项：文字在左，视频在右 */
.sol-row.reverse {
  direction: rtl;
}

.sol-row.reverse>* {
  direction: ltr;
}

.sol-media {
  position: relative;
  overflow: hidden;
  border-radius: 12px
}

.sol-video-box {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sol-play-btn {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 46px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s, background 0.3s;
  border: 1px solid #fff;
}

.sol-play-btn:hover {
  transform: scale(1.1);
}

.sol-text {
  padding: 44px 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

.sol-scene-title {
  font-size: 30px;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.2;
}

.sol-scene-sub {
  font-size: 14px;
  color: #b3b2b2;
  font-weight: 500;
  letter-spacing: 0.5px;
}

.sol-scene-desc {
  font-size: 15px;
  color: #666;
  font-weight: 800;
  line-height: 1.9;
}

.sol-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.sol-tag {
  padding: 5px 16px;
  /* background: #eef5ff; */
  color: #666;
  border-radius: 20px;
  font-size: 13px;
  border: 1px solid #dedddd;
}

.sol-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #00D4ff;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  transition: gap 0.2s;
}

.sol-more:hover {
  gap: 8px;
}

/* 公司介绍区块 */
.about-section {
  padding: 80px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-title {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
}

.about-desc {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin-bottom: 30px;
}

.about-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: #00D4ff;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 5px;
  display: block;
}

.about-video {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.video-placeholder {
  height: 300px;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.play-button {
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #00D4ff;
  cursor: pointer;
  transition: transform 0.3s;
}

.play-button:hover {
  transform: scale(1.1);
}

/* 核心产品解决方案（嵌入 about-section） */
.solutions-block {
  margin-top: 60px;
  padding-top: 50px;
  border-top: 1px solid #eef2f7;
}

.solutions-block-title {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', sans-serif;
  text-align: center;
  font-size: 34px;
  font-weight: 900;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.solutions-block-sub {
  text-align: center;
  font-size: 15px;
  color: #b3b2b2;
  margin-bottom: 40px;
}

.solutions-cards {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.sol-card {
  background: #fff;
  border-radius: 14px;
  padding: 28px 20px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  box-shadow: 0 2px 16px rgba(0, 120, 200, 0.07);
  transition: box-shadow 0.3s, transform 0.3s;
  cursor: pointer;
}

.sol-card:hover {
  box-shadow: 0 8px 28px rgba(0, 120, 200, 0.14);
  transform: translateY(-4px);
}

.sol-icon {
  width: 56px;
  height: 56px;
  background: #daeeff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sol-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sol-title {
  font-size: 17px;
  font-weight: 700;
  color: #1a1a2e;
}

.sol-desc {
  font-size: 13px;
  color: #888;
  line-height: 1.8;
}

/* 数据统计区块 */
.stats-section {
  padding: 70px 0 80px;
  background: linear-gradient(to bottom, #e8f4fd 2%, #ffffff 100%);
}

.stats-main-title {
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.stats-sub-title {
  text-align: center;
  font-size: 15px;
  color: #888;
  margin-bottom: 48px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  text-align: center;
  margin-bottom: 28px;
  background: #f6f8f9;
  border-radius: 12px;
  padding: 24px 12px;
}

.stat-card {
  padding: 10px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border-right: 1px solid #c8e0f0; */
}

/* .stat-card:last-child {
  border-right: none;
} */

.stat-value {
  display: block;
  font-size: 48px;
  font-weight: 800;
  color: #00D4ff;
  line-height: 1.1;
  margin-bottom: 10px;
}

.stat-unit {
  font-size: 22px;
  font-weight: 600;
  color: #5f656b;
}

.stat-label {
  font-size: 14px;
  color: #5f656b;
}

/* 技术特性卡片 */
.tech-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.tech-card {
  background: #f6f8f9;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  box-shadow: 0 2px 16px rgba(0, 120, 200, 0.07);
  transition: box-shadow 0.3s, transform 0.3s;
}

.tech-card:hover {
  box-shadow: 0 8px 28px rgba(0, 120, 200, 0.13);
  transform: translateY(-3px);
}

.tech-icon {
  width: 80px;
  height: 80px;
  min-width: 80px;
  background: #dbf2f9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;
}

.tech-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.tech-card-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.tech-card-desc {
  font-size: 14px;
  color: #888;
  line-height: 1.9;
  flex: 1;
}

.tech-card-tag {
  display: inline-block;
  margin-top: 16px;
  padding: 5px 16px;
  background: #e8f4fd;
  color: #00D4ff;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  align-self: flex-end;
}

/* 产品展示区块 */
.products-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.product-showcase-item {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.product-showcase-item:not(.center) {
  opacity: 0.5;
  filter: blur(2px);
}

.product-showcase-item.center {
  opacity: 1;
  filter: blur(0);
  z-index: 2;
}

.product-showcase-item:hover {
  opacity: 1 !important;
  filter: blur(0) !important;
}

.product-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  height: 400px;
  cursor: pointer;
}

.product-showcase-item.center .product-card {
  box-shadow: 0 16px 50px rgba(0, 120, 200, 0.25);
}

.product-card:hover {
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
}

.product-bg-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-overlay {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding: 20px 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 100%);
  /* color: #fff; */
}

.product-name {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 6px;
  /* text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3); */
}

.product-spec {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 24px;
}

.product-buttons {
  display: flex;
  justify-content: center;
  gap: 14px;
}

.product-btn {
  padding: 6px 12px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
}

.product-btn-primary {
  background: rgba(0, 168, 255, 0.9);
  color: white;
}

.product-btn-primary:hover {
  background: #00D4ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 168, 255, 0.4);
}

.product-btn-secondary {
  color: black;
  border: 1px solid black;
  background: none;
}

/* .product-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.35);
  border-color: white;
} */

/* 产品轮播容器 */
.products-carousel {
  position: relative;
  padding: 0 60px;
}

/* 轮播箭头 */
.product-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.3);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
  backdrop-filter: blur(4px);
}

.product-arrow:hover {
  background: rgba(0, 0, 0, 0.5);
  transform: translateY(-50%) scale(1.1);
}

.product-arrow-left {
  left: 0;
}

.product-arrow-right {
  right: 0;
}

/* 产品分页指示器 */
.product-pagination {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 10px;
  align-items: center;
}

.product-pagination-dot {
  width: 32px;
  height: 3px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s;
}

.product-pagination-dot.active {
  background: #00D4ff;
  width: 48px;
}

/* 产品网格展示 */
.products-grid-showcase {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  align-items: center;
  transition: opacity 0.3s ease;
}

/* 轮播内产品卡片始终可见，覆盖IntersectionObserver动画 */
.products-carousel .product-card {
  opacity: 1 !important;
}

/* 全流程服务保障体系区块 */
.coverage-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.coverage-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.coverage-item {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 100, 200, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coverage-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 100, 200, 0.15);
}

.coverage-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.coverage-icon svg {
  width: 32px;
  height: 32px;
}

.coverage-label {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.coverage-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  flex: 1;
}

.coverage-tag {
  display: inline-block;
  padding: 6px 16px;
  background: #e6f7ff;
  color: #00D4ff;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* 新闻动态区块 */
.news-section {
  padding: 74px 0;
  background: #f6f8f9;
}

.news-layout {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* 大新闻卡片 */
.news-main-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  min-height: 320px;
}

.news-main-image {
  height: 100%;
}

.news-main-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-main-content {
  padding: 59px 0 140px 72px;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.news-hot-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 36px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  color: white;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 60px;
  align-self: flex-start;
  border-radius: 0;
  padding: 0;
}

.news-main-title {
  font-size: 30px;
  font-weight: 900;
  color: #000;
  margin-bottom: 77px;
  /* line-height: 1.4; */
}

.news-main-excerpt {
  font-size: 23.5px;
  color: #000;
  /* line-height: 1.6; */
  margin-bottom: 105px;
  /* letter-spacing: 1px; */
}

.news-read-more {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #00D4ff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.3s;
}

.news-read-more:hover {
  gap: 12px;
}

/* 三个小新闻卡片 */
.news-small-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.news-small-card {
  /* background: white; */
  border-radius: 12px;
  overflow: hidden;
  /* box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06); */
  transition: transform 0.3s, box-shadow 0.3s;
}

.news-small-card:hover {
  transform: translateY(-5px);
  /* box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1); */
}

.news-small-image {
  border-radius: 12px;
  overflow: hidden;
}

.news-small-image img {
  display: block;
  max-width: 100%;
}

.news-small-content {
  padding: 20px;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.news-category {
  color: #00D4ff;
  font-size: 12px;
  font-weight: 600;
}

.news-date {
  color: #999;
  font-size: 12px;
}

.news-title {
  font-size: 16px;
  font-weight: 600;
  color: #1a1a2e;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 联系区块 */
/* 联系区块 */
.contact-section {
  padding: 112px 0 118px;
  background: #FFF;
  text-align: center;
}

/* 联系区块继承通用标题样式，无需额外覆盖 */

.contact-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 60px;
  text-align: left;
  align-items: start;
}

/* 左侧信息区 */
.contact-info {
  min-width: 0;
  overflow: hidden;
}

.contact-features {
  display: flex;
  gap: 20px;
  margin-bottom: 60px;
}

.contact-feature-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 15px;
  color: #adb1b5;
}

.contact-info-title {
  font-size: 33px;
  font-weight: 900;
  color: #000;
  margin-bottom: 48px;
}

.contact-info-desc {
  font-size: 20px;
  color: #adb1b5;
  margin-bottom: 42px;
}

.contact-trusted-label {
  font-size: 20px;
  color: #adb1b5;
  letter-spacing: 1px;
  margin-bottom: 69px;
}

.contact-trusted-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.trusted-item {
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8f9;
  border: 1px solid #c1c6c8;
  border-radius: 8px;
  font-size: 15px;
  color: #adb1b5;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

/* 右侧表单区 */
.contact-form-wrapper {
  background: #F6F8F9;
  border-radius: 12px;
  padding: 57px 48px 48px;
  /* box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06); */
  border: 2px solid #bbbfc3;
}

.contact-form {
  display: flex;
  flex-direction: column;
  /* gap: 32px; */
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px
}

.form-field {
  position: relative;
}

.form-field-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.form-input {
  width: 100%;
  height: 85px;
  border: 1px solid #bbbfc3;
  border-radius: 10px;
  font-size: 15px;
  color: #bfc3c5;
  transition: border-color 0.3s;
  background: white;
  box-sizing: border-box;
  padding: 12px 12px 12px 50px;
}

.form-input::placeholder {
  color: #bbb;
}

.form-input:focus {
  outline: none;
  border-color: #00D4ff;
}

.form-field-textarea {
  position: relative;
  margin-top: 33px;
  margin-bottom: 27px;
}

.form-field-textarea .form-textarea {
  width: 100%;
  min-height: 157px;
  resize: vertical;
  padding: 12px 14px 32px 14px;
  box-sizing: border-box;
}

.form-char-count {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 12px;
  color: #ccc;
  pointer-events: none;
  z-index: 1;
}

.submit-btn {
  width: 100%;
  height: 79px;
  background: #22dbff;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 19px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.submit-btn:hover {
  background: #00b8e6;
}

.submit-arrow {
  font-size: 18px;
}

.form-privacy {
  text-align: center;
  font-size: 12px;
  color: #adb1b5;
  margin-top: 10px;
}

/* 页脚样式已移至Footer.vue组件 */

/* 响应式设计 */

/* 中等屏幕 (1200px ~ 1400px) - 联系部分同比例缩小 */
@media (max-width: 1400px) {
  .contact-content {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 50px;
  }

  .contact-info-title {
    font-size: 28px;
    margin-bottom: 40px;
  }

  .contact-info-desc {
    font-size: 17px;
    margin-bottom: 36px;
  }

  .contact-trusted-label {
    font-size: 17px;
    margin-bottom: 50px;
  }

  .trusted-item {
    width: 100%;
    height: 50px;
  }

  .contact-trusted-grid {
    gap: 10px;
  }

  .contact-features {
    margin-bottom: 50px;
  }

  .contact-feature-item {
    font-size: 14px;
  }

  /* 右侧表单区域微调 */
  .contact-form-wrapper {
    padding: 48px 42px 42px;
  }

  .form-input {
    height: 80px;
  }

  .submit-btn {
    height: 75px;
    font-size: 18px;
  }

  .form-row {
    margin-bottom: 30px;
  }
}

/* 较小中等屏幕 (1024px ~ 1200px) - 进一步缩小 */
@media (max-width: 1200px) {
  .contact-content {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 40px;
  }

  .contact-info-title {
    font-size: 24px;
    margin-bottom: 32px;
  }

  .contact-info-desc {
    font-size: 15px;
    margin-bottom: 28px;
  }

  .contact-trusted-label {
    font-size: 15px;
    margin-bottom: 40px;
  }

  .trusted-item {
    width: 100%;
    height: 44px;
    font-size: 13px;
  }

  .contact-trusted-grid {
    gap: 8px;
  }

  .contact-features {
    margin-bottom: 40px;
  }

  .contact-feature-item {
    font-size: 13px;
  }

  /* 右侧表单区域也相应调整 */
  .contact-form-wrapper {
    padding: 40px 36px 36px;
  }

  .form-input {
    height: 75px;
    font-size: 14px;
  }

  .submit-btn {
    height: 70px;
    font-size: 17px;
  }

  .form-row {
    gap: 14px;
    margin-bottom: 28px;
  }

  .form-field-textarea .form-textarea {
    min-height: 140px;
  }

  .form-char-count {
    bottom: 8px;
    right: 10px;
  }

  .form-privacy {
    font-size: 11px;
    margin-top: 8px;
  }
}

/* iPad / 平板 (768px ~ 1024px) */
@media (max-width: 1024px) {
  .container {
    padding: 0 64px;
  }

  .header-container {
    padding: 24px;
  }

  .nav-menu {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 30, 60, 0.97);
    backdrop-filter: blur(12px);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 20px;
    gap: 0;
    z-index: 999;
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

  /* 轮播 iPad 适配 */
  .hero-section {
    height: auto;
  }



  .hero-title,
  .slide-title {
    font-size: 40px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 20px;
  }

  .solutions-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .sol-row {
    grid-template-columns: 1fr;
  }

  .sol-row.reverse {
    direction: ltr;
  }

  .sol-text {
    padding: 28px 24px;
  }

  .about-content {
    grid-template-columns: 1fr;
  }

  .solutions-cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .products-grid-showcase {
    gap: 20px;
  }

  .product-showcase-item:not(.center) {
    opacity: 0.5;
    filter: blur(1px);
  }

  .product-card {
    height: 320px;
  }

  .product-arrow {
    width: 40px;
    height: 40px;
  }

  .products-carousel {
    padding: 0 50px;
  }

  .product-pagination {
    bottom: -35px;
  }

  .coverage-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .coverage-item {
    padding: 24px 16px;
  }

  .coverage-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }

  .coverage-label {
    font-size: 16px;
  }

  .coverage-desc {
    font-size: 12px;
  }

  /* 新闻动态响应式 - 平板端 */
  .news-main-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .news-main-image {
    height: auto;
  }

  .news-main-image img {
    height: auto;
    object-fit: contain;
  }

  .news-main-content {
    padding: 30px;
  }

  .news-main-title {
    font-size: 24px;
  }

  .news-small-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  /* 联系区块响应式 - 平板端 */
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-features {
    flex-wrap: wrap;
  }

  .contact-trusted-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .contact-form-wrapper {
    padding: 28px;
  }

  .contact-section {
    margin-right: 0;
  }

  .form-field-textarea .form-textarea {
    min-height: 150px;
  }

  /* 页脚响应式样式已移至Footer.vue组件 */
}

/* 手机 (≤768px) */
@media (max-width: 768px) {
  .container {
    padding: 0 46px;
  }

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

  /* 轮播手机适配 */
  .hero-section {
    height: auto;
  }

  .slide-content {
    padding: 0 5%;
    align-items: flex-start;
  }

  .hero-title,
  .slide-title {
    font-size: 26px;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 24px;
  }

  .hero-btn {
    padding: 10px 28px;
    font-size: 14px;
    border-radius: 24px;
    align-self: flex-start;
  }

  /* 手机隐藏左右箭头 */
  .banner-arrow {
    display: none;
  }

  /* 手机隐藏slide中的logo */
  .slide-logos {
    display: none;
  }

  .section-title {
    font-size: 26px;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .stat-value {
    font-size: 28px;
  }

  .stat-unit {
    font-size: 16px;
  }

  .stat-label {
    font-size: 12px;
  }

  /* 手机端 stats 5列缩为5列小字 */
  .stats-grid {
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  .stat-card {
    padding: 8px 6px 14px;
  }

  .sol-scene-title {
    font-size: 22px;
  }

  .sol-text {
    padding: 20px 18px;
    gap: 10px;
  }

  .solutions-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 技术卡片手机变1列 */
  .tech-cards-grid {
    grid-template-columns: 1fr;
  }

  .tech-card {
    padding: 20px 18px 16px;
  }

  /* 新闻动态响应式 - 手机端 */
  .news-main-card {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .news-main-image {
    height: auto;
  }

  .news-main-image img {
    height: auto;
    object-fit: contain;
  }

  .news-main-content {
    padding: 24px;
  }

  .news-main-title {
    font-size: 20px;
  }

  .news-main-excerpt {
    font-size: 14px;
  }

  .news-small-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  /* 产品展示手机适配 - 只显示一张卡片 */
  .products-grid-showcase {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    max-width: 400px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    height: 300px;
  }

  .product-showcase-item {
    position: absolute;
    width: 100%;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .product-showcase-item:not(.center) {
    opacity: 0;
    filter: blur(4px);
    transform: scale(0.8);
    pointer-events: none;
  }

  .product-showcase-item.center {
    opacity: 1;
    filter: blur(0);
    transform: scale(1);
    z-index: 2;
  }

  .product-card {
    height: 280px;
  }

  .product-name {
    font-size: 24px;
  }

  .product-spec {
    font-size: 12px;
  }

  .product-name {
    font-size: 28px;
  }

  .product-spec {
    font-size: 13px;
  }

  /* 产品轮播手机适配 */
  .products-carousel {
    padding: 0 10px;
    position: relative;
    height: 350px;
  }

  .product-arrow {
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0.5);
  }

  .product-arrow svg {
    width: 18px;
    height: 18px;
  }

  .product-pagination {
    bottom: 10px;
  }

  .product-pagination-dot {
    width: 20px;
    height: 2px;
  }

  .product-pagination-dot.active {
    width: 30px;
  }

  /* 联系区块手机端响应式 */
  .contact-section {
    padding: 50px 15px;
    overflow: hidden;
    margin-right: 0;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 5px;
  }

  .contact-info-title {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .contact-info-desc {
    font-size: 14px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .contact-trusted-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .trusted-item {
    width: 100%;
    height: 45px;
    font-size: 12px;
    padding: 0 8px;
  }

  .contact-form-wrapper {
    padding: 15px;
    width: 100%;
    overflow: hidden;
  }

  .contact-form {
    width: 100%;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .form-field {
    width: 100%;
  }

  .form-field-icon {
    width: 18px;
    height: 18px;
  }

  .form-input {
    width: 100%;
    padding: 12px 12px 12px 40px;
    font-size: 14px;
  }

  .form-field-textarea .form-textarea {
    min-height: 140px;
  }

  .submit-btn {
    width: 100%;
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 600;
  }

  /* 页脚响应式样式已移至Footer.vue组件 */

  /* 手机端浮动工具栏调整 */
  .float-toolbar {
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    gap: 6px;
  }

  .float-btn {
    width: 36px;
    height: 36px;
  }

  .float-btn svg {
    width: 16px;
    height: 16px;
  }

  /* 手机端客服弹窗调整 */
  .chat-modal {
    width: 90%;
    height: 50vh;
    margin: 15px;
  }

  .chat-modal-header {
    padding: 12px 16px;
  }

  .chat-modal-header h3 {
    font-size: 16px;
  }

  .chat-messages {
    padding: 16px;
  }

  .chat-input-area {
    padding: 12px 16px;
  }

  .section-subtitle {
    margin-bottom: 32px;
  }

  .form-input {
    height: 65px;
  }

  .form-row {
    margin-bottom: 12px;
  }

  .submit-btn {
    height: 50px;
  }
}

/* 小屏手机 (≤480px) */
@media (max-width: 480px) {
  .container {
    padding: 0 22px;
  }

  .hero-title,
  .slide-title {
    font-size: 22px;
  }

  .solutions-grid {
    grid-template-columns: 1fr;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .coverage-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .coverage-item {
    padding: 20px 12px;
  }

  .coverage-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  .coverage-icon svg {
    width: 24px;
    height: 24px;
  }

  .coverage-label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .coverage-desc {
    font-size: 11px;
    margin-bottom: 12px;
  }

  .coverage-tag {
    padding: 4px 12px;
    font-size: 10px;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 新闻动态响应式 - 小屏手机 */
  .news-main-content {
    padding: 20px;
  }

  .news-main-title {
    font-size: 18px;
    margin-bottom: 12px;
  }

  .news-main-excerpt {
    font-size: 13px;
    margin-bottom: 16px;
  }

  .news-read-more {
    font-size: 14px;
  }

  .news-small-content {
    padding: 16px;
  }

  .news-title {
    font-size: 14px;
  }

  /* 小屏手机 contact 区块适配 */
  .contact-section {
    padding: 30px 10px;
    margin-right: 0;
  }

  .contact-info-title {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .contact-info-desc {
    font-size: 13px;
    margin-bottom: 15px;
  }

  .contact-trusted-grid {
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .trusted-item {
    height: 40px;
    font-size: 11px;
  }

  .contact-form-wrapper {
    padding: 12px;
  }

  .form-field-icon {
    width: 16px;
    height: 16px;
  }

  .form-input {
    padding: 10px 10px 10px 36px;
    font-size: 13px;
  }

  .form-field-textarea .form-textarea {
    min-height: 120px;
  }

  .submit-btn {
    padding: 12px 16px;
    font-size: 13px;
  }
}

/* 右侧浮动工具栏 */
.float-toolbar {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
}

.float-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: none;
  padding: 0;
}

.float-btn:hover {
  background: rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

.float-btn svg {
  width: 22px;
  height: 22px;
}

/* 响应式：小屏调整浮动工具栏 */
@media (max-width: 1024px) {
  .float-toolbar {
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    gap: 8px;
  }

  .float-btn {
    width: 40px;
    height: 40px;
  }

  .float-btn svg {
    width: 18px;
    height: 18px;
  }
}

/* 在线客服弹窗 */
.chat-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
}

.chat-modal {
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.chat-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: linear-gradient(135deg, #00D4ff 0%, #0099cc 100%);
  color: white;
}

.chat-modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.chat-modal-close {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chat-modal-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.chat-modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.chat-messages {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chat-message {
  display: flex;
  gap: 12px;
  max-width: 85%;
}

.chat-message.bot {
  align-self: flex-start;
}

.chat-message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.chat-message-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.chat-message.user .chat-message-avatar {
  background: #00D4ff;
  color: white;
}

.chat-message-content {
  padding: 12px 16px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.5;
}

.chat-message.bot .chat-message-content {
  background: #f5f5f5;
  color: #333;
  border-bottom-left-radius: 4px;
}

.chat-message.user .chat-message-content {
  background: #00D4ff;
  color: white;
  border-bottom-right-radius: 4px;
}

.chat-input-area {
  padding: 16px 20px;
  border-top: 1px solid #eee;
  display: flex;
  gap: 12px;
  background: #fafafa;
}

.chat-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.chat-input:focus {
  border-color: #00D4ff;
}

.chat-send-btn {
  padding: 12px 24px;
  background: #00D4ff;
  color: white;
  border: none;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.chat-send-btn:hover {
  background: #0099cc;
}

/* 响应式：小屏弹窗适配 */
@media (max-width: 480px) {
  .chat-modal {
    width: 92%;
    height: 45vh;
    margin: 10px;
  }

  .chat-modal-header {
    padding: 10px 14px;
  }

  .chat-messages {
    padding: 12px;
  }

  .chat-message {
    max-width: 90%;
  }

  .chat-input-area {
    padding: 10px 14px;
  }

  .chat-input {
    padding: 10px 14px;
    font-size: 13px;
  }

  .chat-send-btn {
    padding: 10px 18px;
    font-size: 13px;
  }
}
</style>