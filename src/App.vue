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

/* 响应式设计 */

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

  .about-content {
    grid-template-columns: 1fr;
  }

  .solutions-cards {
    grid-template-columns: repeat(3, 1fr);
  }
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

  .section-title {
    font-size: 26px;
  }

  .solutions-cards {
    grid-template-columns: repeat(2, 1fr);
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

  .section-subtitle {
    margin-bottom: 32px;
  }
}

/* 小屏手机 (≤480px) */
@media (max-width: 480px) {
  .container {
    padding: 0 22px;
  }

  .solutions-grid {
    grid-template-columns: 1fr;
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