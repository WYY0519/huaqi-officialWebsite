<template>
  <section id="home" class="hero-section" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
    <div class="slider-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentSlide === index }">
        <!-- 第一张图片直接加载，其他轮播图懒加载 -->
        <div class="slide-bg"><img :src="slide.bgImage" alt="" class="slide-bg-img"></div>
        <div class="slide-overlay"></div>
        <div class="slide-content">
          <div class="slide-title" v-html="slide.title">
          </div>
          <div class="slide-line"> </div>
          <div class="slide-subtitle">{{ slide.subtitle }}</div>
          <div class="slide-logos">
            <img class="logo-icon" @click="prevSlide" :src="prevIcon" alt="华启天成" />
            <img class="logo-icon" @click="nextSlide" :src="nextIcon" alt="华启天成" />
          </div>
          <a :href="slide.link" class="hero-btn">{{ slide.btnText }}</a>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"><span v-for="(_slide, index) in slides" :key="index" class="pagination-dot"
        :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, inject, watch } from 'vue'

const slides = ref([
  {
    bgImage: new URL('../../assets/home/轮播图/消防车.png', import.meta.url).href,
    title: '行业级无人机<span class="highlight">消防车</span>',
    subtitle: '重载无界，驰援未来',
    link: '/products/fire-truck',
    btnText: '了解更多'
  },
  {
    bgImage: new URL('../../assets/home/轮播图/固定翼.png', import.meta.url).href,
    title: '行业级无人机<span class="highlight">固定翼</span>',
    subtitle: '重载无界，驰援未来',
    link: '/products/fixed-wing',
    btnText: '了解更多'
  },
  {
    bgImage: new URL('../../assets/home/轮播图/系留.png', import.meta.url).href,
    title: '行业级无人机<span class="highlight">系留</span>',
    subtitle: '重载无界，驰援未来',
    link: '/products/tethered',
    btnText: '了解更多'
  },
  {
    bgImage: new URL('../../assets/home/轮播图/H400.png', import.meta.url).href,
    title: '行业级无人机<span class="highlight">H400</span>',
    subtitle: '重载无界，驰援未来',
    link: '/products/h400',
    btnText: '了解更多'
  }
])

// 动态添加preload，让浏览器尽早开始下载首屏轮播图
const preloadLink = document.createElement('link')
preloadLink.rel = 'preload'
preloadLink.as = 'image'
preloadLink.href = slides.value[0].bgImage
document.head.appendChild(preloadLink)

// 图标路径
const prevIcon = new URL('../../assets/home/图标/lb-left.png', import.meta.url).href
const nextIcon = new URL('../../assets/home/图标/lb-right.png', import.meta.url).href
const currentSlide = ref(0)
const totalSlides = computed(() => slides.value.length)
let autoplayTimer: ReturnType<typeof setInterval> | null = null
let isPaused = false

// 注入轮播图控制方法
const carouselControl = inject<{
  carouselIndex: { value: number }
  totalSlides: { value: number }
  prevSlide: () => void
  nextSlide: () => void
}>('carouselControl')

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
  if (carouselControl) {
    carouselControl.carouselIndex.value = currentSlide.value
  }
  resetAutoplay()
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  if (carouselControl) {
    carouselControl.carouselIndex.value = currentSlide.value
  }
  resetAutoplay()
}

const goToSlide = (index: number) => {
  currentSlide.value = index
  if (carouselControl) {
    carouselControl.carouselIndex.value = index
  }
  resetAutoplay()
}

const startAutoplay = () => {
  if (isPaused) return; autoplayTimer = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value
    if (carouselControl) {
      carouselControl.carouselIndex.value = currentSlide.value
    }
  }, 5000)
}
const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null } }
const resetAutoplay = () => { stopAutoplay(); startAutoplay() }
const pauseAutoplay = () => { isPaused = true; stopAutoplay() }
const resumeAutoplay = () => { isPaused = false; startAutoplay() }

// 监听外部控制
watch(() => carouselControl?.carouselIndex.value, (newIndex) => {
  if (newIndex !== undefined && newIndex !== currentSlide.value) {
    currentSlide.value = newIndex
    resetAutoplay()
  }
})

onMounted(() => {
  startAutoplay() // 暂时禁用自动播放
  // 同步初始状态
  if (carouselControl) {
    carouselControl.carouselIndex.value = currentSlide.value
    carouselControl.totalSlides.value = totalSlides.value
  }
})
onUnmounted(() => { stopAutoplay() })
</script>

