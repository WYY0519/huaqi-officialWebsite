<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <p class="section-title">获取专属解决方案</p>
      <p class="section-line"></p>
      <p class="section-subtitle">专业团队1对1定制方案2小时内快速响应</p>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-features">
            <span class="contact-feature-item">
              <img :src="consultIcon" alt="免费咨询">
              免费咨询
            </span>
            <span class="contact-feature-item">
              <img :src="responseIcon" alt="2h快速响应">
              2h快速响应
            </span>
            <span class="contact-feature-item">
              <img :src="confidentialIcon" alt="保密协议">
              保密协议
            </span>
          </div>
          <h3 class="contact-info-title">开启智能化升级之旅</h3>
          <p class="contact-info-desc">无论您身处消防救援、高空清洗、军警安防还是水利巡检领域，我们的专业团队将根据您的实际场景需求，量身定制最优无人机解决方案。</p>
          <p class="contact-trusted-label">TRUSTED BY INDUSTRY LEADERS</p>
          <div class="contact-trusted-grid">
            <span class="trusted-item" v-for="(brand, i) in trustedBrands" :key="i">{{ brand }}</span>
          </div>
        </div>
        <div class="contact-form-wrapper">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-row">
              <div class="form-field">
                <img :src="nameIcon" alt="您的名字" class="form-field-icon">
                <input type="text" placeholder="您的名字" class="form-input" v-model="formData.contact">
              </div>
              <div class="form-field">
                <img :src="phoneIcon" alt="联系电话" class="form-field-icon">
                <input type="tel" placeholder="联系电话" class="form-input" v-model="formData.phone">
              </div>
            </div>
            <div class="form-field">
              <img :src="companyIcon" alt="所属公司" class="form-field-icon">
              <input type="text" placeholder="所属公司" class="form-input" v-model="formData.company">
            </div>
            <div class="form-field form-field-textarea">
              <textarea placeholder="请描述您的需求(限500字)" class="form-input form-textarea" v-model="formData.message"
                maxlength="500" @input="updateMessageLength"></textarea>
              <span class="form-char-count">{{ messageLength }}/500</span>
            </div>
            <button type="submit" class="submit-btn">
              提交需求免费获取方案 <span class="submit-arrow">→</span>
            </button>
            <p class="form-privacy">提交即表示您同意我们的隐私政策，信息将严格保密</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { trustedBrands } from '../../data/homeData'

// 图标路径
const consultIcon = new URL('../../assets/home/图标/i.png', import.meta.url).href
const responseIcon = new URL('../../assets/home/图标/o.png', import.meta.url).href
const confidentialIcon = new URL('../../assets/home/图标/p.png', import.meta.url).href
const nameIcon = new URL('../../assets/home/图标/x.png', import.meta.url).href
const phoneIcon = new URL('../../assets/home/图标/n.png', import.meta.url).href
const companyIcon = new URL('../../assets/home/图标/v.png', import.meta.url).href

const formData = ref({ company: '', contact: '', phone: '', message: '' })
const messageLength = computed(() => formData.value.message.length)

const updateMessageLength = () => { }

const submitForm = () => {
  console.log('表单提交:', formData.value)
  if (formData.value.company || formData.value.contact || formData.value.message || formData.value.phone) {
    alert('感谢您的提交，我们会尽快与您联系！')
  } else {
    alert('请输入您的信息')

  }
  formData.value = { company: '', contact: '', phone: '', message: '' }
}
</script>

<style>
/* 联系区块 - 按 1920 设计等比缩放（vw），与解决方案等页面缩放方式一致，不单独设置断点 */
.contact-section {
  /* 1920 时 = 112px 0 118px */
  padding: 5.83333vw 0 6.14583vw;
  background: #FFF;
  text-align: center;
}

.contact-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  /* 1920 时 = 60px */
  gap: 3.125vw;
  text-align: left;
  align-items: start;
}

/* 左侧信息区 */
.contact-info {
  min-width: 0;
  overflow: hidden;
}

.contact-features {
  display: flex;
  /* 1920 时 = 20px */
  gap: 1.04167vw;
  /* 1920 时 = 60px */
  margin-bottom: 3.125vw;
}

.contact-feature-item {
  display: inline-flex;
  align-items: center;
  /* 1920 时 = 6px */
  gap: 0.3125vw;
  /* 1920 时 = 20px */
  font-size: 1.04167vw;
  color: #adb1b5;
}

.contact-feature-item img {
  /* 1920 时 = 24px */
  width: 1.875vw;
  height: 1.875vw;
  object-fit: contain;
}

.contact-info-title {
  /* 1920 时 = 44px */
  font-size: 2.29167vw;
  font-weight: 900;
  color: #000;
  /* 1920 时 = 48px */
  margin-bottom: 2.5vw;
}

