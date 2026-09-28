<template>
    <div class="payload-page">
        <!-- Hero 区域 -->
        <section class="hero-section">
            <div class="hero-bg">
                <img :src="payloadPage.heroImage" alt="载荷配件" class="hero-img" />
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <h1 class="hero-title">{{ payloadPage.heroTitle }}</h1>
            </div>
        </section>

        <!-- 选购挂载配件 -->
        <section class="payload-section">
            <h2 class="section-title">{{ payloadPage.sectionTitle }}</h2>
            <p class="section-subtitle payload-top-subtitle">{{ payloadPage.sectionSubtitle }}</p>

            <div class="payload-group" v-for="group in payloadPage.groups" :key="group.title">
                <h2 class="section-title">{{ group.title }}</h2>
                <div class="section-divider"></div>
                <p class="section-subtitle">{{ group.subtitle }}</p>

                <div class="payload-card" v-for="product in group.products" :key="product.anchor + product.badge"
                    :data-anchor="product.anchor" :id="'payload-' + product.anchor">
                    <div class="payload-photo">
                        <img :src="product.image" :alt="product.name" />
                    </div>
                    <div class="payload-info">
                        <div class="payload-head">
                            <h3 class="payload-name">{{ product.name }}<span class="payload-suffix" v-if="product.suffix">{{ product.suffix }}</span></h3>
                            <span class="platform-badge">{{ product.badge }}</span>
                        </div>
                        <div class="payload-rows">
                            <div class="payload-row" v-for="row in product.rows" :key="row.label">
                                <span class="row-label">{{ row.label }}</span>
                                <span class="row-value">{{ row.value }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { payloadPage } from '../../data/payloadData'

const route = useRoute()

// Hero 标题滑入动画时长（与 .hero-title 的 animation 保持一致）
const HERO_ANIM_MS = 900

// 滚动到目标产品卡片
// 元素可能因首屏编译 / 长图未加载而尚未渲染，这里用轮询等待，避免到点找不到元素就放弃
const scrollToProduct = (smooth = false, timeout = 6000) => {
    const type = route.query.type as string
    if (!type) return
    const start = Date.now()
    const doScroll = () => {
        const el = document.querySelector(`[data-anchor="${type}"]`) as HTMLElement | null
        if (!el) {
            if (Date.now() - start <= timeout) setTimeout(doScroll, 100)
            return
        }
        requestAnimationFrame(() => {
            // 导航栏固定高度约 113px，多留缓冲避免卡片顶部被遮挡
            const top = el.getBoundingClientRect().top + window.pageYOffset - 160
            window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
            // 长图加载完成后布局高度会变化，稍后再校正一次位置
            setTimeout(() => {
                const el2 = document.querySelector(`[data-anchor="${type}"]`) as HTMLElement | null
                if (!el2) return
                const top2 = el2.getBoundingClientRect().top + window.pageYOffset - 160
                window.scrollTo({ top: top2, behavior: smooth ? 'smooth' : 'auto' })
            }, 600)
        })
    }
    doScroll()
}

onMounted(() => {
    if (route.query.type) {
        // 带锚点进入：先让 Hero 标题滑入动画播完，再平滑滚动到目标卡片
        setTimeout(() => scrollToProduct(true), HERO_ANIM_MS + 100)
    } else {
        scrollToProduct()
    }
})

// 同页面内切换子菜单锚点：直接平滑滚过去即可（Hero 动画已播过）
watch(() => route.query.type, () => scrollToProduct(true))
</script>

<style scoped>
.payload-page {
    background: #f5f7fa;
}

/* ===== Hero（与产品详情页一致） ===== */
.hero-section {
    position: relative;
    width: 100%;
    overflow: hidden;
}

.hero-bg {
    position: relative;
    width: 100%;
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
    letter-spacing: 0.05vw;
}

.hero-title {
    font-size: 3.117188vw;
    font-weight: 900;
    color: #fff;
    text-align: center;
    margin-bottom: 0;
    text-shadow: 0 0.104vw 0.521vw rgba(0, 0, 0, 0.3);
    animation: hero-title-up 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) both; /* 从下方滑入 */
}

