<template>
    <div class="news-page">
        <!-- 静态Hero大图 -->
        <section class="hero-section">
            <div class="hero-bg">
                <img :src="heroBackground" alt="新闻中心" class="hero-img" />
            </div>
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <p class="home-hero-title">新闻中心</p>
            </div>
        </section>

        <!-- 分类标签栏 -->
        <section class="section categories-section">
            <div class="container">
                <div class="categories-container">
                    <div class="categories-scroll">
                        <button v-for="category in categories" :key="category"
                            :class="['category-btn', { active: activeCategory === category }]"
                            @click="setActiveCategory(category)">
                            {{ category }}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- 新闻列表 -->
        <div class="news-gap" style="background-color: #ffffff; width: 100%;"></div>
        <section class="section news-section">
            <div class="container">
                <div class="news-container">
                    <div class="news-list">
                        <div v-for="news in filteredNews" :key="news.id"
                            :class="['news-item']">
                            <div :class="['news-item-back', { expanded: expandedNewsId === news.id }]">
                                <!-- 收起时：单行布局 -->
                                <div class="news-header-collapsed">
                                    <div class="news-meta">
                                        <div class="news-date-collapsed">
                                            <span>{{ news.month.replace('-', '.') }}.{{ news.day }}</span>
                                        </div>
                                        <span class="news-category-tag">{{ news.category }}</span>
                                        <h3 class="news-title-collapsed">{{ news.title }}</h3>
                                    </div>
                                    <div class="expand-icon" @mouseenter="cancelClosePreview(); hoveredNewsId = news.id" @mouseleave="startClosePreview()" @click.stop="hoveredNewsId = null">
                                        <svg width="4.166667vw" height="4.166667vw" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 10L12 15L17 10" stroke="#333" stroke-width="1"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <!-- 悬浮预览 -->
                                <div class="news-hover-preview" v-show="hoveredNewsId === news.id" @mouseenter="cancelClosePreview()" @mouseleave="startClosePreview()">
                                    <div class="news-hover-content">
                                        <img v-if="getFirstImage(news)" :src="getFirstImage(news)" class="news-hover-image" />
                                        <div class="news-hover-text">
                                            <p class="news-hover-summary">{{ news.summary }}</p>
                                            <span class="news-hover-link" @click.stop="expandAndClosePreview(news.id)">阅读全文 →</span>
                                        </div>
                                    </div>
                                </div>

                                <!-- 展开时：保持原来的布局 -->
                                <div class="news-header-expanded">
                                    <div class="news-meta">
                                        <div class="news-date">
                                            <span class="day">{{ news.day }}</span>
                                            <span class="month-year">{{ news.month }}</span>
                                        </div>
                                        <span class="news-category-tag">{{ news.category }}</span>
                                    </div>
                                    <div class="expand-icon" @click.stop="toggleExpand(news.id)">
                                        <svg width="4.166667vw" height="4.166667vw" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 10L12 15L17 10" stroke="#00D4FF" stroke-width="1"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                <h3 class="news-title">{{ news.title }}</h3>

                                <p class="news-summary">{{ news.summary }}</p>

                                <div class="news-content">
                                    <template v-for="(item, itemIndex) in news.content" :key="itemIndex">
                                        <img v-if="item.type === 'image'" :src="(item as any).src" :alt="`${news.title} - 图片${itemIndex + 1}`" class="news-content-image" />
                                        <p v-else-if="item.type === 'text'" class="news-content-text" :class="{ 'news-note-last': (item as any).text.startsWith('△') }">{{ (item as any).text }}</p>
                                    </template>
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
import { ref, computed } from 'vue';

// 图片资源导入
const heroBackground = new URL('../assets/home/关于我们/新闻动态/首页.png', import.meta.url).href;

// 分类数据
const categories = ['全部新闻', '公司动态', '产品发布', '展会活动', '行业资讯', '荣誉资质'];
const activeCategory = ref('全部新闻');

