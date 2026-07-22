<template>
  <div class="contact-page">
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import ContactSection from '../components/home/ContactSection.vue'
</script>

<style scoped>
.contact-page {
  /* 顶栏为 fixed，预留高度避免被遮挡（与其它子页面一致） */
  padding-top: 90px;
}
</style>
