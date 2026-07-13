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
/* 数据统计区块 */
.stats-section {
  padding: 70px 0 80px;
  background: linear-gradient(to bottom, #dbeefb 2%, #ffffff 100%);
}

.stats-main-title {
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.stats-sub-title {
  text-align: center;
  font-size: 15px;
  color: #888;
  margin-bottom: 48px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  text-align: center;
  margin-bottom: 15px;
  background: #f5f8f9;
  border-radius: 12px;
  padding: 88px 0 80px 0px;
  width: 100%;
}

.stat-card {
  padding: 10px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  display: block;
  font-size: 60px;
  font-weight: 800;
  color: #00D4ff;
  margin-bottom: 22px;
}

.stat-unit {
  font-size: 22px;
  color: #6b7077;
}

.stat-label {
  font-size: 27.5px;
  color: #6b7077;
}

/* 技术特性卡片 */
.tech-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 17px;
  justify-content: center;
  width: 100%;
}

.tech-card {
  background: #f5f8f9;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 16px rgba(0, 120, 200, 0.07);
  transition: box-shadow 0.3s, transform 0.3s;
  width: 100%;
  min-height: 325px;
  box-sizing: border-box;
  overflow: hidden;
}

.tech-card:hover {
  box-shadow: 0 8px 28px rgba(0, 120, 200, 0.13);
  transform: translateY(-3px);
}

.tech-icon {
  width: 117px;
  height: 123px;
  min-width: 117px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;
  overflow: hidden;
  margin: 51px 59px 0 48px;
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
  margin: 57px 40px 0 0;
  padding-right: 20px;
}

.tech-card-title {
  font-size: 30px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 10px;
}

.tech-card-desc {
  font-size: 21px;
  color: #adb1b5;
  line-height: 1.5;
}

.tech-card-tag {
  display: inline-block;
  margin: auto 29px 26px 0;
  padding: 5px 16px;
  background: #def5f9;
  color: #0cd7ff;
  border-radius: 20px;
  font-size: 18.5px;
  align-self: flex-end;
  border: 1px solid #b1eefa;
  white-space: nowrap;
}

/* 响应式 - 桌面端 1440px */
@media (max-width: 1440px) {
  .stats-section {
    padding: 52px 0 59px;
  }

  .stats-grid {
    padding: 65px 0 59px 0px;
  }

  .stat-value {
    font-size: 44px;
    margin-bottom: 16px;
  }

  .stat-unit {
    font-size: 16px;
  }

  .stat-label {
    font-size: 20px;
  }

  .tech-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .tech-card {
    width: 100%;
    min-height: 280px;
  }

  .tech-icon {
    width: 86px;
    height: 91px;
    min-width: 86px;
    margin: 38px 44px 0 35px;
  }

  .tech-card-body {
    margin: 42px 30px 0 0;
  }

  .tech-card-title {
    font-size: 22px;
  }

  .tech-card-desc {
    font-size: 15px;
  }

  .tech-card-tag {
    font-size: 14px;
  }
}

/* 响应式 - iPad Pro 横屏 1024px */
@media (max-width: 1024px) {
  .stats-section {
    /* padding: 37px 0 42px; */
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    padding: 46px 0 42px 0px;
  }

  .stat-value {
    font-size: 31px;
    margin-bottom: 12px;
  }

  .stat-unit {
    font-size: 12px;
  }

  .stat-label {
    font-size: 14px;
  }

  .tech-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 9px;
  }

  .tech-card {
    width: 100%;
    min-height: 220px;
  }

  .tech-icon {
    width: 61px;
    height: 65px;
    min-width: 61px;
    margin: 27px 31px 0 25px;
  }

  .tech-card-body {
    margin: 30px 20px 0 0;
  }

  .tech-card-title {
    font-size: 16px;
  }

  .tech-card-desc {
    font-size: 12px;
  }

  .tech-card-tag {
    font-size: 10px;
  }
}

/* 响应式 - iPad 竖屏 768px */
@media (max-width: 768px) {
  .stats-section {
    /* padding: 28px 0 32px; */
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 35px 0 32px 0px;
    gap: 10px;
  }

  .stat-card {
    padding: 8px 6px 14px;
  }

  .stat-value {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .stat-unit {
    font-size: 9px;
  }

  .stat-label {
    font-size: 11px;
  }

  .tech-cards-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .tech-card {
    width: 100%;
    min-height: 140px;
    padding: 16px;
  }

  .tech-icon {
    width: 50px;
    height: 53px;
    min-width: 50px;
    margin: 0 16px 0 0;
  }

  .tech-card-content {
    flex: 1;
  }

  .tech-card-body {
    margin: 0;
  }

  .tech-card-title {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .tech-card-desc {
    font-size: 11px;
    line-height: 1.5;
  }

  .tech-card-tag {
    font-size: 9px;
    padding: 4px 12px;
    margin: auto 0 0 0;
  }
}

/* 响应式 - 手机 480px */
@media (max-width: 480px) {
  .stats-section {
    /* padding: 20px 0 24px; */
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    padding: 25px 0 24px 0px;
    gap: 8px;
  }

  .stat-card {
    padding: 6px 4px 10px;
  }

  .stat-value {
    font-size: 18px;
    margin-bottom: 6px;
  }

  .stat-unit {
    font-size: 7px;
  }

  .stat-label {
    font-size: 8px;
  }

  .tech-cards-grid {
    gap: 8px;
  }

  .tech-card {
    min-height: 120px;
    padding: 12px;
  }

  .tech-icon {
    width: 40px;
    height: 43px;
    min-width: 40px;
    margin: 0 12px 0 0;
  }

  .tech-card-title {
    font-size: 12px;
  }

  .tech-card-desc {
    font-size: 9px;
  }

  .tech-card-tag {
    font-size: 8px;
    padding: 3px 10px;
  }
}

/* 响应式 - 小屏手机 375px */
@media (max-width: 375px) {
  .stats-section {
    /* padding: 16px 0 20px; */
  }

  .stats-grid {
    padding: 20px 0 20px 0px;
    gap: 6px;
  }

  .stat-value {
    font-size: 15px;
  }

  .stat-unit {
    font-size: 6px;
  }

  .stat-label {
    font-size: 7px;
  }

  .tech-card {
    min-height: 100px;
    padding: 10px;
  }

  .tech-icon {
    width: 35px;
    height: 38px;
    min-width: 35px;
    margin: 0 10px 0 0;
  }

  .tech-card-title {
    font-size: 11px;
  }

  .tech-card-desc {
    font-size: 8px;
  }

  .tech-card-tag {
    font-size: 7px;
    padding: 2px 8px;
  }
}
</style>