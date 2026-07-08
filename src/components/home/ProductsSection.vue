<template>
  <section id="products" class="products-section">
    <div class="container">
      <p class="section-title">旗舰产品矩阵</p>
      <p class="section-line"></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
    </div>

    <div class="carousel-wrapper" @mouseenter="pauseProductSlideAutoplay" @mouseleave="resumeProductSlideAutoplay">
      <div class="carousel-clip">
        <div class="carousel-track" :style="trackStyle" @transitionend="onTransitionEnd">
          <div v-for="(item, idx) in loopedSlides" :key="'slide-' + idx" class="carousel-item">
            <div class="product-card" :class="{ 'highlighted': isHighlightedCard(idx) }">
              <img :src="item.image" :alt="item.name" class="product-bg-img" />
              <div class="product-overlay">
                <h3 class="product-name">{{ item.name }}</h3>
                <p class="product-spec">{{ item.spec }}</p>
                <div class="product-buttons">
                  <button class="product-btn product-btn-primary">立即购买</button>
                  <button class="product-btn product-btn-secondary">下载手册</button>
                </div>
              </div>
              <div v-if="!isHighlightedCard(idx)" class="card-mask"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 控制条在 clip 外，正常文档流居中显示 -->

      <div class="carousel-controls">
        <div class="product-pagination">
          <span v-for="(_, i) in products.length" :key="'dot-' + i" class="product-pagination-dot"
            :class="{ active: realIndex === i }" @click="goToSlide(i)"></span>
        </div>
        <div class="carousel-arrows">
          <button class="product-arrow" @click="prevSlide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
          <button class="product-arrow" @click="nextSlide">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { products } from '../../data/homeData'

/*
 * 无限循环轮播原理：
 * 1. 在真实数据前拼接末尾 N 张，在真实数据后拼接开头 N 张
 * 2. 初始显示位置设为 clonePrefix（即第一张真实数据所在位置）
 * 3. 滑动到克隆区域时，transitionend 无动画跳回真实对应位置
 * 4. 用户看到的效果：永远能继续往左/右滑，且不会出现空白
 *
 * 布局：左侧紧贴 padding-left，右侧第 4 张被 overflow:hidden 裁剪
 * 要求：左侧永远是完整卡片
 */

/** 可见卡片数上限（含被裁剪的那张），用于决定克隆数量 */
const CLONE_COUNT = 6

/** 克隆后完整数组：[...尾部N张, ...真实数据, ...头部N张] */
const loopedSlides = computed(() => {
  const src = products.value
  const len = src.length
  if (len === 0) return []
  const prefix = []
  const suffix = []
  for (let i = 0; i < CLONE_COUNT; i++) {
    prefix.push(src[(len - CLONE_COUNT + i) % len])
    suffix.push(src[i % len])
  }
  return [...prefix, ...src, ...suffix]
})

/** 当前滑动到的"loopedSlides"索引，初始 = CLONE_COUNT（真实第一张） */
const currentIndex = ref(CLONE_COUNT)
const animating = ref(true) // 是否带过渡动画
const slideInterval = ref<ReturnType<typeof setInterval> | null>(null)
const paused = ref(false)

/** 用于分页点高亮的真实索引 */
const realIndex = computed(() => {
  const len = products.value.length
  if (len === 0) return 0
  return ((currentIndex.value - CLONE_COUNT) % len + len) % len
})

/** 判断是否是高亮卡片（当前显示的第二个卡片） */
function isHighlightedCard(loopIndex: number): boolean {
  // 第二个卡片的索引是 currentIndex + 1
  return loopIndex === currentIndex.value + 1
}

/** 轨道样式 */
const trackStyle = computed(() => ({
  transform: `translateX(calc(-${currentIndex.value} * (var(--card-width) + var(--card-gap))))`,
  transition: animating.value ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
}))

/** 每次滑一张卡片 */
function nextSlide() {
  animating.value = true
  currentIndex.value++
}

function prevSlide() {
  animating.value = true
  currentIndex.value--
}

