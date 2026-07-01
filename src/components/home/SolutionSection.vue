<template>
  <section id="solutions" class="solutions-section">
    <div class="container">
      <h2 class="section-title">核心行业解决方案</h2>
      <p class="section-subtitle">五大垂直赛道全场景智能化覆盖</p>
      <div class="sol-list">
        <div v-for="(item, index) in solutionScenes" :key="index" class="sol-row" :class="{ reverse: index % 2 !== 0 }">
          <div class="sol-media">
            <div class="sol-video-box">
              <div class="sol-play-btn">▶</div>
            </div>
          </div>
          <div class="sol-text">
            <h3 class="sol-scene-title">{{ item.title }}</h3>
            <p class="sol-scene-sub">{{ item.sub }}</p>
            <p class="sol-scene-desc">{{ item.desc }}</p>
            <div class="sol-tags">
              <span class="sol-tag" v-for="(tag, ti) in item.tags" :key="ti">{{ tag }}</span>
            </div>
            <a href="#" class="sol-more">了解更多 →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { solutionScenes } from '../../data/homeData'
</script>

<style>
/* 使用全局样式 */
</style>