<template>
  <div class="solution-detail">
    <HeroBanner />
    <div class="solution-body container">
      <div class="solution-info">
        <h2 class="info-title">方案概述</h2>
        <p class="info-desc">{{ desc }}</p>
        <div class="info-tags">
          <span class="info-tag" v-for="(tag, i) in tags" :key="i">{{ tag }}</span>
        </div>
      </div>
      <div class="solution-gallery">
        <h2 class="gallery-title">案例展示</h2>
        <div class="gallery-grid">
          <div class="gallery-item" v-for="(img, i) in images" :key="i">
            <img :src="img" :alt="title + ' - ' + (i + 1)" />
          </div>
        </div>
      </div>
      <div class="solution-cta">
        <a href="/contact" class="cta-btn">咨询方案</a>
        <a href="/solutions" class="cta-btn cta-btn-outline">返回解决方案</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import { solutionScenes } from '../data/homeData'
import HeroBanner from '../components/home/HeroBanner.vue'

const route = useRoute()

// 轮播图控制状态
const carouselIndex = ref(0)
const totalSlides = ref(4)
const prevSlide = () => {
  carouselIndex.value = (carouselIndex.value - 1 + totalSlides.value) % totalSlides.value
}
const nextSlide = () => {
  carouselIndex.value = (carouselIndex.value + 1) % totalSlides.value
}
provide('carouselControl', { carouselIndex, totalSlides, prevSlide, nextSlide })

const slug = computed(() => route.params.slug as string)

const solutionIndex = computed(() => {
  const map: Record<string, number> = {
    'city-fire': 0,
    'forest-fire': 1,
    'mount-adapt': 2,
    'high-cleaning': 3,
    'fixed-wing': 4,
    'tethered': 5,
    'research': 6,
  }
  return map[slug.value] ?? 0
})

const currentSolution = computed(() => solutionScenes.value[solutionIndex.value])
const title = computed(() => currentSolution.value.title)
const desc = computed(() => currentSolution.value.desc)
const tags = computed(() => currentSolution.value.tags)

const imageModules = import.meta.glob('../assets/home/**/*.{png,jpg}', { eager: true }) as Record<string, { default: string }>

const solutionImageMap: Record<string, string[]> = {
  '城市消防': [
    imageModules['../assets/home/城市消防/a.jpg']?.default,
    imageModules['../assets/home/城市消防/b.jpg']?.default,
    imageModules['../assets/home/城市消防/c.jpg']?.default,
    imageModules['../assets/home/城市消防/d.jpg']?.default,
    imageModules['../assets/home/城市消防/e.jpg']?.default,
  ],
  '森林消防': [
    imageModules['../assets/home/森林消防/untitled.691.jpg']?.default,
    imageModules['../assets/home/森林消防/untitled.692.jpg']?.default,
    imageModules['../assets/home/森林消防/untitled.693.jpg']?.default,
    imageModules['../assets/home/森林消防/untitled.694.jpg']?.default,
    imageModules['../assets/home/森林消防/untitled.695.jpg']?.default,
  ],
  '挂载系列适配': [
    imageModules['../assets/home/挂载系列适配/a1.jpg']?.default,
    imageModules['../assets/home/挂载系列适配/a2.jpg']?.default,
    imageModules['../assets/home/挂载系列适配/a3.jpg']?.default,
    imageModules['../assets/home/挂载系列适配/a4.jpg']?.default,
    imageModules['../assets/home/挂载系列适配/a5.jpg']?.default,
  ],
  '高空清洗': [
    imageModules['../assets/home/清洗系列/无人机替换.jpg']?.default,
    imageModules['../assets/home/清洗系列/无人机替换1.jpg']?.default,
    imageModules['../assets/home/清洗系列/无人机替换2.jpg']?.default,
    imageModules['../assets/home/清洗系列/无人机替换3.jpg']?.default,
    imageModules['../assets/home/清洗系列/无人机替换4.jpg']?.default,
  ],
  '科研定制服务': [
    imageModules['../assets/home/科研定制服务/a1.png']?.default,
    imageModules['../assets/home/科研定制服务/a2.jpg']?.default,
    imageModules['../assets/home/科研定制服务/a3.jpg']?.default,
    imageModules['../assets/home/科研定制服务/a4.jpg']?.default,
    imageModules['../assets/home/科研定制服务/a5.jpg']?.default,
  ],
  '光伏清洗': [
    imageModules['../assets/home/系留系列/a1.jpg']?.default,
    imageModules['../assets/home/系留系列/a2.jpg']?.default,
    imageModules['../assets/home/系留系列/a3.jpg']?.default,
    imageModules['../assets/home/系留系列/a4 拷贝.jpg']?.default,
    imageModules['../assets/home/系留系列/a5.jpg']?.default,
  ],
}

const images = computed(() => (solutionImageMap[currentSolution.value.title] || []).filter(Boolean))
</script>

<style>
.solution-detail {
  min-height: 100vh;
}

.solution-body {
  padding: 3.125vw 0;
}

.info-title,
.gallery-title {
  font-size: 18.95833vw;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 1.04167vw;
}

.info-desc {
  font-size: 10.57292vw;
  color: #666;
  line-height: 1.8;
  margin-bottom: 1.25vw;
}

.info-tags {
  display: flex;
  gap: 0.625vw;
  flex-wrap: wrap;
  margin-bottom: 2.08333vw;
}

.info-tag {
  padding: 0.41667vw 1.04167vw;
  background: #e6f7ff;
  color: #00D4ff;
  border-radius: 1.04167vw;
  font-size: 9.53125vw;
  font-weight: 600;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15.625vw, 1fr));
  gap: 1.04167vw;
  margin-bottom: 2.08333vw;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 11.45833vw;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

.solution-cta {
  display: flex;
  gap: 0.83333vw;
  padding-top: 1.04167vw;
}

.cta-btn {
  display: inline-block;
  padding: 0.83333vw 1.875vw;
  background: #00D4ff;
  color: #fff;
  border-radius: 1.5625vw;
  font-size: 10.57292vw;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-btn:hover {
  background: #00bce0;
  transform: translateY(-0.10417vw);
}

.cta-btn-outline {
  background: transparent;
  border: 2px solid #00D4ff;
  color: #00D4ff;
}

.cta-btn-outline:hover {
  background: #00D4ff;
  color: #fff;
}


</style>
