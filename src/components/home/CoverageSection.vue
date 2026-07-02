<template>
  <section class="coverage-section">
    <div class="container">
      <p class="section-title">全流程服务保障体系</p>
      <p class="section-line"></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
      <div class="coverage-grid">
        <div class="coverage-item" v-for="(item, index) in coverageItems" :key="index">
          <div class="coverage-icon" v-html="item.icon"></div>
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
  padding: 80px 0;
  background: #f8f9fa;
}

.coverage-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}

.coverage-item {
  text-align: center;
  padding: 30px 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 100, 200, 0.08);
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
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #e6f7ff 0%, #bae7ff 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.coverage-icon svg {
  width: 32px;
  height: 32px;
}

.coverage-label {
  font-size: 18px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 12px;
}

.coverage-desc {
  font-size: 13px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .coverage-item {
    padding: 24px 16px;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .coverage-item {
    padding: 20px 12px;
  }

  .coverage-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  .coverage-icon svg {
    width: 24px;
    height: 24px;
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