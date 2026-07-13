<template>
  <div class="home">
    <!-- 轮播图 -->
    <HeroBanner />

    <!-- 核心产品解决方案 -->
    <SolutionSection />
    <!-- 数据统计 -->
    <StatsSection />
    <!-- 产品展示 -->
    <ProductsSection />
    <!-- 全流程服务保障体系 -->
    <CoverageSection />
    <!-- 新闻动态 -->
    <NewsSection />
    <!-- 获取专属解决方案 -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { provide, ref, onMounted, onUnmounted, nextTick } from 'vue'
import HeroBanner from '../components/home/HeroBanner.vue'
import SolutionSection from '../components/home/SolutionSection.vue'
import StatsSection from '../components/home/StatsSection.vue'
import ProductsSection from '../components/home/ProductsSection.vue'
import CoverageSection from '../components/home/CoverageSection.vue'
import NewsSection from '../components/home/NewsSection.vue'
import ContactSection from '../components/home/ContactSection.vue'

// 轮播图控制状态
const carouselIndex = ref(0)
const totalSlides = ref(4)

const prevSlide = () => {
  carouselIndex.value = (carouselIndex.value - 1 + totalSlides.value) % totalSlides.value
}

const nextSlide = () => {
  carouselIndex.value = (carouselIndex.value + 1) % totalSlides.value
}

// 提供轮播图控制方法给子组件
provide('carouselControl', {
  carouselIndex,
  totalSlides,
  prevSlide,
  nextSlide
})

/* ===== 新增：滚动入场动画 Observer ===== */
let observer: IntersectionObserver | null = null

onMounted(async () => {
  // 等所有子组件 DOM 渲染完成
  await nextTick()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          // 已显示的元素不用再监听，省性能
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  const observeAll = () => {
    document
      .querySelectorAll('.solution-card, .product-card, .news-card, .coverage-item')
      .forEach(el => observer?.observe(el))
  }

  observeAll()
  // 兜底：子组件里若有异步数据渲染的卡片，延迟再补 observe 一次
  setTimeout(observeAll, 300)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}
</style>