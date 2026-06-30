<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <header class="header" :class="{ scrolled: isScrolled }">
      <div class="header-container">
        <div class="logo">
          <svg class="logo-icon" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0L0 16L10 16L8 36L20 24L32 36L30 16L40 16L20 0Z" fill="white" />
          </svg>
          <div class="logo-text-group">
            <span class="logo-name">华启天成</span>
            <span class="logo-sub">HOUYEN</span>
          </div>
        </div>
        <nav class="nav-menu" :class="{ open: isMobileMenuOpen }">
          <router-link v-for="(item, i) in navItems" :key="i" :to="item.href" class="nav-link"
            :class="{ active: activeSection === item.id }" @click="handleNavClick(item.id)">{{ item.label }}</router-link>
          <!-- <button class="mobile-login-btn" @click="isMobileMenuOpen = false">联系我们</button> -->
        </nav>
        <div class="header-actions">
          <a href="/contact" class="contact-btn">
            联系我们
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
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
    <footer class="footer">
      <div class="container">
        <div class="footer-main">
          <!-- 左侧品牌 -->
          <div class="footer-brand">
            <div class="footer-logo-wrap">
              <svg class="footer-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L8 36H14L20 18L26 36H32L20 4Z" fill="#00cefc" />
                <path d="M12 28L20 8L28 28" stroke="#00cefc" stroke-width="2" fill="none" />
              </svg>
              <div class="footer-logo-text">
                <span class="footer-brand-name">华启天成</span>
                <span class="footer-brand-sub">ROUTEN</span>
              </div>
            </div>
            <div class="footer-social-icons">
              <a href="#" class="footer-social-icon" title="微信">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path
                    d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm3.456 2.107c-1.875-.085-3.745.486-5.15 1.7-1.48 1.304-2.25 3.387-1.48 5.562.67 1.895 2.477 3.272 4.642 3.758.264.059.533.089.801.089.95 0 1.866-.29 2.622-.793a.712.712 0 01.59.082l1.574.92a.272.272 0 00.14.045c.133 0 .241-.108.241-.244 0-.06-.024-.118-.04-.177l-.324-1.223a.49.49 0 01.176-.55C20.135 17.557 21 15.832 21 14c0-2.87-2.479-5.646-5.946-5.902zm-1.68 2.87c.532 0 .964.438.964.978s-.432.979-.964.979-.964-.439-.964-.98.432-.977.964-.977zm4.832 0c.532 0 .964.438.964.978s-.432.979-.964.979-.964-.439-.964-.98.432-.977.964-.977z" />
                </svg>
              </a>
              <a href="#" class="footer-social-icon" title="抖音">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.44a4.85 4.85 0 01-3.77-1.7V6.69h3.77z" />
                </svg>
              </a>
              <a href="#" class="footer-social-icon" title="微信">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path
                    d="M12 2C6.48 2 2 5.82 2 10.5c0 2.67 1.44 5.05 3.68 6.54l-.92 2.74 3.18-1.59c1.02.28 2.1.43 3.2.43h.26c-.17-.56-.26-1.14-.26-1.73 0-4.96 4.49-8.99 10.02-8.99.26 0 .52.01.78.03C21.86 4.33 17.36 2 12 2zm-3.5 7.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm7 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM12 22c-1.1 0-2.16-.17-3.16-.48l-.32-.1-1.9.95.6-1.8C6.08 19.29 5 17.5 5 15.5c0-3.58 3.58-6.5 8-6.5s8 2.92 8 6.5-3.58 6.5-8 6.5c-.83 0-1.64-.1-2.41-.29-.08-.02-.16-.03-.24-.04l-.35.08z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- 中间链接菜单 -->
          <div class="footer-menu-grid">
            <div class="footer-menu-col">
              <h4 class="footer-menu-title">产品中心</h4>
              <ul class="footer-menu-list">
                <li><a href="#">多旋翼飞行平台</a></li>
                <li><a href="#">复合翼飞行平台</a></li>
                <li><a href="#">系留无人机</a></li>
                <li><a href="#">智能无人机指挥车</a></li>
                <li><a href="#">载荷配件</a></li>
              </ul>
            </div>
            <div class="footer-menu-col">
              <h4 class="footer-menu-title">解决方案</h4>
              <ul class="footer-menu-list">
                <li><a href="#">城市消防</a></li>
                <li><a href="#">森林消防</a></li>
                <li><a href="#">高空清洗</a></li>
                <li><a href="#">大疆全系挂载适配</a></li>
                <li><a href="#">科研定制服务</a></li>
              </ul>
            </div>
            <div class="footer-menu-col">
              <h4 class="footer-menu-title">服务支持</h4>
              <ul class="footer-menu-list">
                <li><a href="#">定制研发</a></li>
                <li><a href="#">技术支持</a></li>
                <li><a href="#">培训认证</a></li>
                <li><a href="#">售后保障</a></li>
                <li><a href="#">现场演示</a></li>
              </ul>
            </div>
            <div class="footer-menu-col">
              <h4 class="footer-menu-title">关于我们</h4>
              <ul class="footer-menu-list">
                <li><a href="#">关于我们</a></li>
                <li><a href="#">企业简介</a></li>
                <li><a href="#">发展历程</a></li>
                <li><a href="#">资质荣誉</a></li>
                <li><a href="#">新闻动态</a></li>
                <li><a href="#">加入我们</a></li>
              </ul>
            </div>
            <div class="footer-menu-col">
              <h4 class="footer-menu-title">服务支持</h4>
              <ul class="footer-menu-list">
                <li><a href="#">产品手册</a></li>
                <li><a href="#">技术白皮书</a></li>
                <li><a href="#">操作视频</a></li>
                <li><a href="#">常见问题</a></li>
                <li><a href="#">下载中心</a></li>
              </ul>
            </div>
          </div>

          <!-- 右侧二维码 -->
          <div class="footer-qrcode">
            <div class="footer-qrcode-img">
              <svg viewBox="0 0 100 100" width="100" height="100" fill="white">
                <rect x="5" y="5" width="30" height="30" rx="2" />
                <rect x="65" y="5" width="30" height="30" rx="2" />
                <rect x="5" y="65" width="30" height="30" rx="2" />
                <rect x="10" y="10" width="20" height="20" rx="1" fill="#2a2a2a" />
                <rect x="70" y="10" width="20" height="20" rx="1" fill="#2a2a2a" />
                <rect x="10" y="70" width="20" height="20" rx="1" fill="#2a2a2a" />
                <rect x="15" y="15" width="10" height="10" fill="white" />
                <rect x="75" y="15" width="10" height="10" fill="white" />
                <rect x="15" y="75" width="10" height="10" fill="white" />
                <rect x="40" y="5" width="8" height="8" fill="white" />
                <rect x="52" y="5" width="8" height="8" fill="white" />
                <rect x="40" y="18" width="8" height="8" fill="white" />
                <rect x="52" y="18" width="8" height="8" fill="white" />
                <rect x="40" y="40" width="20" height="20" rx="2" fill="white" />
                <rect x="45" y="45" width="10" height="10" fill="#2a2a2a" />
                <rect x="5" y="40" width="8" height="8" fill="white" />
                <rect x="18" y="40" width="8" height="8" fill="white" />
                <rect x="5" y="52" width="8" height="8" fill="white" />
                <rect x="18" y="52" width="8" height="8" fill="white" />
                <rect x="65" y="40" width="8" height="8" fill="white" />
                <rect x="78" y="40" width="8" height="8" fill="white" />
                <rect x="90" y="40" width="5" height="8" fill="white" />
                <rect x="65" y="52" width="8" height="8" fill="white" />
                <rect x="78" y="52" width="8" height="8" fill="white" />
                <rect x="40" y="65" width="8" height="8" fill="white" />
                <rect x="52" y="65" width="8" height="8" fill="white" />
                <rect x="65" y="65" width="10" height="10" fill="white" />
                <rect x="80" y="65" width="10" height="10" fill="white" />
                <rect x="65" y="80" width="10" height="10" fill="white" />
                <rect x="80" y="80" width="15" height="15" rx="2" fill="white" />
                <rect x="83" y="83" width="9" height="9" fill="#2a2a2a" />
              </svg>
            </div>
            <p class="footer-qrcode-text">扫一扫关注</p>
            <p class="footer-qrcode-text">华启天成公众号</p>
          </div>
        </div>

        <!-- 底部信息栏 -->
        <div class="footer-info-bar">
          <span>服务电话：16680932174（微信同号）</span>
          <span class="footer-info-divider"></span>
          <span>公司地址:深圳市龙华区观湖街道鹭湖社区观乐路5号多彩科创园B座303</span>
        </div>

        <!-- 版权信息 -->
        <div class="footer-bottom">
          <p>Copyright © 2025 华启天成 All Rights Reserved</p>
        </div>
      </div>
    </footer>

    <!-- 右侧浮动联系栏 -->
    <div class="float-toolbar">
      <a href="tel:400-xxx-xxxx" class="float-btn" title="电话咨询">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" width="22" height="22">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>
      <a href="#" class="float-btn" title="在线客服" @click.prevent="showChatModal = true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" width="22" height="22">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01M12 10h.01M16 10h.01" />
        </svg>
      </a>
      <a href="#" class="float-btn" title="公司地址">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          stroke-linejoin="round" width="22" height="22">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
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

