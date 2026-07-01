<template>
  <section id="solutions" class="solutions-section">
    <div class="container">
      <p class="section-title">核心行业解决方案</p>
      <p class="section-line" ></p>
      <p class="section-subtitle">五大垂直赛道全场景智能化覆盖</p>
      <div class="sol-list">
        <div v-for="(item, index) in solutionScenes" :key="index" class="sol-row" :class="{ reverse: index % 2 !== 0 }">
          <div class="sol-media">
            <div class="sol-video-box" @mouseenter="startCarousel(index)" @mouseleave="pauseCarousel(index)">
              <div class="sol-image-container">
                <img v-for="(img, imgIndex) in getImages(index)" :key="imgIndex" :src="img"
                  :class="['sol-image', { 'active': currentIndex[index] === imgIndex || (currentIndex[index] === undefined && imgIndex === 0) }]"
                  :alt="item.title + ' - 图片' + (imgIndex + 1)" />
              </div>
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
import { ref, onUnmounted } from 'vue'
import { solutionScenes } from '../../data/homeData'

// 使用 Vite 的 import.meta.glob 批量导入图片资源
const imageModules = import.meta.glob('../../assets/home/**/*.png', { eager: true }) as Record<string, { default: string }>

// 根据文件路径获取图片URL
const getImageUrl = (path: string) => {
  const key = path.replace('../../', '../../')
  return imageModules[key]?.default || ''
}

// 定义每个解决方案对应的图片路径
const solutionImageMap: Record<string, string[]> = {
  '城市消防': [
    getImageUrl('../../assets/home/城市消防/a.png'),
    getImageUrl('../../assets/home/城市消防/b.png'),
    getImageUrl('../../assets/home/城市消防/c.png'),
    getImageUrl('../../assets/home/城市消防/d.png'),
    getImageUrl('../../assets/home/城市消防/e.png')
  ],
  '森林消防': [
    getImageUrl('../../assets/home/森林消防/untitled.691.png'),
    getImageUrl('../../assets/home/森林消防/untitled.692.png'),
    getImageUrl('../../assets/home/森林消防/untitled.693.png'),
    getImageUrl('../../assets/home/森林消防/untitled.694.png'),
    getImageUrl('../../assets/home/森林消防/untitled.695.png')
  ],
  // '挂载系列适配': [
  //   getImageUrl('../../assets/home/挂载系列适配/a1.png'),
  //   getImageUrl('../../assets/home/挂载系列适配/a2.png'),
  //   getImageUrl('../../assets/home/挂载系列适配/a3.png'),
  //   getImageUrl('../../assets/home/挂载系列适配/a4.png'),
  //   getImageUrl('../../assets/home/挂载系列适配/a5.png')
  // ],
  // '高空清洗': [
  //   getImageUrl('../../assets/home/清洗系列/无人机替换.png'),
  //   getImageUrl('../../assets/home/清洗系列/无人机替换1.png'),
  //   getImageUrl('../../assets/home/清洗系列/无人机替换2.png'),
  //   getImageUrl('../../assets/home/清洗系列/无人机替换3.png'),
  //   getImageUrl('../../assets/home/清洗系列/无人机替换4.png')
  // ],
  // '光伏清洗': [
  //   getImageUrl('../../assets/home/系留系列/a1.png'),
  //   getImageUrl('../../assets/home/系留系列/a2.png'),
  //   getImageUrl('../../assets/home/系留系列/a3.png'),
  //   getImageUrl('../../assets/home/系留系列/a4.png'),
  //   getImageUrl('../../assets/home/系留系列/a5.png')
  // ],
  // '科研定制服务': [
  //   getImageUrl('../../assets/home/固定翼巡检系列/a1.png'),
  //   getImageUrl('../../assets/home/固定翼巡检系列/a2.png'),
  //   getImageUrl('../../assets/home/固定翼巡检系列/a3.png'),
  //   getImageUrl('../../assets/home/固定翼巡检系列/a4.png'),
  //   getImageUrl('../../assets/home/固定翼巡检系列/a5.png')核心行业解决方案
  // ]
}

// 当前显示的图片索引（每个解决方案项独立）
const currentIndex = ref<Record<number, number>>({})

// 定时器引用（每个解决方案项独立）
const timers = ref<Record<number, ReturnType<typeof setInterval>>>({})

// 获取解决方案对应的图片数组
const getImages = (index: number) => {
  const title = solutionScenes.value[index].title
  return solutionImageMap[title] || []
}

// 开始轮播
const startCarousel = (index: number) => {
  // 初始化当前索引
  if (!(index in currentIndex.value)) {
    currentIndex.value[index] = 0
  }

  // 清除已存在的定时器
  if (timers.value[index]) {
    clearInterval(timers.value[index])
  }

  // 创建新的定时器，每2秒切换图片
  timers.value[index] = setInterval(() => {
    const images = getImages(index)
    if (images.length > 0) {
      currentIndex.value[index] = (currentIndex.value[index] + 1) % images.length
    }
  }, 2000)
}

// 暂停轮播
const pauseCarousel = (index: number) => {
  if (timers.value[index]) {
    clearInterval(timers.value[index])
    delete timers.value[index]
  }
}

// 组件卸载时清除所有定时器
onUnmounted(() => {
  Object.values(timers.value).forEach(timer => {
    clearInterval(timer)
  })
})
</script>

<style scoped>
/* 图片容器 - 固定宽高比 */
.sol-image-container {
  width: 100%;
  position: relative;
  padding-top: 42%;
  background: #f5f5f5;
  overflow: hidden;
}

/* 单张图片样式 - 完全展示不裁剪 */
.sol-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

/* 当前显示的图片 */
.sol-image.active {
  opacity: 1;
}

/* 视频盒子 */
.sol-video-box {
  position: relative;
  cursor: pointer;
}

/* 播放按钮 */
.sol-play-btn {
  position: absolute;
  z-index: 10;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
}

/* 响应式：iPad */
@media (max-width: 1024px) {
  .sol-image-container {
    padding-top: 45%;
  }
}

/* 响应式：手机 */
@media (max-width: 768px) {
  .sol-image-container {
    padding-top: 56.25%;
  }

  .sol-play-btn {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
  }
}

/* 响应式：小屏手机 */
@media (max-width: 480px) {
  .sol-image-container {
    padding-top: 60%;
  }

  .sol-play-btn {
    width: 40px;
    height: 40px;
    bottom: 10px;
    right: 10px;
  }
}
</style>