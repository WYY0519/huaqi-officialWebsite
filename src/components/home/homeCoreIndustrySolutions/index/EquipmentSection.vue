<template>
  <section class="equipment-section" :class="{ 'research-mode': module === 'research' }"
    v-if="module !== 'mount-adapt' && module !== 'high-cleaning' && module !== 'fixed-wing' && module !== 'tethered'">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>
      <div class="equipment-grid">
        <div class="equipment-card" v-for="(item, index) in equipment" :key="index" ref="cardRefs"
          :style="{ animationDelay: index * 0.25 + 's' }">
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
    if (el) {
      observer?.observe(el)
      el.addEventListener('animationend', () => {
        el.classList.remove('animate-in')
        el.classList.add('animate-done')
      }, { once: true })
    }
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const sectionTitle = computed(() => {
  if (props.module === 'forest-fire') return '多元化挂载适配多元救援任务'
  if (props.module === 'mount-adapt') return '多元化挂载适配核心装备'
  if (props.module === 'research') return '四大定制服务方向'
  return '多元化挂载适配多元救援任务'
})

const sectionDesc = computed(() => {
  if (props.module === 'forest-fire') return '模块化快拆设计，根据任务场景快速切换挂载，实现一机多用'
  if (props.module === 'mount-adapt') return '标准化接口设计，支持多类挂载设备快速适配，实现一机多用'
  if (props.module === 'research') return '模块化定制服务，按需选择开发内容，降低科研项目研发成本'
  return '模块化快拆接口，轻松切换不同任务载荷，一机多用'
})

const equipment = computed(() => {
  if (props.module === 'forest-fire') {
    return [
      {
        icon: new URL('../../../../assets/home/行业解决方案/森林消防/挂载1.png', import.meta.url).href,
        title: '消防水桶',
        desc: '机载消防灭火水桶覆盖多档容积规格，桶身采用航空铝合金并做防火处理，阀门开度可线性调节，支持多种控制模式；适配多种灭火剂，机载精准喷洒高效灭火。',
      },
      {
        icon: new URL('../../../../assets/home/行业解决方案/森林消防/挂载2.png', import.meta.url).href,
        title: '灭火弹',
        desc: '机载消防灭火弹涵盖干粉、水基多规格选型，采用凌空定高爆破抛洒技术，响应快、覆盖广，可高效压制火情、铺设防火隔离带；配备多重安全防护，适配复杂林区环境，依托无人机实现无人化精准作业，有效降低救援风险。',
      },
      {
        icon: new URL('../../../../assets/home/行业解决方案/城市消防/热成像.png', import.meta.url).href,
        title: '红外热成像模块',
        desc: '可见光+红外热成像双光融合，集成激光测距与三轴伺服云台；40倍光学变焦远距离侦测，可穿透浓烟识别被困人员、定位隐蔽火源；同步回传高清画面与数据，360°全覆盖作业视角。',
      }
    ]
  }
  if (props.module === 'mount-adapt') {
    return [
      {
        icon: new URL('../../../../assets/home/行业解决方案/挂载系列适配/挂载1.png', import.meta.url).href,
        title: '消防水枪挂载系统',
        desc: '适用于高层建筑消防灭火，可配高压水枪或泡沫灭火剂喷射装置，无人机载水枪可精准指向火源，配合远程遥控系统，可在复杂环境中高效灭火。',
      },
      {
        icon: new URL('../../../../assets/home/行业解决方案/挂载系列适配/挂载2.png', import.meta.url).href,
        title: '灭火弹投送模块',
        desc: '机载消防灭火弹涵盖干粉、水基多规格选型，采用凌空定高爆破抛洒技术，响应快、覆盖广，可高效压制火情、铺设防火隔离带。',
      },
      {
        icon: new URL('../../../../assets/home/行业解决方案/城市消防/热成像.png', import.meta.url).href,
        title: '红外热成像搜救模块',
        desc: '可见光+红外热成像双光融合，集成激光测距与三轴伺服云台；40倍光学变焦远距离侦测，可穿透浓烟识别被困人员、定位隐蔽火源；同步回传高清画面与数据，360°全覆盖作业视角。',
      }
    ]
  }
  if (props.module === 'research') {
    return [
      {
        icon: new URL('../../../../assets/home/行业解决方案/科研定制服务/图标一.png', import.meta.url).href,
        title: '平台定制',
        desc: '多旋翼/垂起固定翼机身结构、动力系统、起落架专项改造，适配科研载荷重、续航、起降环境需求。',
      },
      {
        icon: new URL('../../../../assets/home/行业解决方案/科研定制服务/图标二.png', import.meta.url).href,
        title: '载荷开发',
        desc: '多功能挂载、科研传感器机械搭载、供电改造、数据通信调试，实现第三方自研载荷与无人机稳定联动采集。',
      },
      {
        icon: new URL('../../../../assets/home/行业解决方案/科研定制服务/图标三.png', import.meta.url).href,
        title: '算法适配',
        desc: '定制航迹任务程序、多机协同、数据同步采集算法、开放数据接口，适配科研数据处理标准。',
      },
      {
        icon: new URL('../../../../assets/home/行业解决方案/科研定制服务/图标四.png', import.meta.url).href,
        title: '联合研发',
        desc: '与高校、科研院所课题项目深度协同，联合申报科研项目，提供样机试制、野外试验技术支撑。',
      }
    ]
  }
  return [
    {
      icon: new URL('../../../../assets/home/行业解决方案/城市消防/消防水枪.png', import.meta.url).href,
      title: '消防水枪水带系统',
      desc: '适用于高层建筑消防灭火，可配高压水枪或泡沫灭火剂喷射装置，无人机载水枪可精准指向火源，配合远程遥控系统，可在复杂环境中高效灭火。',
    },
    {
      icon: new URL('../../../../assets/home/行业解决方案/城市消防/破窗器.png', import.meta.url).href,
      title: '机载破窗器',
      desc: '高强度破窗头，可快速破拆玻璃幕墙或障碍物，配合红外热成像搜救被困人员，助力内攻作业，提升救援效率。',
    },
    {
      icon: new URL('../../../../assets/home/行业解决方案/城市消防/热成像.png', import.meta.url).href,
      title: '红外热成像搜救模块',
      desc: '可搭载红外热成像仪，兼具强光照明与热成像双模式，穿透浓烟定位被困人员，实时回传画面，实现360°搜救无死角。',
    }
  ]
})
</script>

