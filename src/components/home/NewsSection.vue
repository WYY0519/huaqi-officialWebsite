<template>
  <section id="news" class="news-section" ref="newsSection" :style="{ backgroundImage: `url(${newsBg})` }">
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
            <p class="news-main-title">{{ newsItems[0].title }}</p>
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
import { ref, onMounted, onUnmounted } from 'vue'
import { newsItems } from '../../data/homeData'

const hotTagBg = new URL('../../assets/home/图标/z.png', import.meta.url).href
const hotTagStyle = {
  backgroundImage: `url(${hotTagBg})`
}

// 导入新闻背景图片
const newsBg = new URL('../../assets/home/图标/新闻背景.png', import.meta.url).href

const newsSection = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 根据元素类型设置不同的延迟
          const el = entry.target as HTMLElement
          const delay = el.dataset.aosDelay || '0'
          el.style.transitionDelay = `${delay}ms`
          el.classList.add('aos-animate')
          observer?.unobserve(el)
        }
      })
    },
    { threshold: 0.15 }
  )

  // 观察标题区域
  const titleEls = document.querySelectorAll('.news-section .section-title, .news-section .section-line, .news-section .section-subtitle')
  titleEls.forEach((el, index) => {
    const htmlEl = el as HTMLElement
    htmlEl.dataset.aosDelay = String(index * 50)
    observer?.observe(htmlEl)
  })

  // 观察主卡片
  const mainCard = document.querySelector('.news-main-card')
  if (mainCard) {
    (mainCard as HTMLElement).dataset.aosDelay = '100'
    observer?.observe(mainCard)
  }

  // 观察小卡片（带错开延迟）
  const smallCards = document.querySelectorAll('.news-small-card')
  smallCards.forEach((card, index) => {
    const htmlCard = card as HTMLElement
    htmlCard.dataset.aosDelay = String(150 + index * 50)
    observer?.observe(htmlCard)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style>
/* 新闻动态区块 - 全站以 1920 为基准换算 vw，任意屏宽等比例缩放（1920 时还原当前尺寸） */
.news-section {
  /* 1920 时 = 74px */
  padding: 3.85417vw 0;
  background-color: #f6f8f9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.news-layout {
  display: flex;
  flex-direction: column;
  /* 1920 时 = 32px */
  gap: 1.66667vw;
}

/* 大新闻卡片 */
.news-main-card {
  display: flex;
  background: white;
  /* 1920 时 = 16px */
  border-radius: 0.83333vw;
  overflow: hidden;
  width: 100%;
  opacity: 0;
  /* 1rem ≈ 16px → 0.83333vw */
  transform: translateY(0.83333vw);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.news-main-card.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

.news-main-image {
  position: relative;
  flex: 0 0 60%;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  line-height: 0;
}

.news-main-image::before {
  content: '';
  display: block;
  padding-top: 65.74%;
  /* 612/931 × 100% */
}

.news-main-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  margin: 0;
  padding: 0;
  border: none;
  display: block;
}

.news-main-content {
  /* 1920 时 = 59px 72px */
  padding: 3.07292vw 3.75vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
}

.news-hot-tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  /* 1920 时 = 80px 36px */
  width: 4.16667vw;
  height: 1.875vw;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  color: white;
  /* 1920 时 = 17px */
  font-size: 0.88542vw;
  font-weight: 600;
  /* 1920 时 = 30px */
  margin-bottom: 1.5625vw;
  align-self: flex-start;
  border-radius: 0;
  padding: 0;
}

.news-main-title {
  /* 1920 时 = 40px */
  font-size: 2.08333vw;
  font-weight: 900;
  color: #000;
  /* 1920 时 = 30px */
  margin-bottom: 1.5625vw;
}

.news-main-excerpt {
  /* 1920 时 = 31px */
  font-size: 1.61458vw;
  color: #000;
  /* 1920 时 = 30px */
  margin-bottom: 1.5625vw;
}

.news-read-more {
  display: inline-flex;
  align-items: center;
  /* 1920 时 = 14px */
  gap: 0.72917vw;
  color: #00D4ff;
  /* 1920 时 = 21px */
  font-size: 1.09375vw;
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.3s;
}

.news-read-more:hover {
  /* 1920 时 = 12px */
  gap: 0.625vw;
}

/* 三个小新闻卡片 */
.news-small-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 1920 时 = 70px */
  gap: 3.64583vw;
}

.news-small-card {
  /* 1920 时 = 12px */
  border-radius: 0.625vw;
  overflow: hidden;
  opacity: 0;
  transform: translateY(0.83333vw);
  transition: opacity 1s ease-out, transform 1s ease-out, box-shadow 0.3s;
}

.news-small-card.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

/* 标题区域动画 */
.news-section .section-title,
.news-section .section-line,
.news-section .section-subtitle {
  opacity: 0;
  transform: translateY(0.83333vw);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.news-section .section-title.aos-animate,
.news-section .section-line.aos-animate,
.news-section .section-subtitle.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

.news-small-image {
  border-radius: 0.625vw;
  overflow: hidden;
}

.news-small-image img {
  display: block;
  max-width: 100%;
}

.news-small-content {
  /* 1920 时 = 24px */
  padding-top: 1.25vw;
}

.news-meta {
  display: flex;
  align-items: center;
  /* 1920 时 = 19px */
  gap: 0.98958vw;
  /* 1920 时 = 13px */
  margin-bottom: 0.67708vw;
  /* 1920 时 = 16px */
  font-size: 0.83333vw;
}

.news-category {
  color: #00D4ff;
  font-size: 0.83333vw;
  font-weight: 600;
}

.news-date {
  color: #adb1b5;
  font-size: 0.83333vw;
}

.news-title {
  /* 1920 时 = 21px */
  font-size: 1.09375vw;
  font-weight: 600;
  color: #000000;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>