/** 动画结束后，若滑到了克隆区域则无动画跳回真实位置 */
function onTransitionEnd() {
  const len = products.value.length
  if (len === 0) return

  const lastRealIndex = CLONE_COUNT + len - 1

  // 滑到了末尾克隆区（>= 第 len + CLONE_COUNT 张）
  if (currentIndex.value > lastRealIndex) {
    animating.value = false
    currentIndex.value = currentIndex.value - len
    // 下一帧恢复动画
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animating.value = true
      })
    })
  }

  // 滑到了开头克隆区（< CLONE_COUNT）
  if (currentIndex.value < CLONE_COUNT) {
    animating.value = false
    currentIndex.value = currentIndex.value + len
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        animating.value = true
      })
    })
  }
}

/** 分页点点击 */
function goToSlide(realIdx: number) {
  animating.value = true
  currentIndex.value = CLONE_COUNT + realIdx
}

/** 自动播放 */
function startAutoplay() {
  if (paused.value) return
  slideInterval.value = setInterval(nextSlide, 4000)
}

function stopAutoplay() {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

function pauseProductSlideAutoplay() {
  paused.value = true
  stopAutoplay()
}

function resumeProductSlideAutoplay() {
  paused.value = false
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style scoped>
/*
  设计稿基准：1950px
  卡片尺寸：499 × 423px
  间距：28px
  每屏显示：3张完整 + 右边半张
  左侧紧贴 padding-left，右侧被 overflow 裁剪
*/

.products-section {
  /* 动态计算：保证任意宽度下至少显示3个完整卡片 + 右侧半张 */
  --pl: clamp(27px, 7.2vw, 140px);
  --card-gap: clamp(5px, 1.5vw, 28px);
  --card-width: clamp(96px, calc((100vw - var(--pl) - 2 * var(--card-gap)) / 3.1), 499px);
  --card-height: calc(var(--card-width) * 423 / 499);

  padding: clamp(60px, 4.1vw, 80px) 0 clamp(40px, 3.1vw, 60px) var(--pl);
  background: #f5f6f8;
  overflow: hidden;
}

.carousel-wrapper {
  margin-top: 48px;
  position: relative;
}

.carousel-clip {
  overflow: hidden;
}

.carousel-track {
  display: flex;
  align-items: stretch;
  gap: var(--card-gap);
  will-change: transform;
}

.carousel-item {
  flex-shrink: 0;
  width: var(--card-width);
}

/* ======= 卡片本体 ======= */
.product-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: #e8eaed;
  cursor: pointer;
  transition: box-shadow 0.4s;
  opacity: 1 !important;
  transform: none !important;
  width: var(--card-width);
  height: var(--card-height);
}

.product-card:hover {
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.18);
}

/* 高亮卡片样式 */
.product-card.highlighted {
  transform: scale(1.05);
  /* box-shadow: 0 16px 60px rgba(0, 168, 255, 0.3); */
  z-index: 10;
}

/* 蒙版样式 */
.card-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(252, 252, 252, 0.5);
  z-index: 2;
  pointer-events: none;
  border-radius: 8px;
}

/* ======= 图片 ======= */
.product-bg-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ======= 文字遮罩 ======= */
.product-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 24px 28px;
}

.product-name {
  font-size: 32px;
  font-weight: 700;
  color: #1a1a2e;
  margin: 0 0 4px;
  letter-spacing: 1px;
}

.product-spec {
  font-size: 13px;
  color: rgba(30, 30, 60, 0.7);
  margin: 0 0 16px;
}

.product-buttons {
  display: flex;
  gap: 10px;
}

.product-btn {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  white-space: nowrap;
}

.product-btn-primary {
  background: rgba(0, 168, 255, 0.9);
  color: #fff;
}

.product-btn-primary:hover {
  background: #00c4f0;
  transform: translateY(-1px);
}

.product-btn-secondary {
  background: rgba(20, 20, 40, 0.75);
  color: #fff;
  border: none;
}

.product-btn-secondary:hover {
  background: rgba(20, 20, 40, 0.9);
  transform: translateY(-1px);
}

/* ======= 底部控制栏 ======= */
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px 0 60px 0;
}

.product-pagination {
  display: flex;
  gap: 8px;
  align-items: center;
}

.product-pagination-dot {
  width: 28px;
  height: 3px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.18);
  cursor: pointer;
  transition: all 0.3s;
}

.product-pagination-dot.active {
  background: #00c4f0;
  width: 44px;
}

.carousel-arrows {
  display: flex;
  gap: 8px;
}

.product-arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.product-arrow:hover {
  border-color: #00c4f0;
  color: #00c4f0;
}

/* ============================================================
   响应式
   ============================================================ */

