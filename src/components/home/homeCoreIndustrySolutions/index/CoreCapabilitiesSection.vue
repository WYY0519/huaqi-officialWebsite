<template>
  <section class="core-capabilities-section">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>
      <div class="capabilities-list">
        <div class="capability-row" v-for="(item, index) in capabilities" :key="index"
          :class="{ reverse: index % 2 !== 0 }" ref="rowRefs">
          <div class="capability-image">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="capability-text">
            <h3 class="capability-title">{{ item.title }}</h3>
            <p class="capability-desc" v-html="item.desc.replace(/\n/g, '<br>')"></p>
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

const rowRefs = ref<HTMLElement[]>([])
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

  rowRefs.value.forEach((el) => {
    if (el) observer?.observe(el)
  })
})

onUnmounted(() => {
  observer?.disconnect()
})

const sectionTitle = computed(() => {
  if (props.module === 'forest-fire') return '全场景森林消防救援核心能力'
  if (props.module === 'mount-adapt') return '挂载系统三大核心适配能力'
  if (props.module === 'high-cleaning') return '全场景清洁核心能力'
  return '全场景消防救援核心能力'
})

const sectionDesc = computed(() => {
  if (props.module === 'forest-fire') return '集巡查、识别、处置、保障于一体，构建空地一体化森林防火灭火体系'
  if (props.module === 'mount-adapt') return '统一标准接口，打通多品牌机型，模块化快拆实现全场景作业'
  if (props.module === 'high-cleaning') return '替代传统高空人工作业，实现安全、高效、无死角建筑立面清洁'
  return '集灭火、侦察、搜救、处置于一体，构建空地协同的现代化消防作战能力'
})

