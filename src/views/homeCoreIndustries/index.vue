<template>
  <div class="solution-detail">
    <!-- 静态Hero大图 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img :src="heroImage" :alt="currentModule" class="hero-img" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="home-hero-title">{{ currentModule }}</p>
      </div>
    </section>
    <!-- 传统城市消防行业痛点 -->
    <PainPointsSection />
    <!-- 全场景消防救援核心能力 - 图文交替 -->
    <CoreCapabilitiesSection />
    <!-- 多元化挂载适配多元救援任务 -->
    <EquipmentSection />
    <!-- 全场景消防救援核心能力 - 场景卡片 -->
    <ScenarioSection />
    <!-- 获取专属解决方案 -->
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PainPointsSection from '../../components/home/homeCoreIndustrySolutions/index/PainPointsSection.vue'
import CoreCapabilitiesSection from '../../components/home/homeCoreIndustrySolutions/index/CoreCapabilitiesSection.vue'
import EquipmentSection from '../../components/home/homeCoreIndustrySolutions/index/EquipmentSection.vue'
import ScenarioSection from '../../components/home/homeCoreIndustrySolutions/index/ScenarioSection.vue'
import CTASection from '../../components/home/homeCoreIndustrySolutions/index/CTASection.vue'

const route = useRoute()

// 模块标识符到中文标题的映射
const moduleTitleMap: Record<string, string> = {
  'city-fire': '城市消防',
  'forest-fire': '森林消防',
  'mount-adapt': '挂载系列适配',
  'high-cleaning': '清洗系列',
  'fixed-wing': '固定翼巡检系列',
  'tethered': '系留系列',
  'research': '科研定制服务',
}

// 根据查询参数获取当前模块标题
const currentModule = computed(() => {
  const moduleParam = route.query.module as string
  return moduleTitleMap[moduleParam] || '城市消防' // 默认为城市消防
})

// 根据模块动态加载对应的英雄图片
const heroImage = computed(() => {
  const moduleParam = route.query.module as string
  // 目前只有城市消防有图片，其他模块可以后续添加
  if (moduleParam === 'city-fire' || !moduleParam) {
    return new URL('../../assets/home/行业解决方案/城市消防/首页.png', import.meta.url).href
  }
  // 其他模块可以返回默认图片或各自的图片
  return new URL('../../assets/home/行业解决方案/城市消防/首页.png', import.meta.url).href
})
</script>

<style>
.solution-detail {
  min-height: 100vh;
}

/* Hero大图 */
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.hero-bg {
  position: relative;
  width: 100%;
  padding-top: 40.73%;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
  z-index: 1;
}

.hero-content {
  position: absolute;
  top: 18.4vw;
  left: 7.8125vw;
  width: 100%;
  z-index: 2;
}

.home-hero-title {
  /* 1920 时 = 70px（设计值） → 按比例缩放 */
  font-size: 3.645833vw;
  font-weight: bold;
  color: #fff;
  /* padding-left: 6%; */
}

.hero-subtitle {
  font-size: 1.5vw;
  color: rgba(255, 255, 255, 0.85);
  padding-left: 6%;
}
</style>
