<template>
  <section id="products" class="products-section">
    <div class="container">
      <p class="section-title">旗舰产品矩阵</p>
      <p class="section-line" ></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
      <div class="products-carousel" @mouseenter="pauseProductSlideAutoplay" @mouseleave="resumeProductSlideAutoplay">
        <div class="products-grid-showcase">
          <div v-for="(product, index) in productSlides" :key="product.id" class="product-showcase-item"
            :class="{ 'center': index === 1 }">
            <div class="product-card">
              <img :src="product.image" :alt="product.name" class="product-bg-img">
              <div class="product-overlay">
                <h3 class="product-name">{{ product.name }}</h3>
                <p class="product-spec">{{ product.spec }}</p>
                <div class="product-buttons">
                  <button class="product-btn product-btn-primary">立即购买</button>
                  <button class="product-btn product-btn-secondary">了解更多</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="product-arrow product-arrow-left" @click="prevProductSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button class="product-arrow product-arrow-right" @click="nextProductSlide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <div class="product-pagination">
          <span v-for="(_, index) in totalProductSlides" :key="index" class="product-pagination-dot"
            :class="{ active: currentProductSlide === index }" @click="goToProductSlide(index)"></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { products } from '../../data/homeData'

// 产品轮播
const currentProductSlide = ref(1)
const productSlideInterval = ref<ReturnType<typeof setInterval> | null>(null)
const productSlidePaused = ref(false)

const productSlides = computed(() => {
  const mid = currentProductSlide.value
  const prev = (mid - 1 + products.value.length) % products.value.length
  const next = (mid + 1) % products.value.length
  return [{ ...products.value[prev] }, { ...products.value[mid] }, { ...products.value[next] }]
})

const totalProductSlides = computed(() => products.value.length)

const prevProductSlide = () => {
  currentProductSlide.value = (currentProductSlide.value - 1 + totalProductSlides.value) % totalProductSlides.value
  resetProductSlideAutoplay()
}

const nextProductSlide = () => {
  currentProductSlide.value = (currentProductSlide.value + 1) % totalProductSlides.value
  resetProductSlideAutoplay()
}

const goToProductSlide = (index: number) => {
  currentProductSlide.value = index
  resetProductSlideAutoplay()
}

const startProductSlideAutoplay = () => {
  if (productSlidePaused.value) return
  productSlideInterval.value = setInterval(() => {
    currentProductSlide.value = (currentProductSlide.value + 1) % totalProductSlides.value
  }, 4000)
}

const stopProductSlideAutoplay = () => {
  if (productSlideInterval.value) {
    clearInterval(productSlideInterval.value)
    productSlideInterval.value = null
  }
}

const resetProductSlideAutoplay = () => {
  stopProductSlideAutoplay()
  startProductSlideAutoplay()
}

const pauseProductSlideAutoplay = () => {
  productSlidePaused.value = true
  stopProductSlideAutoplay()
}

const resumeProductSlideAutoplay = () => {
  productSlidePaused.value = false
  startProductSlideAutoplay()
}

onMounted(() => {
  startProductSlideAutoplay()
})

onUnmounted(() => {
  stopProductSlideAutoplay()
})
</script>

<style>
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
  padding: 20px 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 30%, rgba(0, 0, 0, 0.4) 100%);
}

.product-name {
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 6px;
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

/* 轮播内产品卡片始终可见 */
.products-carousel .product-card {
  opacity: 1 !important;
}

/* 响应式 - iPad */
@media (max-width: 1024px) {
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
}

/* 响应式 - 手机 */
@media (max-width: 768px) {
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
    font-size: 28px;
  }

  .product-spec {
    font-size: 13px;
  }

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
}

/* 响应式 - 小屏手机 */
@media (max-width: 480px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>