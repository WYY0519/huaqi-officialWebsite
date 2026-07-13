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
    title: '行业级无人机 <span class="highlight">消防车</span>',
    subtitle: '重载无界，驰援未来',
    link: '/products/fire-truck',
    btnText: '了解更多'
  },
  {
    bgImage: new URL('../../assets/home/轮播图/固定翼.png', import.meta.url).href,
    title: '行业级无人机 <span class="highlight">固定翼</span>',
    subtitle: '重载无界，驰援未来',
    link: '/products/fixed-wing',
    btnText: '了解更多'
  },
  {
    bgImage: new URL('../../assets/home/轮播图/系留.png', import.meta.url).href,
    title: '行业级无人机 <span class="highlight">系留</span>',
    subtitle: '重载无界，驰援未来',
    link: '/products/tethered',
    btnText: '了解更多'
  },
  {
    bgImage: new URL('../../assets/home/轮播图/H400.png', import.meta.url).href,
    title: '行业级无人机 <span class="highlight">H400</span>',
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
const prevIcon = new URL('../../assets/home/图标/左.png', import.meta.url).href
const nextIcon = new URL('../../assets/home/图标/右.png', import.meta.url).href
const currentSlide = ref(3)
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
  // startAutoplay() // 暂时禁用自动播放
  // 同步初始状态
  if (carouselControl) {
    carouselControl.carouselIndex.value = currentSlide.value
    carouselControl.totalSlides.value = totalSlides.value
  }
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
  padding-bottom: 120px;
}

.slide-logos {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

/* 入场动画：从右侧滑入 */
@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(80px);
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
  font-size: 45px;
  font-weight: 900;
  color: #fff;
  margin-bottom: 23px;
  line-height: normal;
  padding-left: 6%;
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  letter-spacing: 4px
}


.slide-title .highlight {
  color: #00D4ff !important;
}

