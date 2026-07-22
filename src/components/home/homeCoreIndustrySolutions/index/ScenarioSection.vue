<template>
  <section class="scenario-section">
    <div class="container">
      <h2 class="section-title-dark">全场景消防救援核心能力</h2>
      <div class="section-divider"></div>
      <p class="section-desc">面向不同火灾场景下的多样化救援需求，覆盖城市消防全域应急救援场景</p>
      <div class="scenario-grid">
        <div class="scenario-card" v-for="(item, index) in scenarios" :key="index">
          <div class="scenario-image">
            <img :src="item.image" :alt="item.title" />
            <div class="scenario-overlay"></div>
          </div>
          <div class="scenario-info">
            <h3 class="scenario-title">{{ item.title }}</h3>
            <p class="scenario-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const image1 = new URL('../../../../assets/home/行业解决方案/城市消防/场景1.jpg', import.meta.url).href
const image2 = new URL('../../../../assets/home/行业解决方案/城市消防/场景2.jpg', import.meta.url).href
const image3 = new URL('../../../../assets/home/行业解决方案/城市消防/场景3.jpg', import.meta.url).href
const image4 = new URL('../../../../assets/home/行业解决方案/城市消防/场景4.jpg', import.meta.url).href

const scenarios = [
  {
    image: image1,
    title: '超高层建筑灭火',
    desc: '突破150米高度限制，精准投送灭火剂',
  },
  {
    image: image2,
    title: '危化品远距离处置',
    desc: '远程操控灭火，规避危化品爆炸风险',
  },
  {
    image: image3,
    title: '旧城中村/老旧小区',
    desc: '"空中消防通道"，道路狭窄区域快速抵达',
  },
  {
    image: image4,
    title: '应急生命搜救',
    desc: '热成像穿透浓烟锁定被困人员，开辟紧急救援通道',
  },
]
</script>

<style scoped>
.scenario-section {
  padding: 4.16667vw 0;
  background: #fff;
}

.section-title-dark {
  font-size: 2.87474vw;
  font-weight: bold;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 0.83333vw;
}

.section-divider {
  width: 13vw;
  height: 0.10833vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto 0.83333vw;
}

.section-desc {
  text-align: center;
  font-size: 1.04167vw;
  color: #adb1b5;
  margin-bottom: 3.125vw;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25vw;
}

.scenario-card {
  position: relative;
  border-radius: 0.625vw;
  overflow: hidden;
  height: 14.58333vw;
  cursor: pointer;
}

.scenario-image {
  position: absolute;
  inset: 0;
}

.scenario-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.scenario-card:hover .scenario-image img {
  transform: scale(1.08);
}

.scenario-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
}

.scenario-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5625vw;
  z-index: 2;
}

.scenario-title {
  font-size: 1.30208vw;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.41667vw;
}

.scenario-desc {
  font-size: 0.9375vw;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .scenario-grid {
    grid-template-columns: 1fr;
  }

  .scenario-card {
    height: 45.83333vw;
  }

  .scenario-info {
    padding: 1.04167vw;
  }
}
</style>
