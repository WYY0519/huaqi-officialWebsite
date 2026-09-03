<template>
  <div class="about-page">
    <!-- 静态Hero大图 -->
    <section class="hero-section">
      <div class="hero-bg">
        <img :src="heroBackground" alt="企业简介" class="hero-img" />
      </div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="home-hero-title">企业简介</p>
      </div>
    </section>

    <!-- 公司介绍 -->
    <section class="section company-section" style="padding-bottom: 0;">
      <img :src="companyBg" alt="公司背景" class="company-bg" />
      <div class="container company-inner">
        <h2 class="company-title">华启天成（深圳）智能科技有限公司</h2>
        <div class="company-content">
          <p style="    letter-spacing: -0.0521vw;">华启天成的公司官网 华启天成总部坐落于深圳，生产基地位于河南、山西等地。公司致力于行业无人机的研发与制造，长期深耕应急消防与大载重运输等核心领域，凭借深厚的专业技术积累，已获得各类专利三百余项。</p>
          <p>先后荣获"世界无人机大会系统设计奖"、"2022、2023无人机行业贡献奖"、"2022、2023中国无人机应急领域十大品牌"、"2025中国低空经济领航者"、"2025中国低空经济标杆企业"、金翼奖"最佳应用案例奖"、"2025、2026UASE无人机展金鹰奖"、"2025十大低空整机制造企业"、"2025、2026十大低空应急救援企业"等在内的多项行业顶级荣誉。华启天成坚持以卓越性能和可靠品质，结合行业需求，为客户提供高效智能的解决方案。</p>
        </div>
      </div>
    </section>

    <!-- 数据统计 -->
    <section class="section stats-section" style="padding-top: 6vw;">
      <div class="container" style="    padding: 0px 15vw;">
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-icon">
              <img :src="statIcons.icon1" alt="深耕行业十余年" />
            </div>
            <div class="stat-number">13<span class="stat-plus">+</span></div>
            <div class="stat-label">深耕行业十余年</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <img :src="statIcons.icon2" alt="多元无人机及配套挂载产品" />
            </div>
            <div class="stat-number">60<span class="stat-plus">+</span></div>
            <div class="stat-label">多元无人机及配套挂载产品</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <img :src="statIcons.icon3" alt="已交付" />
            </div>
            <div class="stat-number"><span class="stat-plus1">超</span>10000<span class="stat-plus">+</span></div>
            <div class="stat-label">已交付</div>
          </div>
          <div class="stat-item">
            <div class="stat-icon">
              <img :src="statIcons.icon4" alt="服务客户" />
            </div>
            <div class="stat-number"><span class="stat-plus1">超</span>3000<span class="stat-plus">+</span></div>
            <div class="stat-label">服务客户</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 公司地址 -->
    <section class="section address-section" style="padding-top:.2vw;padding-bottom:0">
      <div class="container">
        <div class="address-content">
          <div class="address-info">
            <h3 class="address-title">公司地址</h3>
            <div class="address-list">
              <div class="address-item">
                <div class="address-icon">
                  <img :src="addressIcons.research" alt="研发中心" />
                </div>
                <div class="address-text">
                  <h4 class="address-name">研发中心</h4>
                  <p class="address-detail">深圳市龙华区观湖街道多彩科创园A座8层</p>
                </div>
              </div>
              <div class="address-item">
                <div class="address-icon">
                  <img :src="addressIcons.production1" alt="生产地址(河南)" />
                </div>
                <div class="address-text">
                  <h4 class="address-name">生产地址(河南)</h4>
                  <p class="address-detail">河南省新乡市红旗区智能制造创业园3号</p>
                </div>
              </div>
              <div class="address-item">
                <div class="address-icon">
                  <img :src="addressIcons.production2" alt="生产地址(山西)" />
                </div>
                <div class="address-text">
                  <h4 class="address-name">生产地址(山西)</h4>
                  <p class="address-detail">山西省忻州市岢岚县经济技术开发区新型产业园101号</p>
                </div>
              </div>
              <div class="address-item">
                <div class="address-icon">
                  <img :src="addressIcons.institute" alt="华启天成低空经济研究院" />
                </div>
                <div class="address-text">
                  <h4 class="address-name">华启天成低空经济研究院</h4>
                  <p class="address-detail">河南省郑州市郑州大学科技园创业街区4号楼三层</p>
                </div>
              </div>
            </div>
          </div>
          <div class="address-image">
            <img :src="companyPhoto" alt="公司照片" />
          </div>
        </div>
      </div>
    </section>

    <!-- 资质与荣誉 -->
    <section class="section qualifications-section" style="padding-bottom: 0;" >
      <div class="container">
        <h2 class="section-title">资质与荣誉</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle">技术驱动，以深厚的研发实力和丰富的项目经验铸就行业领先地位</p>
        
        <div class="qualifications-grid">
          <div class="qualification-item" style="width: 50vw;margin-right:8.7vw">
            <div class="qualification-image">
              <img :src="qualificationImages.patent" alt="核心专利" />
            </div>
            <h3 class="qualification-title">核心专利</h3>
            <p class="qualification-desc">掌握核心发明专利300余项</p>
          </div>
          <div class="qualification-item" style="width:22.55vw">
            <div class="qualification-image">
              <img :src="qualificationImages.trophy" alt="荣誉见证实" />
            </div>
            <h3 class="qualification-title">荣誉见证实</h3>
            <p class="qualification-desc">斩获十余项行业顶级荣誉</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 战略合作伙伴矩阵 -->
    <section class="section partners-section" >
      <div class="container" style="padding-left: 0;padding-right: 0;">
        <h2 class="section-title">战略合作伙伴矩阵</h2>
        <div class="section-divider"></div>
        <p class="section-subtitle" style="margin-bottom: 0;">汇聚多元力量 赋能持续成长</p>
        
        <div class="partners-image">
          <img :src="partnerImage" alt="战略合作伙伴" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// 图片资源导入
