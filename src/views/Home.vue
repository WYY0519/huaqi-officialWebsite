<template>
  <div class="home">
    <!-- 主视觉区域 - Banner轮播 -->
    <section id="home" class="hero-section" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
      <div class="slider-wrapper">
        <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentSlide === index }">
          <div class="slide-bg"><img :src="slide.bgImage" alt="" class="slide-bg-img"></div>
          <div class="slide-overlay"></div>
          <div class="slide-content">
            <h1 class="slide-title" v-html="bannerTitle"></h1>
            <p class="slide-subtitle">{{ bannerSubtitle }}</p>
            <a :href="bannerLink" class="hero-btn">{{ bannerBtnText }}</a>
          </div>
        </div>
      </div>
      <button class="banner-arrow banner-arrow-left" @click="prevSlide"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
      <button class="banner-arrow banner-arrow-right" @click="nextSlide"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
      <div class="swiper-pagination"><span v-for="(slide, index) in slides" :key="index" class="pagination-dot" :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span></div>
    </section>

    <!-- 核心产品解决方案 -->
    <section id="solutions" class="solutions-section">
      <div class="container">
        <h2 class="section-title">核心行业解决方案</h2>
        <p class="section-subtitle">五大垂直赛道全场景智能化覆盖</p>
        <div class="sol-list">
          <div v-for="(item, index) in solutionScenes" :key="index" class="sol-row" :class="{ reverse: index % 2 !== 0 }">
            <div class="sol-media"><div class="sol-video-box"><div class="sol-play-btn">▶</div></div></div>
            <div class="sol-text">
              <h3 class="sol-scene-title">{{ item.title }}</h3>
              <p class="sol-scene-sub">{{ item.sub }}</p>
              <p class="sol-scene-desc">{{ item.desc }}</p>
              <div class="sol-tags"><span class="sol-tag" v-for="(tag, ti) in item.tags" :key="ti">{{ tag }}</span></div>
              <a href="#" class="sol-more">了解更多 →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="stats-section">
      <div class="container">
        <h2 class="section-title">品牌实力与核心技术背书</h2>
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

    <!-- 产品展示 -->
    <section id="products" class="products-section">
      <div class="container">
        <h2 class="section-title">旗舰产品矩阵</h2>
        <p class="section-subtitle">覆盖全场景应用需求</p>
        <div class="products-carousel" @mouseenter="pauseProductSlideAutoplay" @mouseleave="resumeProductSlideAutoplay">
          <div class="products-grid-showcase">
            <div v-for="(product, index) in productSlides" :key="product.id" class="product-showcase-item" :class="{ 'center': index === 1 }">
              <div class="product-card">
                <img :src="product.image" :alt="product.name" class="product-bg-img">
                <div class="product-overlay">
                  <h3 class="product-name">{{ product.name }}</h3>
                  <p class="product-spec">{{ product.spec }}</p>
                  <div class="product-buttons">
                    <button class="product-btn product-btn-primary">立即购买</button>
                    <button class="product-btn product-btn-secondary">了解更多</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="product-arrow product-arrow-left" @click="prevProductSlide"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
          <button class="product-arrow product-arrow-right" @click="nextProductSlide"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
          <div class="product-pagination"><span v-for="(_, index) in totalProductSlides" :key="index" class="product-pagination-dot" :class="{ active: currentProductSlide === index }" @click="goToProductSlide(index)"></span></div>
        </div>
      </div>
    </section>

    <!-- 全流程服务保障体系 -->
    <section class="coverage-section">
      <div class="container">
        <h2 class="section-title">全流程服务保障体系</h2>
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

    <!-- 新闻动态 -->
    <section id="news" class="news-section">
      <div class="container">
        <h2 class="section-title">新闻动态</h2>
        <p class="section-subtitle">覆盖全场景应用需求</p>
        <div class="news-layout">
          <div class="news-main-card">
            <div class="news-main-image"><img :src="newsItems[0].image" :alt="newsItems[0].title"></div>
            <div class="news-main-content">
              <div v-if="newsItems[0].isHot" class="news-hot-tag">HOT</div>
              <h2 class="news-main-title">{{ newsItems[0].title }}</h2>
              <p class="news-main-excerpt">{{ newsItems[0].excerpt }}</p>
              <a :href="newsItems[0].link" class="news-read-more">阅读更多 →</a>
            </div>
          </div>
          <div class="news-small-grid">
            <div class="news-small-card" v-for="news in newsItems.slice(1)" :key="news.id">
              <div class="news-small-image"><img :src="news.image" :alt="news.title"></div>
              <div class="news-small-content">
                <div class="news-meta"><span class="news-category">{{ news.category }}</span><span class="news-date">{{ news.date }}</span></div>
                <h3 class="news-title">{{ news.title }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 获取专属解决方案 -->
    <section id="contact" class="contact-section">
      <div class="container">
        <h2 class="section-title">获取专属解决方案</h2>
        <p class="section-subtitle">专业团队1对1定制方案2小时内快速响应</p>
        <div class="contact-content">
          <div class="contact-info">
            <div class="contact-features">
              <span class="contact-feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>免费咨询</span>
              <span class="contact-feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>2h快速响应</span>
              <span class="contact-feature-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>保密协议</span>
            </div>
            <h3 class="contact-info-title">开启智能化升级之旅</h3>
            <p class="contact-info-desc">无论您身处消防救援、高空清洗、军警安防还是水利巡检领域，我们的专业团队将根据您的实际场景需求，量身定制最优无人机解决方案。</p>
            <p class="contact-trusted-label">TRUSTED BY INDUSTRY LEADERS</p>
            <div class="contact-trusted-grid"><span class="trusted-item" v-for="(brand, i) in trustedBrands" :key="i">{{ brand }}</span></div>
          </div>
          <div class="contact-form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-field"><svg class="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg><input type="text" placeholder="您的名字" class="form-input" v-model="formData.contact"></div>
                <div class="form-field"><svg class="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg><input type="tel" placeholder="联系电话" class="form-input" v-model="formData.phone"></div>
              </div>
              <div class="form-field"><svg class="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" /></svg><input type="text" placeholder="所属公司" class="form-input" v-model="formData.company"></div>
              <div class="form-field form-field-textarea"><textarea placeholder="请描述您的需求(限500字)" class="form-input form-textarea" v-model="formData.message" maxlength="500" @input="updateMessageLength"></textarea><span class="form-char-count">{{ messageLength }}/500</span></div>
              <button type="submit" class="submit-btn">提交需求免费获取方案 <span class="submit-arrow">→</span></button>
              <p class="form-privacy">提交即表示您同意我们的隐私政策，信息将严格保密</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { solutionScenes, companyStats, techCards, products, coverageItems, newsItems, trustedBrands } from '../data/homeData'

const formData = ref({ company: '', contact: '', phone: '', email: '', message: '' })
const messageLength = computed(() => formData.value.message.length)
const updateMessageLength = () => { }
const submitForm = () => {
  console.log('表单提交:', formData.value)
  alert('感谢您的提交，我们会尽快与您联系！')
  formData.value = { company: '', contact: '', phone: '', email: '', message: '' }
}

// Banner轮播
const slides = ref([{ bgImage: '/images/hero-bg.svg' }, { bgImage: '/images/hero-bg2.svg' }, { bgImage: '/images/hero-bg3.svg' }])
const bannerTitle = '华启天成<span class="highlight">H400</span>行业级无人机'
const bannerSubtitle = '重载无界，驰援未来'
const bannerLink = '/products/h400'
const bannerBtnText = '了解更多'
const currentSlide = ref(0)
const totalSlides = computed(() => slides.value.length)
let autoplayTimer: ReturnType<typeof setInterval> | null = null
let isPaused = false

const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value; resetAutoplay() }
const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % totalSlides.value; resetAutoplay() }
const goToSlide = (index: number) => { currentSlide.value = index; resetAutoplay() }
const startAutoplay = () => { if (isPaused) return; autoplayTimer = setInterval(() => { currentSlide.value = (currentSlide.value + 1) % totalSlides.value }, 5000) }
const stopAutoplay = () => { if (autoplayTimer) { clearInterval(autoplayTimer); autoplayTimer = null } }
const resetAutoplay = () => { stopAutoplay(); startAutoplay() }
const pauseAutoplay = () => { isPaused = true; stopAutoplay() }
const resumeAutoplay = () => { isPaused = false; startAutoplay() }

