<template>
  <section class="equipment-section">
    <div class="container">
      <h2 class="section-title-dark">多元化挂载适配多元救援任务</h2>
      <div class="section-divider"></div>
      <p class="section-desc">模块化快拆接口，轻松切换不同任务载荷，一机多用</p>
      <div class="equipment-grid">
        <div class="equipment-card" v-for="(item, index) in equipment" :key="index">
          <div class="equipment-icon">
            <img :src="item.icon" :alt="item.title" />
          </div>
          <h3 class="equipment-title">{{ item.title }}</h3>
          <p class="equipment-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const icon1 = new URL('../../../../assets/home/行业解决方案/城市消防/消防水枪.png', import.meta.url).href
const icon2 = new URL('../../../../assets/home/行业解决方案/城市消防/破窗器.png', import.meta.url).href
const icon3 = new URL('../../../../assets/home/行业解决方案/城市消防/热成像.png', import.meta.url).href

const equipment = [
  {
    icon: icon1,
    title: '消防水枪水带系统',
    desc: '适用于高层建筑消防灭火，可配高压水枪或泡沫灭火剂喷射装置，无人机载水枪可精准指向火源，配合远程遥控系统，可在复杂环境中高效灭火。',
  },
  {
    icon: icon2,
    title: '机载破窗器',
    desc: '高强度破窗头，可快速破拆玻璃幕墙或障碍物，配合红外热成像搜救被困人员，助力内攻作业，提升救援效率。',
  },
  {
    icon: icon3,
    title: '红外热成像搜救模块',
    desc: '可搭载红外热成像仪，兼具强光照明与热成像双模式，穿透浓烟定位被困人员，实时回传画面，实现360°搜救无死角。',
  },
]
</script>

<style scoped>
.equipment-section {
  padding: 4.16667vw 0;
  background: #f8f9fa;
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

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25vw;
}

.equipment-card {
  background: #fff;
  border-radius: 0.625vw;
  padding: 2.08333vw 1.5625vw;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.equipment-card:hover {
  transform: translateY(-0.3125vw);
  box-shadow: 0 0.625vw 1.875vw rgba(0, 100, 200, 0.1);
}

.equipment-icon {
  width: 4.16667vw;
  height: 4.16667vw;
  margin: 0 auto 1.25vw;
}

.equipment-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.equipment-title {
  font-size: 1.30208vw;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.83333vw;
}

.equipment-desc {
  font-size: 0.9375vw;
  color: #666;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .equipment-grid {
    grid-template-columns: 1fr;
    gap: 0.83333vw;
  }

  .equipment-card {
    padding: 1.5625vw 1.04167vw;
  }
}
</style>
