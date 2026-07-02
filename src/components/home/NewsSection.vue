<template>
  <section id="news" class="news-section">
    <div class="container">
      <p class="section-title">新闻动态</p>
      <p class="section-line"></p>
      <p class="section-subtitle">覆盖全场景应用需求</p>
      <div class="news-layout">
        <div class="news-main-card">
          <div class="news-main-image">
            <img :src="newsItems[0].image" :alt="newsItems[0].title">
          </div>
          <div class="news-main-content">
            <div v-if="newsItems[0].isHot" class="news-hot-tag" :style="hotTagStyle">HOT</div>
            <h2 class="news-main-title">{{ newsItems[0].title }}</h2>
            <p class="news-main-excerpt">{{ newsItems[0].excerpt }}</p>
            <a :href="newsItems[0].link" class="news-read-more">阅读更多<span>→</span></a>
          </div>
        </div>
        <div class="news-small-grid">
          <div class="news-small-card" v-for="news in newsItems.slice(1)" :key="news.id">
            <div class="news-small-image">
              <img :src="news.image" :alt="news.title">
            </div>
            <div class="news-small-content">
              <div class="news-meta">
                <span class="news-category">{{ news.category }}</span>
                <span class="news-date">{{ news.date }}</span>
              </div>
              <h3 class="news-title">{{ news.title }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { newsItems } from '../../data/homeData'

const hotTagBg = new URL('../../assets/home/图标/z.png', import.meta.url).href
const hotTagStyle = {
  backgroundImage: `url(${hotTagBg})`
}
</script>

<style>
/* 使用全局样式 */
</style>