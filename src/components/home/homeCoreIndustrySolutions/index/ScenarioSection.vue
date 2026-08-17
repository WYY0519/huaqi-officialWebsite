<template>
  <section class="scenario-section" v-if="module !== 'mount-adapt'">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>
      <div class="scenario-grid">
        <div class="scenario-card" v-for="(item, index) in scenarios" :key="index" ref="cardRefs"
          :style="{ animationDelay: index * 0.25 + 's' }">
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
  if (props.module === 'forest-fire') return '全场景森林消防作业方案'
  if (props.module === 'mount-adapt') return '多元化挂载适配作业方案'
  if (props.module === 'high-cleaning') return '多元应用场景覆盖'
  if (props.module === 'fixed-wing') return '多元应用场景覆盖'
  if (props.module === 'tethered') return '多元应用场景覆盖'
  if (props.module === 'research') return '典型科研定制应用场景'
  return '全场景消防救援核心能力'
})

const sectionDesc = computed(() => {
  if (props.module === 'forest-fire') return '针对林区不同阶段防火需求，提供定制化无人机作业方案'
  if (props.module === 'mount-adapt') return '针对不同救援任务需求，提供定制化挂载适配无人机作业方案'
  if (props.module === 'high-cleaning') return '覆盖新能源运维与城市高空清洁两大领域'
  if (props.module === 'fixed-wing') return '面向电力、林业、国土、水利等多行业，提供标准化巡检解决方案'
  if (props.module === 'tethered') return '面向电力、林业、国土、水利等多行业，提供标准化巡检解决方案'
  if (props.module === 'research') return '覆盖消防，巡检，清洗，地质、气象、生态环境主流科研方向，提供整套空中观测解决方案'
  return '面向不同火灾场景下的多样化救援需求，覆盖城市消防全域应急救援场景'
})

