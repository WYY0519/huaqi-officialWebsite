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
                <p class="product-name">{{ item.name }}</p>
                <p class="product-spec">{{ item.spec }}</p>
                <div class="product-buttons">
                  <template v-if="isHighlightedCard(idx)">
                    <button class="product-btn product-btn-primary">立即购买</button>
                    <button class="product-btn product-btn-secondary">了解更多</button>
                  </template>
                  <template v-else>
                    <button class="product-btn product-btn-primary">了解更多</button>
                  </template>
                </div>
              </div>
              <div v-if="!isHighlightedCard(idx)" class="card-mask"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- 控制条在 clip 外，居中显示 -->

      <div class="carousel-controls">
        <div class="product-pagination">
          <span v-for="(_, i) in products.length" :key="'dot-' + i" class="product-pagination-dot"
            :class="{ active: realIndex === i }" @click="goToSlide(i)"></span>
        </div>
        <div class="carousel-arrows">
          <button class="product-arrow" @click="prevSlide">
            <img :src="arrowLeft" alt="上一页" class="arrow-img" />
          </button>
          <button class="product-arrow" @click="nextSlide">
            <img :src="arrowRight" alt="下一页" class="arrow-img" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { products } from '../../data/homeData'

// 导入自定义箭头图片
const arrowLeft = new URL('../../assets/home/图标/左的副本.png', import.meta.url).href
const arrowRight = new URL('../../assets/home/图标/右的副本.png', import.meta.url).href

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
  设计稿基准：1920px（与官网其它模块统一）
  卡片：由 --card-width 决定，1920 时 ≈ 493 × 418px
  每屏显示：3张完整 + 右边半张
  左侧紧贴 padding-left，右侧被 overflow 裁剪
  全站尺寸均以 1920 为基准换算为 vw，保证任意屏宽等比例缩放
*/

.products-section {
  /* 以 1920 为基准的 vw 变量，1920 时还原当前尺寸，其余屏宽等比缩放 */
  --pl: 7.2vw;
  --card-gap: 1.45833vw;
  --card-width: calc((100vw - var(--pl) - 2 * var(--card-gap)) / 3.5);
  --card-height: calc(var(--card-width) * 423 / 499);

  padding: 4.1vw 0 3.1vw var(--pl);
  /* background: #f5f6f8; */
  overflow: hidden;
}

.carousel-wrapper {
  margin-top: 2.5vw;
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
  border-radius: 0.41667vw;
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
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
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
  border-radius: 0.41667vw;
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
  padding: 1.97917vw 1.45833vw;
}

.product-name {
  font-size: 2.08333vw;
  /* font-weight: 700; */
  color: #000000;
  margin: 0 0 0.20833vw;
  letter-spacing: 0.05208vw;
}

.product-spec {
  font-size: 0.67708vw;
  color: rgba(0, 0, 0, 0.7);
  margin: 0 0 0.72917vw;
}

.product-buttons {
  display: flex;
  gap: 0.52083vw;
}

.product-btn {
  padding: 0.3125vw 0.625vw;
  border-radius: 1.04167vw;
  font-size: 0.83333vw;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  white-space: nowrap;
}

.product-btn-primary {
  background: #00d4ff;
  color: #fff;
  font-size: 0.46875vw
}

.product-btn-primary:hover {
  background: #00c4f0;
  transform: translateY(-1px);
}

.product-btn-secondary {
  background: none;
  color: #000000;
  border: 1px solid rgba(0, 0, 0, 1);
  font-size: 0.46875vw;
  transition: all 0.3s ease;
}

.product-btn-secondary:hover {
  background: rgba(0, 0, 0, 0.05);
  border-color: rgba(0, 0, 0, 0.6);
  transform: translateY(-1px);
}

/* ======= 底部控制栏 ======= */
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.08333vw;
  padding: 2.08333vw 0 0px 0;
  white-space: nowrap;
  position: relative;
  z-index: 5;
}

.product-pagination {
  display: flex;
  gap: 0.41667vw;
  align-items: center;
}

.product-pagination-dot {
  width: 1.04167vw;
  height: 0.15625vw;
  border-radius: 0.10417vw;
  background: rgba(0, 0, 0, 1);
  cursor: pointer;
  transition: all 0.3s;
}

.product-pagination-dot.active {
  background: #00c4f0;
  width: 1.45833vw;
}

.carousel-arrows {
  display: flex;
  gap: 0.41667vw;
}

.product-arrow {
  width: 1.875vw;
  height: 1.875vw;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.product-arrow:hover {
  opacity: 0.8;
}

.arrow-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
