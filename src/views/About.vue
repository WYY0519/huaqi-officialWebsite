<template>
  <div class="page-placeholder">
    <div class="placeholder-content">
      <h1 class="placeholder-title">关于我们</h1>
      <p class="placeholder-desc">页面建设中，敬请期待...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.page-placeholder {
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
  background: #f4f8fd;
}

.placeholder-content {
  text-align: center;
}

.placeholder-title {
  font-size: 48px;
  font-weight: 900;
  color: #1a1a2e;
  margin-bottom: 20px;
}

.placeholder-desc {
  font-size: 18px;
  color: #999;
}
</style>
