<template>
  <section class="scenario-section" v-if="module !== 'mount-adapt'">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>
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
import { computed } from 'vue'

const props = defineProps<{
  module?: string
}>()

const sectionTitle = computed(() => {
  if (props.module === 'forest-fire') return '全场景森林消防作业方案'
  if (props.module === 'mount-adapt') return '多元化挂载适配作业方案'
  return '全场景消防救援核心能力'
})

const sectionDesc = computed(() => {
  if (props.module === 'forest-fire') return '针对林区不同阶段防火需求，提供定制化无人机作业方案'
  if (props.module === 'mount-adapt') return '针对不同救援任务需求，提供定制化挂载适配无人机作业方案'
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
  padding: 4.89vw 0;
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
    padding: 6vw 4vw ;
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
