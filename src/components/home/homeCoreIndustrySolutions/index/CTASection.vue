<template>
  <section class="cta-section">
    <div class="container">
      <p class="cta-title">获取专属解决方案</p>
      <div class="section-divider"></div>
      <p class="cta-desc">留下您的联系方式,我们的行业专家将在2小时内与您取得联系,为您定制专属解决方案。</p>
      <a href="/contact" class="cta-btn">立即咨询 <span style="margin-left: .3vw;font-weight: 900;">→</span></a>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cta-section {
  padding: 5vw 0 7.083333vw;
  background: #fff;
  text-align: center;
  border-top: 0.104167vw solid #C1C5C8;
}

.cta-title {
  font-size: 2.87474vw;
  font-weight: bold;
  color: #1a1a2e;
  margin-bottom: 0.625vw;
}

.cta-desc {
  font-size: 2.078125vw;
  color: #adb1b5;
  padding: 0 6vw
}

.cta-btn {
  display: inline-block;
  padding: 1.125vw 1.45vw 1.125vw 2.3vw;
  background: #03c7ef;
  color: #fff;
  border-radius: 0.5625vw;
  font-size: 1.766406vw;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
  margin: 2.408333vw 0 0 0;
}

.cta-btn:hover {
  background: #00bce0;
  transform: translateY(-0.10417vw);
  box-shadow: 0 0.41667vw 1.25vw rgba(0, 212, 255, 0.3);
}

.section-divider {
  width: 14vw;
  height: 0.10833vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto .75vw
}
</style>
