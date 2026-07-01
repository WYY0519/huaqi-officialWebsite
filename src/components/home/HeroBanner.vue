<template>
  <section id="home" class="hero-section" @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
    <div class="slider-wrapper">
      <div v-for="(slide, index) in slides" :key="index" class="slide" :class="{ active: currentSlide === index }">
        <div class="slide-bg"><img :src="slide.bgImage" alt="" class="slide-bg-img"></div>
        <div class="slide-overlay"></div>
        <div class="slide-content">
          <h1 class="slide-title" v-html="bannerTitle"></h1>
          <p class="slide-subtitle">{{ bannerSubtitle }}</p>
          <div class="slide-logos">
            <img class="logo-icon" src="../../assets/home/图标/logo.png" alt="华启天成" />
            <img class="logo-icon" src="../../assets/home/图标/logo.png" alt="华启天成" />
          </div>
          <a :href="bannerLink" class="hero-btn">{{ bannerBtnText }}</a>
        </div>
      </div>
      <!-- <button class="banner-arrow banner-arrow-left" @click="prevSlide"><svg width="24" height="24" viewBox="0 0 24 24"
          fill="none">
          <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg></button>
      <button class="banner-arrow banner-arrow-right" @click="nextSlide"><svg width="24" height="24" viewBox="0 0 24 24"
          fill="none">
          <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg></button> -->
    </div>
    <div class="swiper-pagination"><span v-for="(slide, index) in slides" :key="index" class="pagination-dot"
        :class="{ active: currentSlide === index }" @click="goToSlide(index)"></span></div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const slides = ref([
  { bgImage: new URL('../../assets/home/轮播图/消防车.png', import.meta.url).href },
  { bgImage: new URL('../../assets/home/轮播图/固定翼.png', import.meta.url).href },
  { bgImage: new URL('../../assets/home/轮播图/系留.png', import.meta.url).href },
  { bgImage: new URL('../../assets/home/轮播图/H400.png', import.meta.url).href }
])
const bannerTitle = '行业级无人机 <span class="highlight">H400</span>'
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

onMounted(() => { startAutoplay() })
onUnmounted(() => { stopAutoplay() })
</script>
