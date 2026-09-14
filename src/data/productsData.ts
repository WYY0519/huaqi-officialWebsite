// 产品数据配置
export interface ProductData {
  name: string
  heroTitle: string
  introTitle: string
  introText: string
  heroImage: string
  introImage: string
  stats: Array<{ value: string; unit: string; label: string }>
  advantages: Array<{ icon: string; title: string; desc: string }>
  specsData: Array<{ label1: string; value1: string; label2: string; value2: string }>
  scenarios: Array<{ title: string; image: string }>
  cases: Array<{ title: string; image: string }>
}

// 图标资源（共用）
const icons = {
  icon1: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/图标1.png', import.meta.url).href,
  icon2: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/图标2.png', import.meta.url).href,
  icon3: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/图标3.png', import.meta.url).href,
  icon4: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/图标4.png', import.meta.url).href,
}

export const productsData: Record<string, ProductData> = {
  H400: {
    name: 'H400',
    heroTitle: 'H400 行业级无人机',
    introTitle: 'H400',
    introText: '采用高强度碳纤维+航空铝一体化架构，4轴8桨冗余动力设计，最大载重200kg，兼顾重载能力与飞行可靠性。适配消防灭火、应急投送、工业物流、科研载荷等多场景作业需求，是大载重低空作业的旗舰级解决方案。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/首页 拷贝.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/H400多种负载.844.jpg', import.meta.url).href,
    stats: [
      { value: '200', unit: 'kg', label: '最大有效载重' },
      { value: '60', unit: 'min', label: '空载极限续航' },
      { value: '7', unit: '级', label: '抗风能力' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: icons.icon1, title: '200kg级载重', desc: '200kg标准载重能力，可搭载大型灭火装备、应急物资与工程工具，平衡作业效率与采购成本。' },
      { icon: icons.icon2, title: '四轴八桨冗余', desc: '4轴8桨动力冗余设计，单组动力故障仍可稳定飞行，多重安全机制保障复杂环境作业可靠性。' },
      { icon: icons.icon3, title: '折叠便携部署', desc: '折叠后机身尺寸大幅缩减，普通车辆即可运输转场，快速抵达作业现场。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '-20℃至60℃宽温工作，7级强风稳定飞行，5000米高海拔适配，无惧复杂环境作业挑战。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '20m/s' },
      { label1: '旋翼布局', value1: '4轴8桨', label2: '最大飞行海拔', value2: '5000m' },
      { label1: '螺旋桨规格', value1: '73寸直桨', label2: '可抗风等级', value2: '7级' },
      { label1: '整机轴距', value1: '3000mm', label2: '工作温度', value2: '-20℃ ~ 60℃' },
      { label1: '展开尺寸', value1: '4010*3980*860mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '折叠尺寸', value1: '3380*1270*1090mm', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '标准载重', value1: '200kg', label2: '空机质量', value2: '103kg' },
      { label1: '空载续航', value1: '60min', label2: '动力系统', value2: 'FOC高效动力系统' },
      { label1: '载重200kg续航', value1: '22min', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
    ],
    scenarios: [
      { title: '森林消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用1.png', import.meta.url).href },
      { title: '高空消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用2.png', import.meta.url).href },
      { title: '电力工程施工', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用3.png', import.meta.url).href },
      { title: '场地勘测搭载', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/交付3.png', import.meta.url).href },
    ],
  },
  H200: {
    name: 'H200',
    heroTitle: 'H200 行业级无人机',
    introTitle: 'H200',
    introText: '采用高强度碳纤维与航空铝一体化机身，6轴12桨冗余动力架构，搭配49寸折叠桨设计，兼顾100kg载重能力与便携转场优势。空载最长续航55分钟，7级强风稳定飞行，广泛适用于消防灭火、应急投送、工业物流等多元作业场景。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/A.jpg', import.meta.url).href,
    stats: [
      { value: '100', unit: 'kg', label: '最大有效载重' },
      { value: '55', unit: 'min', label: '空载极限续航' },
      { value: '7', unit: '级', label: '抗风能力' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: icons.icon1, title: '100kg级载重', desc: '100kg标准载重能力，可搭载大型灭火装备、应急物资与工程工具，平衡作业效率与采购成本。' },
      { icon: icons.icon2, title: '六轴十二桨冗余', desc: '6轴12桨动力冗余设计，单组动力故障仍可稳定飞行，多重安全机制保障复杂环境作业可靠性。' },
      { icon: icons.icon3, title: '折叠便携部署', desc: '折叠后机身尺寸大幅缩减，普通车辆即可运输转场，快速抵达作业现场。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '-20℃至60℃宽温工作，7级强风稳定飞行，5000米高海拔适配，无惧复杂环境作业挑战。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '20m/s' },
      { label1: '旋翼布局', value1: '6轴12桨', label2: '最大飞行海拔', value2: '5000m' },
      { label1: '螺旋桨规格', value1: '49寸折叠桨', label2: '可抗风等级', value2: '7级' },
      { label1: '整机轴距', value1: '2600mm', label2: '工作温度', value2: '-20℃ ~ 60℃' },
      { label1: '展开尺寸', value1: '2800*2415*1100mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '折叠尺寸', value1: '1480*1310*1100mm', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '标准载重', value1: '100kg', label2: '空机质量', value2: '63kg' },
      { label1: '空载续航', value1: '55min', label2: '动力系统', value2: 'FOC高效动力系统' },
      { label1: '载重100kg续航', value1: '20min', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
    ],
    scenarios: [
      { title: '森林消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用1.png', import.meta.url).href },
      { title: '高空消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用2.png', import.meta.url).href },
      { title: '电力工程施工', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用3.png', import.meta.url).href },
      { title: '场地勘测搭载', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H200/交付3.png', import.meta.url).href },
    ],
  },
  F140: {
    name: 'F140',
    heroTitle: 'F140 行业级无人机',
    introTitle: 'F140',
    introText: '采用高强度碳纤维+航空铝一体化机身，6轴6桨成熟动力架构，搭配49寸折叠桨设计，32kg轻量化机身兼顾70kg载重能力与灵活转场优势。空载最长续航45分钟，7级强风稳定飞行，是中小体量载重作业场景的高性价比之选。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/A1.jpg', import.meta.url).href,
    stats: [
      { value: '70', unit: 'kg', label: '最大有效载重' },
      { value: '45', unit: 'min', label: '最长空载续航' },
      { value: '7', unit: '级', label: '抗风能力' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标1.png', import.meta.url).href, title: '轻量化易部署', desc: '空载仅32kg，紧凑折叠结构设计，折叠后体积小巧，普通车辆即可运输转场，2人即可快速完成部署，大幅提升作业灵活性。' },
      { icon: icons.icon2, title: '稳定动力架构', desc: '6轴6桨成熟动力布局，搭配FOC高效动力系统，动力输出强劲平稳，7级强风环境下仍可保持稳定飞行姿态，作业可靠性高。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标3.png', import.meta.url).href, title: '多载荷灵活适配', desc: '标准化快接口设计，兼容消防灭火、应急投送、地质监测测量多类作业载荷，一机多用，有效降低设备采购成本。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '-20℃至60℃宽温工作，5000米高海拔适配，IP55工业级防护，山地、高原、高温严寒等复杂环境均可稳定作业。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '20m/s' },
      { label1: '旋翼布局', value1: '6轴6桨', label2: '最大飞行海拔', value2: '5000m' },
      { label1: '螺旋桨规格', value1: '49寸折叠桨', label2: '可抗风等级', value2: '7级' },
      { label1: '整机轴距', value1: '2480mm', label2: '工作温度', value2: '-20℃ ~ 60℃' },
      { label1: '展开尺寸', value1: '2640*2310*1350mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '折叠尺寸', value1: '1370*1195*1350mm', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '标准载重', value1: '70kg', label2: '空机质量', value2: '32kg' },
      { label1: '空载续航', value1: '45min', label2: '动力系统', value2: 'FOC高效动力系统' },
      { label1: '载重70kg续航', value1: '17min', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
    ],
    scenarios: [
      { title: '森林消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用1.png', import.meta.url).href },
      { title: '高空消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用2.png', import.meta.url).href },
      { title: '电力工程施工', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用3.png', import.meta.url).href },
      { title: '地质勘测搭载', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/交付3.png', import.meta.url).href },
    ],
  },
}

// 获取产品数据
export function getProduct(slug: string): ProductData | undefined {
  return productsData[slug]
}

// 获取所有产品 slug 列表
export function getAllProductSlugs(): string[] {
  return Object.keys(productsData)
}
