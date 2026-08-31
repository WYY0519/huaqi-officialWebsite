<template>
  <div class="after-sales">
    <!-- 静态Hero大图 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img :src="heroBackground" :alt="'售后保障'" class="hero-img" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="home-hero-title">售后保障</p>
      </div>
    </section>

    <!-- 质保服务 -->
    <section class="section warranty-section">
      <div class="container">
        <h2 class="section-title-dark">质保服务</h2>
        <div class="section-divider"></div>
        <p class="section-desc">透明规范的质保政策，让您使用无忧</p>

        <div class="warranty-cards">
          <div class="warranty-card" v-for="(item, index) in warrantyItems" :key="index">
            <div class="warranty-icon">
              <img :src="item.icon" :alt="item.title" />
            </div>
            <p class="warranty-title">{{ item.title }}</p>
            <p class="warranty-desc">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 标准高效的服务闭环 -->
    <section class="section process-section">
      <div class="container">
        <h2 class="section-title-dark">标准高效的服务闭环</h2>
        <div class="section-divider"></div>
        <p class="section-desc">去繁就简的报修流程，第一时间锁定并解决问题</p>

        <div class="process-steps">
          <div class="process-step" v-for="(step, index) in processSteps" :key="index">
            <div class="step-number">{{ step.number }}</div>
            <p class="step-title">{{ step.title }}</p>
            <p class="step-desc">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 后勤交通通信全天候保障 -->
    <section class="section logistics-section">
      <div class="container">
        <h2 class="section-title-dark">后勤交通通信全天候保障</h2>
        <div class="section-divider"></div>
        <p class="section-desc">多维度同步运转，实现不间断响应、全时段托底</p>

        <div class="logistics-cards">
          <div class="logistics-card" v-for="(item, index) in logisticsItems" :key="index">
            <div class="logistics-image">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="logistics-content">
              <h3 class="logistics-title">{{ item.title }}</h3>
              <ul class="logistics-list">
                <li v-for="(point, pIndex) in item.points" :key="pIndex">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 售后申请 -->
    <section class="section application-section">
      <div class="container">
        <h2 class="section-title-dark">售后申请</h2>
        <div class="section-divider"></div>
        <p class="section-desc">为了及时有效的帮您解决问题，请你完善如下信息。我们在收到留言后24小时内给您回复。</p>

        <div class="application-form">
          <div class="form-row">
            <div class="form-group">
              <img :src="formIcons.name" alt="" class="field-icon" />
              <input type="text" placeholder="您的名字" />
            </div>
            <div class="form-group">
              <img :src="formIcons.phone" alt="" class="field-icon" />
              <input type="tel" placeholder="电话" />
            </div>
            <div class="form-group">
              <img :src="formIcons.product" alt="" class="field-icon" />
              <input type="text" placeholder="产品名称" />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <img :src="formIcons.region" alt="" class="field-icon" />
              <input type="text" placeholder="所在地区" />
            </div>
            <div class="form-group">
              <img :src="formIcons.contract" alt="" class="field-icon" />
              <input type="text" placeholder="合同编号" />
            </div>
            <div class="form-group">
              <img :src="formIcons.warranty" alt="" class="field-icon" />
              <div class="select-wrapper">
                <select class="form-select" required>
                  <option value="" selected>是否在保修期内？</option>
                  <option value="yes">是</option>
                  <option value="no">否</option>
                </select>
              </div>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group full-width">
              <textarea rows="4" placeholder="简述您的问题"></textarea>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group full-width">
              <textarea rows="3" placeholder="备注："></textarea>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="submit-btn">立即提交</button>
          </div>
        </div>
      </div>
    </section>

    <!-- 服务政策 -->
    <section class="section policy-section">
      <div class="container">
        <h2 class="section-title-dark left-align">服务政策</h2>
        <div class="section-divider left"></div>
        <p class="policy-intro">
          为保障广大客户的合法权益，规范产品及服务售后保障标准，华启天成始终秉持专业、高效、及时、优质的服务宗旨，为客户提供全方位、标准化的售后服务支持。本条款适用于客户从华启天成采购的全部产品、配套设备及相关技术服务，为双方售后服务执行的统一标准。
        </p>

        <div class="policy-accordion">
          <div class="accordion-item" v-for="(policy, index) in policyItems" :key="index"
            :class="{ active: activeAccordion === index }">
            <div class="accordion-header" @click="toggleAccordion(index)">
              <div class="accordion-title">
                <img :src="activeAccordion === index ? policy.iconLight : policy.iconDark" :alt="policy.title" />
                <span>{{ policy.title }}</span>
              </div>
              <div class="accordion-toggle" :class="{ 'open': activeAccordion === index }">
                <svg v-if="activeAccordion === index" class="toggle-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12 H19" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
                </svg>
                <svg v-else class="toggle-icon" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12 L12 19 L19 12" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            <div class="accordion-content" v-if="activeAccordion === index">
              <div class="policy-content">
                <div class="policy-image">
                  <img :src="policy.image" :alt="policy.title" />
                </div>
                <div class="policy-text">
                  <p>{{ policy.content }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const img = (name: string) => new URL(`../assets/home/服务支持/售后保障/${name}`, import.meta.url).href

// 导入图片资源
const heroBackground = img('首页 .jpg')

// 质保服务数据
const warrantyItems = [
  {
    icon: img('质保1.png'),
    title: '免费保修期',
    description: '产品免费保修期为1年，自合同交付之日起计算。在质量保证期内，属于保修范围的质量问题，本公司进行免费维修或更换部件（人为因素除外）。'
  },
  {
    icon: img('质保2.png'),
    title: '零配件支持',
    description: '提供零配件全国统一报价，用户更换配件价格不超过统一报价的70%，确保客户以合理价格获得优质配件。'
  },
  {
    icon: img('质保3.png'),
    title: '零配件供应',
    description: '零配件保证供应时间在一周内，常用配件保持充足库存，确保维修周期不被配件供应耽误。'
  },
  {
    icon: img('质保4.png'),
    title: '7×24h极速响应',
    description: '当系统运行出现现场技术人员无法排除的故障，可直接电话通知本公司。公司将派具备故障排除技能的工程师到现场进行维修。'
  }
]

// 服务闭环步骤数据
const processSteps = [
  {
    number: '01',
    title: '故障提交',
    description: '客户通过工单/电话提交售后,描述故障现象，提供日志、截图、作业环境信息'
  },
  {
    number: '02',
    title: '远程诊断',
    description: '技术工程师分析故障，线上指导排查；可线上解决直接闭环；硬件故障进入下一流程'
  },
  {
    number: '03',
    title: '维修处理',
    description: '现场工程师上门/设备返厂维修；确认质保范围，出具维修方案、周期与费用'
  },
  {
    number: '04',
    title: '测试闭环回访',
    description: '维修完成做整机测试，交付客户；完成售后工单归档，做使用回访，输出故障总结'
  }
]

// 后勤保障数据
const logisticsItems = [
  {
    image: img('后勤通讯1.png'),
    title: '售后出行交通保障',
    points: [
      '专属售后维修车辆，定期检修维护，车况稳定可靠',
      '配套专职司机24小时全天待命，随时出发奔赴全国服务现场',
      '覆盖山地、偏远林区，保障工程师快速抵达故障点位'
    ]
  },
  {
    image: img('后勤通讯2.png'),
    title: '全人员通信保障',
    points: [
      '全部售后技术人员配备专用工作手机',
      '严格执行24小时开机制度，不关机、不静音',
      '支持全国漫游、长途通话，报修对接全程无障碍沟通'
    ]
  }
]

// 售后申请表单图标
const formIcons = {
  name: img('售后申请1.png'),
  phone: img('售后申请.png'),
  product: img('售后申请3.png'),
  region: img('售后申请4.png'),
  contract: img('售后申请5.png'),
  warranty: img('售后申请6.png'),
  question: img('售后申请.png'),
  note: img('售后申请1.png')
}

// 服务政策数据
const policyItems = [
  {
    iconDark: img('服务政策图标1_dark.png'),
    iconLight: img('服务政策图标1_light.png'),
    title: '质保期限说明',
    image: img('服务政策.jpg'),
    content: '华启天成所有在售产品及配套服务，自项目/设备最终验收合格之日起，统一提供为期一年的免费原厂质保服务。质保期内，符合保修条件的设备故障、系统异常、性能缺陷等问题，均由我司免费提供维修、调试、配件更换等全套服务，不收取任何人工、配件、技术服务费用。'
  },
  {
    iconDark: img('服务政策图标2_dark.png'),
    iconLight: img('服务政策图标2_light.png'),
    title: '质保外服务说明',
    image: img('服务政策2 .jpg'),
    content: '产品质保期满后，我司持续为客户提供终身有偿售后服务。客户可随时申请设备维修、配件更换、系统升级、整机保养、技术托管等服务，我司将以优惠的合作价格及专业的技术团队为客户提供高品质售后保障，确保设备长期正常使用。'
  },
  {
    iconDark: img('服务政策图标3_dark.png'),
    iconLight: img('服务政策图标3_light.png'),
    title: '故障报修与极速响应服务',
    image: img('服务政策3.jpg'),
    content: '我们为客户提供多元便捷报修渠道，设备故障可通过官网提交售后申请，或直接联系专属技术工程师报修。实行7×24小时故障响应机制，客服团队24小时内完成故障核实研判，出具应急方案，指导处理简易故障。现场无法排除的复杂故障，48小时内安排工程师免费上门。'
  },
  {
    iconDark: img('服务政策图标4_dark.png'),
    iconLight: img('服务政策图标4_light.png'),
    title: '后勤交通通信保障',
    image: img('服务政策4 .jpg'),
    content: '公司配备专用售后维修车辆，定期检修维护，全程保障出行顺畅，配套专职司机24小时待命，确保售后工程师可快速抵达全国各服务现场。全体售后技术人员均配备工作手机，严格执行24小时开机制度，支持全国漫游及长途通信，全程保障报修对接、技术沟通、上门维修无障碍，实现售后服务高效落地。'
  },
  {
    iconDark: img('服务政策图标5_dark.png'),
    iconLight: img('服务政策图标5_light.png'),
    title: '零配件保障服务',
    image: img('服务政策5 .jpg'),
    content: '我司零配件执行全国统一报价，公开透明规范。质保期外自费更换配件，结算价不高于全国统一报价70%，给予客户实惠采购权益。公司储备充足原装配件，承诺一周内供货，满足维修需求。所有更换配件均为全新原装正品，不使用代用件，切实保障设备原有性能、精度与使用寿命。'
  },
  {
    iconDark: img('服务政策图标6_dark.png'),
    iconLight: img('服务政策图标6_light.png'),
    title: '售后服务质量监督',
    image: img('服务政策6 .jpg'),
    content: '我司建立严格售后质量考核体系，通过定期及不定期电话回访、现场抽样核查，结合《售后服务质检表》，全面考评售后流程落地、服务效率与服务质量。针对流程不规范、响应滞后、服务不达标等问题追责到人，持续迭代优化服务体系，确保每位客户享有标准化、高品质、高效率的售后服务。'
  }
]

// 手风琴状态：默认全部收起（-1）
const activeAccordion = ref(-1)

const toggleAccordion = (index: number) => {
  activeAccordion.value = activeAccordion.value === index ? -1 : index
}
</script>

<style scoped>
.after-sales {
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

/* ---------- 通用标题（与行业解决方案保持一致） ---------- */
.section-title-dark {
  font-size: 2.87474vw;
  font-weight: bold;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 0.86vw;
}

.section-title-dark.left-align {
  text-align: left;
}

.section-divider {
  width: 14vw;
  height: 0.10833vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto 0.69vw;
}

.section-divider.left {
  margin-left: 0;
  margin-right: auto;
  background: #1a1a2e;
  width: 3.6vw;
  height: 0.3vw;
}

.section-desc {
  text-align: center;
  font-size: 1.04167vw;
  color: #adb1b5;
  margin-bottom: 3.7vw;
  margin-top: 0;
}

/* ---------- 质保服务 ---------- */
.warranty-section {
  background: #f8fafc;
}

.warranty-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.1vw;
}

.warranty-card {
  background: #fbfdfe;
  border: 1px solid #d6d7d8;
  border-radius: 0.41667vw;
  padding: 1.89583vw 2vw .45vw;
  text-align: center;
  box-shadow: 0 0.10417vw 0.52083vw rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  cursor: pointer;
}

.warranty-card:hover {
  box-shadow: inset 0 .5vw 0 #6ee1fb, 0 0.10417vw 0.52083vw rgba(0, 0, 0, 0.04);
}

.warranty-icon {
  margin: 0 auto 1.04167vw;
  display: flex;
  justify-content: center;
}

.warranty-icon img {
  /* width: 100%;
  height: 100%; */
  object-fit: contain;
  transform: rotate(-8deg);
  transition: transform 0.4s ease;
}

/* hover 时图标摆正 + 顶部蓝色条 */
.warranty-card:hover .warranty-icon img {
  transform: rotate(0deg);
}

.warranty-title {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.177604vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5vw;
}

.warranty-desc {
  font-size: 0.83125vw;
  color: #88929f;
  text-align: center;
}

/* ---------- 服务闭环 ---------- */
.process-section {
  background: #fff;
}

.process-section {
  padding: 3.8vw 0 3.7vw;
}

.process-section .container {
  padding: 0vw 22.8vw 0 21vw;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5625vw;
  position: relative;
}

.process-step {
  text-align: center;
  position: relative;
}

/* 圆圈之间的水平连接线 */
.process-steps::before {
  content: '';
  position: absolute;
  top: 2.36146vw;
  left: 12.5%;
  width: 75%;
  height: 0.18vw;
  background: #e2e8f0;
  z-index: 0;
}

.step-number {
  width: 4.32291667vw;
  height: 4.32291667vw;
  border-radius: 50%;
  border: 0.2vw solid #e2e8f0;
  color: #93a2b7;
  font-size: 1.3vw;
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.14583vw;
  background: #fff;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease;
}

/* 第一个步骤 - 高亮活动状态 */
/* .process-step:first-child .step-number {
  border-color: #22dbff;
  color: #22dbff;
} */

.process-step:hover .step-number {
  border-color: #23daff;
  color: #23daff;
  transform: scale(1.07);
}

.step-title {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.0390625vw;
  font-weight: bold;
  color: #1a1a2e;
  margin-bottom: 0.72917vw;
}

.step-desc {
  font-size: 0.6580729vw;
  color: #88929f;
  padding: 0 .4vw;
}

/* ---------- 后勤保障 ---------- */
.logistics-section {
  background: #f8fafc;
  padding: 5.1vw 5.67vw 6vw 5.9vw;
}

.logistics-section .container {
  padding: 0;
}

.logistics-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.76vw
}

