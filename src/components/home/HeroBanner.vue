<template>
  <section id="home" class="hero-section" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
    <div class="slider-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentSlide === index }">
        <div class="slide-bg"><img :src="slide.bgImage" alt="" class="slide-bg-img"></div>
        <div class="slide-overlay"></div>
        <div class="slide-content">
          <h1 class="slide-title" v-html="bannerTitle"></h1>
          <p class="slide-subtitle">{{ bannerSubtitle }}</p>
          <div class="slide-logos">
            <img class="logo-icon" @click="prevSlide" src="../../assets/home/图标/左.png" alt="华启天成" />
            <img class="logo-icon" @click="nextSlide" src="../../assets/home/图标/右.png" alt="华启天成" />
          </div>
          <a :href="bannerLink" class="hero-btn">{{ bannerBtnText }}</a>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"><span v-for="(slide, index) in slides" :key="index" class="pagination-dot"
        :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, inject, watch } from 'vue'

const slides = ref([
  { bgImage: new URL('../../assets/home/轮播图/消防车.png', import.meta.url).href },
  { bgImage: new URL('../../assets/home/轮播图/固定翼.png', import.meta.url).href },
  { bgImage: new URL('../../assets/home/轮播图/系留.png', import.meta.url).href },
  { bgImage: new URL('../../assets/home/轮播图/H400.png', import.meta.url).href }
])
const bannerTitle = '行业级无人机 <span class="highlight">H400</span>'
const bannerSubtitle = '重载无界，驰援未来'
const bannerLink = '/products/h400'
const bannerBtnText = '了解更多'
const currentSlide = ref(0)
const totalSlides = computed(() => slides.value.length)
let autoplayTimer: ReturnType<typeof setInterval> | null = null
let isPaused = false

// 注入轮播图控制方法
const carouselControl = inject('carouselControl') as {
  carouselIndex: { value: number }
  totalSlides: { value: number }
  prevSlide: () => void
  nextSlide: () => void
}

const prevSlide = () => { 
  currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
  carouselControl.carouselIndex.value = currentSlide.value
  resetAutoplay() 
}

const nextSlide = () => { 
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  carouselControl.carouselIndex.value = currentSlide.value
  resetAutoplay() 
}

const goToSlide = (index: number) => { 
  currentSlide.value = index
  carouselControl.carouselIndex.value = index
  resetAutoplay() 
}

const startAutoplay = () => { if (isPaused) return; autoplayTimer = setInterval(() => { 
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value
  carouselControl.carouselIndex.value = currentSlide.value
}, 5000) }
const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null } }
const resetAutoplay = () => { stopAutoplay(); startAutoplay() }
const pauseAutoplay = () => { isPaused = true; stopAutoplay() }
const resumeAutoplay = () => { isPaused = false; startAutoplay() }

// 监听外部控制
watch(() => carouselControl.carouselIndex.value, (newIndex) => {
  if (newIndex !== currentSlide.value) {
    currentSlide.value = newIndex
    resetAutoplay()
  }
})

onMounted(() => { 
  startAutoplay()
  // 同步初始状态
  carouselControl.carouselIndex.value = currentSlide.value
  carouselControl.totalSlides.value = totalSlides.value
})
onUnmounted(() => { stopAutoplay() })
</script>

<style>
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
  font-weight: 400;
  letter-spacing: 2px;
  padding-left: 6%
}

.hero-btn {
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

/* 响应式 - iPad */
@media (max-width: 1024px) {
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
}

/* 响应式 - 手机 */
@media (max-width: 768px) {
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

  .banner-arrow {
    display: none;
  }

  .slide-logos {
    display: none;
  }
}

/* 响应式 - 小屏手机 */
@media (max-width: 480px) {

  .hero-title,
  .slide-title {
    font-size: 22px;
  }
}
</style>