.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  /* max-width: 1200px; */
  margin: 0 auto;
  padding: 0 80px;
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
  color: #00cefc;
}

.header.scrolled .contact-btn {
  background: #00cefc;
  color: white;
}

.header.scrolled .mobile-menu-btn span {
  background: #fff;
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 90px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  width: 36px;
  height: 32px;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-size: 24px;
  font-weight: 700;
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
  background: #00cefc;
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
  gap: 6px;
  background: #00cefc;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.3s, transform 0.3s;
  text-decoration: none;
}

.contact-btn:hover {
  background: #00cefc;
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
  height: 100vh;
  min-height: 560px;
  overflow: hidden;
}

/* 轮播容器 */
.slider-wrapper {
  position: absolute;
  inset: 0;
}

.slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  pointer-events: none;
}

.slide.active {
  opacity: 1;
  pointer-events: auto;
}

.slide-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.slide-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 图片靠上展示，裁掉底部大量山体 */
  object-position: center top;
}

.slide-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.slide-content {
  position: relative;
  z-index: 2;
  padding: 0 8%;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
}

.hero-title,
.slide-title {
  font-size: 52px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
  line-height: 1.3;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

:deep(.slide-title) .highlight,
.slide-content :deep(.highlight),
.slide-content .highlight {
  color: #00cefc !important;
}

.slide-content h1 .highlight {
  color: #00cefc !important;
}

.hero-subtitle,
.slide-subtitle {
  font-size: 22px;
  color: #fff;
  margin-bottom: 28px;
  /* 缩小副标题和按钮间距 */
  font-weight: 400;
  letter-spacing: 2px;
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
  background: 00cefc;
  width: 48px;
}

/* 通用区块样式 */
.section-title {
  font-family: "Alibaba PuHuiTi Heavy", "Noto Sans SC Black", sans-serif;
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  color: #333;
  margin-bottom: 30px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 1px;
  background: #00cefc;
}

.section-subtitle {
  text-align: center;
  font-size: 20px;
  color: #b3b2b2;
  margin-bottom: 50px;
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
  min-height: 320px;
  background: linear-gradient(135deg, #1a73e8 0%, #0d47a1 100%);
  overflow: hidden;
  border-radius: 12px
}

.sol-video-box {
  width: 100%;
  height: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1565c0 0%, #0d47a1 100%);
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
  color: #00cefc;
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
  color: #00cefc;
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
  color: #00cefc;
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
  font-family: "Alibaba PuHuiTi Heavy", "Noto Sans SC Black", sans-serif;
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
  color: #00cefc;
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
  color: #00cefc;
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
  background: #00cefc;
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
  background: #00cefc;
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
  color: #00cefc;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* 新闻动态区块 */
.news-section {
  padding: 80px 0;
  background: #f6f8f9;
}

.news-layout {
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  overflow: hidden;
}

.news-main-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-main-content {
  padding: 20px 70px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-hot-tag {
  display: inline-block;
  padding: 6px 16px;
  background: #ff6b35;
  color: white;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 36px;
  align-self: flex-start;
}

.news-main-title {
  font-size: 38px;
  font-weight: 900;
  color: #1a1a2e;
  margin-bottom: 36px;
  line-height: 1.4;
}

.news-main-excerpt {
  font-size: 24px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 46px;
  letter-spacing: 1px;
}

.news-read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #00cefc;
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
  height: 180px;
  overflow: hidden;
  border-radius: 12px;
}

.news-small-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  color: #00cefc;
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
  padding: 80px 0;
  background: #FFF;
  text-align: center;
}

/* 联系区块继承通用标题样式，无需额外覆盖 */

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  text-align: left;
  align-items: start;
}

/* 左侧信息区 */
.contact-features {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.contact-feature-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #555;
}

.contact-info-title {
  font-size: 30px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 16px;
  line-height: 1.3;
}

.contact-info-desc {
  font-size: 20px;
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.contact-trusted-label {
  font-size: 13px;
  color: #999;
  letter-spacing: 1px;
  margin-bottom: 40px;
  font-weight: 500;
}

.contact-trusted-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.trusted-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background: #f6f8f9;
  border: 1px solid #c1c6c8;
  border-radius: 8px;
  font-size: 13px;
  color: #9b9ea0;
  text-align: center;
  white-space: nowrap;
}

/* 右侧表单区 */
.contact-form-wrapper {
  background: #F6F8F9;
  border-radius: 12px;
  padding: 36px;
  /* box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06); */
  border: 2px solid #bbbfc3;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
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
  padding: 14px 14px 14px 42px;
  border: 1px solid #bbbfc3;
  border-radius: 10px;
  font-size: 15px;
  color: #333;
  transition: border-color 0.3s;
  background: white;
  box-sizing: border-box;
}

.form-input::placeholder {
  color: #bbb;
}

.form-input:focus {
  outline: none;
  border-color: #00cefc;
}

.form-field-textarea {
  position: relative;
}

.form-field-textarea .form-textarea {
  min-height: 120px;
  resize: vertical;
  padding-top: 14px;
}

.form-char-count {
  position: absolute;
  bottom: 12px;
  right: 14px;
  font-size: 12px;
  color: #ccc;
}

.submit-btn {
  width: 100%;
  background: #00cefc;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
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
  color: #bbb;
  margin-top: 4px;
}

/* 页脚 */
.footer {
  background: #2a2a2a;
  color: rgba(255, 255, 255, 0.7);
  padding: 70px 30px 0;
}

.footer-main {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 50px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* 左侧品牌区 */
.footer-brand {
  min-width: 120px;
}

.footer-logo-wrap {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}

.footer-logo-icon {
  width: 40px;
  height: 40px;
}

.footer-logo-text {
  display: flex;
  flex-direction: column;
}

.footer-brand-name {
  font-size: 22px;
  font-weight: 700;
  color: white;
}

.footer-brand-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 1px;
}

.footer-social-icons {
  display: flex;
  gap: 10px;
}

.footer-social-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.7);
  transition: background 0.3s, color 0.3s;
}

