<template>
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">获取专属解决方案</h2>
      <p class="section-subtitle">专业团队1对1定制方案2小时内快速响应</p>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-features">
            <span class="contact-feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="2">
                <path
                  d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              免费咨询
            </span>
            <span class="contact-feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              2h快速响应
            </span>
            <span class="contact-feature-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0110 0v4" />
              </svg>
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
                <svg class="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999"
                  stroke-width="2">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                <input type="text" placeholder="您的名字" class="form-input" v-model="formData.contact">
              </div>
              <div class="form-field">
                <svg class="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999"
                  stroke-width="2">
                  <path
                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <input type="tel" placeholder="联系电话" class="form-input" v-model="formData.phone">
              </div>
            </div>
            <div class="form-field">
              <svg class="form-field-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#999"
                stroke-width="2">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
              </svg>
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

<style>
/* 使用全局样式 */
</style>