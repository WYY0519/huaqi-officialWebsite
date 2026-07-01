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
/* 使用全局样式 */
</style>