const heroBackground = new URL('../assets/home/关于我们/企业介绍/首页.png', import.meta.url).href
const companyPhoto = new URL('../assets/home/关于我们/企业介绍/公司照片.jpg', import.meta.url).href
const companyBg = new URL('../assets/home/关于我们/企业介绍/背景.png', import.meta.url).href
const partnerImage = new URL('../assets/home/关于我们/企业介绍/合作伙伴.jpg', import.meta.url).href

// 统计图标
const statIcons = {
  icon1: new URL('../assets/home/关于我们/企业介绍/图标一.png', import.meta.url).href,
  icon2: new URL('../assets/home/关于我们/企业介绍/图标二.png', import.meta.url).href,
  icon3: new URL('../assets/home/关于我们/企业介绍/图标三.png', import.meta.url).href,
  icon4: new URL('../assets/home/关于我们/企业介绍/图标一.png', import.meta.url).href
}

// 地址图标
const addressIcons = {
  research: new URL('../assets/home/关于我们/企业介绍/科研.png', import.meta.url).href,
  production1: new URL('../assets/home/关于我们/企业介绍/工厂.png', import.meta.url).href,
  production2: new URL('../assets/home/关于我们/企业介绍/工厂.png', import.meta.url).href,
  institute: new URL('../assets/home/关于我们/企业介绍/科研.png', import.meta.url).href
}

// 资质图片
const qualificationImages = {
  patent: new URL('../assets/home/关于我们/企业介绍/专利.png', import.meta.url).href,
  trophy: new URL('../assets/home/关于我们/企业介绍/奖杯.jpg', import.meta.url).href
}
</script>

<style scoped>
.about-page {
  min-height: 100vh;
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
  background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%);
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
  letter-spacing: 0.3125vw;
  animation: slideUp 0.8s ease-out forwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(1.0417vw);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------- 通用容器 ---------- */
.container {
  padding: 0 5.5vw 0 6vw;
}



.section-title {
  font-size: 2.604167vw;
  font-weight: bold;
  color: #000;
  text-align: center;
  margin-bottom: 0.520833vw;
}

.section-divider {
  width: 14vw;
  height: 0.10833vw;
  background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
  margin: 0 auto 0.69vw;
}

.section-subtitle {
  font-size: 1.041667vw;
  color: #999;
  text-align: center;
  margin-bottom: 3.125vw;
  margin-top:0;
}

/* ---------- 公司介绍 ---------- */
.company-section {
  position: relative;
  background: #fff;
  overflow: hidden;
}

.company-section .container {
  position: relative;
  z-index: 1;
  padding: 0.9vw 9.1vw 0 7.4vw;
}

.company-bg {
  position: absolute;
  top: 6.5vw;
  /* bottom: 5.5vw; */

  left: 0;
  width: 100%;
  height: 80%;
  object-fit: cover;
  object-position: center center;
  z-index: 0;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 55%, black 70%, transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 55%, black 70%, transparent 100%);
}



.company-inner {
  position: relative;
  z-index: 1;
}

.company-title {
  font-size: 2.87474vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 2.82vw;
  position: relative;
  padding-bottom: 1.041667vw;
}

.company-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 5vw;
  height: 0.1vw;
  background: linear-gradient(90deg, #22dbff, transparent);
}

.company-content {
  font-size:1.731771vw;
  color: #000;
  line-height: 2;
  text-align: justify;
}

.company-content p {
  margin-bottom:  3.1vw;
  line-height: 3.1vw;
}

