<template>
  <div class="float-toolbar" :class="{ 'over-footer': isOverFooter }">
    <a href="tel:400-xxx-xxxx" class="float-btn" title="电话咨询">
      <img :src="phoneIcon" alt="">
    </a>
    <a href="#" class="float-btn" title="在线客服" @click.prevent="emit('openChat')">
      <img :src="chatIcon" alt="在线客服">
    </a>
    <a href="#" class="float-btn" title="公司地址">
      <img :src="addressIcon" alt="公司地址">
    </a>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// 图标路径
const phoneIcon = new URL('../assets/home/图标/m.png', import.meta.url).href
const chatIcon = new URL('../assets/home/图标/l.png', import.meta.url).href
const addressIcon = new URL('../assets/home/图标/n.png', import.meta.url).href

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
