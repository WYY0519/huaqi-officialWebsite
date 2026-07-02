<template>
  <div class="float-toolbar">
    <a href="tel:400-xxx-xxxx" class="float-btn" title="电话咨询">
      <img src="../assets/home/图标/n.png" alt="">
    </a>
    <a href="#" class="float-btn" title="在线客服" @click.prevent="emit('openChat')">
      <img src="../assets/home/图标/n.png" alt="在线客服">
    </a>
    <a href="#" class="float-btn" title="公司地址">
      <img src="../assets/home/图标/n.png" alt="公司地址">
    </a>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'openChat'): void
}>()
</script>

<style scoped>
/* 右侧浮动工具栏 */
.float-toolbar {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 1000;
}

.float-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border: none;
  padding: 0;
}

.float-btn:hover {
  background: rgba(0, 0, 0, 0.6);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
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
