<template>
  <section class="stats-section">
    <div class="container">
      <p class="section-title">品牌实力与核心技术背书</p>
      <p class="section-line"></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
      <div class="stats-grid">
        <div class="stat-card" v-for="(stat, index) in companyStats" :key="index">
          <span class="stat-value">{{ stat.value }}<span class="stat-unit">{{ stat.unit }}</span></span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
      <div class="tech-cards-grid">
        <div class="tech-card" v-for="(card, index) in techCards" :key="index">
          <div class="tech-icon" v-html="card.icon"></div>
          <div class="tech-card-body">
            <h3 class="tech-card-title">{{ card.title }}</h3>
            <p class="tech-card-desc">{{ card.desc }}</p>
            <span class="tech-card-tag">{{ card.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { companyStats, techCards } from '../../data/homeData'
</script>

<style>
/* 数据统计区块 */
.stats-section {
  padding: 70px 0 80px;
  background: linear-gradient(to bottom, #e8f4fd 2%, #ffffff 100%);
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
  margin-bottom: 28px;
  background: #f6f8f9;
  border-radius: 12px;
  padding: 24px 12px;
}

.stat-card {
  padding: 10px 20px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-value {
  display: block;
  font-size: 48px;
  font-weight: 800;
  color: #00D4ff;
  line-height: 1.1;
  margin-bottom: 10px;
}

.stat-unit {
  font-size: 22px;
  font-weight: 600;
  color: #5f656b;
}

.stat-label {
  font-size: 14px;
  color: #5f656b;
}

/* 技术特性卡片 */
.tech-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.tech-card {
  background: #f6f8f9;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  box-shadow: 0 2px 16px rgba(0, 120, 200, 0.07);
  transition: box-shadow 0.3s, transform 0.3s;
}

.tech-card:hover {
  box-shadow: 0 8px 28px rgba(0, 120, 200, 0.13);
  transform: translateY(-3px);
}

.tech-icon {
  width: 80px;
  height: 80px;
  min-width: 80px;
  background: #dbf2f9;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  align-self: flex-start;
}

.tech-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
}

.tech-card-title {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 10px;
}

.tech-card-desc {
  font-size: 14px;
  color: #888;
  line-height: 1.9;
  flex: 1;
}

.tech-card-tag {
  display: inline-block;
  margin-top: 16px;
  padding: 5px 16px;
  background: #e8f4fd;
  color: #00D4ff;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  align-self: flex-end;
}

/* 响应式 - iPad */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 响应式 - 手机 */
@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(5, 1fr);
    gap: 0;
  }

  .stat-card {
    padding: 8px 6px 14px;
  }

  .stat-value {
    font-size: 28px;
  }

  .stat-unit {
    font-size: 16px;
  }

  .stat-label {
    font-size: 12px;
  }

  .tech-cards-grid {
    grid-template-columns: 1fr;
  }

  .tech-card {
    padding: 20px 18px 16px;
  }
}

/* 响应式 - 小屏手机 */
@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>