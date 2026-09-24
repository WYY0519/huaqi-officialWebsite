<template>
  <div class="float-toolbar" :class="{ 'over-footer': isOverFooter }">
    <a href="tel:16680932174" class="float-btn" title="电话咨询">
      <img :src="phoneIcon" alt="">
    </a>
    <a href="#" class="float-btn" title="在线客服" @click.prevent="emit('openChat')">
      <img :src="chatIcon" alt="在线客服">
    </a>
    <a href="#" class="float-btn" title="公司地址" @click.prevent="showAddress = true">
      <img :src="addressIcon" alt="公司地址">
    </a>

    <!-- 公司地址弹窗 -->
    <Teleport to="body">
      <transition name="addr-fade">
        <div v-if="showAddress" class="address-modal" @click="showAddress = false">
          <div class="address-card" @click.stop>
            <button class="address-close" @click="showAddress = false">×</button>
            <div class="address-head">
              <img :src="addressIcon" alt="">
              <span>公司地址</span>
            </div>
            <p class="address-text">深圳市龙华区观湖街道鹭湖社区观乐路5号多彩科创园B座303</p>
            <a
              class="address-map"
              href="https://uri.amap.com/marker?position=114.060469,22.710345&name=华启天成"
              target="_blank"
              rel="noopener"
            >
              在地图中查看
            </a>
          </div>
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 图标路径
const phoneIcon = new URL('../assets/home/图标/m.png', import.meta.url).href
const chatIcon = new URL('../assets/home/图标/l.png', import.meta.url).href
const addressIcon = new URL('../assets/home/图标/20260716155642_322_813.jpg', import.meta.url).href

// 公司地址弹窗
const showAddress = ref(false)

const emit = defineEmits<{
  (e: 'openChat'): void
}>()

// 检测是否滚动到 Footer 区域
const isOverFooter = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  const footer = document.querySelector('footer')
  if (footer) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isOverFooter.value = entry.isIntersecting
        })
      },
      { threshold: 0.1 }
    )
    observer.observe(footer)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
/* 右侧浮动工具栏 */
.float-toolbar {
  position: fixed;
  right: 20px;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
}

.float-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: none;
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); */
  cursor: pointer;
  padding: 0;
}

.float-btn:hover {
  background: rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
}

/* 在 Footer 区域时图标变白色 */
.over-footer .float-btn {
  border-color: rgba(255, 255, 255, 0.5);
}

.over-footer .float-btn img {
  filter: invert(1);
}

.over-footer .float-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: white;
}

.float-btn svg {
  width: 22px;
  height: 22px;
}

/* 公司地址弹窗 */
.address-modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.address-card {
  position: relative;
  width: 100%;
  max-width: 420px;
  background: #fff;
  border-radius: 16px;
  padding: 28px 24px 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.address-close {
  position: absolute;
  top: 8px;
  right: 12px;
  border: none;
  background: none;
  font-size: 26px;
  line-height: 1;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
}

.address-close:hover {
  color: #1a1a2e;
}

.address-head {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 18px;
}

.address-head img {
  width: 26px;
  height: 26px;
  object-fit: contain;
  border-radius: 50%;
}

.address-head span {
  font-size: 18px;
  font-weight: bold;
  color: #1a1a2e;
}

.address-text {
  margin: 0 0 18px;
  font-size: 16px;
  line-height: 1.7;
  color: #333;
  word-break: break-all;
}

.address-map {
  display: inline-block;
  padding: 8px 24px;
  font-size: 14px;
  color: #fff;
  background: #1a1a2e;
  border-radius: 24px;
  text-decoration: none;
  transition: background 0.2s;
}

.address-map:hover {
  background: #2c2c4a;
}

/* 弹窗动画 */
.addr-fade-enter-active,
.addr-fade-leave-active {
  transition: opacity 0.25s;
}
.addr-fade-enter-active .address-card,
.addr-fade-leave-active .address-card {
  transition: transform 0.25s;
}
.addr-fade-enter-from,
.addr-fade-leave-to {
  opacity: 0;
}
.addr-fade-enter-from .address-card,
.addr-fade-leave-to .address-card {
  transform: scale(0.9);
}

/* 手机端 */
@media (max-width: 768px) {
  .address-card {
    padding: 24px 18px 16px;
  }
  .address-head span {
    font-size: 16px;
  }
  .address-text {
    font-size: 15px;
  }
}

/* iPad / 平板 */
@media (max-width: 1024px) {
  .float-toolbar {
    right: 12px;
    gap: 8px;
  }

  .float-btn {
    width: 40px;
    height: 40px;
  }

  .float-btn svg {
    width: 18px;
    height: 18px;
  }
}

/* 手机 */
@media (max-width: 768px) {
  .float-toolbar {
    right: 10px;
    gap: 6px;
  }

  .float-btn {
    width: 36px;
    height: 36px;
  }

  .float-btn svg {
    width: 16px;
    height: 16px;
  }
}
</style>
