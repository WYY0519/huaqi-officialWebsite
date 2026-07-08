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
          <div style="    display: flex;
    flex-direction: column;">
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
  grid-template-columns: repeat(2, 797px);
  gap: 17px;
  justify-content: center;
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
  width: 797px;
  height: 325px;
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

/* 响应式 - iPad */
@media (max-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .tech-cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-card {
    width: 100%;
    height: auto;
    min-height: 280px;
  }

  .tech-icon {
    width: 60px;
    height: 63px;
    min-width: 60px;
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
    width: 100%;
    height: auto;
    min-height: 240px;
    padding: 20px 18px 16px;
  }

  .tech-icon {
    width: 50px;
    height: 53px;
    min-width: 50px;
  }
}

/* 响应式 - 小屏手机 */
@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .tech-card {
    padding: 16px 14px 12px;
    min-height: 200px;
  }

  .tech-icon {
    width: 40px;
    height: 42px;
    min-width: 40px;
  }
}
</style>