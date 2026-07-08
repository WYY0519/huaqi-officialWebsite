<template>
  <section class="coverage-section">
    <div class="container">
      <p class="section-title">全流程服务保障体系</p>
      <p class="section-line"></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
      <div class="coverage-grid">
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
import { coverageItems } from '../../data/homeData'
</script>

<style>
/* 全流程服务保障体系区块 */
.coverage-section {
  padding: 74px 0;
  background: #f8f9fa;
}

.coverage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 276px);
  gap: 24px;
  justify-content: space-between;
}

.coverage-item {
  text-align: center;
  padding: 47px 32px 40px 31px;
  background: white;
  border-radius: 8px;
  width: 276px;
  height: 434px;
  box-sizing: border-box;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.coverage-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 30px rgba(0, 100, 200, 0.15);
}

.coverage-icon {
  width: 96px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  overflow: hidden;
}

.coverage-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.coverage-label {
  font-size: 20px;
  font-weight: 600;
  color: #0f1419;
  margin-bottom: 19px;
}

.coverage-desc {
  font-size: 14px;
  color: #adb1b5;
  flex: 1;
}

.coverage-tag {
  display: inline-block;
  padding: 6px 16px;
  background: #e6f7ff;
  color: #00D4ff;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* 响应式 - iPad */
@media (max-width: 1024px) {
  .coverage-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 20px;
  }

  .coverage-item {
    padding: 24px 16px;
    min-height: auto;
    width: auto;
    height: auto;
  }

  .coverage-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }

  .coverage-label {
    font-size: 16px;
  }

  .coverage-desc {
    font-size: 12px;
  }
}

/* 响应式 - 小屏手机 */
@media (max-width: 480px) {
  .coverage-grid {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  .coverage-item {
    padding: 20px 12px;
    min-height: auto;
    width: auto;
    height: auto;
  }

  .coverage-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  .coverage-icon img {
    width: 100%;
    height: 100%;
  }

  .coverage-label {
    font-size: 14px;
    margin-bottom: 8px;
  }

  .coverage-desc {
    font-size: 11px;
    margin-bottom: 12px;
  }

  .coverage-tag {
    padding: 4px 12px;
    font-size: 10px;
  }
}
</style>