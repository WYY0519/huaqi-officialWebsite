<template>
  <section class="pain-points-section">
    <div class="container">
      <h2 class="section-title-dark">传统城市消防行业痛点</h2>
      <div class="section-divider"></div>
      <p class="section-desc">城市越建越高，传统消防方式面临严峻挑战</p>
      <div class="pain-points-grid">
        <div class="pain-point-card" v-for="(item, index) in painPoints" :key="index">
          <img class="pain-point-bg" :src="item.image" :alt="item.title" />
          <div class="pain-point-overlay"></div>
          <div class="pain-point-content">
            <h3 class="pain-point-title">{{ item.title }}</h3>
            <p class="pain-point-desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const image1 = new URL('../../../../assets/home/行业解决方案/城市消防/痛点1.png', import.meta.url).href
const image2 = new URL('../../../../assets/home/行业解决方案/城市消防/痛点2.png', import.meta.url).href
const image3 = new URL('../../../../assets/home/行业解决方案/城市消防/痛点3.png', import.meta.url).href

const painPoints = [
  {
    image: image1,
    title: '高度受限，覆盖不足',
    desc: '常规消防车作业高度多在50-80米，难以覆盖100米以上超高层建筑。楼梯拥堵、电梯停运，救援人员步行上行耗时久，极易错失最佳灭火时机。',
  },
  {
    image: image2,
    title: '环境危险，难以靠近',
    desc: '化工火灾、浓烟密闭空间、易燃易爆环境下，救援人员直接进入风险极高。传统侦察手段无法快速掌握内部火情与被困人员位置，决策效率低。',
  },
  {
    image: image3,
    title: '响应滞后，通行受阻',
    desc: '城市道路拥堵、老旧小区车道狭窄，大型消防车辆难以快速抵达现场。火情初期无法快速干预，易导致小火演变为重大灾情，损失扩大。',
  },
]
</script>

<style scoped>
.pain-points-section {
  padding: 5vw 0 6.40625vw;
  background: #f8f9fa;
}

.section-title-dark {
  font-size: 2.87474vw;
  font-weight: bold;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 0.3vw;
}

.section-divider {
  width: 14vw;
  height: 0.10833vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto 0.63333vw;
}

.section-desc {
  text-align: center;
  font-size: 1.04167vw;
  color: #adb1b5;
  margin-bottom: 3.125vw;
  margin-top: 0;
}

.pain-points-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.7vw;
}

.pain-point-card {
  position: relative;
  border-radius: 0.625vw;
  overflow: hidden;
  height: 12.5vw;
  width: 27.34375vw;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.pain-point-card:hover {
  transform: translateY(-0.3125vw);
  box-shadow: 0 0.625vw 1.875vw rgba(0, 0, 0, 0.3);
}

.pain-point-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.pain-point-card:hover .pain-point-bg {
  transform: scale(1.05);
}

.pain-point-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
}

.pain-point-content {
  position: absolute;
  /* to: 0;
  left: 0; */
  width: 100%;
  padding: 3.33vw 2.34375vw 1.041667vw 1.875vw;
  z-index: 2;
}

.pain-point-title {
  font-size: 1.30208vw;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.625vw;
}

.pain-point-desc {
  font-size: 0.83333vw;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .pain-points-grid {
    grid-template-columns: 1fr;
    gap: 0.83333vw;
  }

  .pain-point-card {
    height: 50vw;
  }

  .pain-point-content {
    padding: 1.04167vw;
  }
}
</style>
