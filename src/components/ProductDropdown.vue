<template>
  <div class="product-dropdown" @mouseenter="showPanel = true" @mouseleave="showPanel = false">
    <router-link :to="href" class="nav-link" :class="{ active: isActive }">
      {{ label }}
    </router-link>
    <div class="dropdown-panel" :class="{ 'single-column': isSingleColumn, 'is-visible': showPanel }" :style="panelStyle">
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
import { computed, ref } from 'vue'

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
}>()

const showPanel = ref(false)

const isSingleColumn = computed(() => props.categories.length === 1)

const panelStyle = computed(() => {
  if (props.width) return { width: props.width }
  if (isSingleColumn.value) return { width: '200px' }
  return {}
})
</script>

<style scoped>
.product-dropdown {
  position: relative;
  padding-bottom: 20px;
  margin-bottom: -20px;
}

.product-dropdown:hover .dropdown-panel {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: none;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
  transition: color 0.3s;
  padding: 8px 0;
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
  bottom: -8px;
  left: 50%;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.3s ease, left 0.3s ease;
}

.nav-link.active::after {
  width: 100%;
  left: 0;
}

.dropdown-panel {
  position: fixed;
  top: 110px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-15px);
}

.dropdown-panel.is-visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-panel.single-column {
  position: absolute;
  left: 50%;
  transform: translateX(-50%) translateY(-15px);
  top: 117%;
  border-radius: 8px;
  text-align: center;
  opacity: 0;
  visibility: hidden;
}

.dropdown-panel.single-column.is-visible {
  transform: translateX(-50%) translateY(0);
  opacity: 1;
  visibility: visible;
}

.dropdown-grid {
  display: flex;
  justify-content: center;
  padding: 28px 0 37px 313px
}

.dropdown-grid.single-grid {
  display: block;
  padding: 20px 24px;
}

.dropdown-col {
  color: #666;
  font-size: 16.5px;
  flex: 1;
  max-width: 280px;
  opacity: 1;
  transform: translateY(0);
}

.col-title {
  font-size: 15px;
  font-weight: 500;
  color: #666;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
  transition: color 0.3s ease;
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
  font-size: 16.5px;
  padding: 6px 0;
  transition: color 0.2s, transform 0.2s;
  display: inline-block;
}

.col-item:hover {
  color: #00D4ff;
  transform: translateX(5px);
}

@media (max-width: 1024px) {
  .dropdown-panel {
    display: none !important;
  }
}
</style>