<style scoped>
.equipment-section {
  padding: 4.16667vw 0 0;
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
  margin-bottom: 4.08vw;
}

.equipment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25vw;
}



.equipment-card {
  background: #f6f8f9;
  border-radius: 0.625vw;
  /* padding: 2.08333vw 1.5625vw; */
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 26.875vw;
  height: 37.291667vw;
  opacity: 0;
  transform: translateY(3vw);
}

.equipment-card.animate-in {
  animation: slideUpEquip 0.8s ease-out forwards;
}

.equipment-card.animate-done {
  opacity: 1;
  transform: translateY(0);
}

@keyframes slideUpEquip {
  from {
    opacity: 0;
    transform: translateY(3vw);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.equipment-card:hover {
  transform: translateY(-0.65vw);
}

.equipment-icon {
  width: 20.416667vw;
  height: 15vw;
  margin: 3.9vw 3.229167vw 0.5vw;
}

.equipment-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.equipment-title {
  font-size: 2.078125vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.4vw;
}

.equipment-desc {
  font-size: 1.177604vw;
  color: #9b9e9f;
  line-height: 1.7;
  padding: 0 2.84vw;
  font-weight: 500;
}

@media (max-width: 768px) {
  .equipment-section {
    padding: 6vw 0 0;
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

  .equipment-grid {
    grid-template-columns: 1fr;
    gap: 0.83333vw;
  }

  .equipment-card {
    width: 100%;
    height: auto;
    padding: 1.5625vw 1.04167vw;
  }

  .equipment-icon {
    width: 100%;
    height: 40vw;
    margin: 2vw 0 0.5vw;
  }

  .equipment-title {
    font-size: 4vw;
  }

  .equipment-desc {
    font-size: 2.8vw;
    padding: 0 2vw;
    line-height: 1.6;
  }
}

/* 科研定制服务模块独立样式 */
.research-mode .equipment-grid {
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25vw;
}

.research-mode .equipment-card {
  background: #f6f8f9;
  border-radius: 0.625vw;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  width: 100%;
  height: 37.4vw;
  /* padding: 2.08333vw 1.5625vw; */
  opacity: 0;
  transform: translateY(3vw);
}

.research-mode .equipment-card.animate-in {
  animation: slideUpEquip 0.8s ease-out forwards;
}

.research-mode .equipment-card.animate-done {
  opacity: 1;
  transform: translateY(0);
}

.research-mode .equipment-card:hover {
  transform: translateY(-0.65vw);
}

.research-mode .equipment-icon {
  width: auto;
  height: auto;
  margin: 5.8vw auto 1.7vw;
  display: flex;
  justify-content: center;
}

.research-mode .equipment-icon img {
  width: auto;
  height: auto;
  object-fit: contain;
}

.research-mode .equipment-title {
  font-size: 2.078125vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.4vw;
}

.research-mode .equipment-desc {
  font-size: 1.177604vw;
  color: #9b9e9f;
  line-height: 1.7;
  padding: 0 2.15vw;
  font-weight: 500;
}
</style>
