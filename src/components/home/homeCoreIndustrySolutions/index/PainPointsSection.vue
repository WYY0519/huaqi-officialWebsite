<template>
  <section class="pain-points-section">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>
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
import { computed } from 'vue'

const props = defineProps<{
  module?: string
}>()

const sectionTitle = computed(() => {
  if (props.module === 'forest-fire') return '传统森林消防核心痛点'
  if (props.module === 'mount-adapt') return '传统无人机挂载适配痛点'
  return '传统城市消防行业痛点'
})

const sectionDesc = computed(() => {
  if (props.module === 'forest-fire') return '林区地形复杂，传统防控模式遭遇多重瓶颈'
  if (props.module === 'mount-adapt') return '机型接口不统一、改装成本高、切换部署慢，限制多场景作业效率'
  return '城市发展升级，传统消防模式遇瓶颈'
})

const painPoints = computed(() => {
  if (props.module === 'forest-fire') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/痛点1.png', import.meta.url).href,
        title: '地形复杂，救援难抵达',
        desc: '山区与原始林区道路闭塞，地形险峻，地面救援力量机动耗时长、进驻难，极易错失初期火情处置黄金窗口，小火演变成重大灾情。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/痛点2.png', import.meta.url).href,
        title: '火情隐蔽，发现不及时',
        desc: '人工巡护覆盖范围有限，初起火点易被林木植被遮蔽；夜间、雨雾等恶劣天气下排查难度大，监测盲区多，漏检火险报率高。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/痛点3.png', import.meta.url).href,
        title: '蔓延迅速，管控难度大',
        desc: '山火受风力、地形驱动蔓延极快，传统方式难以及时掌握火情动态与蔓延趋势，防火隔离方案制定滞后，处置全程被动。',
      }
    ]
  }
  if (props.module === 'mount-adapt') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/痛点1.png', import.meta.url).href,
        title: '跨平台适配难',
        desc: '大疆与自研平台接口不通用，挂载无法通用，跨平台部署要定制改装，成本高、周期长。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/痛点2.png', import.meta.url).href,
        title: '任务切换低效',
        desc: '拆装载载需拆机架、重调试，单次切换超半小时，应急场景响应慢，作业模式无法高速转换。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/痛点3.png', import.meta.url).href,
        title: '场景覆盖有限',
        desc: '单挂载仅支撑单一场景，无法兼顾侦察、灭火、搜救等多任务，设备闲置率高，价值难以最大化。',
      }
    ]
  }
  return [
    {
      image: new URL('../../../../assets/home/行业解决方案/城市消防/痛点1.png', import.meta.url).href,
      title: '高度受限，覆盖不足',
      desc: '常规举高消防车作业高度多在50-80米，难以覆盖100米以上超高层建筑;楼梯拥堵、电梯停运，人员装备上行耗时久，极易错失最佳灭火时机。',
    },
    {
      image: new URL('../../../../assets/home/行业解决方案/城市消防/痛点2.png', import.meta.url).href,
      title: '环境危险，难以靠近',
      desc: '化工火灾、浓烟密闭空间、易燃易爆场景下，救援人员直接进入风险极高;传统侦察手段无法快速掌握内部火情与被困人员位置，决策效率低。',
    },
    {
      image: new URL('../../../../assets/home/行业解决方案/城市消防/痛点3.png', import.meta.url).href,
      title: '响应滞后，通行受阻',
      desc: '城市道路拥堵、老旧小区车道狭窄，大型消防车辆难以快速抵达现场;火情初期无法快速干预，易导致小火演变为重大灾情，损失扩大。',
    }
  ]
})
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
  .pain-points-section {
    padding: 6vw 4vw;
  }

  .section-title-dark {
    font-size: 5.3vw;
  }

  .section-divider {
   width: 23vw;
    height: 0.3vw !important;
  }

  .section-desc {
    font-size: 3vw;
    margin-bottom: 5vw;
  }

  .pain-points-grid {
    grid-template-columns: 1fr;
    gap: 3vw;
  }

  .pain-point-card {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 10;
    border-radius: 2vw;
  }

  .pain-point-content {
    padding: 3vw;
    top: 0;
    left: 0;
  }

  .pain-point-title {
    font-size: 4vw;
    margin-bottom: 1.5vw;
  }

  .pain-point-desc {
    font-size: 2.6vw;
    line-height: 1.6;
  }
}
</style>
