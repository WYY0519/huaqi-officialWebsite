<template>
    <div class="product-page" v-if="product">
        <!-- Hero 区域 -->
        <section class="hero-section">
            <div class="hero-bg">
                <img :src="product.heroImage" :alt="product.heroTitle" class="hero-img" />
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title"><span class="highlight">{{ product.name }}</span> 行业级无人机</h1>
            </div>
        </section>

        <!-- 参数统计栏 -->
        <div class="hero-stats-wrapper">
            <div class="hero-stats">
                <div class="stat-item" v-for="(stat, index) in product.stats" :key="index">
                    <span class="stat-value">{{ stat.value }} <span style="font-size: 1.385417vw;">{{ stat.unit }}</span> </span>
                    <span class="stat-label">{{ stat.label }}</span>
                </div>
            </div>
        </div>

        <!-- 产品介绍 -->
        <section class="intro-section">
            <div class="container">
                <h2 class="section-title">{{ product.introTitle }}</h2>
                <p class="intro-text">{{ product.introText }}</p>
                <div class="intro-image">
                    <img :src="product.introImage" :alt="`${product.name} 作业场景`" />
                </div>
            </div>
        </section>

        <!-- 核心产品优势 -->
        <section class="advantages-section">
            <div class="container">
                <h2 class="section-title">核心产品优势</h2>
                <div class="section-divider"></div>
                <p class="section-subtitle">载重能力与机动灵活兼备，以可靠性能适配多元作业场景</p>
                <div class="advantages-grid">
                    <div class="advantage-card" v-for="(item, index) in product.advantages" :key="index">
                        <div class="advantage-icon">
                            <img :src="item.icon" :alt="item.title" />
                        </div>
                        <h3 class="advantage-title">{{ item.title }}</h3>
                        <p class="advantage-desc">{{ item.desc }}</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 技术参数 -->
        <section class="specs-section">
            <div class="container">
                <h2 class="section-title" style="padding-left: 0.2vw;">技术参数</h2>
                <div class="section-divider"></div>
                <p class="section-subtitle">全维度性能指标，定义工业级作业标准</p>
                <div class="specs-table-wrapper">
                    <table class="specs-table">
                        <tbody>
                            <tr v-for="(row, index) in product.specsData" :key="index">
                                <td class="spec-label">{{ row.label1 }}</td>
                                <td class="spec-value">{{ row.value1 }}</td>
                                <td class="spec-label border-left">{{ row.label2 }}</td>
                                <td class="spec-value">{{ row.value2 }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- 场景应用覆盖 -->
        <section class="scenarios-section">
            <div class="container">
                <h2 class="section-title">场景应用覆盖</h2>
                <div class="section-divider"></div>
                <p class="section-subtitle">重载能力赋能多行业，解锁低空作业新可能</p>
                <div class="scenarios-grid">
                    <div class="scenario-card" v-for="(item, index) in product.scenarios" :key="index">
                        <div class="scenario-image">
                            <img :src="item.image" :alt="item.title" />
                        </div>
                        <div class="scenario-overlay">
                            <h3 class="scenario-title">{{ item.title }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 交付与飞行案例 -->
        <section class="cases-section">
            <div class="container">
                <h2 class="section-title">交付与飞行案例</h2>
                <div class="section-divider"></div>
                <p class="section-subtitle">覆盖消防、应急、林业等多个领域，落地实战验证产品实力</p>
                <div class="cases-grid">
                    <div class="case-card" v-for="(item, index) in product.cases" :key="index">
                        <img :src="item.image" :alt="item.title" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- 404 产品不存在 -->
    <div class="product-not-found" v-else>
        <h1>产品不存在</h1>
        <p>您访问的产品页面不存在，请返回首页查看产品列表。</p>
        <router-link to="/" class="back-home">返回首页</router-link>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProduct } from '../../data/productsData'

// 思源黑体（Noto Sans SC 为思源黑体的开源版本，与 Source Han Sans CN 同款字形）
// 随本页懒加载，不影响首屏；按页面实际用到的字重引入
import '@fontsource/noto-sans-sc/400.css'
import '@fontsource/noto-sans-sc/700.css'
import '@fontsource/noto-sans-sc/900.css'

const route = useRoute()
const slug = computed(() => route.params.slug as string)
const product = computed(() => getProduct(slug.value))
</script>

<style scoped>
/* 基础样式 */
.product-page {
    width: 100%;
    overflow-x: hidden;
    /* 思源黑体：Noto Sans SC（Web Font，已随本页加载）= Source Han Sans CN 同款字形 */
    font-family: 'Noto Sans SC', 'Source Han Sans CN', -apple-system, BlinkMacSystemFont,
        'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', Arial, sans-serif;
}

.container {
    margin: 0 auto;
    padding: 0 0.7vw;
}

/* Hero 区域 */
.hero-section {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.hero-bg {
    position: relative;
    width: 100%;
    /* 与其他页面(About/AfterSales 等)保持一致：40.73vw；统计栏平铺在下，不遮挡 */
    height: 40.73vw;
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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.4) 100%);
}

