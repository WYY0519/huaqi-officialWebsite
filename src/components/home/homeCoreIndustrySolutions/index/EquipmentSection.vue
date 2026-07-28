<template>
  <section class="equipment-section" v-if="module !== 'mount-adapt'">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>
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
import { computed } from 'vue'

const props = defineProps<{
  module?: string
}>()

const sectionTitle = computed(() => {
  if (props.module === 'forest-fire') return '多元化挂载适配多元救援任务'
  if (props.module === 'mount-adapt') return '多元化挂载适配核心装备'
  return '多元化挂载适配多元救援任务'
})

const sectionDesc = computed(() => {
  if (props.module === 'forest-fire') return '模块化快拆设计，根据任务场景快速切换挂载，实现一机多用'
  if (props.module === 'mount-adapt') return '标准化接口设计，支持多类挂载设备快速适配，实现一机多用'
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
}

.equipment-card:hover {
  transform: translateY(-0.3125vw);
  box-shadow: 0 0.625vw 1.875vw rgba(0, 100, 200, 0.1);
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
</style>
