<template>
  <section class="pain-points-section">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>
      <div class="pain-points-grid">
        <div class="pain-point-card" v-for="(item, index) in painPoints" :key="index" ref="cardRefs"
          :style="{ animationDelay: index * 0.25 + 's' }">
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
import { computed, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps<{
  module?: string
}>()

const cardRefs = ref<HTMLElement[]>([])
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer?.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15 })

  cardRefs.value.forEach((el) => {
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const sectionTitle = computed(() => {
  if (props.module === 'forest-fire') return '传统森林消防核心痛点'
  if (props.module === 'mount-adapt') return '传统无人机挂载适配痛点'
  if (props.module === 'high-cleaning') return '传统清洁作业行业痛点'
  if (props.module === 'fixed-wing') return '传统巡检行业核心痛点'
  if (props.module === 'tethered') return '传统高空照明核心痛点'
  if (props.module === 'research') return '传统科研作业痛点模块文案'
  return '传统城市消防行业痛点'
})

const sectionDesc = computed(() => {
  if (props.module === 'forest-fire') return '林区地形复杂，传统防控模式遭遇多重瓶颈'
  if (props.module === 'mount-adapt') return '机型接口不统一、改装成本高、切换部署慢，限制多场景作业效率'
  if (props.module === 'high-cleaning') return '高空作业风险高、人工效率低、复杂场景覆盖难，无人机清洁重构作业模式'
  if (props.module === 'fixed-wing') return '大范围、长距离线路与区域巡检，传统人工模式存在效率低、风险高、覆盖不全等行业难题'
  if (props.module === 'tethered') return '夜间抢险、厂区值守、大型活动通宵照明场景下，传统照明设备存在照明局限、续航不足、功能割裂三大难题'
  if (props.module === 'research') return '野外环境复杂、载荷集成难度高、标准无人机难以匹配专项科研试验需求'
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
  if (props.module === 'high-cleaning') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/清洗系列/痛点1.png', import.meta.url).href,
        title: '登高作业安全隐患突出',
        desc: '山地、屋顶光伏运维需人员登高作业，雨季、冬季湿滑环境易引发坠落风险，人工清洁作业安全管理成本高，事故风险大。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/清洗系列/痛点2.png', import.meta.url).href,
        title: '复杂地形运维效率低下',
        desc: '山地、水面、戈壁等特殊地形电站，车辆与人员通行困难，人工清洗覆盖面窄、周期长，大面积电站难以实现高频次清洁。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/清洗系列/痛点3.png', import.meta.url).href,
        title: '积污持续损耗发电收益',
        desc: '沙尘、鸟粪、扬尘长期覆盖光伏面板，透光率下降最高可发电量损耗20%以上，人工清洗频次不足直接造成电站收益持续流失。',
      }
    ]
  }
  if (props.module === 'fixed-wing') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/固定翼巡检/痛点1.png', import.meta.url).href,
        title: '地形复杂，人员难以抵达',
        desc: '高山峡谷、无人矿区、偏远输电通道及深山林区车辆无法通行,人工徒步巡检耗时久、作业强度大，大量偏远区域长期存在巡检盲区。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/固定翼巡检/痛点2.png', import.meta.url).href,
        title: '覆盖有限，巡检效率低下',
        desc: '单人单日徒步巡检仅覆盖数平方公里，百公里线路需数人数天完成；大面积林区、管网运维人力成本居高不下。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/固定翼巡检/痛点3.png', import.meta.url).href,
        title: '周期过长，隐患发现滞后',
        desc: '人工巡山周期长、频率低，山体滑坡、火情、线路破损、管道渗漏等隐患无法第一时间发现，易演变为重大事故。',
      }
    ]
  }
  if (props.module === 'tethered') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/系留系列/痛点1.png', import.meta.url).href,
        title: '地面照明高度不足',
        desc: '工程车灯、落地投光灯最大举升不足12米，山体、建筑、林木极易遮挡光线；高层火场、峡谷盲区、灾害现场存在大面积照明死角，无法高空俯视整片区域，搜救与现场观测效率极低。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/系留系列/痛点2.png', import.meta.url).href,
        title: '续航太短',
        desc: '普通锂电照明无人机单次仅能续航十几分钟，通宵作业需频繁起降换电池；柴油照明灯持续耗柴油、噪音污染大，野外补给困难，抢险、林区夜间值守作业断断续续。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/系留系列/痛点3.png', import.meta.url).href,
        title: '功能单一，多设备部署繁琐',
        desc: '传统照明设备多数只具备补光功能，夜间同时调拍、持线广播、应急监控照明需单独配备多套设备，分散架设，部署繁琐，整体投入成本翻倍，突发应急场景作业效率差。',
      }
    ]
  }
  if (props.module === 'research') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/科研定制服务/痛点1.png', import.meta.url).href,
        title: '硬件封闭固化，科研拓展受限',
        desc: '市面量产工业无人机飞控、供电、通信链路高度封闭，无法搭载光谱仪、气体传感器、低空采样设备等自研科研载荷，数据无法同步采集，难以匹配专项科学试验的数据时序匹配需求。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/科研定制服务/痛点2.png', import.meta.url).href,
        title: '科研项目缺少整机级配套开发能力',
        desc: '多数设备厂商仅提供单一载荷，无无人机整机结构、动力、飞控一体化改造能力；高校课题、国家级科研项目样机迭代、野外试验、数据对接落地周期漫长。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/科研定制服务/痛点3.png', import.meta.url).href,
        title: '数据链路断层，无一体化配套',
        desc: '普通无人机仅能输出航拍影像，无法同步传感原始数据、时序坐标，缺少科研专用地面站存储、导出、对接第三方分析平台的配套系统。',
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
  opacity: 0;
  transform: translateY(3vw);
}

.pain-point-card.animate-in {
  animation: slideUpCard 0.8s ease-out forwards;
}

@keyframes slideUpCard {
  from {
    opacity: 0;
    transform: translateY(3vw);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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