// 产品轮播
const currentProductSlide = ref(1)
const productSlideInterval = ref<ReturnType<typeof setInterval> | null>(null)
const productSlidePaused = ref(false)
const productSlides = computed(() => {
  const mid = currentProductSlide.value; const prev = (mid - 1 + products.value.length) % products.value.length; const next = (mid + 1) % products.value.length
  return [{ ...products.value[prev] }, { ...products.value[mid] }, { ...products.value[next] }]
})
const totalProductSlides = computed(() => products.value.length)
const prevProductSlide = () => { currentProductSlide.value = (currentProductSlide.value - 1 + totalProductSlides.value) % totalProductSlides.value; resetProductSlideAutoplay() }
const nextProductSlide = () => { currentProductSlide.value = (currentProductSlide.value + 1) % totalProductSlides.value; resetProductSlideAutoplay() }
const goToProductSlide = (index: number) => { currentProductSlide.value = index; resetProductSlideAutoplay() }
const startProductSlideAutoplay = () => { if (productSlidePaused.value) return; productSlideInterval.value = setInterval(() => { currentProductSlide.value = (currentProductSlide.value + 1) % totalProductSlides.value }, 4000) }
const stopProductSlideAutoplay = () => { if (productSlideInterval.value) { clearInterval(productSlideInterval.value); productSlideInterval.value = null } }
const resetProductSlideAutoplay = () => { stopProductSlideAutoplay(); startProductSlideAutoplay() }
const pauseProductSlideAutoplay = () => { productSlidePaused.value = true; stopProductSlideAutoplay() }
const resumeProductSlideAutoplay = () => { productSlidePaused.value = false; startProductSlideAutoplay() }

onMounted(() => { startAutoplay(); startProductSlideAutoplay() })
onUnmounted(() => { stopAutoplay(); stopProductSlideAutoplay() })
</script>
