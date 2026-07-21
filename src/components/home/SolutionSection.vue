<template>
  <section id="solutions" class="solutions-section" :style="{ backgroundImage: `url(${solutionBg})` }">
    <div class="container">
      <p class="section-title">核心行业解决方案</p>
      <p class="section-line"></p>
      <p class="section-subtitle">五大垂直赛道全场景智能化覆盖</p>
      <div class="sol-list">
        <div v-for="(item, index) in solutionScenes" :key="index" class="sol-row" :class="{ reverse: index % 2 !== 0 }"
          :ref="el => { if (el) solRowRefs[index] = el }">
          <div class="sol-media">
            <div class="sol-video-box" @mouseleave="pauseCarousel(index)">
              <div class="sol-image-container" :class="index % 2 === 0 ? 'direction-left' : 'direction-right'">
                <img v-for="(img, imgIndex) in getImages(index)" :key="imgIndex" :src="img"
                  :class="['sol-image', { 'active': currentIndex[index] === imgIndex || (currentIndex[index] === undefined && imgIndex === 0) }]"
                  :alt="item.title + ' - 图片' + (imgIndex + 1)" />
              </div>
              <div class="sol-play-btn" :class="{ 'hidden': isPlaying[index] }" @mouseenter="startCarousel(index)">
                <img :src="playBtnImg" alt="播放" />
              </div>
            </div>
          </div>
          <div class="sol-text">
            <p class="sol-scene-title">{{ item.title }}</p>
            <p class="sol-scene-sub">{{ item.sub }}</p>
            <div class="sol-scene-desc">
              <template v-if="Array.isArray(item.desc)">
                <p v-for="(paragraph, pi) in item.desc" :key="pi" style="margin-bottom: 0.52083vw;">{{ paragraph }}</p>
              </template>
              <template v-else>
                <p>{{ item.desc }}</p>
              </template>
            </div>
            <div class="sol-tags">
              <span class="sol-tag" v-for="(tag, ti) in item.tags" :key="ti">{{ tag }}</span>
            </div>
            <router-link :to="item.link" class="sol-more">了解更多 <span
                style="margin-left: 0.78125vw;">→</span></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { solutionScenes } from '../../data/homeData'

// 背景图片
const solutionBg = new URL('../../assets/home/图标/解决方案背景.png', import.meta.url).href

// 播放按钮图片
const playBtnImg = new URL('../../assets/home/图标/69de26edf65928eb909425811569bdd0baee2cc04772-I3z7RP.png', import.meta.url).href

// 使用 Vite 的 import.meta.glob 批量导入图片资源（支持png和jpg）
// 滚动动画观察器
let observer: IntersectionObserver | null = null

// sol-row 元素引用
const solRowRefs = ref<Record<number, any>>({})

const imageModules = import.meta.glob('../../assets/home/**/*.{png,jpg}', { eager: true }) as Record<string, { default: string }>

// 根据文件路径获取图片URL
const getImageUrl = (path: string) => {
  const key = path.replace('../../', '../../')
  return imageModules[key]?.default || ''
}

// 定义每个解决方案对应的图片路径
const solutionImageMap: Record<string, string[]> = {
  '城市消防': [
    getImageUrl('../../assets/home/城市消防/a.jpg'),
    getImageUrl('../../assets/home/城市消防/b.jpg'),
    getImageUrl('../../assets/home/城市消防/c.jpg'),
    getImageUrl('../../assets/home/城市消防/d.jpg'),
    getImageUrl('../../assets/home/城市消防/e.jpg')
  ],
  '森林消防': [
    getImageUrl('../../assets/home/森林消防/untitled.691.jpg'),
    getImageUrl('../../assets/home/森林消防/untitled.692.jpg'),
    getImageUrl('../../assets/home/森林消防/untitled.693.jpg'),
    getImageUrl('../../assets/home/森林消防/untitled.694.jpg'),
    getImageUrl('../../assets/home/森林消防/untitled.695.jpg')
  ],
  '挂载系列适配': [
    getImageUrl('../../assets/home/挂载系列适配/a1.jpg'),
    getImageUrl('../../assets/home/挂载系列适配/a2.jpg'),
    getImageUrl('../../assets/home/挂载系列适配/a3.jpg'),
    getImageUrl('../../assets/home/挂载系列适配/a4.jpg'),
    getImageUrl('../../assets/home/挂载系列适配/a5.jpg')
  ],
  '清洗系列': [
    getImageUrl('../../assets/home/清洗系列/无人机替换.jpg'),
    getImageUrl('../../assets/home/清洗系列/无人机替换1.jpg'),
    getImageUrl('../../assets/home/清洗系列/无人机替换2.jpg'),
    getImageUrl('../../assets/home/清洗系列/无人机替换3.jpg'),
    getImageUrl('../../assets/home/清洗系列/无人机替换4.jpg')
  ],
  '固定翼巡检系列': [
    getImageUrl('../../assets/home/固定翼巡检系列/a1.jpg'),
    getImageUrl('../../assets/home/固定翼巡检系列/a2.jpg'),
    getImageUrl('../../assets/home/固定翼巡检系列/a3.jpg'),
    getImageUrl('../../assets/home/固定翼巡检系列/a4.jpg'),
    getImageUrl('../../assets/home/固定翼巡检系列/a5.jpg')
  ],
  '系留系列': [
    getImageUrl('../../assets/home/系留系列/a1.jpg'),
    getImageUrl('../../assets/home/系留系列/a2.jpg'),
    getImageUrl('../../assets/home/系留系列/a3.jpg'),
    getImageUrl('../../assets/home/系留系列/a4 拷贝.jpg'),
    getImageUrl('../../assets/home/系留系列/a5.jpg')
  ],
  '科研定制服务': [
    getImageUrl('../../assets/home/科研定制服务/a1.png'),
    getImageUrl('../../assets/home/科研定制服务/a2.jpg'),
    getImageUrl('../../assets/home/科研定制服务/a3.jpg'),
    getImageUrl('../../assets/home/科研定制服务/a4.jpg'),
    getImageUrl('../../assets/home/科研定制服务/a5.jpg')
  ]
}