/* ---------- 数据统计 ---------- */
.stats-section {
  background: #fff;
  padding: 4.166667vw 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.083333vw;
}

.stat-item {
  text-align: center;
  padding: 1.5vw 0;
}

.stat-icon {
  width:7.15vw;
  height:7.15vw;
  margin: 0 auto 1.3vw;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.stat-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.stat-item:nth-child(4) .stat-icon {
  border-color: #e0e0e0;
}

.stat-number {
  font-size: 3.255729vw;
  font-family: 'Noto Sans SC', 'Source Han Sans CN', sans-serif;
  font-weight: 500;
  color: #000;
  margin-bottom: 1.35vw;
  line-height: 1.2;
}

.stat-plus {
  font-size:2.355208vw;
  /* font-weight: inherit; */
  font-family: inherit;
}
.stat-plus1 {
  font-size:1.801042vw;
  /* font-weight: inherit; */
  font-family: inherit;
}

.stat-label {
  font-size:1.108333vw;
  color: #000;
  font-weight: 500;
  letter-spacing: 0.05vw;
}

/* ---------- 公司地址 ---------- */
.address-section    .container {
  /* background: #f8f9fa; */
}

.address-content {
  display: flex;
  gap: 4.166667vw;
  align-items: center;
  background: #f8f9fa;
  width: 86.1979vw;
  height: 32.0833vw;
  border-radius: 1.385417vw;
  overflow: hidden;
  padding-left: 5.5vw;
}

.address-info {
  flex: 1;
}

.address-title {
  font-size: 2.147396vw;
  font-weight: bold;
  color: #000;
  margin-bottom: 2.083333vw;
}

.address-list {
  display: flex;
  flex-direction: column;
  gap: 2.21vw;
}

.address-item {
  display: flex;
  align-items: center;
  gap: 0.5vw;
}

/* .address-icon {
  width: 2.604167vw;
  height: 2.604167vw;
  flex-shrink: 0;
  background: linear-gradient(135deg, #22dbff, #00b8e6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.520833vw;
}

.address-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: brightness(0) invert(1);
} */

.address-text {
  flex: 1;
}

.address-name {
  font-size: 1.385417vw;
  font-weight: bold;
  color: #00a5e1;
  margin-bottom: 0.3125vw;
}

.address-detail {
  font-size: 1.039063vw;
  color: #000;
  line-height: 1.5;
}

.address-image {
  width: 46.4583vw;
  height: 32.0833vw;
  flex-shrink: 0;
}

.address-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius:1.385417vw;
  box-shadow: 0 0.520833vw 1.5625vw rgba(0, 0, 0, 0.1);
}

/* ---------- 资质与荣誉 ---------- */
.qualifications-section {
  background: #fff;
  padding-bottom: 6.9vw;
}

.qualifications-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 3.125vw; */
}

.qualification-item {
  text-align: center;
}

.qualification-image {
  width: 100%;
  margin-bottom: 0.7vw;
}

.qualification-image img {
  width: 100%;
  height: auto;
  display: block;
}

.qualification-title {
  font-size: 1.316146vw;    
  font-weight: bold;
  color: #000;
  margin-bottom: 0.3vw;
}

.qualification-desc {
  font-size: 1.316146vw;
  color: #000;
}

/* ---------- 战略合作伙伴矩阵 ---------- */
.partners-section {
  /* background: #f8f9fa; */
  padding-top: 3.7vw;

  padding-bottom: 0;
}

.partners-image {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.partners-image img {
  width: auto;
  height: auto;
  display: block;
}

/* ---------- 响应式 ---------- */
@media (max-width: 1024px) {
  .hero-content {
    top: 15vw;
    left: 5vw;
  }

  .home-hero-title {
    font-size: 5vw;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2vw;
  }

  .stat-icon {
    width: 6vw;
    height: 6vw;
  }

  .stat-icon img {
    width: 3vw;
    height: 3vw;
  }

  .address-content {
    flex-direction: column;
  }

  .qualifications-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .hero-content {
    top: 20vw;
    left: 4vw;
  }

  .home-hero-title {
    font-size: 8vw;
  }

  .section {
    padding: 8vw 0;
  }

  .section-title {
    font-size: 5vw;
  }

  .section-subtitle {
    font-size: 3vw;
  }

  .company-title {
    font-size: 4vw;
  }

  .company-content {
    font-size: 3vw;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 4vw;
  }

  .stat-number {
    font-size: 5vw;
  }

  .stat-label {
    font-size: 2.5vw;
  }

  .address-title {
    font-size: 4vw;
  }

  .address-name {
    font-size: 3vw;
  }

  .address-detail {
    font-size: 2.5vw;
  }

  .qualification-title {
    font-size: 4vw;
  }

  .qualification-desc {
    font-size: 2.5vw;
  }
}
</style>