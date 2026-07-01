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
              <img src="../../assets/home/图标/i.png" alt="免费咨询">
              免费咨询
            </span>
            <span class="contact-feature-item">
              <img src="../../assets/home/图标/o.png" alt="2h快速响应">
              2h快速响应
            </span>
            <span class="contact-feature-item">
              <img src="../../assets/home/图标/p.png" alt="保密协议">
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
                <img src="../../assets/home/图标/x.png" alt="您的名字" class="form-field-icon">
                <input type="text" placeholder="您的名字" class="form-input" v-model="formData.contact">
              </div>
              <div class="form-field">
                <img src="../../assets/home/图标/n.png" alt="联系电话" class="form-field-icon">
                <input type="tel" placeholder="联系电话" class="form-input" v-model="formData.phone">
              </div>
            </div>
            <div class="form-field">
              <img src="../../assets/home/图标/v.png" alt="所属公司" class="form-field-icon">
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

const formData = ref({ company: '', contact: '', phone: '', email: '', message: '' })
const messageLength = computed(() => formData.value.message.length)

const updateMessageLength = () => { }

const submitForm = () => {
  console.log('表单提交:', formData.value)
  alert('感谢您的提交，我们会尽快与您联系！')
  formData.value = { company: '', contact: '', phone: '', email: '', message: '' }
}
</script>

<style scoped>
/* 明确设置思源黑体CN字体 */
.contact-section * {
  font-family: 'Noto Sans SC', 'Source Han Sans CN', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* 修复 textarea 和字数统计 */
.form-field-textarea {
  width: 100%;
}

.form-field-textarea .form-textarea {
  width: 100%;
  min-height: 120px;
  resize: vertical;
  box-sizing: border-box;
  padding: 12px 14px 28px 14px;
  position: relative;
  margin: 33px 0 27px 0;
}

.form-field-textarea .form-char-count {
  position: absolute;
  bottom: 20px;
  right: 10px;
  font-size: 12px;
  color: #999;
  pointer-events: none;
  z-index: 1;
  background: rgba(255, 255, 255, 0.8);
  padding: 2px 4px;
  border-radius: 3px;
}

/* iPad 适配 (≤1024px) */
@media (max-width: 1024px) {
  .contact-features {
    gap: 16px;
  }

  .contact-feature-item {
    font-size: 14px;
  }

  .contact-info-title {
    font-size: 28px;
    margin-bottom: 36px;
  }

  .contact-info-desc {
    font-size: 18px;
    margin-bottom: 32px;
  }

  .contact-trusted-label {
    font-size: 16px;
    margin-bottom: 40px;
  }
}

/* 手机适配 (≤768px) */
@media (max-width: 768px) {
  .contact-section {
    padding: 60px 15px;
  }

  .contact-features {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;
  }

  .contact-feature-item {
    font-size: 13px;
  }

  .contact-info-title {
    font-size: 24px;
    margin-bottom: 24px;
  }

  .contact-info-desc {
    font-size: 16px;
    margin-bottom: 24px;
    line-height: 1.6;
  }

  .contact-trusted-label {
    font-size: 14px;
    margin-bottom: 30px;
  }

  .trusted-item {
    width: 100%;
    height: 50px;
    font-size: 13px;
  }

  .form-textarea {
    min-height: 100px;
  }
}

/* 小屏手机适配 (≤480px) */
@media (max-width: 480px) {
  .contact-section {
    padding: 40px 10px;
  }

  .contact-info-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .contact-info-desc {
    font-size: 14px;
    margin-bottom: 20px;
  }

  .contact-trusted-label {
    font-size: 12px;
    margin-bottom: 20px;
  }

  .trusted-item {
    height: 45px;
    font-size: 12px;
  }

  .form-textarea {
    min-height: 80px;
  }
}
</style>