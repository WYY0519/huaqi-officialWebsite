<template>
  <section class="coverage-section">
    <div class="container">
      <p class="section-title">全流程服务保障体系</p>
      <p class="section-line"></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
      <div class="coverage-grid" ref="coverageGrid">
        <div class="coverage-item" v-for="(item, index) in coverageItems" :key="index">
          <div class="coverage-icon"><img :src="item.icon" :alt="item.label" /></div>
          <h3 class="coverage-label">{{ item.label }}</h3>
          <p class="coverage-desc">{{ item.desc }}</p>
          <div class="coverage-tag">{{ item.tag }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { coverageItems } from '../../data/homeData'

const coverageGrid = ref<HTMLElement | null>(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.coverage-item')
          items.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-in')
            }, index * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  if (coverageGrid.value) {
    observer.observe(coverageGrid.value)
  }
})
</script>

<style>
/* 全流程服务保障体系区块 - 全站以 1920 为基准换算 vw，任意屏宽等比例缩放 */
.coverage-section {
  padding: 3.85417vw 0;
  background: #f8f9fa;
}

.coverage-grid {
  display: grid;
  /* 始终固定 5 列，每列宽度保持 1920 下的 276px（14.375vw），缩放时整体等比 */
  grid-template-columns: repeat(5, 14.375vw);
  gap: 1.25vw;
  justify-content: space-between;
}

.coverage-item {
  text-align: center;
  padding: 2.44792vw 1.66667vw 2.08333vw 1.61458vw;
  background: white;
  border-radius: 0.41667vw;
  width: 14.375vw;
  height: 22.60417vw;
  box-sizing: border-box;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  transform: translateY(3.125vw);
}

.coverage-item.animate-in {
  animation: slideUpFadeIn 0.6s ease-out forwards;
}

@keyframes slideUpFadeIn {
  from {
    opacity: 0;
    transform: translateY(3.125vw);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.coverage-item:hover {
  transform: translateY(-0.41667vw);
  box-shadow: 0 0.41667vw 1.5625vw rgba(0, 100, 200, 0.15);
}

.coverage-icon {
  width: 5vw;
  height: 5vw;
  flex-shrink: 0;
  border-radius: 0.83333vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.04167vw;
  overflow: hidden;
}

.coverage-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.coverage-label {
  font-size: 1.40625vw;
  font-weight: 600;
  color: #0f1419;
  margin-bottom: 0.98958vw;
}

.coverage-desc {
  font-size: 0.98958vw;
  color: #adb1b5;
  flex: 1;
}

.coverage-tag {
  display: inline-block;
  padding: 0.3125vw 0.83333vw;
  background: #e6f7ff;
  color: #00D4ff;
  border-radius: 1.04167vw;
  font-size: 0.67708vw;
  font-weight: 600;
}
</style>