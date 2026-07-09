<template>
  <div class="product-dropdown">
    <router-link :to="href" class="nav-link" :class="{ active: isActive }">
      {{ label }}
    </router-link>
    <div class="dropdown-panel" :class="{ 'single-column': isSingleColumn }" :style="panelStyle">
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
import { computed } from 'vue'

interface Category {
  category: string
  items: string[]
}

const props = defineProps<{
  label: string
  href: string
  categories: Category[]
  isActive?: boolean
  width?: string
}>()

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
  display: block;
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

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: currentColor;
}

.dropdown-panel {
  display: none;
  position: fixed;
  top: 110px;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  z-index: 1001;
}

.dropdown-panel.single-column {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 117%;
  border-radius: 8px;
  text-align: center;
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
}

.col-title {
  font-size: 15px;
  font-weight: 500;
  color: #666;
  /* margin-bottom: 16px;
  padding-bottom: 12px; */
  /* border-bottom: 1px solid #f0f0f0; */
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
  /* line-height: 1.8; */
  /* transition: color 0.2s; */
}

.col-item:hover {
  color: #00D4ff;
}

@media (max-width: 1024px) {
  .dropdown-panel {
    display: none !important;
  }
}
</style>