// 当前显示的图片索引（每个解决方案项独立）
const currentIndex = ref<Record<number, number>>({})

// 定时器引用（每个解决方案项独立）
const timers = ref<Record<number, ReturnType<typeof setInterval>>>({})

// 暂停延迟定时器引用（每个解决方案项独立）
const pauseTimers = ref<Record<number, ReturnType<typeof setTimeout>>>({})

// 播放状态（每个解决方案项独立）
const isPlaying = ref<Record<number, boolean>>({})

// 获取解决方案对应的图片数组
const getImages = (index: number) => {
  const title = solutionScenes.value[index].title
  return solutionImageMap[title] || []
}

// 开始轮播
const startCarousel = (index: number) => {
  // 如果已经在播放，则不重复启动
  if (isPlaying.value[index]) {
    return
  }

  // 清除可能存在的暂停延迟定时器
  if (pauseTimers.value[index]) {
    clearTimeout(pauseTimers.value[index])
    delete pauseTimers.value[index]
  }

  // 初始化当前索引
  if (!(index in currentIndex.value)) {
    currentIndex.value[index] = 0
  }

  // 清除已存在的定时器
  if (timers.value[index]) {
    clearInterval(timers.value[index])
  }

  // 设置播放状态
  isPlaying.value[index] = true

  // 创建新的定时器，每2秒切换图片
  timers.value[index] = setInterval(() => {
    const images = getImages(index)
    if (images.length > 0) {
      currentIndex.value[index] = (currentIndex.value[index] + 1) % images.length
    }
  }, 2000)
}

// 暂停轮播（带延迟，避免快速切换）
const pauseCarousel = (index: number) => {
  // 如果已有暂停延迟定时器，先清除
  if (pauseTimers.value[index]) {
    clearTimeout(pauseTimers.value[index])
  }

  // 设置延迟暂停（300ms）
  pauseTimers.value[index] = setTimeout(() => {
    if (timers.value[index]) {
      clearInterval(timers.value[index])
      delete timers.value[index]
    }
    isPlaying.value[index] = false
    delete pauseTimers.value[index]
  }, 300)
}

// 组件卸载时清除所有定时器
onMounted(() => {
  // 创建 Intersection Observer
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const row = entry.target as HTMLElement
          const media = row.querySelector('.sol-media') as HTMLElement
          const text = row.querySelector('.sol-text') as HTMLElement
          if (media) media.classList.add('animate-slide-down')
          if (text) text.classList.add('animate-slide-up')
          // 停止观察该元素
          observer?.unobserve(row)
        }
      })
    },
    {
      threshold: 0.2, // 当20%元素可见时触发
      rootMargin: '0px 0px -50px 0px' // 底部偏移
    }
  )

  // 观察所有 sol-row 元素
  Object.values(solRowRefs.value).forEach((el) => {
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  Object.values(timers.value).forEach(timer => {
    clearInterval(timer)
  })
  Object.values(pauseTimers.value).forEach(timer => {
    clearTimeout(timer)
  })
  observer?.disconnect()
})
</script>

