import { ref } from 'vue'

export const solutionScenes = ref([
  { title: '城市消防', sub: '高空灭火 · 危化处置 · 生命搜救', desc: '解决传统消防"够不着、进不去、响应慢"的核心痛点，突破150米高度完成超高层建筑精准灭火任务，响应时效缩短60%，集成热成像搜救模块，穿透浓烟锁定被困人员，开辟紧急救援通道。', tags: ['高层灭火', '危化品处置', '人员搜救'], link: '#' },
  { title: '森林消防', sub: '火情预警 · 精准灭火 · 安全巡护', desc: '破解传统森林消防"巡护难、响应慢、风险高"三大难题，紧扣森林防火打早、打小、打了处置原则，依托无人机替代人工实现24小时全域火情监控，发现初起火源即刻远程精准投弹灭火，响应速度提升3倍以上。立足早期火情快速处置，从源头遏制火势蔓延，大幅降低救援人员伤亡风险、压缩灭火作业成本。', tags: ['精准灭火', '火情预警', '安全巡护'], link: '#' },
  { title: '挂载系列适配', sub: '快速部署 · 无缝兼容 · 多场景覆盖', desc: '适配大疆FC200/FC100/T200/T100/M400及自研多系列无人机飞行平台；快装快拆，满足消防灭火、应急救援、物资运输、高空清洗等多元化作业需求。', tags: ['消防协作', '精准投送', '物资运输', '应急救援'], link: '#' },
  { title: '高空清洗', sub: '建筑幕墙 · 高层外立面', desc: '替代高危"蜘蛛人"作业，免搭绳索脚手架，规避高空坠落风险；四款喷头按需切换、多航线模式可选，长效续航＋高清摄像实时监测，强效除污，综合人力成本直降80%。', tags: ['建筑幕墙', '风电叶片', '桥梁检测'], link: '#' },
  { title: '光伏清洗', sub: '全场景光伏电站', desc: '智能识别污渍，精准调控水量，2.2米宽幅喷淋与高压双摇摆清洗模式随意切换；可自主规划清洗航线，缩减运维工期，清洗后的光伏板发电量至高提升15-30%。', tags: ['光伏电站', '桥梁检测'], link: '#' },
  { title: '科研定制服务', sub: '地质勘测 · 气象探测 · 生态调研', desc: '面向科研领域的定制化无人机平台，具备多载荷集成能力与高精度数据采集性能，可满足环境监测、野外科研等作业要求。可根据实际科研任务进行专项开发，覆盖地质勘测、气象探测、生态调研等应用场景，提供专业解决方案。', tags: ['平台定制', '载荷开发', '算法适配', '联合开发'], link: '#' },
])

export const companyStats = ref([
  { value: '275', unit: '项', label: '核心发明专利' },
  { value: '36', unit: '个', label: '软件著作权' },
  { value: '3000', unit: '+', label: '政企标杆客户' },
  { value: '10000', unit: '+', label: '落地实施项目' },
  { value: '2', unit: 'h', label: '紧急响应时效' },
])

export const techCards = ref([
  { title: '飞控研发', desc: '自研多旋翼/固定翼飞控系统，支持全自主飞行、智能避障、编队协同，累计飞行超50万架次零重大事故。', tag: '275+项专利', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="28" height="28"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>' },
  { title: '载荷兼容', desc: '模块化载荷快拆接口，兼容可见光、红外、激光雷达、喊话器、探照灯、灭火弹等38余种任务载荷。', tag: '38+种载荷', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="28" height="28"><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/><circle cx="12" cy="13" r="2"/></svg>' },
  { title: '工业防护', desc: '中雨可飞，-20°C至55°C宽温工作，抗7级强风，防电磁干扰，满足全天候工业级作业需求。', tag: 'IP55防护', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="28" height="28"><path d="M12 2l-7 4v6c0 5 3.5 9.7 7 11 3.5-1.3 7-6 7-11V6l-7-4z"/></svg>' },
  { title: '定制开发', desc: '从需求分析到方案落地，提供软硬件一体化定制服务，支持OEM/ODM最快30天交付原型。', tag: '30天交付', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="28" height="28"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z"/><path d="M5 12l6 6L3 21l3-8z"/></svg>' },
])

export const products = ref([
  { id: 1, name: 'HW-200', spec: '多旋翼工业无人机', image: '/images/products/drone1.svg' },
  { id: 2, name: 'HW-300', spec: '垂直起降固定翼无人机', image: '/images/products/drone2.svg' },
  { id: 3, name: 'HW-400', spec: '大型工业无人机', image: '/images/products/drone3.svg' },
  { id: 4, name: 'HW-500', spec: '特种作业无人机', image: '/images/products/drone4.svg' },
  { id: 5, name: 'HW-600', spec: '农业植保无人机', image: '/images/products/drone5.svg' },
  { id: 6, name: 'HW-700', spec: '测绘专用无人机', image: '/images/products/drone6.svg' },
])

export const coverageItems = ref([
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="32" height="32"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z"/><path d="M5 12l6 6L3 21l3-8z"/></svg>', label: '定制研发', desc: '从需求调研到方案设计，提供软硬件定制开发服务，持OEM/ODM合作模式。', tag: '30天交付' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="32" height="32"><path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/></svg>', label: '技术支持', desc: '7X24小时技术响应，提供远程诊断、现场支援、系统升级等全周期技术服务。', tag: '7x24h' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="32" height="32"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>', label: '培训认证', desc: '专业飞行操作培训、载荷使用培训、维护保养培训。', tag: '持证上岗' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="32" height="32"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>', label: '售后保障', desc: '整机1年质保，终身技术支持。', tag: '1年质保' },
  { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="#00cefc" stroke-width="1.8" width="32" height="32"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>', label: '现场演示', desc: '支持全国范围上门演示，真实场景飞行验证，让客户亲眼见证产品实力。', tag: '免费上门' },
])

export const newsItems = ref([
  { id: 1, title: '深耕消防应急   聚焦实战应用', excerpt: '新乡市消防救援局局长刘增民一行莅临华启天成开展无人机专项调研', date: '2026.05.26', category: '行业展会', image: '/images/news/news1.svg', isHot: true, link: '#' },
  { id: 2, title: '华启天成亮相2025深圳国际无人机展，RT100旗舰机型获创新金奖', excerpt: '', date: '2026.05.26', category: '行业展会', image: '/images/news/news2.svg', isHot: false, link: '#' },
  { id: 3, title: '华启天成亮相2026世界无人机大会 | 斩获双奖实力出圈', excerpt: '', date: '2025.05.22', category: '行业展会', image: '/images/news/news3.svg', isHot: false, link: '#' },
  { id: 4, title: '华启天成关于落实"无人机运行识别"及"实名登记"新规相关事宜的公告', excerpt: '', date: '2026.04.30', category: '行业新规', image: '/images/news/news4.svg', isHot: false, link: '#' },
])

export const trustedBrands = ref(['中国邮政', '顺丰速运', '中国石油', '中国移动', '国家电网', '中国中铁', '中国电建', '中国石化'])