.slide-line {
  margin-bottom: 30px;
  margin-left: 6%;
  width: 150px;
  background: linear-gradient(270deg, transparent, #00D4ff);
  height: 8px;

}

.hero-subtitle,
.slide-subtitle {
  font-size: 32px;
  color: #fff;
  margin-bottom: 28px;
  font-weight: 400;
  letter-spacing: 2px;
  padding-left: 6%;
  font-family: 'Opposans', sans-serif;
  letter-spacing: 3px
}

.hero-btn {
  align-self: unset;
  display: inline-block;
  padding: 24px 36px;
  border: 2px solid rgba(255, 255, 255, 1);
  border-radius: 30px;
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Opposans', sans-serif;
  transition: all 0.3s;
  background: transparent;
  margin-left: 6%;
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
  background: #00D4ff;
  width: 48px;
}

/* ========== 响应式：严格按1950px基准等比例缩放 ========== */
/* 内容通过 bottom:0 锚定在图片底部，无需margin-bottom定位 */
/* 新增：1950px以上超大屏（4K/32寸大屏） 比例>1 */
@media (min-width: 1951px) {
  .slide-content {
    padding-bottom: 340px;
  }

  .hero-title,
  .slide-title {
    font-size: 44px;
    margin-bottom: 23px;
    letter-spacing: 3px;
  }

  .slide-line {
    width: 148px;
    height: 9px;
    margin-bottom: 30px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 32px;
    margin-bottom: 28px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 24px 36px;
    font-size: 19px;
    border-radius: 30px;
  }

  .swiper-pagination {
    bottom: 24px;
  }

  .pagination-dot {
    width: 32px;
    height: 4px;
  }

  .pagination-dot.active {
    width: 48px;
  }
}

/* 新增：1601px ~ 1950px 区间（2K/1080P大屏，你设计稿基准1950）比例0.82~1 */
@media (min-width: 1601px) and (max-width: 1950px) {
  .slide-content {
    padding-bottom: 215px;
  }

  .hero-title,
  .slide-title {
    font-size: 44px;
    margin-bottom: 23px;
    letter-spacing: 3px;
  }

  .slide-line {
    width: 148px;
    height: 9px;
    margin-bottom: 30px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 32px;
    margin-bottom: 28px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 24px 36px;
    font-size: 19px;
    border-radius: 30px;
  }

  .swiper-pagination {
    bottom: 24px;
  }

  .pagination-dot {
    width: 32px;
    height: 4px;
  }

  .pagination-dot.active {
    width: 48px;
  }
}

/* 响应式 - 1600px (比例 1600/1950 ≈ 0.82) */
@media (max-width: 1600px) {
  .slide-content {
    padding-bottom: 176px;
  }

  .hero-title,
  .slide-title {
    font-size: 37px;
    margin-bottom: 19px;
    letter-spacing: 3px;
  }

  .slide-line {
    width: 123px;
    height: 7px;
    margin-bottom: 25px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 26px;
    margin-bottom: 23px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 20px 30px;
    font-size: 16px;
    border-radius: 25px;
  }

  .swiper-pagination {
    bottom: 20px;
  }

  .pagination-dot {
    width: 26px;
    height: 3px;
  }

  .pagination-dot.active {
    width: 39px;
  }
}

/* 响应式 - 1440px (比例 1440/1950 ≈ 0.74) */
@media (max-width: 1440px) {
  .slide-content {
    padding-bottom: 157px;
  }

  .hero-title,
  .slide-title {
    font-size: 33px;
    margin-bottom: 17px;
    letter-spacing: 3px;
  }

  .slide-line {
    width: 111px;
    height: 6px;
    margin-bottom: 22px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 24px;
    margin-bottom: 21px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 18px 27px;
    font-size: 15px;
    border-radius: 22px;
  }

  .swiper-pagination {
    bottom: 18px;
  }

  .pagination-dot {
    width: 24px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 35px;
  }
}

/* 响应式 - 1280px (比例 1280/1950 ≈ 0.656) */
@media (max-width: 1280px) {
  .slide-content {
    padding-bottom: 127px;
  }

  .hero-title,
  .slide-title {
    font-size: 30px;
    margin-bottom: 15px;
    letter-spacing: 3px;
  }

  .slide-line {
    width: 98px;
    height: 5px;
    margin-bottom: 20px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 21px;
    margin-bottom: 18px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 16px 24px;
    font-size: 13px;
    border-radius: 20px;
  }

  .swiper-pagination {
    bottom: 16px;
    gap: 7px;
  }

  .pagination-dot {
    width: 21px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 31px;
  }
}

/* 响应式 - 1100px (比例 1100/1950 ≈ 0.564) */
@media (max-width: 1100px) {
  .slide-content {
    padding-bottom: 111px;
  }

  .slide-logos img {
    width: 90px;
  }

  .hero-title,
  .slide-title {
    font-size: 25px;
    margin-bottom: 13px;
    letter-spacing: 2px;
  }

  .slide-line {
    width: 85px;
    height: 5px;
    margin-bottom: 17px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 18px;
    margin-bottom: 16px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 14px 20px;
    font-size: 11px;
    border-radius: 17px;
  }

  .swiper-pagination {
    bottom: 14px;
    gap: 6px;
  }

  .pagination-dot {
    width: 18px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 27px;
  }
}

/* 响应式 - 1024px (比例 1024/1950 ≈ 0.525) */
@media (max-width: 1024px) {
  .slide-content {
    padding-bottom: 100px;
  }

  .slide-logos img {
    width: 70px;
  }

  .hero-title,
  .slide-title {
    font-size: 24px;
    margin-bottom: 12px;
    letter-spacing: 2px;
  }

  .slide-line {
    width: 79px;
    height: 4px;
    margin-bottom: 16px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 17px;
    margin-bottom: 15px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 13px 19px;
    font-size: 11px;
    border-radius: 16px;
  }

  .swiper-pagination {
    bottom: 13px;
    gap: 5px;
  }

  .pagination-dot {
    width: 17px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 25px;
  }
}

/* 响应式 - 900px 平板竖屏/折叠屏 */
@media (max-width: 900px) {
  .slide-content {
    padding-bottom: 90px;
  }

  .slide-logos img {
    width: 60px;
  }

  .hero-title,
  .slide-title {
    font-size: 21px;
    margin-bottom: 10px;
    letter-spacing: 2px;
  }

  .slide-line {
    width: 70px;
    height: 4px;
    margin-bottom: 14px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 15px;
    margin-bottom: 13px;
    letter-spacing: 2px;
  }

  .hero-btn {
    padding: 11px 17px;
    font-size: 10px;
    border-radius: 14px;
  }

  .swiper-pagination {
    bottom: 12px;
    gap: 5px;
  }

  .pagination-dot {
    width: 15px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 22px;
  }
}

/* 响应式 - 800px 平板竖屏/大屏手机 */
@media (max-width: 800px) {
  .slide-content {
    padding-bottom: 120px;
    align-items: flex-start;
  }

  .slide-logos img {
    width: 50px;
  }

  .hero-title,
  .slide-title {
    font-size: 19px;
    margin-bottom: 9px;
    letter-spacing: 2px;
  }

  .slide-line {
    width: 63px;
    height: 3px;
    margin-bottom: 13px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 14px;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }

  .hero-btn {
    padding: 10px 15px;
    font-size: 9px;
    border-radius: 13px;
  }

  .swiper-pagination {
    bottom: 11px;
    gap: 4px;
  }

  .pagination-dot {
    width: 14px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 20px;
  }

  .banner-arrow {
    display: none;
  }

  .slide-logos {
    display: none;
  }
}

/* 响应式 - 768px (比例 768/1950 ≈ 0.394) */
@media (max-width: 768px) {
  .slide-content {
    padding-bottom: 127px;
    align-items: flex-start;
  }

  .hero-title,
  .slide-title {
    font-size: 18px;
    margin-bottom: 9px;
    letter-spacing: 2px;
  }

  .slide-line {
    width: 59px;
    height: 3px;
    margin-bottom: 12px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 13px;
    margin-bottom: 11px;
    letter-spacing: 1px;
  }

  .hero-btn {
    padding: 10px 14px;
    font-size: 8px;
    border-radius: 12px;
  }

  .swiper-pagination {
    bottom: 10px;
    gap: 4px;
  }

  .pagination-dot {
    width: 13px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 19px;
  }

  .banner-arrow {
    display: none;
  }

  .slide-logos {
    display: none;
  }
}

/* 响应式 - 640px 标准手机大屏 */
@media (max-width: 640px) {
  .slide-content {
    padding-bottom: 80px;
    align-items: flex-start;
  }

  .hero-title,
  .slide-title {
    font-size: 15px;
    margin-bottom: 8px;
    letter-spacing: 1px;
  }

  .slide-line {
    width: 48px;
    height: 3px;
    margin-bottom: 10px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 11px;
    margin-bottom: 9px;
    letter-spacing: 1px;
  }

  .hero-btn {
    padding: 8px 12px;
    font-size: 7px;
    border-radius: 10px;
  }

  .swiper-pagination {
    bottom: 8px;
    gap: 3px;
  }

  .pagination-dot {
    width: 11px;
    height: 2px;
  }

  .pagination-dot.active {
    width: 16px;
  }

  .banner-arrow {
    display: none;
  }

  .slide-logos {
    display: none;
  }
}

/* 响应式 - 480px (比例 480/1950 ≈ 0.246) */
@media (max-width: 480px) {
  .slide-content {
    padding-bottom: 50px;
  }

  .hero-title,
  .slide-title {
    font-size: 11px;
    margin-bottom: 6px;
    letter-spacing: 1px;
  }

  .slide-line {
    width: 37px;
    height: 2px;
    margin-bottom: 7px;
  }

  .hero-subtitle,
  .slide-subtitle {
    font-size: 8px;
    margin-bottom: 7px;
    letter-spacing: 1px;
  }

  .hero-btn {
    padding: 6px 9px;
    font-size: 5px;
    border-radius: 7px;
  }

  .swiper-pagination {
    bottom: 6px;
    gap: 2px;
  }

  .pagination-dot {
    width: 8px;
    height: 1px;
  }

  .pagination-dot.active {
    width: 12px;
  }
}

/* 响应式 - 360px 超小屏手机 / iPhone SE /迷你安卓 */
@media (max-width: 360px) {
  .slide-content {
    display: none;
  }

  .swiper-pagination {
    bottom: 10px;
    gap: 1px;
  }

  .pagination-dot {
    width: 6px;
    height: 1px;
  }

  .pagination-dot.active {
    width: 9px;
  }
}
</style>