.contact-info-desc {
  /* 1920 时 = 27px */
  font-size: 1.40625vw;
  color: #adb1b5;
  /* 1920 时 = 42px */
  margin-bottom: 2.1875vw;
}

.contact-trusted-label {
  /* 1920 时 = 27px */
  font-size: 1.40625vw;
  color: #adb1b5;
  /* 1920 时 = 1px */
  letter-spacing: 0.05208vw;
  /* 1920 时 = 69px */
  margin-bottom: 3.59375vw;
}

.contact-trusted-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* 1920 时 = 12px */
  gap: 0.625vw;
}

.trusted-item {
  width: 100%;
  /* 1920 时 = 59px */
  height: 3.07292vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7f9fa;
  /* 边框宽度保持 1px（与参考页面一致） */
  border: 1px solid #adb1b5;
  /* 1920 时 = 8px */
  border-radius: 0.41667vw;
  /* 1920 时 = 20px */
  font-size: 1.04167vw;
  color: #adb1b5;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
}

/* 右侧表单区 */
.contact-form-wrapper {
  background: #F6F8F9;
  /* 1920 时 = 12px */
  border-radius: 0.625vw;
  /* 1920 时 = 57px 48px 48px */
  padding: 2.96875vw 2.5vw 2.5vw;
  /* 边框宽度保持 2px（与参考页面一致） */
  border: 2px solid #bbbfc3;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* 1920 时 = 16px */
  gap: 0.83333vw;
  /* 1920 时 = 32px */
  margin-bottom: 1.66667vw;
}

.form-field {
  position: relative;
}

.form-field-icon {
  position: absolute;
  /* 1920 时 = 14px */
  left: 0.72917vw;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  /* 1920 时 = 24px */
  width: 2.1354vw;
  height: 1.875vw;
}

.form-input {
  width: 100%;
  /* 1920 时 = 85px */
  height: 4.42708vw;
  /* 边框宽度保持 1px（与参考页面一致） */
  border: 1px solid #bbbfc3;
  /* 1920 时 = 10px */
  border-radius: 0.52083vw;
  /* 1920 时 = 20px */
  font-size: 1.04167vw;
  color: #bfc3c5;
  transition: border-color 0.3s;
  background: white;
  box-sizing: border-box;
  /* 1920 时 = 12px 12px 12px 50px */
  padding: 0.625vw 0.625vw 0.625vw 2.60417vw;
}

.form-input::placeholder {
  color: #bbb;
}

.form-input:focus {
  outline: none;
  border-color: #00D4ff;
}

/* 明确设置思源黑体CN字体 */
.contact-section * {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 修复 textarea 和字数统计 */
.form-field-textarea {
  width: 100%;
  position: relative;
  /* 1920 时 = 33px */
  margin-top: 1.71875vw;
  /* 1920 时 = 27px */
  margin-bottom: 1.40625vw;
}

.form-field-textarea .form-textarea {
  width: 100%;
  /* 1920 时 = 157px */
  min-height: 8.17708vw;
  resize: vertical;
  box-sizing: border-box;
  /* 1920 时 = 12px 14px 32px 14px */
  padding: 0.625vw 0.72917vw 1.66667vw 0.72917vw;
}

.form-char-count {
  position: absolute;
  /* 1920 时 = 8px */
  bottom: 0.41667vw;
  /* 1920 时 = 12px */
  right: 0.625vw;
  /* 1920 时 = 16px */
  font-size: 0.83333vw;
  color: #ccc;
  pointer-events: none;
  z-index: 1;
}

.form-field-textarea .form-char-count {
  background: rgba(255, 255, 255, 0.8);
  /* 1920 时 = 2px 4px */
  padding: 0.10417vw 0.20833vw;
  /* 1920 时 = 3px */
  border-radius: 0.15625vw;
}

.submit-btn {
  width: 100%;
  /* 1920 时 = 79px */
  height: 4.11458vw;
  background: #22dbff;
  color: white;
  border: none;
  /* 1920 时 = 16px */
  padding: 0.83333vw;
  /* 1920 时 = 12px */
  border-radius: 0.625vw;
  /* 1920 时 = 25px */
  font-size: 1.30208vw;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  /* 1920 时 = 8px */
  gap: 0.41667vw;
}

.submit-btn:hover {
  background: #00b8e6;
}

.submit-arrow {
  /* 1920 时 = 24px */
  font-size: 1.25vw;
}

.form-privacy {
  text-align: center;
  /* 1920 时 = 16px */
  font-size: 0.83333vw;
  color: #adb1b5;
  /* 1920 时 = 10px */
  margin-top: 0.52083vw;
}
</style>