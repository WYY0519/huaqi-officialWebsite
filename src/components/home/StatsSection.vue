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
/* 使用全局样式 */
</style>