.hero-content {
 position: absolute;
    top: 33.1vw;
    width: 100%;
}

.hero-title {
    font-size: 3.117188vw;
    font-weight: 900;
    color: #fff;
    text-align: center;
    margin-bottom: 0;
    text-shadow: 0 0.104vw 0.521vw rgba(0, 0, 0, 0.3);
}

.hero-title .highlight {
    color: #00D4FF;
}

.hero-stats-wrapper {
    position: relative;
    width: 100%;
    z-index: 10;
        padding: 0 1vw 0 9vw;
}

.hero-stats {
    display: flex;
    /* gap: 6.25vw; */
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 20.4vw;
    border-right: 2px solid #f3f6f9;
    padding: 1.7vw 0 2.1vw;

}
.stat-item:last-child {
    border-right: none
}
.stat-value {
    font-size:2.563021vw;
    font-weight: 900;
    color: #000;
    line-height: 1.2;
    letter-spacing: -0.052vw;
}

.stat-label {
    font-size:1.039063vw;
    color: #adb1b5;
    margin-top: 0.21vw;
    letter-spacing: 0.052vw;
}

/* 产品介绍 */
.intro-section {
    padding: 3.8vw 0 5.208vw;
    background: #f3f6f9;
}

/* 介绍图按原尺寸 1229×687 显示：放宽容器，使内容区达 1229px（1229 + 20×2 = 1269px） */
.intro-section .container {
    max-width: 66.09vw;
}

.section-title {
    font-size: 2.87474vw;
    font-weight: 900;
    color: #000;
    text-align: center;
    margin-bottom: 0.2vw;
}

.section-divider {
    width: 14vw;
    height: 0.10833vw;
    background: linear-gradient(to right, transparent 0%, #00D4ff 10%, #00D4ff 90%, transparent 100%);
    margin: 0 auto 0.63333vw;
}

.section-subtitle {
    font-size: 1.041667vw;
    color: #999;
    text-align: center;
    margin-bottom: 4.65vw;
    margin-top: 0;
}

.intro-text {
    font-size:1.039063vw;
    color: #b2b6ba;
    text-align: center;
    margin-bottom: 1.4vw;
    font-weight: 500;
}

.intro-image {
    width: 100%;
    /* 原图 1229×687 → 1229/19.2 = 64.01vw */
    max-width: 64.01vw;
    margin: 0 auto;
    overflow: hidden;
    box-shadow: 0 0.208vw 1.042vw rgba(0, 0, 0, 0.1);
}

.intro-image img {
    width: 100%;
    height: auto;
    /* 锁定原图比例 1229:687，预留空间避免加载时布局抖动 */
    aspect-ratio: 1229 / 687;
    display: block;
}

/* 核心优势 */
.advantages-section {
      padding: 3.85vw 0 5vw;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
        gap: 1.1vw;
    padding: 0 7.2vw 0 8vw;
}

.advantage-card {
    background: #fff;
    border-radius: 0.625vw;
    padding: 1.6vw 1vw 3.75vw;
    text-align: center;
    transition: all 0.3s ease;
    border: 0.052vw solid #d9d9d9;
}

.advantage-card:hover {
    transform: translateY(-0.26vw);
    box-shadow: 0 0.521vw 1.563vw rgba(0, 0, 0, 0.1);
}

.advantage-icon {
    width: 4.167vw;
    height: 4.167vw;
    margin: 0 auto 0.65vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.042vw;
}

.advantage-icon img {
      width: 3.604vw;
    height: 3.604vw;
}

.advantage-title {
    font-size: 1.177604vw;
    font-weight: 900;
    color: #333;
    margin-bottom: 0.4vw;
}

.advantage-desc {
    font-size: 0.83125vw;
    line-height: 1.35;
    color: #adb1b5;
    font-weight: 600;
    text-align: left; /* 描述文字左对齐（卡片整体仍居中） */
}

/* 技术参数 */
.specs-section {
    padding: 3.9vw 0 8.4vw;
    background: #f0f2f5;
}

/* 参数表按设计宽度 1571px 显示：放宽容器（1571 + 20×2 = 1611px） */
.specs-section .container {
    max-width: 83.91vw;
}

.specs-table-wrapper {
    /* 设计尺寸 1571×598 → 81.823vw × 31.146vw
       min-height 保证模块高度达标；不足部分由白色背景补足（与表格同色，无视觉差异），
       内容超出时自然增高，不会被 overflow:hidden 裁剪 */
    max-width: 81.823vw;
    min-height: 31.146vw;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 0.052vw 0.208vw rgba(0, 0, 0, 0.06);
}

.specs-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed; /* 固定布局：列宽严格按设定值等分，不受单元格内容长短影响 */
}

