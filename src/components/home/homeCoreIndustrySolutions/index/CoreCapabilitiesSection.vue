<template>
  <section class="core-capabilities-section">
    <div class="container">
      <h2 class="section-title-dark">全场景消防救援核心能力</h2>
      <div class="section-divider"></div>
      <p class="section-desc">覆盖灭火、救援、搜索、侦察等多场景任务，构建全场景消防救援的全方位解决方案</p>
      <div class="capabilities-list">
        <div class="capability-row" v-for="(item, index) in capabilities" :key="index"
          :class="{ reverse: index % 2 !== 0 }">
          <div class="capability-image">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="capability-text">
            <h3 class="capability-title">{{ item.title }}</h3>
            <p class="capability-desc">{{ item.desc }}</p>
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

const capabilities = [
  {
    image: image1,
    title: '超高层精准灭火',
    desc: '搭载特种灭火模块，无人机垂直起降高度可达150米，灌装灭火剂精准投射至着火点，实现超高层建筑的高效灭火作业。突破传统消防"够不着"的高度限制，配合热成像定位系统精准锁定火源，实现精准打击，大幅提升超高层建筑灭火效率。',
  },
  {
    image: image2,
    title: '危化场景远程处置',
    desc: '针对危化品泄漏、爆炸等高危场景，采用无人机远程投送灭火剂方式，无需人员深入险境即可完成灭火作业。通过远程操控或自主飞行航线规划，可在复杂地形和危险环境中快速部署，有效规避人员伤亡风险，大幅降低救援成本。',
  },
  {
    image: image3,
    title: '旧小区/城中村火情快速处置',
    desc: '针对老旧小区、城中村等建筑密集、道路狭窄区域，无人机可快速抵达现场，精准投送灭火剂，有效控制火势蔓延，打通生命救援通道。为救援争取宝贵时间，全力守护人民群众生命财产安全。',
  },
]
</script>

<style scoped>
.core-capabilities-section {
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

.capabilities-list {
  display: flex;
  flex-direction: column;
  gap: 2.08333vw;
}

.capability-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.60417vw;
  align-items: center;
}

.capability-row.reverse {
  direction: rtl;
}

.capability-row.reverse>* {
  direction: ltr;
}

.capability-image {
  border-radius: 0.625vw;
  overflow: hidden;
}

.capability-image img {
  width: 100%;
  height: 16.66667vw;
  object-fit: cover;
  display: block;
  transition: transform 0.5s;
}

.capability-image:hover img {
  transform: scale(1.05);
}

.capability-text {
  padding: 1.04167vw 0;
}

.capability-title {
  font-size: 1.30208vw;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 1.04167vw;
}

.capability-desc {
  font-size: 0.9375vw;
  color: #666;
  line-height: 1.9;
}

@media (max-width: 768px) {

  .capability-row,
  .capability-row.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 1.04167vw;
  }

  .capability-image img {
    height: 45.83333vw;
  }
}
</style>
