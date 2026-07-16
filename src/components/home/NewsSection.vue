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
/* 新闻动态区块 */
.news-section {
  padding: 74px 0;
  background-color: #f6f8f9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.news-layout {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* 大新闻卡片 */
.news-main-card {
  display: flex;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  opacity: 0;
  transform: translateY(1rem);
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
  padding: 59px 72px;
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
  width: 80px;
  height: 36px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: transparent;
  color: white;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 30px;
  align-self: flex-start;
  border-radius: 0;
  padding: 0;
}

.news-main-title {
  font-size: 30px;
  font-weight: 900;
  color: #000;
  margin-bottom: 30px;
}

.news-main-excerpt {
  font-size: 23.5px;
  color: #000;
  margin-bottom: 30px;
}

.news-read-more {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  color: #00D4ff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: gap 0.3s;
}

.news-read-more:hover {
  gap: 12px;
}

/* 三个小新闻卡片 */
.news-small-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
}

.news-small-card {
  border-radius: 12px;
  overflow: hidden;
  opacity: 0;
  transform: translateY(1rem);
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
  transform: translateY(1rem);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.news-section .section-title.aos-animate,
.news-section .section-line.aos-animate,
.news-section .section-subtitle.aos-animate {
  opacity: 1;
  transform: translateY(0);
}

.news-small-image {
  border-radius: 12px;
  overflow: hidden;
}

.news-small-image img {
  display: block;
  max-width: 100%;
}

.news-small-content {
  padding-top: 24px;
}

.news-meta {
  display: flex;
  align-items: center;
  gap: 19px;
  margin-bottom: 13px;
  font-size: 12px;
}

.news-category {
  color: #00D4ff;
  font-size: 12px;
  font-weight: 600;
}

.news-date {
  color: #999;
  font-size: 12px;
}

.news-title {
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 响应式 - iPad */
@media (max-width: 1024px) {
  .news-main-card {
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .news-main-image {
    width: 100%;
    height: auto;
    aspect-ratio: 931 / 612;
  }

  .news-main-content {
    padding: 30px;
  }

  .news-main-title {
    font-size: 24px;
  }

  .news-small-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* 响应式 - 手机 */
@media (max-width: 768px) {
  .news-main-card {
    flex-direction: column;
    width: 100%;
    height: auto;
  }

  .news-main-image {
    width: 100%;
    height: auto;
    aspect-ratio: 931 / 612;
  }

  .news-main-content {
    padding: 24px;
  }

  .news-main-title {
    font-size: 20px;
  }

  .news-main-excerpt {
    font-size: 14px;
  }

  .news-small-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

/* 响应式 - 小屏手机 */
@media (max-width: 480px) {
  .news-main-content {
    padding: 20px;
  }

  .news-main-title {
    font-size: 16px;
    margin-bottom: 12px;
  }

  .news-hot-tag {
    margin-bottom: 20px;
  }

  .news-section {
    padding: 30px 10px;
  }

  .news-main-excerpt {
    font-size: 13px;
    margin-bottom: 16px;
  }

  .news-read-more {
    font-size: 14px;
  }

  .news-small-content {
    padding: 16px;
  }

  .news-title {
    font-size: 14px;
  }
}
</style>