const scenarios = computed(() => {
  if (props.module === 'forest-fire') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/场景1 .jpg', import.meta.url).href,
        title: '全域林区巡护',
        desc: '长续航覆盖广阔林区，突破山地地形限制，常态化排查火情隐患',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/场景2.jpg', import.meta.url).href,
        title: '早期火情预警',
        desc: '红外热成像穿透植被烟雾，全天候值守，精准识别隐蔽暗火',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/场景3.jpg', import.meta.url).href,
        title: '精准灭火投送',
        desc: '多类灭火载荷适配，远距离精准投送，无人化抢抓处置黄金期',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/场景4.jpg', import.meta.url).href,
        title: '灾后余火排查',
        desc: '全域扫描过火区域，精准定位残留暗火，有效防范复燃风险',
      }
    ]
  }
  if (props.module === 'mount-adapt') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/城市消防/场景1.jpg', import.meta.url).href,
        title: '城市超高层灭火适配',
        desc: '突破150米高度限制，精准投送灭火剂',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/城市消防/场景2.jpg', import.meta.url).href,
        title: '危化品远距离处置适配',
        desc: '远程操控灭火，规避危化品爆炸风险',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/城市消防/场景3.jpg', import.meta.url).href,
        title: '森林消防灭火作业适配',
        desc: '多类灭火载荷适配，远距离精准投送',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/城市消防/场景4.jpg', import.meta.url).href,
        title: '应急生命搜救适配',
        desc: '热成像穿透浓烟锁定被困人员，开辟紧急救援通道',
      }
    ]
  }
  if (props.module === 'high-cleaning') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/清洗系列/场景1.jpg', import.meta.url).href,
        title: '山地/戈壁集中式光伏电站',
        desc: '全自动航线巡航清洗，大幅降低运维成本，提升发电效率',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/清洗系列/场景2.jpg', import.meta.url).href,
        title: '工商业屋顶分布式光伏',
        desc: '无需登高作业，安全高效完成屋顶光伏面板定期清洁运维',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/清洗系列/场景3.jpg', import.meta.url).href,
        title: '超高层玻璃幕墙清洁',
        desc: '替代蜘蛛人高空作业，百米高空高效清洁，降低安全风险',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/清洗系列/场景4.jpg', import.meta.url).href,
        title: '高墩桥梁墩柱与梁底清洗',
        desc: '无需搭设吊篮脚手架，不占道封路，高效清除积灰油污与锈蚀附着物',
      },
    ]
  }
  if (props.module === 'fixed-wing') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/固定翼巡检/场景1.jpg', import.meta.url).href,
        title: '电力廊道全线巡检',
        desc: '长航时覆盖跨区输电线路，快速识别通道隐患与外力破坏风险',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/固定翼巡检/场景2.jpg', import.meta.url).href,
        title: '林业资源全域巡护',
        desc: '大范围覆盖林区全域，同步完成火情预警与资源动态监测',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/固定翼巡检/场景3.jpg', import.meta.url).href,
        title: '国土测绘与地类监测',
        desc: '全自动航线航测作业，高效产出正射影像与土地利用数据成果',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/固定翼巡检/场景4.jpg', import.meta.url).href,
        title: '水利流域生态巡检',
        desc: '长距离巡航河道库区，常态化开展汛情排查与水生态动态监测',
      },
    ]
  }
  if (props.module === 'tethered') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/系留系列/场景1.jpg', import.meta.url).href,
        title: '影视外景与夜间照明',
        desc: '代传统高空升降车，悬停大功率矩阵补光灯，提供无死角柔和光场',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/系留系列/场景2.jpg', import.meta.url).href,
        title: '应急抢险夜间照明',
        desc: '灾害现场快速升空部署，长时间高空照明与实时画面回传，提升夜间搜救效率',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/系留系列/场景3.jpg', import.meta.url).href,
        title: '夜间工程施工与采矿',
        desc: '替代琐碎地面灯塔，快速部署无死角高空补光，大幅提升夜间施工安全性与效率',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/系留系列/场景4.jpg', import.meta.url).href,
        title: '森林防火与灾害监视',
        desc: '长时滞空，结合双光热成像精准识别隐蔽火点，实况无延时回传指挥中心',
      },
    ]
  }
  if (props.module === 'research') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/科研定制服务/场景1 .jpg', import.meta.url).href,
        title: '载荷集成研发',
        desc: '传感载荷机载适配改造，实现科研设备数据同步采集。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/科研定制服务/场景2.jpg', import.meta.url).href,
        title: '特种飞行平台研发',
        desc: '定制特种试验无人机，支持动力、飞控个性化改造。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/科研定制服务/场景3.jpg', import.meta.url).href,
        title: '地质与大气环境科研',
        desc: '搭载激光雷达与大气传感器，开展地形气象观测科研。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/科研定制服务/场景4.jpg', import.meta.url).href,
        title: '模拟导弹雷达对抗测试',
        desc: '搭载雷达模拟源与红外靶标，支撑部队战术训练与装备效能测试。',
      },
    ]
  }
  return [
    {
      image: new URL('../../../../assets/home/行业解决方案/城市消防/场景1.jpg', import.meta.url).href,
      title: '超高层建筑灭火',
      desc: '突破150米高度限制，精准投送灭火剂',
    },
    {
      image: new URL('../../../../assets/home/行业解决方案/城市消防/场景2.jpg', import.meta.url).href,
      title: '危化品远距离处置',
      desc: '远程操控灭火，规避危化品爆炸风险',
    },
    {
      image: new URL('../../../../assets/home/行业解决方案/城市消防/场景3.jpg', import.meta.url).href,
      title: '旧城中村/老旧小区',
      desc: '"空中消防通道"，道路狭窄区域快速抵达',
    },
    {
      image: new URL('../../../../assets/home/行业解决方案/城市消防/场景4.jpg', import.meta.url).href,
      title: '应急生命搜救',
      desc: '热成像穿透浓烟锁定被困人员，开辟紧急救援通道',
    }
  ]
})
</script>

<style scoped>
.scenario-section {
  padding: 4.89vw 0 8.25vw;
  background: #fff;
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
  margin-bottom: 5.25vw;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.2vw;
}

.scenario-card {
  position: relative;
  border-radius: 0.625vw;
  overflow: hidden;
  width: 41.09375vw;
  height: 16.302083vw;
  cursor: pointer;
  opacity: 0;
  transform: translateY(3vw);
}

.scenario-card.animate-in {
  animation: slideUpScenario 0.8s ease-out forwards;
}

@keyframes slideUpScenario {
  from {
    opacity: 0;
    transform: translateY(3vw);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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

.scenario-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.875vw 0 1.8vw 2.083333vw;
  z-index: 2;
}

.scenario-title {
  font-size: 1.385417vw;
  font-weight: bold;
  color: #fff;
}

.scenario-desc {
  font-size: 1.073646vw;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .scenario-section {
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
    margin-bottom: 4vw;
  }

  .scenario-grid {
    grid-template-columns: 1fr;
    gap: 2vw;
  }

  .scenario-card {
    width: 100%;
    height: 60vw;
  }

  .scenario-info {
    padding: 2vw;
  }

  .scenario-title {
    font-size: 3.5vw;
  }

  .scenario-desc {
    font-size: 2.8vw;
    line-height: 1.6;
  }
}
</style>