// 新闻数据
const newsData = ref([
    {
        id: 1,
        day: '11',
        month: '2026-03',
        category: '公司动态',
        title: '新乡市委书记李卫东莅临华启天成实地调研 精准赋能企业高质量发展',
        summary: '3月11号，市委书记李卫东深入红旗区、长垣市、原阳县、封丘县、延津县，实地调研项目建设、复工复产、企业生产运营等工作。市领导祁文华、李德龙一同调研。',
        content: [
            { type: 'text', text: '在红旗区智能制造创业园，李卫东详细了解园区建设进展、入驻企业生产经营状况，强调要坚持科技创新引领产业创新，深化产学研协同发展，加速科技成果转化落地，塑造发展新动能新优势。' },
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/市委书记/市委书记1.png', import.meta.url).href },
            { type: 'text', text: '其间，李卫东一行莅临华启天成调研，详细了解公司经营、无人机核心业务及未来规划，倾听诉求并提出指导意见。' },
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/市委书记/市委书记2.png', import.meta.url).href },
            { type: 'text', text: '以下为新乡广播电视台视频号发布的调研现场实况，直观了解此次视察调研详情：' },
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/市委书记/市委书记3.png', import.meta.url).href },
            { type: 'text', text: '李卫东强调，各级各部门要深入学习全国两会精神，切实增强“抓项目就是抓发展”的意识，主动服务、精准服务，引导企业加大创新投入、优化产品结构、拓展市场空间，全面提升核心竞争力，推动实体经济高质量发展，为“十五五”开好局、起好步提供坚实支撑。' },
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/市委书记/市委书记4.png', import.meta.url).href },
                    ]
    },
    {
        id: 2,
        day: '16',
        month: '2026-06',
        category: '公司动态',
        title: '携手“十五五”向新向未来｜华启天成无人机参展第七届跨国公司领导人青岛峰会',
        summary: '6月16日，第七届跨国公司领导人青岛峰会正式启幕。本届峰会以“跨国公司与中国 —— 携手‘十五五’向新向未来”为主题，汇聚来自36个国家和地区的435位企业嘉宾，举办29场主体活动，聚焦科技创新、绿色低碳、数字经济等前沿赛道，搭建全球资本与国内产业生态共建的高能级对话平台。通过聚焦人工智能、低空经济、新型储能等前沿领域举办专题对接，引导跨国公司以先进技术、管理经验，深度参与传统产业智能化、绿色化升级。',
        content: [
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/十五五/十五五1.png', import.meta.url).href },
            { type: 'text', text: '当前全球产业链深度重构，峰会以高水平制度型开放，为跨国企业与国内产业搭建协同发展桥梁。历经六届沉淀，峰会累计签约投资项目632个，总投资757.3亿美元，已有236家世界500强企业在山东落地947个外资项目，持续印证全球资本对中国市场、山东产业配套的长期信心。' },
            { type: 'text', text: '作为深耕低空经济领域的行业装备企业，华启天成Q20、Q40垂直起降固定翼无人机受邀参与本次峰会现场展示，面向来自36个国家和地区的跨国企业嘉宾，直观呈现行业无人机在能源巡检、应急处置、城市治理、生态监测等多元场景的低空智能作业解决方案。' },
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/十五五/十五五2.png', import.meta.url).href },
            { type: 'text', text: '展会期间，企业依托峰会开放交流平台，与多国客商围绕科技创新、低空产业国际化协同、场景落地等方向开展沟通交流。峰会带来的开放合作窗口，也让我们清晰看到，低空经济正成为国内外企业协同创新、优势互补的全新赛道。' },
            { type: 'text', text: '从2019年首届峰会的破冰启航，到如今第七届的全面升级，跨国公司领导人青岛峰会已不止于一座城市、一个省份的开放窗口，更成为全球资本感知中国经济脉动、校准投资航向的重要坐标。' },
            { type: 'text', text: '开放的大门越开越大，合作的道路越走越宽。当全球产业链在不确定性中寻找确定性，青岛峰会给出的答案清晰而坚定：向新，是共同的奔赴；向未来，是彼此的承诺。华启天成愿与所有跨国伙伴一道，乘峰会之势，驭低空之风，在这场全球资本与中国产业的“共同进化”中，飞得更高，行得更远。' }
        ]
    },
    {
        id: 3,
        day: '10',
        month: '2026-04',
        category: '公司动态',
        title: '赋能警务实战 助力消防救援 | 华启天成无人机筑牢边疆立体化安全防线',
        summary: '近日，华启天成一批定制化无人机及消防、军警系列挂载装备在新疆某特警大队顺利完成交付验收。该批定制化装备主要面向应急处突、消防救援等场景，旨在为复杂环境下的任务执行提供技术装备支持。',
        content: [
            { type: 'text', text: '新疆地域辽阔，地形复杂多样，特殊的地理环境和安保需求，对军警部队的响应与处置能力产生了客观压力。传统处置模式中，人员巡逻范围有限、危险系数较高，复杂地形下的火情扑救、应急救援也面临多重技术难题。此次交付的定制化无人机及多系列挂载装备，以科技之力破局，在较大程度上拓展了军警消防在复杂环境下的现场处置能力。' },
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/赋能武警/赋能武警1.png', import.meta.url).href },
            { type: 'text', text: '搭载95式发射器的无人机具备一定距离内的精准打击能力，可用于承担实战、训练任务，辅助模拟暴恐等特殊突发场景下的非接触式警示及处置作业，以降低人员近距离接触风险、积累战术动作与装备协同经验，为后续实战应用打牢基础。同时，结合无人机的高空侦察功能，可辅助快速定位目标、排查周边隐患，为地面警力部署提供参考信息，形成“空中侦察+地面处置”的立体化防控模式，提升特警队伍的应急处突效率。' },
            { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/赋能武警/赋能武警2.png', import.meta.url).href },
            { type: 'text', text: '灭火弹、灭火罐、消防水枪（水带）等系列挂载结合消防无人机的投入使用，突破传统灭火装备的多方局限。针对高层火灾、山林火情或人员难以靠近的危险火场，无人机可快速升空，抛投灭火弹覆盖火源，实现“点对点”精准灭火，形成有效隔离带；无人机搭载消防水枪（水带）连接地面供压设备，向火场喷射消防泡沫或水剂，降温控火，阻断火势蔓延；应急降落伞则为无人机飞行安全提供双重保障，以上多种“空中灭火”方案，极大程度地解决了复杂地形下的防灭火难题，与各地消防救援部门探索的无人机智能消防体系形成呼应，以科技手段提升灾情处置能力。+地面处置”的立体化防控模式，提升特警队伍的应急处突效率。' },
          { type: 'image', src: new URL('../assets/home/关于我们/新闻动态/赋能武警/赋能武警3.png', import.meta.url).href },
            { type: 'text', text: '近年来，随着低空经济的快速发展，无人机已成为军警消防领域的“全能战友”，从巡逻防控、侦察取证到应急救援、火情处置，科技装备的应用正在重塑工作模式，推动军警消防工作从“人力主导”向“科技驱动”转型升级。华启天成通过对军警消防需求的深刻洞察，将科技与实战场景融合，依托核心技术积累，打造定制化、高性能的多场景解决方案，助力军警部队提升实战能力，为守护边疆稳定、保障人民安全贡献力量。+地面处置”的立体化防控模式，提升特警队伍的应急处突效率。' },

        ]
    },
    // {
]);

// 展开的新闻ID
const expandedNewsId = ref<number | null>(null); // 默认全部收起
const hoveredNewsId = ref<number | null>(null); // 当前hover的新闻

// 按日期排序（最新在前）
const sortedNewsData = computed(() => {
    return [...newsData.value].sort((a, b) => {
        const dateA = new Date(`${a.month}-${a.day}`);
        const dateB = new Date(`${b.month}-${b.day}`);
        return dateB.getTime() - dateA.getTime(); // 降序，最新在前
    });
});

let hoverTimeout: ReturnType<typeof setTimeout> | null = null;

// 开始关闭预览的延时
const startClosePreview = () => {
    hoverTimeout = setTimeout(() => {
        hoveredNewsId.value = null;
    }, 200);
};

// 取消关闭预览
const cancelClosePreview = () => {
    if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
    }
};

