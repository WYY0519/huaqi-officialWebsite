import { ref } from 'vue';

export const solutionScenes = ref([
  {
    title: '城市消防',
    sub: '高空灭火 · 危化处置 · 生命搜救',
    desc: '解决传统消防"够不着、进不去、响应慢"的核心痛点，突破150米高度完成超高层建筑精准灭火任务，响应时效缩短60%，集成热成像搜救模块，穿透浓烟锁定被困人员，开辟紧急救援通道。',
    tags: ['高层灭火', '危化品处置', '人员搜救'],
    link: '#',
  },
  {
    title: '森林消防',
    sub: '火情预警 · 精准灭火 · 安全巡护',
    desc: '破解传统森林消防"巡护难、响应慢、风险高"三大难题，紧扣森林防火打早、打小、打了处置原则，依托无人机替代人工实现24小时全域火情监控，发现初起火源即刻远程精准投弹灭火，响应速度提升3倍以上。立足早期火情快速处置，从源头遏制火势蔓延，大幅降低救援人员伤亡风险、压缩灭火作业成本。',
    tags: ['精准灭火', '火情预警', '安全巡护'],
    link: '#',
  },
  {
    title: '挂载系列适配',
    sub: '快速部署 · 无缝兼容 · 多场景覆盖',
    desc: '适配大疆FC200/FC100/T200/T100/M400及自研多系列无人机飞行平台；快装快拆，满足消防灭火、应急救援、物资运输、清洗系列等多元化作业需求。',
    tags: ['消防协作', '精准投送', '物资运输', '应急救援'],
    link: '#',
  },
  {
    title: '清洗系列',
    sub: '建筑幕墙 · 高层外立面 · 全场景光伏电站',
    desc: [
      '替代人工作业，杜绝高空坠落隐患；双清洗模式+四款快拆喷头，智能识污控水，增效降本，安全可靠。',
      '适配全场景光伏电站，自主规划清洗航线，宽幅+高压双摇摆模式自由切换，清洗后光伏板发电量提升15%-30%。',
    ],
    tags: ['光伏电站', '风电叶片', '桥梁检测'],
    link: '#',
  },
  {
    title: '固定翼巡检系列',
    sub: '长航时 · 模块化 · 快速部署',
    desc: '多机型适配各类工况，可按需搭载任务载荷，覆盖山地、平原、矿区、电力等多种巡检场景，兼顾灵活性能与作业效率。',
    tags: ['长距巡护', '全域航测', '高效作业'],
    link: '#',
  },
  {
    title: '系留系列',
    sub: '长时电力供应 · 应急照明 · 中继通信',
    desc: '突破传统续航限制，系留供电7*24h，满足夜间抢险、工程施工、应急救援、安保防控、影视照明等多元化作业需求。',
    tags: ['应急照明', '安保执勤', '工程补光', '夜间巡检'],
    link: '#',
  },
  {
    title: '科研定制服务',
    sub: '地质勘测 · 气象探测 · 生态调研',
    desc: '面向科研领域的定制化无人机平台，具备多载荷集成能力与高精度数据采集性能，可满足环境监测、野外科研等作业要求。可根据实际科研任务进行专项开发，覆盖地质勘测、气象探测、生态调研等应用场景，提供专业解决方案。',
    tags: ['平台定制', '载荷开发', '算法适配', '联合开发'],
    link: '#',
  },
]);

export const companyStats = ref([
  { value: '275', unit: '项', label: '核心发明专利' },
  { value: '36', unit: '个', label: '软件著作权' },
  { value: '3000', unit: '+', label: '政企标杆客户' },
  { value: '10000', unit: '+', label: '落地实施项目' },
  { value: '2', unit: 'h', label: '紧急响应时效' },
]);

const techIconA = new URL('../assets/home/图标/a.png', import.meta.url).href;
const techIconB = new URL('../assets/home/图标/b.png', import.meta.url).href;
const techIconC = new URL('../assets/home/图标/c.png', import.meta.url).href;
const techIconD = new URL('../assets/home/图标/d.png', import.meta.url).href;

export const techCards = ref([
  {
    title: '飞控研发',
    desc: '自研多旋翼/固定翼飞控系统，支持全自主飞行、智能避障、编队协同，累计飞行超50万架次零重大事故。',
    tag: '275+项专利',
    icon: techIconA,
  },
  {
    title: '载荷兼容',
    desc: '模块化载荷快拆接口，兼容可见光、红外、激光雷达、喊话器、探照灯、灭火弹等38余种任务载荷。',
    tag: '38+种载荷',
    icon: techIconB,
  },
  {
    title: '工业防护',
    desc: '中雨可飞，-20°C至55°C宽温工作，抗7级强风，防电磁干扰，满足全天候工业级作业需求。',
    tag: 'IP55防护',
    icon: techIconD,
  },
  {
    title: '定制开发',
    desc: '从需求分析到方案落地，提供软硬件一体化定制服务，支持OEM/ODM最快30天交付原型。',
    tag: '30天交付',
    icon: techIconC,
  },
]);