.logistics-card {
  position: relative;
  height: 14.322917vw;
  border-radius: 1.5vw;
  overflow: hidden;
  box-shadow: 0 0.10417vw 0.52083vw rgba(0, 0, 0, 0.04);
}

.logistics-image {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.logistics-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 35%, rgba(0, 0, 0, 0.85) 100%);
  z-index: 1;
}

.logistics-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.logistics-card:hover .logistics-image img {
  transform: scale(1.03);
}

.logistics-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 1.4vw 3.34vw
}

.logistics-title {
  font-size: 1.731771vw;
  font-weight: bold;
  color: #fff;
  position: relative;
  margin-bottom: 0.5vw;
}

.logistics-list {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 0.8vw;
}

.logistics-list li {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.039063vw;
  color: #fff;
  /* margin-bottom: 0.625vw; */
  padding-left: 1.04167vw;
  position: relative;
  line-height: 1.76;
}

.logistics-list li::before {
  content: '•';
  color: #fff;
  position: absolute;
  left: 0;
  font-weight: 700;
}

/* ---------- 售后申请 ---------- */
.application-section {
  background: #fff;
}

.application-form {
  width: 87.65625vw;
  height: 37.34375vw;
  border: 0.15625vw solid #b9bdc1;
  padding: 2.6vw;
  border-radius: 1rem;
  background: #f6f8f9;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25vw;
  margin-bottom: 1.05vw;
}