// 计算过滤后的新闻
const filteredNews = computed(() => {
    if (activeCategory.value === '全部新闻') {
        return sortedNewsData.value;
    }
    return sortedNewsData.value.filter(news => news.category === activeCategory.value);
});

// 设置活跃分类
const setActiveCategory = (category: string) => {
    activeCategory.value = category;
    expandedNewsId.value = null;
};

// 获取首张图片
const getFirstImage = (news: any) => {
    const imageItem = news.content?.find((item: any) => item.type === 'image');
    return imageItem ? imageItem.src : null;
};

// 展开并关闭预览
const expandAndClosePreview = (newsId: number) => {
    cancelClosePreview();
    hoveredNewsId.value = null;
    expandedNewsId.value = newsId;
};

// 点击展开/合上
const toggleExpand = (newsId: number) => {
    if (expandedNewsId.value === newsId) {
        expandedNewsId.value = null;
    } else {
        expandedNewsId.value = newsId;
    }
};
</script>

<style scoped>
.news-page {
    min-height: 100vh;
    background: #fff;
}

.section {
    padding: 5.2vw 0 6.9vw;
}

/* ---------- 静态Hero大图 ---------- */
.hero-section {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin-top: 0;
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
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%);
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
    padding: 0 5.5vw 0 7vw;
}