const capabilities = computed(() => {
  if (props.module === 'forest-fire') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/核心能力1.jpg', import.meta.url).href,
        title: '大范围巡航监测',
        desc: '采用长续航大航程机身设计，单次作业可覆盖百平方公里林区；支持预设航线全自动巡航，彻底突破山地、密林、偏远区域的地形限制，替代人工完成常态化火情隐患排查，巡护效率与覆盖范围较传统人工步巡、瞭望塔模式提升数倍。可灵活搭载可见光、多光谱等多类传感载荷，同步开展林区资源普查、病虫害监测、生态巡检等多元任务，实现一机多用，大幅降低林区综合运维成本。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/森林消防/核心能力2-1.jpg', import.meta.url).href,
        title: '智能火点识别',
        desc: '搭载高分辨率红外热成像感知系统，可穿透浓烟、植被遮挡，精准识别明火、隐蔽暗火及高温异常点位；自动标定火点地理坐标，实时回传现场画面与温度数据，将火情发现节点大幅前置，实现早发现、早预警、早处置。配套AI智能识别算法，可有效过滤阳光、水汽等环境干扰，显著降低误报率，支持7×24小时全天候不间断值守，完美填补人工夜间、恶劣天气下的监测盲区。',
      },
      {
        image: new URL('../../../../assets/home/森林消防/untitled.694.jpg', import.meta.url).href,
        title: '精准灭火投送',
        desc: '支持挂载干粉灭火弹、阻燃液播撒系统等多种灭火载荷，可远距离精准投送至火点核心区域；针对初期火情可实现快速压制，也可通过大面积播撒阻燃剂构建防火隔离带，精准阻断火势蔓延路径。全程采用无人化作业模式，无需救援人员深入高温、浓烟、地形复杂的高危火场，从根源降低一线人员伤亡风险，同时大幅缩短火情处置响应时间，真正实现"打早、打小、打了"。',
      }
    ]
  }
  if (props.module === 'mount-adapt') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/核心能力1 .jpg', import.meta.url).href,
        title: '全飞行平台无缝兼容',
        desc: '原生适配大疆FC200/FC100/T200/T100/M400全系列工业无人机，同时兼容自研多旋翼、系留飞行平台；统一供电与通讯协议，无需深度改装，出厂即插即用，大幅降低跨机型采购与改造投入。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/核心能力.jpg', import.meta.url).href,
        title: '快装快拆模块化设计',
        desc: '统一标准快拆基座，全系列挂载通用安装接口；单人完成挂载切换；应急场景可快速切换灭火、搜救、投送作业模式，大幅缩短现场部署时间。',
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/核心能力3.jpg', import.meta.url).href,
        title: '多元化载荷，覆盖全行业作业',
        desc: '覆盖消防灭火、破窗攻坚、生命搜救、物资运输、应急指挥全场景；包含水系灭火、干粉灭火、破窗抛投、照明喊话、索降投送全品类载荷，一套基座自由搭配组合，真正实现一机多用。',
      }
    ]
  }
  if (props.module === 'high-cleaning') {
    return [
      {
        image: new URL('../../../../assets/home/清洗系列/无人机替换4.jpg', import.meta.url).href,
        title: '高压精准冲洗 适配多类立面',
        desc: '搭载高压直喷系统，水压无级可调，可针对玻璃幕墙、石材立面、涂料墙面、铝单板等不同材质匹配出水模式；多自由度电动喷杆，灵活适配立面角度，无死角清除污渍、浮尘与附着物。',
      },
      {
        image: new URL('../../../../assets/home/清洗系列/无人机替换.jpg', import.meta.url).href,
        title: '百米高空作业 全程安全可控',
        desc: '支持百米级超高空作业，人员全程地面操控，无需登高作业，从根源规避高空坠落风险；全向避障系统实时感知建筑结构，飞行姿态稳定，复杂楼体环境下作业安全可控。',
      },
      {
        image: new URL('../../../../assets/home/清洗系列/无人机替换2.jpg', import.meta.url).href,
        title: '全地形适配，突破空间限制',
        desc: '不受山地、水面、道路限制，覆盖山地光伏、渔光互补、超高层幕墙、异形建筑等人员难以抵达的场景；百米级作业高度，轻松应对城市超高层、大型工业设施的清洁需求。',
      }
    ]
  }
  return [
    {
      image: new URL('../../../../assets/home/城市消防/a.jpg', import.meta.url).href,
      title: '超高层精准灭火',
      desc: '突破传统消防高度限制，作业覆盖高度可达150米，覆盖绝大多数城市超高层建筑，不受地面地形与建筑高度约束，直达起火楼层实施精准作业。\n搭载高精度灭火剂投放系统，可对准起火窗口、阳台、外立面着火点位精准投送灭火药剂，直击火源核心，快速压制高层火情，遏制火势蔓延。\n同步搭载可见光与红外双光吊舱，实时回传火情画面与温度分布数据，辅助地面指挥精准判断起火点与火势走向，制定最优灭火策略。\n支持多机协同作业，可同时对多个起火楼层实施压制，大幅提升高空灭火效率。',
    },
    {
      image: new URL('../../../../assets/home/城市消防/c.jpg', import.meta.url).href,
      title: '危化场景远程处置',
      desc: '针对危化事故高危环境，采用全程无人化作业模式，无需救援人员深入险境，从根源上降低人员伤亡风险，实现高危场景安全处置。\n远距离快速抵达事故核心区，可在爆炸、有毒、高温环境下稳定作业，完成泄漏点侦察、环境监测、火情压制等前置处置。\n集成有害气体检测、红外测温模块，实时侦测现场有毒气体浓度、储罐温度、泄漏点位置，精准评估险情等级，为后续处置提供数据支撑。',
    },
    {
      image: new URL('../../../../assets/home/城市消防/e.jpg', import.meta.url).href,
      title: '旧小区/城中村火情快速处置',
      desc: '针对老旧小区、城中村建筑密度高、街巷狭窄、消防通道易堵塞的痛点，无人机可随队同步出动，飞越通行障碍率先抵达现场，破解消防车难以直达核心起火区的难题。\n搭载可见光与红外双光吊舱，快速锁定火源位置，排查周边易燃隐患与火势蔓延趋势，实时回传现场画面，为指挥决策提供精准依据。\n可对初期小火精准投送灭火药剂，快速压制火情遏制蔓延；同时引导地面消防车辆规划最优通行路线，打通救援"最后一公里"，整体响应时效大幅缩短，抢抓火灾初期处置黄金窗口。',
    }
  ]
})
</script>

<style scoped>
.container {
  padding: 0 6vw 0 7.65vw;
}

.core-capabilities-section {
  padding: 5vw 0 0;
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
  height: 0.1vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto 0.63333vw;
}

.section-desc {
  text-align: center;
  font-size: 1.04167vw;
  color: #adb1b5;
  margin-bottom: 5vw;
}

.capabilities-list {
  display: flex;
  flex-direction: column;
  gap: 2.8333vw;
}

.capability-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* align-items: center; */
  background: #f8f9fa;
  border-radius: 0.625vw;
  opacity: 0;
  transform: translateY(3vw);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}

.capability-row.animate-in {
  opacity: 1;
  transform: translateY(0);
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
  width: 44.583333vw;
  height: 27.8125vw;
}

.capability-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s;
}

.capability-image:hover img {
  transform: scale(1.05);
}

.capability-text {
  padding: 4.75vw 3vw 3.020833vw 4.583333vw
}

.capability-title {
  font-size: 2.147396vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.55vw;
}

.capability-desc {
  font-size: 1.039063vw;
  color: #9b9e9f;
  font-weight: 500;
  line-height: 1.9vw;
}

@media (max-width: 768px) {
  .core-capabilities-section {
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

  .capability-row,
  .capability-row.reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: 0;
  }

  .capability-image {
    width: 100%;
    height: 56.25vw;
  }

  .capability-image img {
    height: 100%;
  }

  .capability-text {
    padding: 4vw 3vw;
  }

  .capability-title {
    font-size: 4.5vw;
  }

  .capability-desc {
    font-size: 2.8vw;
    line-height: 1.8;
  }
}
</style>
