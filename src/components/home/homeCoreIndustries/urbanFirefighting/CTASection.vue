<template>
  <section class="cta-section">
    <div class="container">
      <p class="cta-title">获取专属解决方案</p>
      <p class="cta-desc">留下您的联系方式，我们的行业专家将在2小时内与您取得联系，为您定制专属解决方案。</p>
      <a href="/contact" class="cta-btn">立即咨询 →</a>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* 全站以 1920 为基准换算 vw，任意屏宽等比例缩放（1920 时 = 原始设计尺寸，不动） */
.cta-section {
  /* 1920 时 = 80px */
  padding: 4.16667vw 0;
  background: #fff;
  text-align: center;
}

.cta-title {
  /* 1920 时 = 475px（原始设计尺寸，作为 1920 基准等比缩放） */
  font-size: 24.73958vw;
  font-weight: 800;
  color: #1a1a2e;
  /* 1920 时 = 16px */
  margin-bottom: 0.83333vw;
}

.cta-desc {
  /* 1920 时 = 203px（原始设计尺寸） */
  font-size: 10.57292vw;
  color: #666;
  /* 1920 时 = 560px */
  max-width: 29.16667vw;
  /* 1920 时 = 0 auto 36px */
  margin: 0 auto 1.875vw;
  line-height: 1.7;
}

.cta-btn {
  display: inline-block;
  /* 1920 时 = 18px 48px */
  padding: 0.9375vw 2.5vw;
  background: #00D4ff;
  color: #fff;
  /* 1920 时 = 30px */
  border-radius: 1.5625vw;
  /* 1920 时 = 239px（原始设计尺寸） */
  font-size: 12.44792vw;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-btn:hover {
  background: #00bce0;
  /* 1920 时 = -2px */
  transform: translateY(-0.10417vw);
  /* 1920 时 = 0 8px 24px */
  box-shadow: 0 0.41667vw 1.25vw rgba(0, 212, 255, 0.3);
}
</style>