<style>
/* 解决方案区块 - 左右交替布局 */
.solutions-section {
  padding: 3.645833vw 0;
  background-color: #f4f8fd;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.sol-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.sol-row {
  display: flex;
  /* grid-template-columns: 1fr 1fr; */
  gap: 0;
  /* 核心修改：取消全局拉伸，图片高度自适应自身尺寸 */
  /* align-items: flex-start; */
  background: #fff;
  border-radius: 0.625vw;
  overflow: hidden;
  /* 整行高度按 1920 设计等比缩放，1920 时=540px */
  height: 28.125vw;
  margin-bottom: 5.67708vw;
  box-shadow: 0 2px 20px rgba(0, 100, 200, 0.07);
  transition: box-shadow 0.3s;
}

/* 本模块是页面最后一个，最后一行不再需要底部留白 */
.sol-row:last-child {
  margin-bottom: 0;
}

.sol-row:hover {
  box-shadow: 0 8px 36px rgba(0, 100, 200, 0.13);
}

/* 偶数项：文字在左，视频在右 */
.sol-row.reverse {
  direction: rtl;
}

.sol-row.reverse>* {
  direction: ltr;
}

/* 图片容器：按 1920 设计等比缩放，1920 时=860×540，不随屏幕拉伸比例 */
.sol-media {
  position: relative;
  overflow: hidden;
  border-radius: 0.625vw;
  flex: 0 0 44.79167vw;
  width: 44.79167vw;
}

.sol-media .sol-video-box {
  position: relative;
  width: 100%;
}

.sol-media .sol-image-container {
  position: relative;
  width: 100%;
  height: 28.125vw;
  background: #f5f5f5;
}

/* 图片：非当前图绝对叠加（不影响高度），当前图处于文档流、按原始尺寸撑开容器 */
.sol-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  opacity: 0;
  z-index: 0;
  transition: none;
}

/* 非当前显示的图片：绝对叠加在容器上，不撑开高度 */
.sol-image:not(.active) {
  position: absolute;
  inset: 0;
}

/* 文字模块：占据图片模块右侧的剩余空间，高度与图片对齐 */
.sol-text {
  padding: 5.104167vw 2.708333vw 0;
  display: flex;
  flex-direction: column;
}

.sol-scene-title {
  font-size: 2.13542vw;
  font-weight: 800;
  color: #1a1a2e;
  line-height: 1.2;
  margin-bottom: 0.7vw;
}

.sol-scene-sub {
  font-size: 1.04167vw;
  color: #9b9e9f;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 1.3vw;
}

.sol-scene-desc {
  font-size: 1.04167vw;
  color: #9b9e9f;
  /* line-height: 1.8; */
  font-weight: bold;
}

.sol-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.625vw;
  padding: 1.9vw 0 1.2vw 0;
}

.sol-tag {
  padding: 0.19vw 1.04167vw;
  color: #9b9e9f;
  border-radius: 1.25vw;
  font-size: 0.78125vw;
  border: 1px solid #e0e0e0;
  background: #fafafa;
  transition: all 0.2s;
}

.sol-tag:hover {
  border-color: #00D4ff;
  color: #00D4ff;
  background: #f0f9ff;
}

.sol-more {
  display: inline-flex;
  align-items: center;
  gap: 0.3125vw;
  color: #00D4ff;
  font-size: 1.04167vw;
  font-weight: 600;
  text-decoration: none;
  margin-top: 0.41667vw;
  transition: gap 0.2s;
}

.sol-more:hover {
  gap: 0.52083vw;
}

.sol-media,
.sol-text {
  opacity: 0;
}

/* 滚动动画 */
.animate-slide-down {
  animation: slideDown 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out forwards;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 所有尺寸均按 1920 设计等比缩放（vw），不单独设置断点，保证比例一致 */

/* 当前显示的图片：处于普通文档流，填满 860×540 容器 */
.sol-image.active {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 1;
  transform: translate(0, 0) scale(1);
  z-index: 2;
  transition: none;
}

/* 单数模块(index 0,2,4...): 旧图片往上从左上角消失 */
.sol-image-container.direction-left .sol-image:not(.active) {
  opacity: 0;
  transform: translate(-80%, -30%) scale(0.85);
  z-index: 1;
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

/* 双数模块(index 1,3,5...): 旧图片往上从右上角消失 */
.sol-image-container.direction-right .sol-image:not(.active) {
  opacity: 0;
  transform: translate(80%, -30%) scale(0.85);
  z-index: 1;
  transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

/* 播放按钮 */
.sol-play-btn {
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s;
  width: 4.6875vw;
  height: 4.73958vw;
}

.sol-play-btn:hover {
  background: rgba(0, 0, 0, 0.6);
}

.sol-play-btn.hidden {
  opacity: 0;
  visibility: hidden;
}
</style>