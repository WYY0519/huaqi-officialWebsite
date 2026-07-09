<template>
  <div class="home">
    <!-- 轮播图 -->
    <!-- <HeroBanner /> -->
    <StatsSection />

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
import HeroBanner from '../components/home/HeroBanner.vue'
import SolutionSection from '../components/home/SolutionSection.vue'
import StatsSection from '../components/home/StatsSection.vue'
import ProductsSection from '../components/home/ProductsSection.vue'
import CoverageSection from '../components/home/CoverageSection.vue'
import NewsSection from '../components/home/NewsSection.vue'
import ContactSection from '../components/home/ContactSection.vue'
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
}
</style>