.footer-social-icon:hover {
  background: #00cefc;
  color: white;
}

/* 中间链接菜单 */
.footer-menu-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
}

.footer-menu-title {
  font-size: 18px;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.footer-menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-menu-list li {
  margin-bottom: 10px;
}

.footer-menu-list a {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s;
}

.footer-menu-list a:hover {
  color: #00cefc;
}

/* 右侧二维码 */
.footer-qrcode {
  text-align: center;
  min-width: 120px;
}

.footer-qrcode-img {
  width: 100px;
  height: 100px;
  background: #444;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  overflow: hidden;
}

.footer-qrcode-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  margin: 2px 0;
}

/* 底部信息栏 */
.footer-info-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 30px 0;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-info-divider {
  width: 1px;
  height: 14px;
  background: rgba(255, 255, 255, 0.2);
}

/* 版权信息 */
.footer-bottom {
  padding: 30px 0;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
}

/* 响应式设计 */

/* iPad / 平板 (768px ~ 1024px) */
@media (max-width: 1024px) {
  .container {
    padding: 0 64px;
  }

  .header-container {
    padding: 0 24px;
    height: 70px;
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
    color: #00cefc;
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
    height: 80vh;
    min-height: 480px;
  }

  .slide-content {
    padding: 0 6%;
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

  .sol-media {
    min-height: 240px;
  }

  .sol-video-box {
    min-height: 240px;
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
    grid-template-columns: 1fr 1fr;
    min-height: 280px;
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

  .news-small-image {
    height: 150px;
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

  /* 页脚响应式 - 平板端 */
  .footer-main {
    grid-template-columns: 1fr;
    gap: 30px;
    text-align: center;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer-menu-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .footer-menu-grid>div:last-child,
  .footer-menu-grid>div:nth-child(4) {
    grid-column: span 1;
  }

  .footer-info-bar {
    flex-direction: column;
    gap: 8px;
  }

  .footer-info-divider {
    display: none;
  }
}

/* 手机 (≤768px) */
@media (max-width: 768px) {
  .container {
    padding: 0 46px;
  }

  .header-container {
    height: 56px;
    padding: 0 16px;
  }

  .logo-icon {
    width: 26px;
    height: 23px;
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
    height: 100svh;
    min-height: 480px;
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
    height: 200px;
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

  .news-small-image {
    height: 160px;
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

  /* 联系区块继承通用响应式样式 */

  .contact-info-title {
    font-size: 22px;
  }

  .contact-trusted-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .contact-form-wrapper {
    padding: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  /* 页脚响应式 - 手机端 */
  .footer-menu-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .footer-qrcode {
    margin-top: 10px;
  }

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
  .news-main-image {
    height: 180px;
  }

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

  .news-small-image {
    height: 140px;
  }

  .news-small-content {
    padding: 16px;
  }

  .news-title {
    font-size: 14px;
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
  background: linear-gradient(135deg, #00cefc 0%, #0099cc 100%);
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
  background: #00cefc;
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
  background: #00cefc;
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
  border-color: #00cefc;
}

.chat-send-btn {
  padding: 12px 24px;
  background: #00cefc;
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