/* 大屏 1440px ~ 1950px */
@media (max-width: 1440px) {
  .product-name {
    font-size: 24px;
  }

  .product-overlay {
    padding: 20px 24px;
  }

  .carousel-controls {
    padding: 20px 0 60px 0;
  }
}

/* iPad Pro 横屏 / 小桌面 1024px ~ 1440px */
@media (max-width: 1024px) {
  .product-name {
    font-size: 17px;
  }

  .product-spec {
    font-size: 12px;
    margin-bottom: 12px;
  }

  .product-overlay {
    padding: 16px 20px;
  }

  .product-btn {
    padding: 5px 14px;
    font-size: 11px;
  }

  .carousel-controls {
    padding: 20px 0 60px 0;
    gap: 32px;
  }

  .product-pagination {
    gap: 6px;
  }

  .product-pagination-dot {
    width: 24px;
    height: 3px;
  }

  .product-pagination-dot.active {
    width: 38px;
  }

  .product-arrow {
    width: 34px;
    height: 34px;
  }
}

/* 中等屏幕 860px ~ 1024px */
@media (max-width: 860px) {
  .product-name {
    font-size: 16px;
  }

  .product-spec {
    font-size: 11px;
    margin-bottom: 12px;
  }

  .product-overlay {
    padding: 14px 18px;
  }

  .product-btn {
    padding: 4px 13px;
    font-size: 10px;
  }

  .carousel-controls {
    padding: 16px 0 50px 0;
    gap: 28px;
  }

  .product-pagination {
    gap: 5px;
  }

  .product-pagination-dot {
    width: 20px;
    height: 2px;
  }

  .product-pagination-dot.active {
    width: 32px;
  }

  .product-arrow {
    width: 30px;
    height: 30px;
  }

  .product-arrow svg {
    width: 16px;
    height: 16px;
  }
}

/* iPad 竖屏 768px ~ 860px */
@media (max-width: 768px) {
  .product-name {
    font-size: 15px;
  }

  .product-spec {
    font-size: 11px;
    margin-bottom: 10px;
  }

  .product-overlay {
    padding: 14px 16px;
  }

  .product-btn {
    padding: 4px 12px;
    font-size: 10px;
  }

  .carousel-controls {
    padding: 16px 0 40px 0;
    gap: 24px;
  }

  .product-pagination {
    gap: 4px;
  }

  .product-pagination-dot {
    width: 18px;
    height: 2px;
  }

  .product-pagination-dot.active {
    width: 28px;
  }

  .product-arrow {
    width: 28px;
    height: 28px;
  }

  .product-arrow svg {
    width: 14px;
    height: 14px;
  }
}

/* 手机 480px ~ 768px */
@media (max-width: 480px) {
  .carousel-wrapper {
    margin-top: 32px;
  }

  .product-name {
    font-size: 12px;
  }

  .product-spec {
    font-size: 9px;
    margin-bottom: 6px;
  }

  .product-overlay {
    padding: 8px 10px;
  }

  .product-buttons {
    gap: 4px;
  }

  .product-btn {
    padding: 3px 8px;
    font-size: 8px;
  }

  .carousel-controls {
    padding: 12px 0 30px 0;
    gap: 20px;
  }

  .product-pagination {
    gap: 3px;
  }

  .product-pagination-dot {
    width: 14px;
    height: 2px;
  }

  .product-pagination-dot.active {
    width: 22px;
  }

  .carousel-arrows {
    gap: 6px;
  }

  .product-arrow {
    width: 24px;
    height: 24px;
  }

  .product-arrow svg {
    width: 12px;
    height: 12px;
  }
}

/* 小手机 ≤375px */
@media (max-width: 375px) {
  .product-name {
    font-size: 10px;
  }

  .product-spec {
    font-size: 8px;
  }

  .product-overlay {
    padding: 6px 8px;
  }

  .product-btn {
    padding: 2px 6px;
    font-size: 7px;
  }

  .carousel-controls {
    padding: 8px 0 20px 0;
    gap: 16px;
  }

  .product-pagination {
    gap: 2px;
  }

  .product-pagination-dot {
    width: 12px;
    height: 2px;
  }

  .product-pagination-dot.active {
    width: 18px;
  }

  .product-arrow {
    width: 22px;
    height: 22px;
  }

  .product-arrow svg {
    width: 10px;
    height: 10px;
  }
}
</style>