<style>
/* 主视觉区域 - 全站以 1920 为基准换算 vw，任意屏宽等比例缩放（1920 时还原当前尺寸） */
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
  overflow: hidden;
}

.slide-bg-img {
  width: 100%;
  height: auto;
  display: block;
  transform: scale(1);
  transition: transform 8s ease-out;
}

.slide.active .slide-bg-img {
  transform: scale(1.1);
}

.slide-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.slide-content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* 1920 时 = 215px（原 1601~1950 断块取值） */
  padding-bottom: 10.4167vw;
}

.slide-logos {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.slide-logos img {
  /* 1920 时 = 105px（图标原始宽，按比例缩放） */
  width: 5.46875vw;
  height: auto;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

/* .slide-logos img:hover {
  background-color: #00D4ff;
} */

/* 入场动画：从右侧滑入 */
@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(4.16667vw);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide.active .slide-title {
  animation: slideInFromRight 0.8s ease-out forwards;
}

.slide.active .slide-line {
  animation: slideInFromRight 0.8s ease-out 0.2s forwards;
  opacity: 0;
}

.slide.active .slide-subtitle {
  animation: slideInFromRight 0.8s ease-out 0.4s forwards;
  opacity: 0;
}

.hero-title,
.slide-title {
  /* 1920 时 = 59px */
  font-size: 3.07292vw;
  font-weight: 900;
  color: #fff;
  /* 1920 时 = 23px */
  margin-bottom: 1.19792vw;
  line-height: normal;
  padding-left: 6%;
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  /* 1920 时 = 3px */
  letter-spacing: 0.15625vw;
}

.slide-title .highlight {
  color: #00D4ff !important;
}

.slide-line {
  /* 1920 时 = 30px / 148px / 9px */
  margin-bottom: 1.5625vw;
  margin-left: 6%;
  width: 7.70833vw;
  background: linear-gradient(270deg, transparent, #00D4ff);
  height: 0.46875vw;
}

.hero-subtitle,
.slide-subtitle {
  /* 1920 时 = 43px */
  font-size: 2.23958vw;
  color: #fff;
  /* 1920 时 = 28px */
  margin-bottom: 1.45833vw;
  font-weight: 400;
  /* 1920 时 = 2px */
  letter-spacing: 0.10417vw;
  padding-left: 6%;
  font-family: 'OPPOSans', sans-serif;
}

.hero-btn {
  align-self: unset;
  display: inline-block;
  /* 1920 时 = 24px 36px */
  padding: 1.25vw 1.1vw 1.25vw 1.1vw;
  /* 1920 时 = 2px */
  border: 0.23417vw solid rgba(255, 255, 255, 1);
  /* 1920 时 = 30px */
  border-radius: 1.5625vw;
  color: #fff;
  text-decoration: none;
  /* 1920 时 = 25px */
  font-size: 1.30208vw;
  font-weight: bold;
  font-family: 'OPPOSans', sans-serif;
  transition: all 0.3s;
  background: transparent;
  margin-left: 6%;
  letter-spacing: 0.263vw;
}

.hero-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: #fff;
}

/* 轮播箭头 */
.banner-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  /* 1920 时 = 50px / 80px */
  width: 2.60417vw;
  height: 4.16667vw;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
  backdrop-filter: blur(0.20833vw);
}

.banner-arrow:hover {
  background: rgba(0, 0, 0, 0.4);
}

.banner-arrow-left {
  left: 0;
  border-radius: 0 0.20833vw 0.20833vw 0;
}

.banner-arrow-right {
  right: 0;
  border-radius: 0.20833vw 0 0 0.20833vw;
}

/* 轮播分页指示器 */
.swiper-pagination {
  position: absolute;
  /* 1920 时 = 24px */
  bottom: 1.25vw;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  /* 1920 时 = 10px */
  gap: 0.52083vw;
  align-items: center;
}

.pagination-dot {
  /* 1920 时 = 32px / 4px */
  width: 1.66667vw;
  height: 0.20833vw;
  border-radius: 0.10417vw;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background 0.3s, width 0.3s;
}

.pagination-dot.active {
  background: #00D4ff;
  /* 1920 时 = 48px */
  width: 2.5vw;
}
</style>
