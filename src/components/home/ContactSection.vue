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
/* 联系区块 */
.contact-section {
  padding: 112px 0 118px;
  background: #FFF;
  text-align: center;
}

.contact-content {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 60px;
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
  gap: 20px;
  margin-bottom: 60px;
}

.contact-feature-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 20px;
  color: #adb1b5;
}

.contact-info-title {
  font-size: 44px;
  font-weight: 900;
  color: #000;
  margin-bottom: 48px;
}

.contact-info-desc {
  font-size: 27px;
  color: #adb1b5;
  margin-bottom: 42px;
}

.contact-trusted-label {
  font-size: 27px;
  color: #adb1b5;
  letter-spacing: 1px;
  margin-bottom: 69px;
}

.contact-trusted-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.trusted-item {
  width: 100%;
  height: 59px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f8f9;
  border: 1px solid #c1c6c8;
  border-radius: 8px;
  font-size: 20px;
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
  border-radius: 12px;
  padding: 57px 48px 48px;
  border: 2px solid #bbbfc3;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 32px
}

.form-field {
  position: relative;
}

.form-field-icon {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.form-input {
  width: 100%;
  height: 85px;
  border: 1px solid #bbbfc3;
  border-radius: 10px;
  font-size: 20px;
  color: #bfc3c5;
  transition: border-color 0.3s;
  background: white;
  box-sizing: border-box;
  padding: 12px 12px 12px 50px;
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
  margin-top: 33px;
  margin-bottom: 27px;
}

.form-field-textarea .form-textarea {
  width: 100%;
  min-height: 157px;
  resize: vertical;
  box-sizing: border-box;
  padding: 12px 14px 32px 14px;
}

.form-char-count {
  position: absolute;
  bottom: 8px;
  right: 12px;
  font-size: 16px;
  color: #ccc;
  pointer-events: none;
  z-index: 1;
}

.form-field-textarea .form-char-count {
  background: rgba(255, 255, 255, 0.8);
  padding: 2px 4px;
  border-radius: 3px;
}

.submit-btn {
  width: 100%;
  height: 79px;
  background: #22dbff;
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-size: 25px;
  cursor: pointer;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.submit-btn:hover {
  background: #00b8e6;
}

.submit-arrow {
  font-size: 24px;
}

.form-privacy {
  text-align: center;
  font-size: 16px;
  color: #adb1b5;
  margin-top: 10px;
}

/* 中等屏幕 (1200px ~ 1400px) */
@media (max-width: 1400px) {
  .contact-content {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 50px;
  }

  .contact-info-title {
    font-size: 37px;
    margin-bottom: 40px;
  }

  .contact-info-desc {
    font-size: 23px;
    margin-bottom: 36px;
  }

  .contact-trusted-label {
    font-size: 23px;
    margin-bottom: 50px;
  }

  .trusted-item {
    width: 100%;
    height: 50px;
  }

  .contact-trusted-grid {
    gap: 10px;
  }

  .contact-features {
    margin-bottom: 50px;
  }

  .contact-feature-item {
    font-size: 19px;
  }

  .contact-form-wrapper {
    padding: 48px 42px 42px;
  }

  .form-input {
    height: 80px;
  }

  .submit-btn {
    height: 75px;
    font-size: 24px;
  }

  .form-row {
    margin-bottom: 30px;
  }

  .form-field-textarea .form-textarea {
    min-height: 150px;
  }

  .form-field-textarea .form-char-count {
    bottom: 8px;
    right: 10px;
  }
}

/* 较小中等屏幕 (1024px ~ 1200px) */
@media (max-width: 1200px) {
  .contact-content {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 40px;
  }

  .contact-info-title {
    font-size: 32px;
    margin-bottom: 32px;
  }

  .contact-info-desc {
    font-size: 20px;
    margin-bottom: 28px;
  }

  .contact-trusted-label {
    font-size: 20px;
    margin-bottom: 40px;
  }

  .trusted-item {
    width: 100%;
    height: 44px;
    font-size: 17px;
  }

  .contact-trusted-grid {
    gap: 8px;
  }

  .contact-features {
    margin-bottom: 40px;
  }

  .contact-feature-item {
    font-size: 17px;
  }

  .contact-form-wrapper {
    padding: 40px 36px 36px;
  }

  .form-input {
    height: 75px;
    font-size: 19px;
  }

  .submit-btn {
    height: 70px;
    font-size: 23px;
  }

  .form-row {
    gap: 14px;
    margin-bottom: 28px;
  }

  .form-field-textarea .form-textarea {
    min-height: 140px;
  }

  .form-char-count {
    bottom: 8px;
    right: 10px;
  }

  .form-privacy {
    font-size: 15px;
    margin-top: 8px;
  }
}

/* iPad 适配 (≤1024px) */
@media (max-width: 1024px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-features {
    flex-wrap: wrap;
    gap: 16px;
  }

  .contact-feature-item {
    font-size: 19px;
  }

  .contact-trusted-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .contact-form-wrapper {
    padding: 28px;
  }

  .contact-section {
    margin-right: 0;
  }

  .contact-info-title {
    font-size: 37px;
    margin-bottom: 36px;
  }

  .contact-info-desc {
    font-size: 24px;
    margin-bottom: 32px;
  }

  .contact-trusted-label {
    font-size: 21px;
    margin-bottom: 40px;
  }

  .form-field-textarea .form-textarea {
    min-height: 150px;
  }
}

/* 手机适配 (≤768px) */
@media (max-width: 768px) {
  .contact-section {
    padding: 50px 15px;
    overflow: hidden;
    margin-right: 0;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 5px;
  }

  .contact-features {
    gap: 12px;
    margin-bottom: 40px;
  }

  .contact-feature-item {
    font-size: 17px;
  }

  .contact-info-title {
    font-size: 29px;
    margin-bottom: 20px;
  }

  .contact-info-desc {
    font-size: 19px;
    margin-bottom: 20px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    line-height: 1.6;
  }

  .contact-trusted-label {
    font-size: 19px;
    margin-bottom: 30px;
  }

  .contact-trusted-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  .trusted-item {
    width: 100%;
    height: 50px;
    font-size: 17px;
    padding: 0 8px;
  }

  .contact-form-wrapper {
    padding: 15px;
    width: 100%;
    overflow: hidden;
  }

  .contact-form {
    width: 100%;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-bottom: 12px;
  }

  .form-field {
    width: 100%;
  }

  .form-field-icon {
    width: 18px;
    height: 18px;
  }

  .form-input {
    width: 100%;
    height: 65px;
    padding: 12px 12px 12px 40px;
    font-size: 19px;
  }

  .form-field-textarea .form-textarea {
    min-height: 140px;
  }

  .submit-btn {
    width: 100%;
    height: 50px;
    padding: 14px 20px;
    font-size: 19px;
    font-weight: 600;
  }

  .form-textarea {
    min-height: 100px;
  }
}

/* 小屏手机适配 (≤480px) */
@media (max-width: 480px) {
  .contact-section {
    padding: 30px 10px;
    margin-right: 0;
  }

  .contact-info-title {
    font-size: 24px;
    margin-bottom: 15px;
  }

  .contact-info-desc {
    font-size: 17px;
    margin-bottom: 15px;
  }

  .contact-trusted-label {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .contact-trusted-grid {
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }

  .trusted-item {
    height: 40px;
    font-size: 15px;
  }

  .contact-form-wrapper {
    padding: 12px;
  }

  .form-field-icon {
    width: 16px;
    height: 16px;
  }

  .form-input {
    padding: 10px 10px 10px 36px;
    font-size: 17px;
  }

  .form-field-textarea .form-textarea {
    min-height: 120px;
  }

  .submit-btn {
    padding: 12px 16px;
    font-size: 17px;
  }

  .form-textarea {
    min-height: 80px;
  }
}
</style>