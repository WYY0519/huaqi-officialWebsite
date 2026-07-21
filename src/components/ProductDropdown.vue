<template>
  <div ref="triggerRef" class="product-dropdown" @mouseenter="showPanel = true" @mouseleave="showPanel = false">
    <router-link :to="href" class="nav-link" :class="{ active: isActive }">
      {{ label }}
    </router-link>
    <div class="dropdown-panel" :class="{ 'single-column': isSingleColumn, 'is-visible': showPanel }"
      :style="panelStyle">
      <div class="dropdown-grid" :class="{ 'single-grid': isSingleColumn }">
        <div v-for="(category, index) in categories" :key="index" class="dropdown-col">
          <div class="col-title">{{ category.category }}</div>
          <div class="col-list">
            <a v-for="(item, i) in category.items" :key="i" :href="href + '?type=' + encodeURIComponent(item)"
              class="col-item">{{ item
              }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'

interface Category {
  category?: string
  items: string[]
}

const props = defineProps<{
  label: string
  href: string
  categories: Category[]
  isActive?: boolean
  width?: string
  headerBottom?: number
}>()

const showPanel = ref(false)
const triggerRef = ref<HTMLElement>()
const triggerCenterX = ref(0)

const isSingleColumn = computed(() => props.categories.length === 1)

const updateTriggerPosition = () => {
  if (!triggerRef.value) return
  const rect = triggerRef.value.getBoundingClientRect()
  triggerCenterX.value = rect.left + rect.width / 2
}

const panelStyle = computed(() => {
  const base: Record<string, string> = {}
  if (props.headerBottom) {
    base.top = `${props.headerBottom}px`
  }
  if (isSingleColumn.value) {
    base.left = `${triggerCenterX.value}px`
  }
  if (props.width) {
    base.minWidth = props.width
  } else if (isSingleColumn.value) {
    /* 1920 时 = 200px */
    base.minWidth = '10.41667vw'
  }
  return base
})

watch(() => props.headerBottom, updateTriggerPosition)

onMounted(() => {
  updateTriggerPosition()
  window.addEventListener('scroll', updateTriggerPosition, { passive: true })
  window.addEventListener('resize', updateTriggerPosition, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateTriggerPosition)
  window.removeEventListener('resize', updateTriggerPosition)
})
</script>

<style scoped>
.product-dropdown {
  position: relative;
  /* 1920 时 = 20px */
  padding-bottom: 1.04167vw;
  margin-bottom: -1.04167vw;
}

.product-dropdown:hover .dropdown-panel {
  opacity: 1;
  visibility: visible;
  transition: none;
}

/* 非单列面板恢复垂直位移动画；单列面板保持 translateX(-50%) 水平居中 */
.product-dropdown:hover .dropdown-panel:not(.single-column) {
  transform: translateY(0);
  /* 产品中心：hover 时面板顶部出现分隔阴影 */
  box-shadow: 0 0.20833vw 0.41667vw rgba(0, 0, 0, 0.08);
}

.product-dropdown:hover .dropdown-panel.single-column {
  transform: translateX(-50%);
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  /* 1920 时 = 21px，与 NavBar 的 .nav-link 保持一致、等比缩放 */
  font-size: 1.09375vw;
  font-weight: 500;
  transition: color 0.3s;
  /* 1920 时 = 8px 0 */
  padding: 0.41667vw 0;
  position: relative;
  white-space: nowrap;
  display: inline-block;
  z-index: 1002;
}

.nav-link:hover,
.nav-link.active {
  color: inherit;
}

.nav-link:active,
.col-item:active {
  color: inherit !important;
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

.nav-link::after {
  content: '';
  position: absolute;
  /* 由 JS 动态计算，紧贴 header-container 底部；vw 作为降级兜底 */
  bottom: var(--underline-offset, -0.41667vw);
  left: 50%;
  width: 0;
  /* 1920 时 = 3px */
  height: 0.15625vw;
  background: currentColor;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link.active::after {
  width: 100%;
  left: 0;
}

.dropdown-panel {
  position: fixed;
  left: 0;
  right: 0;
  background: #fff;
  /* 1920 时 = 0 8px 24px */
  /* box-shadow: 0 0.41667vw 1.25vw rgba(0, 0, 0, 0.08); */
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  /* 1920 时 = -15px */
  transform: translateY(-0.78125vw);
}

.dropdown-panel.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

/* 单列面板：fixed 定位，top/left 由 JS 根据触发元素和 header 底部动态计算 */
.dropdown-panel.single-column {
  transform: translateX(-50%) translateY(-0.78125vw);
  /* 1920 时 = 8px */
  border-radius: 0.41667vw;
  text-align: center;
  /* 覆盖全宽多列的 right: 0，避免面板被拉伸 */
  right: auto;
}

.dropdown-panel.single-column.is-visible {
  transform: translateX(-50%) translateY(0);
}

.dropdown-grid {
  display: flex;
  justify-content: center;
  /* 1920 时 = 28px 0 37px 313px */
  padding: 1.45833vw 0 1.92708vw 16.30208vw
}

.dropdown-grid.single-grid {
  display: block;
  /* 1920 时 = 20px 24px */
  padding: 1.04167vw 1.25vw;
}

.dropdown-col {
  color: #666;
  /* 1920 时 = 22px */
  font-size: 1.14583vw;
  flex: 1;
  /* 1920 时 = 280px */
  max-width: 14.58333vw;
  opacity: 1;
  transform: translateY(0);
}

.col-title {
  /* 1920 时 = 20px */
  font-size: 1.04167vw;
  font-weight: 500;
  color: #666;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.col-title:hover {
  color: #00D4ff;
}

.col-list {
  display: flex;
  flex-direction: column;
}

.col-item {
  color: #333;
  text-decoration: none;
  /* 1920 时 = 22px */
  font-size: 1.14583vw;
  /* 1920 时 = 6px 0 */
  padding: 0.3125vw 0;
  transition: color 0.2s, transform 0.2s;
  display: inline-block;
  white-space: nowrap;
}

.col-item:hover {
  color: #00D4ff;
  /* 1920 时 = 5px */
  transform: translateX(0.26042vw);
}

@media (max-width: 1024px) {
  .dropdown-panel {
    display: none !important;
  }
}
</style>