.form-group {
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

/* 输入框内部左侧的图标（pointer-events 保证点击穿透到输入框） */
.form-group .field-icon {
  position: absolute;
  left: 0.83333vw;
  top: 50%;
  transform: translateY(-50%);
  width: 1.385417vw;
  height: 1.385417vw;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
}

/* textarea 的图标：位于输入框内部左上角，与文字对齐 */
.form-group .field-icon.icon-top {
  top: 0.625vw;
  transform: none;
}

.form-group input,
.form-group textarea,
.form-group select {
  padding: 0 0.83333vw;
  border: 0.05208vw solid #e0e3e6;
  border-radius: 0.20833vw;
  font-size: 1.385417vw;
  background: #fff;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  font-family: inherit;
  color: #333;
   height: 3.7vw;
}

/* 输入框内部左侧为图标留出空间 */
.form-group input {
  padding-left: 3.125vw;
  border-radius: .5rem;
  border: 0.15625vw solid #b9bdc1;
}

.form-group textarea {
  padding-top: 0.625vw;
  border-radius: .5rem;
  border: 0.15625vw solid #b9bdc1;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  font-size: 1.385417vw;
  color: #b6bbbe;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #22dbff;
}

.form-group textarea {
  resize: vertical;
  min-height: 7.5vw;
}

/* 下拉框封装：使用伪元素画 ▼ 三角 */
.select-wrapper {
  position: relative;
}

.select-wrapper::after {
  content: '';
  position: absolute;
  right: 0.9375vw;
  top: 50%;
  width: 0.52083vw;
  height: 0.52083vw;
  border-right: 0.10417vw solid #88929f;
  border-bottom: 0.10417vw solid #88929f;
  transform: translateY(-70%) rotate(45deg);
  pointer-events: none;
}

.form-group select {
  width: 100%;
  padding-left: 3.125vw;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
      border: 0.15625vw solid #b9bdc1;
          border-radius: .5rem;
}

/* 未选择时以提示样式显示“是否在保修期内？”，选中后可再选回清除 */
.form-select:invalid {
  font-size: 1.385417vw;
  color: #b6bbbe;
}

/* size=2 展开状态的 select：覆盖默认下拉外观，露出两个选项 */
.form-select-list {
  height: auto;
  min-height: 5.20833vw;
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
  background: #fff;
}

.form-select-list option {
  padding: 0.625vw 0.83333vw;
  font-size: 0.72917vw;
  color: #333;
}

.form-actions {
  text-align: center;
  margin-top: 2.8vw;
}

.submit-btn {
  background: linear-gradient(90deg, #22dbff, #04c8f0);
  color: #fff;
  border: none;
  padding: 1.1vw 3.125vw;
  font-size: 1.039063vw;
  font-weight: 700;
  border-radius: 0.5vw;
  cursor: pointer;
  letter-spacing: 0.10417vw;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  box-shadow: 0 0.3125vw 0.83333vw rgba(34, 219, 255, 0.35);
  transform: translateY(-0.10417vw);
}

/* ---------- 服务政策 ---------- */
.policy-section {
  background: #f7f9fa;
  padding-top: 5.2vw;
}

.policy-intro {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.385417vw;
  color: #000;
  line-height: 1.9;
  margin-bottom: 3.75vw;
  margin-top: 1vw;
}

.policy-accordion {
  width: 100%;
}

.accordion-item {
  background: #fff;
  margin-bottom: 0.83333vw;
  /* border-radius: 0.3125vw; */
  overflow: hidden;
  transition: all 0.3s ease;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.78vw 2.1vw;
  cursor: pointer;
  transition: all 0.3s ease;
  background: #fff;
}

.accordion-item.active .accordion-header {
  background: #00c1eb;
  color: #fff;
}

.accordion-title {
  display: flex;
  align-items: center;
  gap: 1.2vw;
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
  font-size: 1.385417vw;
  color: #1a1a2e;
}

.accordion-item.active .accordion-title {
  color: #fff;
}

.accordion-title img {
  width: 2.1875vw;
  height: 2.1875vw;
  object-fit: contain;
}

.accordion-item.active .accordion-title img {
  width: 2.1875vw;
  height: 2.1875vw;
}

.accordion-toggle {
  width: 1.4vw;
  height: 1.4vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #05cbf0;
  transition: all 0.3s ease;
}

.accordion-item.active .accordion-toggle {
  color: #fff;
}

.toggle-icon {
  width: 1.4vw;
  height: 1.4vw;
  display: block;
}

.accordion-content {
  padding: 1.8vw 2.25vw;
  border: 0.05208vw solid #e6e7e8;
}

.policy-content {
  display: grid;
  grid-template-columns: 28.59375vw 1fr;
  gap: 3.875vw;
  align-items: center;
}

.policy-image {
  border-radius: 0.3125vw;
  overflow: hidden;
}

.policy-image img {
  /* width: 100%;
  aspect-ratio: 549 / 309;
  object-fit: cover;
  display: block; */
  width:28.59375vw;
  height:16.09375vw
}

.policy-text {
  font-family: 'Alibaba PuHuiTi', 'Noto Sans SC', sans-serif;
    font-size: 1.385417vw;
    color: #5e5e5e;
    height: 9vw;
}

/* ---------- 响应式 ---------- */
@media (max-width: 900px) {

  .warranty-cards,
  .process-steps {
    grid-template-columns: repeat(2, 1fr);
  }

  /* 移动端 2 列时隐藏横向连接线 */
  .process-steps::before {
    display: none;
  }

  .logistics-cards {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
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

  .warranty-cards,
  .process-steps {
    grid-template-columns: 1fr;
  }
}
</style>