@keyframes hero-title-up {
    from {
        opacity: 0;
        transform: translateY(3.2vw);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===== 区块标题（复用产品详情页规格） ===== */
.payload-section {
    padding: 3.9vw 0;
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
    margin: 0 0 4.65vw;
}

.payload-top-subtitle {
    margin-bottom: 5.6vw;
        margin-top: 1.2vw;
}

/* ===== 分组 ===== */
.payload-group + .payload-group {
    margin-top: 4vw;
}

/* ===== 产品卡片 ===== */
.payload-card {
    display: flex;
    align-items: stretch;
    width: 70.05vw;
    margin: 0 auto 2.5vw;
    background: #fff;
    border-radius: 0.42vw;
    /* box-shadow: 0 0.1vw 0.4vw rgba(30, 50, 80, 0.04); */
    border: 2px solid #e0e0e0;
}

.payload-card:last-child {
    margin-bottom: 0;
}

.payload-photo {
    flex: none;
    align-self: center; /* 右侧信息列更高时，照片框在卡片内垂直居中 */
    width: 20.78vw;
    height: 13.96vw;
    margin: 2.34vw 0 2.34vw 3.49vw;
    background: #f6f7f9;
    border-radius: 0.21vw;
    overflow: hidden;
    cursor: zoom-in; /* 鼠标移到图片上提示可放大 */
}

.payload-photo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease; /* 悬停放大动画 */
}

/* 仅当鼠标悬停在图片本身时才放大 */
.payload-photo:hover img {
    transform: scale(1.08);
}

.payload-info {
    flex: 1;
    min-width: 0;
    margin-left: 6.98vw;
    padding: 2.2vw 3.44vw 1.8vw 0;
}

.payload-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.85vw;
}

.payload-name {
    font-size: 1.667vw;
    font-weight: bold;
    color: #1f1f1f;
    margin: 0;
    line-height: 1.3;
}

.payload-suffix {
    font-size: 1.1vw;
    font-weight: 400;
    color: #999;
    margin-left: 0.2vw;
}

/* 徽章与「两款飞行平台可选」一致 */
.platform-badge {
    flex: none;
    display: inline-block;
    background: #e3f5fd;
    color: #0ccefb;
    font-size: 1.094vw;
    font-weight: 400;
    height: 1.979vw;
    line-height: 1.979vw;
    padding: 0 0.55vw;
    border-radius: 0.21vw;
    white-space: nowrap;
}

/* ===== 参数行 ===== */
.payload-rows {
    min-width: 0;
}

.payload-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.4vw;
    border-bottom: 0.073vw dashed #dadada;
}

.payload-row:last-child {
    border-bottom: none;
}

.row-label {
    font-size: 1.146vw;
    color: #999;
    flex: none;
}

.row-value {
    font-size: 1.146vw;
    color: #000;
    text-align: right;
    /* 长参数允许换行，行内居中 */
    line-height: 1.5;
    padding-left: 2vw;
}

/* ===== 移动端 ===== */
@media (max-width: 768px) {
    .payload-card {
        flex-direction: column;
        width: 92vw;
        padding: 3vw;
    }

    .payload-photo {
        width: 100%;
        height: 52vw;
        margin: 0 0 3vw;
    }

    .payload-info {
        margin-left: 0;
        padding: 0;
    }

    .payload-name {
        font-size: 4.2vw;
    }

    .payload-suffix {
        font-size: 2.8vw;
    }

    .platform-badge {
        font-size: 2.9vw;
        height: 6.4vw;
        line-height: 6.4vw;
        padding: 0 2vw;
        border-radius: 0.8vw;
    }

    .payload-row {
        height: auto;
        min-height: 8.6vw;
        padding: 1.2vw 0;
    }

    .row-label,
    .row-value {
        font-size: 3.4vw;
    }
}
</style>
