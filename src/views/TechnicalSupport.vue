<template>
  <div class="technical-support">
    <!-- 静态Hero大图 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img :src="heroBackground" :alt="'技术支持'" class="hero-img" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="home-hero-title">技术支持</p>
      </div>
    </section>

    <!-- 三大技术支持保障 -->
    <section class="section guarantee-section">
      <div class="container">
        <h2 class="section-title-dark">三大技术支持保障</h2>
        <div class="section-divider"></div>
        <p class="section-desc">从技术团队、维修方案到实操培训，打造标准化与高效化的服务闭环</p>

        <div class="guarantee-cards">
          <div class="guarantee-card" v-for="(item, index) in guaranteeItems" :key="index">
            <div class="guarantee-icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <p class="guarantee-title">{{ item.title }}</p>
            <p class="guarantee-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 现场实操培训指导核心 -->
    <section class="section process-section">
      <div class="container">
        <h2 class="section-title-dark">现场实操培训指导核心</h2>
        <div class="section-divider"></div>
        <p class="section-desc">一对一现场指导，确保操作人员熟练掌握全套运维能力</p>

        <div class="process-flow">
          <template v-for="(step, index) in processSteps" :key="index">
            <div class="process-step-card">
              <p class="step-number">{{ step.number }}</p>
              <p class="step-title">{{ step.title }}</p>
              <p class="step-desc">{{ step.description }}</p>
            </div>
            <div class="step-arrow" v-if="index < processSteps.length - 1">
              <img :src="arrowIcon" alt="" />
            </div>
          </template>
        </div>
      </div>
    </section>

    <!-- 完整交付全套设备配套资料 -->
    <section class="section materials-section">
      <div class="container">
        <h2 class="section-title-dark">完整交付全套设备配套资料</h2>
        <div class="section-divider"></div>
        <p class="section-desc">助力客户全方位掌握设备运维知识，实现专业化资产管理</p>

        <div class="materials-cards">
          <div class="materials-card" v-for="(item, index) in materialItems" :key="index">
            <div class="materials-icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <div class="materials-text">
              <p class="materials-title">{{ item.title }}</p>
              <p class="materials-desc">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script setup lang="ts">
const img = (name: string) => new URL(`../assets/home/行业解决方案/技术支持/${name}`, import.meta.url).href

// 导入图片资源
const heroBackground = img('首页 .jpg')
const arrowIcon = img('箭头.png')

// 三大技术支持保障数据
const guaranteeItems = [
  {
    icon: img('质保1.png'),
    title: '专业技术团队保障',
    description: '拥有实力雄厚的技术研发与售后技术团队，核心工程师及售后技术人员均具备多年行业实操经验，专业功底扎实、实战经验丰富。'
  },
  {
    icon: img('质保2.png'),
    title: '定制化维修方案支持',
    description: '针对不同设备系统配置、使用场景与个性化运维需求，制定多套标准化、差异化系统维修方案，大幅缩短故障修复时长。'
  },
  {
    icon: img('质保3.png'),
    title: '全流程实操技术培训',
    description: '设备交付验收完成后，提供免费现场实操培训服务，一对一指导设备操作人员全方位掌握核心技能，实现规范化、安全化使用。'
  }
]

// 现场实操培训指导核心数据
const processSteps = [
  {
    number: '01',
    title: '开机规范操作',
    description: '设备上电、系统自检与基础参数核验'
  },
  {
    number: '02',
    title: '日常标准使用',
    description: '作业场景规范与标准操作流程'
  },
  {
    number: '03',
    title: '基础日常运维',
    description: '关键部件检查与周期性简单维护'
  },
  {
    number: '04',
    title: '简易故障排查',
    description: '常见异常快速识别与应急处置'
  },
  {
    number: '05',
    title: '关机与保养',
    description: '规范关机步骤与设备收存存放保养'
  }
]

// 完整交付全套设备配套资料数据
const materialItems = [
  {
    icon: img('配套资料.png'),
    title: '《设备操作手册》',
    description: '标准化开机与核心功能指南'
  },
  {
    icon: img('配套资料2.png'),
    title: '《使用说明书》',
    description: '详细作业场景与参数配置'
  },
  {
    icon: img('配套资料3.png'),
    title: '《维修指南》',
    description: '故障排查依据与拆装标准'
  },
  {
    icon: img('配套资料4.png'),
    title: '《服务手册》',
    description: '标准化开机与核心功能指南'
  },
  {
    icon: img('配套资料5.png'),
    title: '《保修手册》',
    description: '质保权益说明与保外服务条款'
  },
  {
    icon: img('配套资料6.png'),
    title: '《专属培训教材》',
    description: '理论结合实操的定制化教材'
  }
]
</script>

