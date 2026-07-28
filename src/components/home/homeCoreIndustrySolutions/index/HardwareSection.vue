<template>
  <section class="hardware-section" v-if="module === 'mount-adapt'">
    <div class="container">
      <h2 class="section-title-dark">{{ sectionTitle }}</h2>
      <div class="section-divider"></div>
      <p class="section-desc">{{ sectionDesc }}</p>

      <!-- 灭火作业挂载 -->
      <div class="hardware-category" v-if="fireFightingEquipment.length > 0">
        <h3 class="category-title">灭火作业挂载</h3>
        <div class="hardware-grid">
          <div class="hardware-card fire-card" v-for="(item, index) in fireFightingEquipment" :key="'fire-' + index">
            <div class="hardware-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="hardware-content">
              <h4 class="hardware-title">{{ item.title }}</h4>
              <div class="hardware-specs">
                <div class="spec-row" v-for="(spec, specIndex) in item.specs" :key="specIndex">
                  <span class="spec-label">{{ spec.label }}</span>
                  <span class="spec-value">{{ spec.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 灭火弹与抛投挂载 -->
      <div class="hardware-category" v-if="projectileEquipment.length > 0">
        <h3 class="category-title">灭火弹与抛投挂载</h3>
        <div class="hardware-grid grid-3">
          <div class="hardware-card projectile-card" v-for="(item, index) in projectileEquipment"
            :key="'projectile-' + index">
            <div class="hardware-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="hardware-content">
              <h4 class="hardware-title">{{ item.title }}</h4>
              <div class="hardware-specs">
                <div class="spec-row" v-for="(spec, specIndex) in item.specs" :key="specIndex">
                  <span class="spec-label">{{ spec.label }}</span>
                  <span class="spec-value">{{ spec.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 辅助作业挂载 -->
      <div class="hardware-category" v-if="auxiliaryEquipment.length > 0">
        <h3 class="category-title">辅助作业挂载（支持大疆）</h3>
        <div class="hardware-grid">
          <div class="hardware-card auxiliary-card" v-for="(item, index) in auxiliaryEquipment"
            :key="'auxiliary-' + index">
            <div class="hardware-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="hardware-content">
              <h4 class="hardware-title">{{ item.title }}</h4>
              <div class="hardware-specs">
                <div class="spec-row" v-for="(spec, specIndex) in item.specs" :key="specIndex">
                  <span class="spec-label">{{ spec.label }}</span>
                  <span class="spec-value">{{ spec.value }}</span>
                </div>
              </div>
            </div>
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
  if (props.module === 'mount-adapt') return '全系列标准化挂载硬件'
  return ''
})

const sectionDesc = computed(() => {
  if (props.module === 'mount-adapt') return '模块化快拆设计，统一接口适配全平台，按需自由组合，满足多元作业需求'
  return ''
})

const fireFightingEquipment = computed(() => {
  if (props.module === 'mount-adapt') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火作业/消防水枪.png', import.meta.url).href,
        title: '消防水枪(支持大疆)',
        specs: [
          { label: '材质', value: '碳纤维' },
          { label: '喷射距离', value: '≥20m' },
          { label: '水带直径', value: '25mm/40mm' },
          { label: '水带长度', value: '50-100m (可定制)' },
          { label: '特色功能', value: '喷杆可伸缩' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火作业/消防水带.png', import.meta.url).href,
        title: '消防水带(支持大疆)',
        specs: [
          { label: '安装方式', value: '快拆结构' },
          { label: '水带直径', value: '25mm/40mm' },
          { label: '喷射距离', value: '≥20m' },
          { label: '使用高度', value: '≥80m' },
          { label: '水管长度', value: '100m (可定制)' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火作业/消防水桶.png', import.meta.url).href,
        title: '消防灭火水桶(支持大疆)',
        specs: [
          { label: '最大容积', value: '40-180L(可选)' },
          { label: '桶身材质', value: '航空铝合金' },
          { label: '最大水流量', value: '45L/S' },
          { label: '响应时间', value: '≤0.6S' },
          { label: '控制方式', value: '多协议支持' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火作业/干粉灭火罐.png', import.meta.url).href,
        title: '干粉灭火罐',
        specs: [
          { label: '罐体容量', value: '10L/20L/30L' },
          { label: '灭火材料', value: '超细干粉' },
          { label: '喷射距离', value: '≥10m' },
          { label: '罐体压力', value: '0.8-1.2mpa' },
          { label: '供电电压', value: '24V' }
        ]
      }
    ]
  }
  return []
})

const projectileEquipment = computed(() => {
  if (props.module === 'mount-adapt') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火弹与抛投挂载/破窗器.png', import.meta.url).href,
        title: '破窗灭火弹发射器',
        specs: [
          { label: '主体材质', value: '铝合金+玻璃钢' },
          { label: '破玻能力', value: '18米穿透16mm玻璃' },
          { label: '最大射程', value: '≤50米' },
          { label: '发射数量', value: '2发/4发/6发' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火弹与抛投挂载/破窗灭火弹.png', import.meta.url).href,
        title: '破窗灭火弹',
        specs: [
          { label: '全弹长', value: '≤995mm' },
          { label: '全弹重', value: '≤3010g' },
          { label: '灭火剂', value: 'ABC超细干粉' },
          { label: '灭火能力', value: '9.2m³/发' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火弹与抛投挂载/干粉水基灭火弹.png', import.meta.url).href,
        title: '干粉水基灭火弹',
        specs: [
          { label: '规格', value: '15L/25L/50L' },
          { label: '控制方式', value: '定高启动' },
          { label: '覆盖面积', value: '30-100㎡' },
          { label: '使用年限', value: '2年' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火弹与抛投挂载/挂载2.png', import.meta.url).href,
        title: '森林灭火弹',
        specs: [
          { label: '规格', value: '15L/25L/50L' },
          { label: '作业方式', value: '凌空定高爆破抛洒' },
          { label: '覆盖面积', value: '30-200㎡' },
          { label: '使用年限', value: '3年' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火弹与抛投挂载/干粉灭火球.png', import.meta.url).href,
        title: '干粉灭火球',
        specs: [
          { label: '球体直径', value: '215mm' },
          { label: '球体净重', value: '4kg' },
          { label: '覆盖面积', value: '9m³' },
          { label: '投放方式', value: '序列式电控' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/灭火弹与抛投挂载/6路抛投器.png', import.meta.url).href,
        title: '6路抛投器',
        specs: [
          { label: '材质', value: '铝合金+碳纤维' },
          { label: '单钩载重', value: '30kg' },
          { label: '挂钩数量', value: '6个' },
          { label: '控制信号', value: 'PWM、SBUS' }
        ]
      }
    ]
  }
  return []
})

const auxiliaryEquipment = computed(() => {
  if (props.module === 'mount-adapt') {
    return [
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/辅助作业/索降器.png', import.meta.url).href,
        title: '索降器',
        specs: [
          { label: '最大载重', value: '60kg' },
          { label: '放线长度', value: '30m' },
          { label: '工作电压', value: '48-80V' },
          { label: '特色功能', value: '自动脱钩 触顶保护' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/辅助作业/喊话器.png', import.meta.url).href,
        title: '喊话器',
        specs: [
          { label: '功率', value: '45W' },
          { label: '广播距离', value: '650m' },
          { label: '俯仰角度', value: '0°-90°' },
          { label: '喊话方式', value: '实时/音频播放' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/辅助作业/探照灯.png', import.meta.url).href,
        title: '探照灯',
        specs: [
          { label: '总功率', value: '136W' },
          { label: '光通量', value: '16000LM' },
          { label: '功能模式', value: '长亮/爆闪' },
          { label: '快拆支持', value: '旋转快拆 热插拔' }
        ]
      },
      {
        image: new URL('../../../../assets/home/行业解决方案/挂载系列适配/辅助作业/灭火弹抛投器.png', import.meta.url).href,
        title: '灭火弹抛投器',
        specs: [
          { label: '单钩载重', value: '60kg' },
          { label: '挂钩数量', value: '4个' },
          { label: '快拆支持', value: '三秒快装' },
          { label: '投放方式', value: '序列式电控' }
        ]
      }
    ]
  }
  return []
})
</script>

<style scoped>
.hardware-section {
  padding: 5vw 0 3vw;
  background: #fff;
}

.container {
  padding: 0 6vw 0 7.65vw;
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
  margin-bottom: 2.8vw;
}

.hardware-category {
  margin-bottom: 3.8vw;
}

.category-title {
  font-size: 2.078125vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 1.3vw;
  padding-left: 1vw;
  border-left: 0.45vw solid #27dbff;
}

.hardware-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.9271vw;
}

.hardware-grid.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.hardware-card {
  height: 33.59375vw;
  background: #f8f9fa;
  border-radius: 0.625vw;
  transition: transform 0.3s, box-shadow 0.3s;
}

.hardware-card:hover {
  transform: translateY(-0.3125vw);
  box-shadow: 0 0.625vw 1.875vw rgba(0, 100, 200, 0.1);
}

.projectile-card .hardware-image {
  margin: 2.65vw 0 2.9vw;
  height: 11.1vw;
}

.auxiliary-card .hardware-image {
  margin: 1.8vw 0 2.5vw;
  height: 12.2vw;
}

.fire-card .hardware-image {
  margin: 2.65vw 0 2.9vw;
  height: 11.1vw;
}

.hardware-image {
  width: 100%;
  height: 10vw;
  margin: 1.3vw 0 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hardware-image img {
  max-width: 80%;
  max-height: 100%;
  object-fit: contain;
}

.hardware-content {
  text-align: left;

}

.hardware-title {
  font-size: 1.731771vw;
  font-weight: bold;
  color: #1a1a2e;
  margin-bottom: 1.18vw;
  text-align: center;
}

.hardware-specs {
  font-size: 1.177604vw;
  color: #666;
  padding: 0px 1.5vw;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  padding: 0.42vw 0;
  border-bottom: 1px dashed #9b9e9f;
}

.spec-row:last-child {
  border-bottom: none;
}

.spec-label {
  color: #9b9e9f;
  font-weight: 500;
  flex: 1;
}

.spec-value {
  color: #000;
  /* font-weight: 500; */
  text-align: right;
}

@media (max-width: 768px) {
  .hardware-section {
    padding: 6vw 4vw 4vw;
  }

  .container {
    padding: 0;
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

  .hardware-category {
    margin-bottom: 6vw;
  }

  .category-title {
    font-size: 4.5vw;
    padding-left: 2vw;
    border-left-width: 1vw;
    margin-bottom: 3vw;
  }

  .hardware-grid,
  .hardware-grid.grid-3 {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 2.5vw;
  }

  .hardware-card {
    height: auto;
    border-radius: 2vw;
  }

  .projectile-card .hardware-image,
  .fire-card .hardware-image,
  .auxiliary-card .hardware-image,
  .hardware-image {
    height: 24vw;
    margin: 3vw 0 2vw;
  }

  .hardware-title {
    font-size: 3.2vw;
    margin-bottom: 1.5vw;
    padding: 0 2vw;
  }

  .hardware-specs {
    font-size: 2.4vw;
    padding: 0 2.5vw 2.5vw;
  }

  .spec-row {
    padding: 1.2vw 0;
    gap: 1vw;
  }

  .spec-label {
    font-size: 2.3vw;
    flex-shrink: 0;
  }

  .spec-value {
    font-size: 2.3vw;
    text-align: right;
  }
}
</style>