/* ---------- 分类标签栏 ---------- */
.categories-section {
    padding-top: 6.2vw;
    padding-bottom: 2.4vw;
}

.categories-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
}

.categories-scroll {
    display: flex;
    gap: 2.5vw;
    flex-wrap: wrap;
    justify-content: center;
    background: #fff;
    border-radius: 0.5vw;
}

.category-btn {
    padding: 0.65vw 1.9vw;
    border: none;
    border-radius: 2vw;
    background: #f3f6f9;
    font-size: 1.316146vw;
    cursor: pointer;
    transition: all 0.3s ease;
    white-space: nowrap;
}

.category-btn:hover {
    border-color: #00D4FF;
    color: #00D4FF;
}

.category-btn.active {
    background: linear-gradient(135deg, #22dbff, #00b8e6);
    color: #fff;
    font-weight: 500;
    border-color: transparent;
}

/* ---------- 新闻列表 ---------- */
.news-gap {
    width: 100%;
    background: #fff;
    margin: 0;
    padding: 0;
}

.news-section {
    background: #fff !important;
    padding-top: 0 !important;
    padding-bottom: 3vw;
    position: relative;
}

.news-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4vw;
    background: #fff;
    z-index: -1;
}

.news-container {
    max-width: 100%;
    overflow: hidden;
    background: #fff;
}



