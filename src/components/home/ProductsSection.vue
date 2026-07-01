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
/* 使用全局样式 */
</style>