<style scoped>
.technical-support {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  line-height: 1.6;
  background: #fff;
}

.container {
  padding: 0 5.5vw 0 6vw;
}

.section {
  padding: 5.2vw 0 6.9vw;
}

/* ---------- 静态Hero大图 ---------- */
.hero-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.hero-bg {
  position: relative;
  width: 100%;
  padding-top: 40.73%;
}

.hero-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-content {
  position: absolute;
  top: 18.4vw;
  left: 7.8125vw;
  width: 100%;
  z-index: 2;
}

.home-hero-title {
  /* 1920 时 = 70px（设计值） → 按比例缩放 */
  font-size: 3.645833vw;
  font-weight: bold;
  color: #fff;
  animation: slideUp 0.8s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(2vw);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------- 通用标题（与售后保障 / 行业解决方案保持一致） ---------- */
.section-title-dark {
  font-size: 2.87474vw;
  font-weight: bold;
  color: #1a1a2e;
  text-align: center;
  /* margin-bottom: 0.86vw; */
}

.section-divider {
  width: 14vw;
  height: 0.10833vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto 0.69vw;
}

.section-desc {
  text-align: center;
  font-size: 1.04167vw;
  color: #adb1b5;
  margin-bottom: 3.7vw;
  margin-top: 0;
}

/* ---------- 三大技术支持保障 ---------- */
.guarantee-section {
  background: #f8fafc;
}

.guarantee-cards {
  display: grid;
  /* 与「售后保障」页 4 列布局的单卡等宽：容器宽减去 3 个 gap 后除以 4，再整体居中 */
  grid-template-columns: repeat(3, calc((100% - 3.3vw) / 4));
  gap: 1.1vw;
  justify-content: center;
}

.guarantee-card {
  background: #fbfdfe;
  border: 1px solid #d6d7d8;
  border-radius: 0.41667vw;
  padding: 1.89583vw 2vw 0.45vw;
  text-align: center;
  box-shadow: 0 0.10417vw 0.52083vw rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  cursor: pointer;
}

.guarantee-card:hover {
  box-shadow: inset 0 0.5vw 0 #6ee1fb, 0 0.10417vw 0.52083vw rgba(0, 0, 0, 0.04);
}

.guarantee-icon {
  margin: 0 auto 1.04167vw;
  display: flex;
  justify-content: center;
}

.guarantee-icon img {
  object-fit: contain;
  transform: rotate(-8deg);
  transition: transform 0.4s ease;
}

/* hover 时图标摆正 + 顶部蓝色条 */
.guarantee-card:hover .guarantee-icon img {
  transform: rotate(0deg);
}

.guarantee-title {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.177604vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5vw;
}

.guarantee-desc {
  font-size: 0.83125vw;
  color: #88929f;
  text-align: center;
}

/* ---------- 现场实操培训指导核心 ---------- */
.process-section {
  background: #fff;
  padding: 3.8vw 0 3.7vw;
}

.process-section .container {
  padding: 0 3vw;
}

.process-flow {
  display: flex;
  /* 子项等高，保证箭头能相对最高的卡片垂直居中 */
  align-items: stretch;
  justify-content: center;
}

/* 圆角小卡片：浅灰描边 + 白底，数字与标题同列，描述在下方 */
.process-step-card {
  flex: 0 0 11.6vw;
  min-width: 0;
  position: relative;
  background: #fbfdfe;
  border: 0.15vw solid #d6d7d8;
  border-radius: 0.46875vw;
  padding: 0.85vw 0vw 1.65vw;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

/* hover 仅保留轻微阴影，不显示顶部蓝色条 */
.process-step-card:hover {
  box-shadow: 0 0.15625vw 0.625vw rgba(0, 0, 0, 0.08);
}

.step-number {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.731771vw;
  font-weight: bold;
  color: #23daff;
  margin: 0;
  line-height: 1.2;
  margin-bottom: 0.7vw;
}

.process-step-card:hover .step-number {
  color: #00bce0;
}

.step-title {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 0.95vw;
  font-weight: bold;
  color: #1a1a2e;
  margin: 0 0 0.55vw;
  line-height: 1.3;
}

.step-desc {
  font-size: 0.658073vw;
  color: #88929f;
  margin: 0;
  line-height: 1.4;
  padding: 0 0.3vw;
}

.step-arrow {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 相对卡片整体垂直居中，而非固定高度内居中 */
  align-self: center;
      margin: 0 1.43vw;
}

.step-arrow img {
  width: 4.427083vw;
  height: 1.40625vw;
  object-fit: contain;
}

/* ---------- 完整交付全套设备配套资料 ---------- */
.materials-section {
  background: #f8fafc;
}

.materials-cards {
  display: grid;
  /* 1920 设计稿：单卡宽 534px → 27.8125vw */
  grid-template-columns: repeat(3, 27.8125vw);
  gap: 2.1vw;
  justify-content: center;
}

/* 横向布局卡片：左侧图标 + 右侧书名号标题与描述 */
.materials-card {
  /* 1920 设计稿：534 × 161 */
  width: 27.8125vw;
  height: 8.38542vw;
  background: #fff;
  border: 2px solid #b6bbbe;
  border-radius: 0.46875vw;
  padding: 0.5vw 3.3vw 0;
  display: flex;
  align-items: center;
  gap: 1.1vw;
  text-align: left;
  box-shadow: 0 0.10417vw 0.52083vw rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
}

/* hover 仅保留轻微阴影，不显示顶部蓝色条 */
.materials-card:hover {
  box-shadow: 0 0.15625vw 0.625vw rgba(0, 0, 0, 0.08);
}

.materials-icon {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.55vw;
  height: 3.55vw;
}

/* 图标保持正常静态显示，无倾斜、无悬浮动画 */
.materials-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.materials-text {
  flex: 1;
  min-width: 0;
}

.materials-title {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.385417vw;
  font-weight: bold;
  color: #000;
  margin: 0 0 0.3vw;
  line-height: 1.3;
}

.materials-desc {
  font-size:1.039063vw;
  color: #88929f;
  margin: 0;
  line-height: 1.4;
}

/* ---------- 响应式 ---------- */
@media (max-width: 900px) {
  .guarantee-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 平板/手机端取消固定宽高，改回自适应 */
  .materials-cards {
    grid-template-columns: repeat(2, 1fr);
  }

  .materials-card {
    width: auto;
    height: auto;
    min-height: 18vw;
  }

  .process-flow {
    flex-wrap: wrap;
    justify-content: center;
    gap: 3vw 0;
  }

  .process-step-card {
    flex: 0 0 45%;
  }

  .step-arrow {
    display: none;
  }

  .section-title-dark {
    font-size: 5.3vw;
  }

  .section-divider {
    width: 23vw;
    height: 0.3vw;
  }

  .section-desc {
    font-size: 3vw;
    margin-bottom: 5vw;
  }

  .step-number {
    font-size: 4.2vw;
    margin-bottom: 0.6vw;
  }

  .step-title {
    font-size: 3.4vw;
    margin-bottom: 1vw;
  }

  .step-desc {
    font-size: 2.6vw;
  }

  .guarantee-title,
  .materials-title {
    font-size: 3.4vw;
  }

  .guarantee-desc,
  .materials-desc {
    font-size: 2.6vw;
  }

  .materials-card {
    padding: 3vw 3.5vw;
    gap: 2.5vw;
  }

  .materials-icon {
    width: 9vw;
    height: 9vw;
  }

  .cta-title {
    font-size: 5.3vw;
  }

  .cta-desc {
    font-size: 3vw;
    padding: 0 2vw;
  }

  .cta-btn {
    padding: 2.5vw 4vw;
    font-size: 3.5vw;
    border-radius: 1.5vw;
  }
}

@media (max-width: 600px) {
  .hero-content {
    top: 30vw;
    left: 8vw;
  }

  .home-hero-title {
    font-size: 8vw;
  }

  .section {
    padding: 13.33333vw 0;
  }

  .guarantee-cards,
  .materials-cards {
    grid-template-columns: 1fr;
  }

  /* 手机端单列，固定宽高已在上一个断点解除 */
  .materials-card {
    min-height: 26vw;
  }

  .process-step-card {
    flex: 0 0 100%;
  }
}
</style>