.news-item {
    background: #fff;
    padding: 1.1vw 1.35vw;
    border-top: 2px solid #bbb;
}
.news-item-back {
    border-radius: 0;
    /* padding: 1.6vw 3.2vw 1.8vw 3.2vw; */
    box-shadow: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

.news-item-back:hover {
    box-shadow: none;
    border-color: #e0e0e0;
}

.news-item-back.expanded {
    padding: 1.6vw 3.2vw 1.8vw 14.4vw;
    background: #f3f6f9;
}

.news-ite:last-child {
    border-bottom: none;
}

/* 收起时的header */
.news-header-collapsed {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 0.5vw 0;
}

/* 展开时的header */
.news-header-expanded {
    display: none;
}

/* 展开时切换显示 */
.news-item-back.expanded .news-header-collapsed {
    display: none;
}

.news-item-back.expanded .news-header-expanded {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.news-meta {
    display: flex;
    align-items: center;
    gap: 2vw;
    flex: 1;
    min-width: 0;
}

.news-date {
    display: flex;
    align-items: baseline;
    gap: 1vw;
}

.news-date .day {
    font-size: 1.316146vw;
    font-weight: bold;
    color: #00D4FF;
}

.news-date .month-year {
    font-size: 1.316146vw;
    color: #424243;
}

.news-category-tag {
    padding: 0.1vw 1.4vw;
    /* border: 1px solid #00D4FF; */
    border-radius: 0.5vw;
    color: #09ccf7;
    font-size: 1.041667vw;
    background: transparent;
    background-color: #e8f7fd;
}

.expand-icon {
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.5vw;
    height: 4vw;
    flex-shrink: 0;
}

.news-item-back.expanded .news-header-collapsed .expand-icon,
.news-item-back.expanded .news-header-expanded .expand-icon {
    transform: rotate(180deg);
}

/* 收起时标题样式 */
.news-title-collapsed {
    font-size: 1.350781vw;
    font-weight: bold;
    color: #333;
    margin: 0;
    line-height: 1.7;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    flex: 1;
}

/* 收起时日期样式 */
.news-date-collapsed {
    font-size: 1.316146vw;
    font-weight: bold;
    color: #333;
    white-space: nowrap;
}

/* 收起时分类标签黑色文字+无背景 */
.news-header-collapsed .news-category-tag {
    color: #333;
    background-color: transparent;
}

/* 展开时恢复蓝色样式 */
.news-header-expanded .news-date .day {
    color: #00D4FF;
}

.news-header-expanded .news-date .month-year {
    color: #424243;
}

.news-header-expanded .news-category-tag {
    color: #09ccf7;
    background-color: #e8f7fd;
}

.news-header-expanded .expand-icon svg path {
    stroke: #00D4FF;
}

/* 悬浮预览 */
.news-hover-preview {
    padding: 1.2vw 0;
    cursor: pointer;
}

.news-hover-content {
    display: flex;
    gap: 1.5vw;
    align-items: flex-start;
}

.news-hover-image {
    width: 16vw;
    height: 10vw;
    object-fit: cover;
    flex-shrink: 0;
    border-radius: 0;
}

.news-hover-text {
    flex: 1;
    min-width: 0;
}

.news-hover-summary {
    font-size: 0.833333vw;
    color: #666;
    line-height: 1.6;
    margin: 0 0 0.6vw 0;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: justify;
}

.news-hover-link {
    font-size: 0.833333vw;
    color: #333;
    cursor: pointer;
}

.news-hover-link:hover {
    color: #00D4FF;
}

/* 展开时标题 */
.news-title {
    font-size: 1.350781vw;
    font-weight: bold;
    color: #333231;
    margin-bottom: 0.6vw;
    margin-right: 10vw;
    line-height: 1.7;
}

/* 展开时才显示标题和摘要 */
.news-item-back:not(.expanded) .news-title,
.news-item-back:not(.expanded) .news-summary {
    display: none;
}

/* 展开时隐藏hover预览 */


.news-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease;
    margin-top: 1vw;
}

.news-item-back.expanded .news-content {
    max-height: 200vw;
    /* 足够大的值确保内容完全展开 */
}

.news-summary {
    font-size: 0.969792vw;
    color: #727272;
    line-height: 1.75;
    margin-bottom: 0;
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding-right: 10vw;
}

/* .news-item-back.expanded .news-summary {
    -webkit-line-clamp: unset;
    line-clamp: unset;
    margin-bottom: 1.4vw;
    margin-right: 10vw;
} */

.news-content-image {
    width: 52.6042vw;
    height: 35vw;
    object-fit: cover;
    border-radius: 0;
    margin-bottom: 1.5vw;
    display: block;
    margin-left: 19px;
}
.news-content-text {
    font-size: 0.969792vw;
    color: #727272;
    line-height: 1.75;
    text-align: justify;
    margin-right: 10vw;
    margin-top: 0;
    padding-bottom: 1.5vw;
}

.news-note-last {
    color: #999;
    font-style: italic;
    margin-top: 2vw;
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

    .category-btn {
        padding: 1vw 3vw;
        font-size: 1.5vw;
        border-radius: 2.5vw;
    }

    .news-item {
        padding: 3vw;
    }

    .news-date .day {
        font-size: 3vw;
    }

    .news-date .month-year {
        font-size: 1.5vw;
    }

    .news-category-tag {
        font-size: 1.2vw;
        padding: 0.4vw 1.2vw;
    }

    .news-title {
        font-size: 2.2vw;
    }

    .news-summary {
        font-size: 1.5vw;
    }

    .news-content-image {
        width: 100%;
        height: auto;
    }

    .news-content-text {
        font-size: 1.4vw;
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

    .categories-scroll {
        gap: 2vw;
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 2vw;
        -webkit-overflow-scrolling: touch;
    }

    .category-btn {
        padding: 1.5vw 4vw;
        font-size: 2.5vw;
        border-radius: 3vw;
    }

    .news-item {
        padding: 4vw;
        border-radius: 2vw;
    }

    .news-header {
        flex-direction: column;
        gap: 1.5vw;
    }

    .news-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: 1vw;
    }

    .news-date .day {
        font-size: 5vw;
    }

    .news-date .month-year {
        font-size: 2.5vw;
    }

    .news-category-tag {
        font-size: 2vw;
        padding: 0.6vw 1.5vw;
        border-radius: 1vw;
    }

    .news-title {
        font-size: 3.5vw;
    }

    .news-summary {
        font-size: 2.5vw;
    }

    .news-content-image {
        width: 100%;
        height: auto;
    }

    .news-content-text {
        font-size: 2.4vw;
    }
}
</style>