.specs-table tr {
    /* 9 行等分模块高度 598px → 每行 66.4px = 3.46vw，保证各行高度完全一致 */
    height: 3.46vw;
    border-bottom: 0.15vw solid #dcdbdc;
}

/* .specs-table tr:last-child {
    border-bottom: none;
} */

.specs-table tr:nth-child(even) {
    background: #fafbfc;
}

.specs-table td {
    /* 上下不设 padding（行高由 tr 的 height 统一控制），左右保留内距 */
    padding: 0 1.1vw;
    font-size: 0.781vw;
    vertical-align: middle; /* 文字在固定行高内垂直居中 */
}

.spec-label {
    font-size: 0.900521vw   !important;
    color: #adadad;
    background: transparent;
    font-weight: 500;
    width: 25%; /* 四列等宽 */
}

.spec-label.border-left {
    border-left:  0.15vw solid #dcdbdc;
}

.spec-value {
    font-size: 0.900521vw  !important;
    color: #000;
    font-weight: 500;
    width: 25%; /* 四列等宽（原 margin-right 对 td 无效，已移除） */
}

/* 场景应用 */
.scenarios-section {
    padding: 3.85vw 0 5vw;
    background: #fff;
}

/* 4 张卡片 ×378 + 3 个间距 ×20 = 1572px：容器放宽到与参数表一致(1611px) */
.scenarios-section .container {
    max-width: 83.91vw;
}

.scenarios-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.042vw;
}

.scenario-card {
    position: relative;
    border-radius: 0.625vw;
    overflow: hidden;
    /* 原比例 378:284（≈4:3）；宽度由 grid 分配，高度按此比例自动推导 */
    aspect-ratio: 378 / 284;
    cursor: pointer;
}

.scenario-image {
    width: 100%;
    height: 100%;
}

.scenario-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.scenario-card:hover .scenario-image img {
    transform: scale(1.1);
}

.scenario-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 1.563vw 1.35vw 1.042vw;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.scenario-title {
    font-size:1.523958vw;
    font-weight: 600;
    color: #fff;
}

/* 交付案例 */
.cases-section {
    padding: 3.87vw 0 5vw;
    background: #f8f9fa;
}

/* 3 张卡片 ×499 + 2 个间距 ×36.48(1.9vw) ≈ 1570px：容器需 1610px(83.85vw) */
.cases-section .container {
    max-width: 83.85vw;
}

.cases-grid {
    display: grid;
    /* 每列固定 499px(25.99vw)，配合 gap 1.9vw 正好填满内容区 */
    grid-template-columns: repeat(3, 25.99vw);
    gap: 1.9vw;
    justify-content: center;
}

.case-card {
    /* 固定尺寸 499×456 @1920 → 499/19.2 = 25.99vw，456/19.2 = 23.75vw */
    width: 25.99vw;
    height: 23.75vw;
    border-radius: 0.417vw;
    overflow: hidden;
}

.case-card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* 产品不存在 */
.product-not-found {
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 5.208vw 1.042vw;
}

.product-not-found h1 {
    font-size: 1.875vw;
    color: #333;
    margin-bottom: 1.042vw;
}

.product-not-found p {
    font-size: 0.938vw;
    color: #666;
    margin-bottom: 1.563vw;
}

.back-home {
    padding: 0.625vw 1.563vw;
    background: #00D4FF;
    color: #fff;
    text-decoration: none;
    border-radius: 0.313vw;
    font-size: 0.833vw;
    transition: background 0.3s;
}

.back-home:hover {
    background: #00B8E6;
}

/* 响应式 */
@media (max-width: 1024px) {
    .hero-stats {
        gap: 3.906vw;
        padding: 2.441vw 2.93vw;
    }
    
    .stat-value {
        font-size: 3.516vw;
    }
    
    .advantages-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .scenarios-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .hero-title {
        font-size: 4.167vw;
    }
    
    .hero-stats {
        flex-wrap: wrap;
        gap: 3.906vw;
        padding: 2.604vw;
    }
    
    .stat-item {
        width: calc(50% - 1.953vw);
    }
    
    .section-title {
        font-size: 5vw;
    }
    
    .section-divider {
        width: 23vw;
        height: 0.3vw;
    }
    
    .section-subtitle {
        font-size: 3vw;
    }
    
    .advantages-grid,
    .scenarios-grid {
        grid-template-columns: 1fr;
    }
    
    .cases-grid {
        grid-template-columns: 1fr;
    }
    
    .specs-table td {
        padding: 1.563vw 1.953vw;
        font-size: 1.693vw;
    }
}
</style>
