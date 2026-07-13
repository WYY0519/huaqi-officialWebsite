<template>
  <div class="app">
    <!-- 顶部导航栏 -->
    <NavBar />

    <!-- 页面内容 -->
    <router-view />

    <!-- 页脚 -->
    <Footer />

    <!-- 右侧浮动联系栏 -->
    <FloatToolbar @open-chat="showChatModal = true" />

    <!-- 在线客服弹窗 -->
    <ChatModal :visible="showChatModal" @close="showChatModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import Footer from './components/home/Footer.vue'
import NavBar from './components/NavBar.vue'
import FloatToolbar from './components/FloatToolbar.vue'
import ChatModal from './components/ChatModal.vue'

// 客服弹窗状态
const showChatModal = ref(false)
let observer: IntersectionObserver | null = null
onMounted(async () => {
  await nextTick()

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
.news-card {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s;
}

.solution-card.visible,
.product-card.visible,
.news-card.visible {
  opacity: 1;
  transform: translateY(0);
}

/* coverage-item 不做入场隐藏，直接显示 */
.coverage-item {
  transition: box-shadow 0.3s, transform 0.3s;
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
@media (max-width: 1600px) {
  .container {

    padding: 0 100px 0 110px;
  }
}

@media (max-width: 1400px) {
  .container {

    padding: 0 70px 0 80px;
  }
}

@media (max-width: 1200px) {
  .container {

    padding: 0 50px 0 60px;
  }
}

/* iPad / 平板 (768px ~ 1024px) */
@media (max-width: 1024px) {
  .container {
    padding: 0 64px;
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

  .section-title {
    font-size: 26px;
  }

  .solutions-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-subtitle {
    margin-bottom: 32px;
  }
}

/* 小屏手机 (≤480px) */
@media (max-width: 480px) {
  .container {
    /* padding: 0 22px; */
  }

  .section-title {
    font-size: 22px;
  }

  .solutions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