export const products = ref([
  {
    id: 1,
    name: '无人机消防车',
    spec: '一体化消防装备',
    image: new URL('../assets/home/旗舰矩阵/1.png', import.meta.url).href,
  },
  {
    id: 2,
    name: 'H400',
    spec: '行业无人机',
    image: new URL('../assets/home/旗舰矩阵/2.png', import.meta.url).href,
  },
  {
    id: 3,
    name: 'WRCQ-32A',
    spec: '固定翼无人值守停机舱',
    image: new URL('../assets/home/旗舰矩阵/3.png', import.meta.url).href,
  },
  {
    id: 4,
    name: 'Q150',
    spec: '固定翼无人机',
    image: new URL('../assets/home/旗舰矩阵/4.png', import.meta.url).href,
  },
  {
    id: 5,
    name: 'TF100',
    spec: '行业级无人机',
    image: new URL('../assets/home/旗舰矩阵/5.png', import.meta.url).href,
  },
  {
    id: 6,
    name: 'F100-QX-D',
    spec: '光伏清洗无人机',
    image: new URL('../assets/home/旗舰矩阵/6.png', import.meta.url).href,
  },
  {
    id: 7,
    name: 'QX-1',
    spec: '高空清洗无人机',
    image: new URL('../assets/home/旗舰矩阵/7.png', import.meta.url).href,
  },
  {
    id: 8,
    name: '一体式系留无人机',
    spec: '系留无人机',
    image: new URL('../assets/home/旗舰矩阵/8.png', import.meta.url).href,
  },
  {
    id: 9,
    name: '消防水枪',
    spec: '适配大疆挂载',
    image: new URL('../assets/home/旗舰矩阵/9.png', import.meta.url).href,
  },
  {
    id: 10,
    name: '消防水桶',
    spec: '适配大疆挂载',
    image: new URL('../assets/home/旗舰矩阵/10.png', import.meta.url).href,
  },
]);

const coverageIconF = new URL('../assets/home/图标/f.png', import.meta.url).href;
const coverageIconG = new URL('../assets/home/图标/g.png', import.meta.url).href;
const coverageIconQ = new URL('../assets/home/图标/q.png', import.meta.url).href;
const coverageIconW = new URL('../assets/home/图标/w.png', import.meta.url).href;
const coverageIconR = new URL('../assets/home/图标/r.png', import.meta.url).href;

export const coverageItems = ref([
  {
    icon: coverageIconF,
    label: '定制研发',
    desc: '从需求调研到方案设计，提供软硬件定制开发服务，持OEM/ODM合作模式。',
    tag: '30天交付',
  },
  {
    icon: coverageIconG,
    label: '技术支持',
    desc: '7X24小时技术响应，提供远程诊断、现场支援、系统升级等全周期技术服务。',
    tag: '7x24h',
  },
  { icon: coverageIconQ, label: '培训认证', desc: '专业飞行操作培训、载荷使用培训、维护保养培训。', tag: '持证上岗' },
  { icon: coverageIconW, label: '售后保障', desc: '整机1年质保，终身技术支持。', tag: '1年质保' },
  {
    icon: coverageIconR,
    label: '现场演示',
    desc: '支持全国范围上门演示，真实场景飞行验证，让客户亲眼见证产品实力。',
    tag: '免费上门',
  },
]);

export const newsItems = ref([
  {
    id: 1,
    title: '深耕消防应急   聚焦实战应用',
    excerpt: '新乡市消防救援局局长刘增民一行莅临华启天成开展无人机专项调研',
    date: '2026.05.26',
    category: '行业展会',
    image: new URL('../assets/home/新闻模块/a.png', import.meta.url).href,
    isHot: true,
    link: '#',
  },
  {
    id: 2,
    title: '华启天成亮相2025深圳国际无人机展，RT100旗舰机型获创新金奖',
    excerpt: '',
    date: '2026.05.26',
    category: '行业展会',
    image: new URL('../assets/home/新闻模块/b 拷贝.jpg', import.meta.url).href,
    isHot: false,
    link: '#',
  },
  {
    id: 3,
    title: '华启天成亮相2026世界无人机大会 | 斩获双奖实力出圈',
    excerpt: '',
    date: '2025.05.22',
    category: '行业展会',
    image: new URL('../assets/home/新闻模块/c.png', import.meta.url).href,
    isHot: false,
    link: '#',
  },
  {
    id: 4,
    title: '华启天成关于落实"无人机运行识别"及"实名登记"新规相关事宜的公告',
    excerpt: '',
    date: '2026.04.30',
    category: '行业新规',
    image: new URL('../assets/home/新闻模块/d.png', import.meta.url).href,
    isHot: false,
    link: '#',
  },
]);

export const trustedBrands = ref([
  '中国邮政',
  '顺丰速运',
  '中国石油',
  '中国移动',
  '国家电网',
  '中国中铁',
  '中国电建',
  '中国石化',
]);
