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
import { companyStats, techCards } from '../../data/homeData'
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
  /* font-weight: 600; */
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
  /* padding: 24px; */
  display: flex;
  flex-direction: row;
  /* gap: 20px; */
  box-shadow: 0 2px 16px rgba(0, 120, 200, 0.07);
  transition: box-shadow 0.3s, transform 0.3s;
  width: 100%;
  aspect-ratio: 797 / 325;
  box-sizing: border-box;
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
  margin: 51px 59px 0 48px
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
}

.tech-card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  margin: 57px 125px 0 0
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
  flex: 1;
}

.tech-card-tag {
  display: inline-block;
  margin: 0 29px 26px 0;
  padding: 5px 16px;
  background: #def5f9;
  color: #0cd7ff;
  border-radius: 20px;
  font-size: 18.5px;
  /* font-weight: 600; */
  align-self: flex-end;
  border: 1px solid #b1eefa;
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
    height: 240px;
  }

  .tech-icon {
    width: 86px;
    height: 91px;
    min-width: 86px;
    margin: 38px 44px 0 35px;
  }

  .tech-card-body {
    margin: 42px 92px 0 0;
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
    padding: 37px 0 42px;
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
    min-height: 171px;
  }

  .tech-icon {
    width: 61px;
    height: 65px;
    min-width: 61px;
    margin: 27px 31px 0 25px;
  }

  .tech-card-body {
    margin: 30px 66px 0 0;
  }

  .tech-card-title {
    font-size: 16px;
  }

  .tech-card-desc {
    font-size: 11px;
  }

  .tech-card-tag {
    font-size: 10px;
  }
}

/* 响应式 - iPad 竖屏 768px */
@media (max-width: 768px) {
  .stats-section {
    padding: 28px 0 32px;
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
    gap: 7px;
  }

  .tech-card {
    width: 100%;
    min-height: 128px;
    padding: 15px;
  }

  .tech-icon {
    width: 46px;
    height: 49px;
    min-width: 46px;
    margin: 15px 15px 0 15px;
  }

  .tech-card-content {
    margin: 10px 10px 0 0;
  }

  .tech-card-body {
    margin: 10px 10px 0 0;
  }

  .tech-card-title {
    font-size: 12px;
    margin-bottom: 5px;
  }

  .tech-card-desc {
    font-size: 8px;
    line-height: 1.5;
  }

  .tech-card-tag {
    font-size: 7px;
    padding: 3px 10px;
    margin: 0 10px 10px 0;
  }
}

/* 响应式 - 手机 480px */
@media (max-width: 480px) {
  .stats-section {
    padding: 20px 0 24px;
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
    gap: 5px;
  }

  .tech-card {
    min-height: 100px;
    padding: 12px;
  }

  .tech-icon {
    width: 35px;
    height: 37px;
    min-width: 35px;
    margin: 12px 12px 0 12px;
  }

  .tech-card-title {
    font-size: 10px;
  }

  .tech-card-desc {
    font-size: 7px;
  }

  .tech-card-tag {
    font-size: 6px;
    padding: 2px 8px;
    margin: 0 8px 8px 0;
  }
}

/* 响应式 - 小屏手机 375px */
@media (max-width: 375px) {
  .stats-section {
    padding: 16px 0 20px;
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
    min-height: 85px;
    padding: 10px;
  }

  .tech-icon {
    width: 30px;
    height: 32px;
    min-width: 30px;
    margin: 10px 10px 0 10px;
  }

  .tech-card-title {
    font-size: 9px;
  }

  .tech-card-desc {
    font-size: 6px;
  }

  .tech-card-tag {
    font-size: 5px;
    padding: 2px 6px;
    margin: 0 6px 6px 0;
  }
}
</style>