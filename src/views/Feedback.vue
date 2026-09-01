<template>
  <div class="feedback-page">
    <!-- 静态Hero大图 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img :src="heroBackground" :alt="'建议与反馈'" class="hero-img" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="home-hero-title">建议与反馈</p>
      </div>
    </section>

    <!-- 建议与反馈表单 -->
    <section class="section feedback-section">
      <div class="container">
        <h2 class="section-title-dark">期待您的宝贵意见与建议</h2>
        <div class="section-divider"></div>
        <p class="section-desc">无论在产品体验、售后服务、技术支持或官网使用中有任何疑问或建议，请随时告知我们，您的每一个反馈都是我们持续优化的核心动力。</p>
        <div class="feedback-form-wrapper">
          <form class="feedback-form" @submit.prevent="handleSubmit">
            <!-- 第一行：名字 / 电话 / 邮箱 -->
            <div class="form-row form-row-3">
              <div class="form-group">
                <div class="input-wrap">
                  <img :src="formIcons.name" alt="" class="field-icon" />
                  <input type="text" v-model="form.name" placeholder="您的名字" @blur="validateName" @input="errors.name = ''" :class="{ 'input-error': errors.name }" required />
                </div>
                <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
              </div>
              <div class="form-group">
                <div class="input-wrap">
                  <img :src="formIcons.phone" alt="" class="field-icon" />
                  <input type="tel" v-model="form.phone" placeholder="电话" @blur="validatePhone" @input="errors.phone = ''" :class="{ 'input-error': errors.phone }" required />
                </div>
                <span v-if="errors.phone" class="error-msg">{{ errors.phone }}</span>
              </div>
              <div class="form-group">
                <div class="input-wrap">
                  <img :src="formIcons.email" alt="" class="field-icon" />
                  <input type="email" v-model="form.email" placeholder="邮箱" @blur="validateEmail" @input="errors.email = ''" :class="{ 'input-error': errors.email }" required />
                </div>
                <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
              </div>
            </div>

            <!-- 第二行：反馈类型 -->
            <div class="form-row">
              <div class="form-group full-width">
                <div class="select-wrapper">
                  <select v-model="form.type" class="form-select" required>
                    <option value="" disabled selected>反馈类型：</option>
                    <option value="product">产品功能 / 性能建议</option>
                    <option value="service">售后与技术服务</option>
                    <option value="website">官网使用体验</option>
                    <option value="other">商务合作</option>
                    <option value="other">其他</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- 第三行：反馈主题 -->
            <div class="form-row">
              <div class="form-group full-width form-group--tall">
                <input type="text" v-model="form.subject" placeholder="反馈主题/标题：" required />
              </div>
            </div>

            <!-- 第四行：备注 -->
            <div class="form-row">
              <div class="form-group full-width">
                <textarea v-model="form.description" rows="5" placeholder="备注："></textarea>
              </div>
            </div>

            <!-- 上传区域 -->
            <div class="form-row" style="margin: 0;">
              <div class="form-group full-width">
                <div class="upload-area" @click="(fileInput as HTMLInputElement).click()" @dragover.prevent @drop.prevent="handleDrop">
                  <input type="file" ref="fileInput" @change="handleFileChange" multiple accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx" style="display: none" />
                  <div class="upload-content">
                    <img :src="uploadIcon" alt="上传" class="upload-icon-img" />
                    <p class="upload-main-text">上传相关图片或文件（选填）</p>
                    <p class="upload-hint-text">点击或拖拽文件上传，支持图片、文档、视频，单文件不超过20MB</p>
                  </div>
                  <div class="file-list" v-if="form.files.length > 0" @click.stop>
                    <div class="file-item" v-for="(file, index) in form.files" :key="index">
                      <span class="file-name">{{ file.name }}</span>
                      <span class="file-remove" @click="removeFile(index)">×</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 保密协议 -->
            <div class="form-row" style="margin: 0;">
              <div class="form-group full-width">
                <label class="agreement-label">
                  <input type="checkbox" v-model="form.agreed" class="agreement-checkbox" />
                  <span class="agreement-text">我已阅读并同意《信息保密协议》，提交内容仅用于服务跟进</span>
                </label>
              </div>
            </div>

            <!-- 提交按钮 -->
            <div class="form-actions">
              <button type="submit" class="submit-btn" :disabled="isSubmitting">
                <img :src="submitIcon" alt="提交" class="submit-icon-img" />
                {{ isSubmitting ? '提交中...' : '提交反馈意见' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const img = (name: string) => new URL(`../assets/home/行业解决方案/建议反馈/${name}`, import.meta.url).href
const afterSalesIcons = (name: string) => new URL(`../assets/home/服务支持/售后保障/${name}`, import.meta.url).href

// 英雄背景图
const heroBackground = img('首页 .jpg')

// 图标图片
const uploadIcon = img('上传.png')
const submitIcon = img('提交.png')

// 表单字段图标
const formIcons = {
  name: afterSalesIcons('售后申请1.png'),
  phone: afterSalesIcons('售后申请.png'),
  email: img('邮箱.png'),
}

// 表单数据
const form = reactive({
  name: '',
  phone: '',
  email: '',
  type: '',
  subject: '',
  description: '',
  files: [] as File[],
  agreed: false
})

const isSubmitting = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

// 表单校验错误
const errors = reactive({
  name: '',
  phone: '',
  email: ''
})

// 校验名字
const validateName = () => {
  if (!form.name.trim()) {
    errors.name = '请输入您的名字'
    return false
  }
  if (form.name.trim().length < 2) {
    errors.name = '名字至少需要2个字符'
    return false
  }
  errors.name = ''
  return true
}

// 校验手机号
const validatePhone = () => {
  if (!form.phone.trim()) {
    errors.phone = '请输入手机号码'
    return false
  }
  if (!/^1[3-9]\d{9}$/.test(form.phone.trim())) {
    errors.phone = '手机号格式不正确，请输入11位有效手机号'
    return false
  }
  errors.phone = ''
  return true
}

// 校验邮箱
const validateEmail = () => {
  if (!form.email.trim()) {
    errors.email = '请输入邮箱地址'
    return false
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = '邮箱格式不正确，请检查是否输入有误'
    return false
  }
  errors.email = ''
  return true
}

// 处理文件选择
const handleFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  if (input.files) {
    const newFiles = Array.from(input.files)
    const validFiles = newFiles.filter(file => file.size <= 10 * 1024 * 1024)
    form.files = [...form.files, ...validFiles].slice(0, 5)
  }
}

// 拖拽上传
const handleDrop = (e: DragEvent) => {
  if (e.dataTransfer?.files) {
    const newFiles = Array.from(e.dataTransfer.files)
    const validFiles = newFiles.filter(file => file.size <= 10 * 1024 * 1024)
    form.files = [...form.files, ...validFiles].slice(0, 5)
  }
}

// 移除文件
const removeFile = (index: number) => {
  form.files.splice(index, 1)
}

// 处理表单提交
const handleSubmit = async () => {
  const isNameValid = validateName()
  const isPhoneValid = validatePhone()
  const isEmailValid = validateEmail()

  if (!isNameValid || !isPhoneValid || !isEmailValid) {
    return
  }

  if (!form.agreed) {
    alert('请先阅读并同意隐私政策')
    return
  }

  isSubmitting.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  alert('感谢您的建议与反馈！我们会认真对待每一条建议。')
  
  form.name = ''
  form.phone = ''
  form.email = ''
  form.type = ''
  form.subject = ''
  form.description = ''
  form.files = []
  form.agreed = false
  
  isSubmitting.value = false
}
</script>

<style scoped>
.feedback-page {
  font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  color: #333;
  line-height: 1.6;
  background: #fff;
}

.container {
  padding: 0 5.5vw 0 6vw;
}

.section {
  padding: 8.9vw 0 4.8vw;
}

/* ---------- 静态Hero大图（与其他页面一致） ---------- */
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

/* ---------- 反馈表单区域 ---------- */
.feedback-section {
  background: #fff;
}

.section-title-dark {
  font-size: 2.87474vw;
  font-weight: bold;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 0.1vw;
}

.section-divider {
  width: 14vw;
  height: 0.10833vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto 0.8vw;
}

.section-desc {
  text-align: center;
  font-size: 1.04167vw;
  color: #adb1b5;
  margin-bottom: 3.7vw;
  margin-top: 0;
}

.feedback-form-wrapper {
  width: 87.65625vw;
  border: 0.15625vw solid #b9bdc1;
  padding: 4.15vw 2.85vw 2.75vw;
  border-radius: 1rem;
  background: #f6f8f9;
}

.feedback-form {
  width: 100%;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25vw;
  margin-bottom: 1vw;
}

.form-row-3 {
  grid-template-columns: repeat(3, 1fr);
}

.form-row-2 {
  grid-template-columns: repeat(2, 1fr);
}

.form-row:last-child {
  margin-bottom: 0;
}

.form-group {
  position: relative;
  display: flex;
  flex-direction: column;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

/* 反馈类型和反馈主题 */
.form-group--tall input,
.form-group--tall .select-wrapper,
.form-group--tall select {
  height: 3.7vw;
  min-height: 3.7vw;
}

/* 输入框包裹容器 */
.input-wrap {
  position: relative;
  width: 100%;
  display: block;
}

/* 输入框内部左侧的图标 */
.input-wrap .field-icon {
  position: absolute;
  left: 1.2vw;
  top: 50%;
  transform: translateY(-50%);
  width: 1.385417vw;
  height: 1.385417vw;
  object-fit: contain;
  pointer-events: none;
  z-index: 1;
  display: block;
  line-height: 0;
  filter: brightness(0) invert(66%);
}

.form-group input:not([type="checkbox"]),
.form-group textarea,
.form-group select {
  padding: 0 0.83333vw;
  border: 0.15625vw solid #b9bdc1;
  border-radius: 0.5rem;
  font-size: 1.385417vw;
  background: #fff;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
  font-family: inherit;
  color: #333;
  height: 3.4vw;
  width: 100%;
}

.form-group input{
  height: 3.7vw;
}
.form-group input {
  padding-left: 0.83333vw;
}

/* 有图标的输入框需要更多左侧内边距 */
.input-wrap:has(.field-icon) input {
  padding-left: 2.8vw;
}

/* 校验错误 */
.input-error {
  border-color: #e53935 !important;
}

.error-msg {
  display: block;
  font-size: 0.729167vw;
  color: #e53935;
  margin-top: 0.260417vw;
  padding-left: 0.83333vw;
}

.form-group textarea {
  padding-top: 0.625vw;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  font-size: 1.385417vw;
  color: #bfc3c5;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: #22dbff;
}

.form-group textarea {
  resize: vertical;
  min-height: 10.1vw;
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
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;
  border: 0.15625vw solid #b9bdc1;
  border-radius: .5rem;
}

.form-select:invalid {
  font-size: 1.385417vw;
  color: #bfc3c5;
}

/* ---------- 上传区域 ---------- */
.upload-area {
  border: none;
  border-radius: .5rem;
  padding: 3.3vw 0 1.8vw;
  background: #fff;
  transition: all 0.3s ease;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='.5rem' ry='.5rem' stroke='%238a8e94' stroke-width='4' stroke-dasharray='12%2c 8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
}

.upload-area:hover {
  border: none;
  background-color: #f0f9ff;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='.5rem' ry='.5rem' stroke='%2322dbff' stroke-width='4' stroke-dasharray='12%2c 8' stroke-dashoffset='0' stroke-linecap='butt'/%3e%3c/svg%3e");
}

.upload-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-icon-img {
  width: 2.5vw;
  height: 2.5vw;
  margin-bottom: 1.1vw;
  object-fit: contain;
  filter: brightness(0) invert(66%);
}

.upload-main-text {
  font-size: 1.385417vw;
  color: #b6bbbe;
  margin: 0 0 0.5vw;
  font-weight: 500;
}

.upload-hint-text {
  font-size: 1.385417vw;
  color: #b6bbbe;
  margin: 0;
  font-weight: 500;
}

.file-list {
  margin-top: 0.833333vw;
  border-top: 0.052083vw solid #e8e8e8;
  padding-top: 0.833333vw;
}

.file-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.416667vw 0.625vw;
  background: #f5f7fa;
  border-radius: 0.260417vw;
  margin-bottom: 0.416667vw;
}

.file-name {
  font-size: 0.833333vw;
  color: #333;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.file-remove {
  color: #dc3545;
  cursor: pointer;
  font-size: 1.145833vw;
  margin-left: 0.520833vw;
  transition: color 0.3s;
  line-height: 1;
}

.file-remove:hover {
  color: #c82333;
}

/* ---------- 保密协议 ---------- */
.agreement-label {
  display: flex;
  align-items: center;
  gap: 0.520833vw;
  cursor: pointer;
  margin-top: 0.520833vw;
}

.agreement-checkbox {
  width: 1.041667vw;
  height: 1.041667vw;
  margin-top: 0.15625vw;
  accent-color: #22dbff;
  cursor: pointer;
  flex-shrink: 0;
}

.agreement-text {
  font-size: 1.385417vw;
  color: #A4A9AD;
  line-height: 1.5;
}

/* ---------- 提交按钮 ---------- */
.form-actions {
  text-align: center;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.520833vw;
  background: linear-gradient(90deg, #22dbff, #04c8f0);
  color: #fff;
  border: none;
  padding: 1.25vw 3.125vw;
  font-size: 1.039063vw;
  font-weight: 700;
  border-radius: 0.5vw;
  cursor: pointer;
  letter-spacing: 0.10417vw;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  box-shadow: 0 0.3125vw 0.83333vw rgba(34, 219, 255, 0.35);
  transform: translateY(-0.10417vw);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submit-icon-img {
  width: 1.25vw;
  height: 1.25vw;
  vertical-align: middle;
  object-fit: contain;
}

/* ---------- 响应式 ---------- */
@media (max-width: 900px) {
  .form-row-3,
  .form-row-2 {
    grid-template-columns: 1fr;
  }

  .feedback-form-wrapper {
    width: 100%;
    padding: 4vw;
    border-radius: 2vw;
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

  .form-group input,
  .form-group textarea,
  .form-group select {
    font-size: 3vw;
    height: 10vw;
  }

  .form-group textarea {
    min-height: 24vw;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    font-size: 3vw;
  }

  .upload-icon-img {
    width: 8vw;
    height: 8vw;
  }

  .upload-main-text {
    font-size: 3vw;
  }

  .upload-hint-text {
    font-size: 3vw;
  }

  .agreement-text {
    font-size: 3vw;
  }

  .submit-btn {
    padding: 2.5vw 8vw;
    font-size: 3.5vw;
    border-radius: 1.5vw;
  }

  .submit-icon-img {
    width: 4vw;
    height: 4vw;
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
}
</style>
