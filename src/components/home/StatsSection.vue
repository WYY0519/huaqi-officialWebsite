<template>
  <section class="stats-section" ref="statsSectionRef">
    <div class="container">
      <p class="section-title">品牌实力与核心技术背书</p>
      <p class="section-line"></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
      <div class="stats-grid">
        <div class="stat-card" v-for="(stat, index) in companyStats" :key="index">
          <span class="stat-value">{{ animatedValues[index] }}<span class="stat-unit">{{ stat.unit }}</span></span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
      <div class="tech-cards-grid">
        <div class="tech-card" v-for="(card, index) in techCards" :key="index">
          <div class="tech-icon"><img :src="card.icon" :alt="card.title" /></div>
          <div class="tech-card-content">
            <div class="tech-card-body">
              <h3 class="tech-card-title">{{ card.title }}</h3>
              <p class="tech-card-desc">{{ card.desc }}</p>
            </div>
            <span class="tech-card-tag">{{ card.tag }}</span>
          </div>
          <!--  -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { companyStats, techCards } from '../../data/homeData'

// stats-section 引用
const statsSectionRef = ref<HTMLElement | null>(null)

// 动画值数组，初始为0
const animatedValues = ref<number[]>(companyStats.value.map(() => 0))

// 是否已经开始动画
let hasAnimated = false

// Intersection Observer
let observer: IntersectionObserver | null = null

// 动画函数：从0到目标数字
const animateValue = (index: number, target: number, duration: number = 2000) => {
  const startTime = performance.now()
  const startValue = 0

  const updateValue = (currentTime: number) => {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    // 使用缓动函数（easeOutExpo）
    const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)

    const currentValue = Math.floor(startValue + (target - startValue) * easeOutExpo)
    animatedValues.value[index] = currentValue

    if (progress < 1) {
      requestAnimationFrame(updateValue)
    } else {
      // 动画结束，确保显示最终值
      animatedValues.value[index] = target
    }
  }

  requestAnimationFrame(updateValue)
}

// 开始所有数字动画
const startAnimation = () => {
  if (hasAnimated) return
  hasAnimated = true

  companyStats.value.forEach((stat, index) => {
    // 解析目标数字，移除非数字字符
    const targetStr = stat.value.replace(/[^0-9]/g, '')
    const target = parseInt(targetStr, 10) || 0

    // 错开动画开始时间，每个卡片延迟100ms
    setTimeout(() => {
      animateValue(index, target, 2000)
    }, index * 100)
  })
}

onMounted(() => {
  // 创建 Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation()
          // 停止观察
          if (statsSectionRef.value) {
            observer?.unobserve(statsSectionRef.value)
          }
        }
      })
    },
    {
      threshold: 0.3, // 当30%元素可见时触发
    }
  )

  // 观察 stats-section
  if (statsSectionRef.value) {
    observer.observe(statsSectionRef.value)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style>
/* 数据统计区块 - 全站以 1920 为基准换算 vw，任意屏宽等比例缩放（1920 时还原当前尺寸） */
.stats-section {
  padding: 3.64583vw 0 4.16667vw;
  background: linear-gradient(to bottom, #dbeefb 2%, #ffffff 100%);
}

/* 注：模板实际使用全局 .section-title / .section-subtitle，以下两条为本组件备用标题样式，同样按 vw 等比 */
.stats-main-title {
  text-align: center;
  font-size: 2.34375vw;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.52083vw;
}

.stats-sub-title {
  text-align: center;
  font-size: 1.04167vw;
  color: #888;
  margin-bottom: 2.5vw;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  text-align: center;
  margin-bottom: 0.78125vw;
  background: #f5f8f9;
  border-radius: 0.625vw;
  padding: 4.58333vw 0 4.16667vw 0px;
  width: 100%;
}

.stat-card {
  padding: 0.52083vw 1.04167vw 1.04167vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  display: block;
  font-size: 4.16667vw;
  font-weight: 800;
  color: #0cd7ff;
  margin-bottom: 1.14583vw;
}

.stat-unit {
  font-size: 1.51042vw;
  color: #6b7077;
}

.stat-label {
  font-size: 1.09375vw;
  color: #6b7077;
}

/* 技术特性卡片 */
.tech-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.88542vw;
  justify-content: center;
  width: 100%;
}

.tech-card {
  background: #f5f8f9;
  border-radius: 0.625vw;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0.10417vw 0.83333vw rgba(0, 120, 200, 0.07);
  transition: box-shadow 0.3s, transform 0.3s;
  width: 100%;
  min-height: 16.92708vw;
  box-sizing: border-box;
  overflow: hidden;
}

.tech-card:hover {
  box-shadow: 0 0.41667vw 1.45833vw rgba(0, 120, 200, 0.13);
  transform: translateY(-0.15625vw);
}

.tech-icon {
  width: 6.09375vw;
  height: 6.40625vw;
  min-width: 6.09375vw;
  border-radius: 0.83333vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;
  overflow: hidden;
  margin: 2.65625vw 3.07292vw 0 2.5vw;
}

.tech-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.tech-card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.tech-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  margin: 2.96875vw 2.08333vw 0 0;
  padding-right: 1.04167vw;
}

.tech-card-title {
  font-size: 2.08333vw;
  font-weight: 600;
  color: #000000;
  margin-bottom: 0.52083vw;
}

.tech-card-desc {
  font-size: 1.45833vw;
  color: #adb1b5;
  line-height: 1.5;
}

.tech-card-tag {
  display: inline-block;
  margin: auto 1.51042vw 1.35417vw 0;
  padding: 0.26042vw 0.83333vw;
  background: #def5f9;
  color: #07b8dc;
  border-radius: 2vw;
  font-size: 1.30208vw;
  align-self: flex-end;
  border: 0.05208vw solid #b1eefa;
  white-space: nowrap;
}
</style>