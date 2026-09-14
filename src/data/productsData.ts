// 产品数据配置
export interface ProductData {
  name: string
  heroTitle: string
  /** Hero 标题后缀，缺省为「行业级无人机」（如固定翼机场填「固定翼机场」） */
  heroType?: string
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
  F100: {
    name: 'F100',
    heroTitle: 'F100 行业级无人机',
    introTitle: 'F100',
    introText: '采用高强度碳纤维+航空铝一体化机身，6轴6桨成熟动力架构，搭配43寸折叠桨设计，兼顾50kg载重能力与长续航表现。FOC高效动力系统加持，7级强风稳定飞行，通用挂载接口适配多类作业载荷，是工业级重载作业的高性价比主力机型。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/A.jpg', import.meta.url).href,
    stats: [
      { value: '50', unit: 'kg', label: '最大有效载重' },
      { value: '60', unit: 'min', label: '最长空载续航' },
      { value: '7', unit: '级', label: '抗风能力' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: icons.icon1, title: '50kg重载能力', desc: '标准50kg载重能力，可搭载中型灭火装备、作业工具与多类任务载荷，满足多类工业场景重载作业需求。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/图标2.png', import.meta.url).href, title: '长航时作业', desc: 'FOC高效动力系统优化能耗，空载最长续航60分钟，载重50kg仍可实现22分钟续航，保障作业时长。' },
      { icon: icons.icon3, title: '折叠便携部署', desc: '43寸折叠桨设计，折叠后机身尺寸大幅缩减，普通车辆即可运输转场，双人快速完成起飞前部署。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '-20℃至60℃宽温工作，7级强风稳定飞行，5000米高海拔适配，IP55工业防护，复杂环境可靠作业。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '20m/s' },
      { label1: '旋翼布局', value1: '6轴6桨', label2: '最大飞行海拔', value2: '5000m' },
      { label1: '螺旋桨规格', value1: '43寸折叠桨', label2: '可抗风等级', value2: '7级' },
      { label1: '整机轴距', value1: '2300mm', label2: '工作温度', value2: '-20℃ ~ 60℃' },
      { label1: '展开尺寸', value1: '2460*2150*1100mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '折叠尺寸', value1: '1330*1140*1100mm', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '标准载重', value1: '50kg', label2: '空机质量', value2: '30kg' },
      { label1: '空载续航', value1: '60min', label2: '动力系统', value2: 'FOC高效动力系统' },
      { label1: '载重50kg续航', value1: '22min', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
    ],
    scenarios: [
      { title: '森林消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用1.png', import.meta.url).href },
      { title: '高空消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用2.png', import.meta.url).href },
      { title: '电力工程施工', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用3.png', import.meta.url).href },
      { title: '地质勘测搭载', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/交付3.png', import.meta.url).href },
    ],
  },
  F60: {
    name: 'F60',
    heroTitle: 'F60 行业级无人机',
    introTitle: 'F60',
    introText: '采用高强度碳纤维+航空铝一体化机身，6轴6桨成熟动力架构，搭配34寸折叠桨设计，19kg超轻机身兼顾30kg载重能力与灵活部署优势。FOC高效动力系统加持，空载续航50分钟，7级强风稳定飞行，是轻载作业场景的高性价比优选机型。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/F60/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/F60/A.jpg', import.meta.url).href,
    stats: [
      { value: '30', unit: 'kg', label: '最大有效载重' },
      { value: '50', unit: 'min', label: '空载极限续航' },
      { value: '7', unit: '级', label: '抗风能力' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标1.png', import.meta.url).href, title: '超轻便携部署', desc: '空机仅19kg，搭配34寸折叠桨设计，折叠后体积小巧，单人即可背负转运，抵达现场快速展开起飞，适配突发应急场景。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/图标2.png', import.meta.url).href, title: '长航时作业', desc: 'FOC高效动力系统优化能耗，空载续航可达50分钟，载重30kg仍有20分钟续航，保障巡检、测绘等长时作业需求。' },
      { icon: icons.icon1, title: '30kg重载能力', desc: '标准30kg载重能力，可搭载小型灭火装备、作业工具与多类任务载荷，满足多数轻载工业场景作业需求。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '-20℃至60℃宽温工作，7级强风稳定飞行，5000米高海拔适配，IP55工业防护，复杂环境可靠作业。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '20m/s' },
      { label1: '旋翼布局', value1: '6轴6桨', label2: '最大飞行海拔', value2: '5000m' },
      { label1: '螺旋桨规格', value1: '34寸折叠桨', label2: '可抗风等级', value2: '7级' },
      { label1: '整机轴距', value1: '1840mm', label2: '工作温度', value2: '-20℃ ~ 60℃' },
      { label1: '展开尺寸', value1: '2115*1840*1100mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '折叠尺寸', value1: '1300*1120*1100mm', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '标准载重', value1: '30kg', label2: '空机质量', value2: '19kg' },
      { label1: '空载续航', value1: '50min', label2: '动力系统', value2: 'FOC高效动力系统' },
      { label1: '载重30kg续航', value1: '20min', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
    ],
    scenarios: [
      { title: '森林消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用1.png', import.meta.url).href },
      { title: '高空消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用2.png', import.meta.url).href },
      { title: '电力工程施工', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用3.png', import.meta.url).href },
      { title: '地质勘测搭载', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F60/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F60/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/F60/交付3.png', import.meta.url).href },
    ],
  },
  RT100: {
    name: 'RT100',
    heroTitle: 'RT100 行业级无人机',
    introTitle: 'RT100',
    introText: '整机采用四轴八旋翼布局，纯电动力系统，搭配插拔模块化设计与空气动力学机身。搭载工业级飞控、RTK差分定位系统、毫米波雷达避障，兼顾30kg载重能力与精准作业性能，可快速适配消防、巡检、测绘等多类型挂载设备。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/RT100/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/RT100/A.jpg', import.meta.url).href,
    stats: [
      { value: '30', unit: 'kg', label: '最大有效载重' },
      { value: '40', unit: 'min', label: '空载续航' },
      { value: '±0.05', unit: 'm', label: '定位精度' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/RT100/图标1.png', import.meta.url).href, title: '毫米波雷达避障', desc: '搭载毫米波雷达避障系统，可全天候、多环境精准感知障碍物，自主规避飞行风险，保障建筑、林区等复杂场景作业安全。' },
      { icon: icons.icon2, title: '四轴八桨冗余', desc: '四轴八旋翼动力布局，单组动力故障仍可稳定飞行，搭配工业级飞控系统，动力输出强劲平稳，大幅提升复杂环境作业可靠性。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标3.png', import.meta.url).href, title: '插拔模块化设计', desc: '采用插拔式模块化载荷接口设计，支持多类型挂载设备快速切换，无需复杂调试，分钟级完成任务载荷更换，一机多用降低成本。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/RT100/图标4.png', import.meta.url).href, title: '高精度RTK定位', desc: 'RTK差分定位系统，定位精度达±0.05m，支持多模卫星定位，实现厘米级精准作业，满足精准投送、测绘等高精度场景需求。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '20m/s' },
      { label1: '旋翼布局', value1: '4轴8桨', label2: '最大飞行海拔', value2: '5000m' },
      { label1: '螺旋桨规格', value1: '43寸折叠桨', label2: '工作温度', value2: '-20℃ ~ 60℃' },
      { label1: '整机轴距', value1: '2000mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '展开尺寸', value1: '1540*1540*760mm', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '折叠尺寸', value1: '870*830*760mm', label2: '空机质量', value2: '32kg' },
      { label1: '标准载重', value1: '30kg', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
      { label1: '空载续航', value1: '40min', label2: '', value2: '' },
    ],
    scenarios: [
      { title: '森林消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用1.png', import.meta.url).href },
      { title: '高空消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用2.png', import.meta.url).href },
      { title: '电力工程施工', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用3.png', import.meta.url).href },
      { title: '地质勘测搭载', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/RT100/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/RT100/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/RT100/交付3.png', import.meta.url).href },
    ],
  },
  'X6-10': {
    name: 'X6-10',
    heroTitle: 'X6-10 行业级无人机',
    introTitle: 'X6-10',
    introText: '采用高强度碳纤维+航空铝一体化机身，6轴6桨稳定架构，搭配34寸折叠桨设计，16kg轻量化机身兼顾10kg载重能力与超长续航表现。FOC高效动力系统加持，空载续航可达75分钟，是巡检、安防、测绘等长时作业场景的高性价比之选。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/A.jpg', import.meta.url).href,
    stats: [
      { value: '10', unit: 'kg', label: '最大有效载重' },
      { value: '75', unit: 'min', label: '空载续航' },
      { value: '7', unit: '级', label: '抗风能力' },
      { value: '4000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标1.png', import.meta.url).href, title: '轻量化易部署', desc: '空机仅16kg，搭配34寸折叠桨设计，折叠后体积小巧，单人即可背负转运，抵达现场快速展开起飞，适配机动转场作业需求。' },
      { icon: icons.icon2, title: '六轴稳定飞行', desc: '6轴6桨稳定动力架构，飞行姿态平稳，抗风能力达7级，复杂气象条件下仍可保持稳定作业，保障拍摄与监测画面清晰。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/图标2.png', import.meta.url).href, title: '75分钟超长续航', desc: 'FOC高效动力系统优化能耗，空载续航可达75分钟，载重5kg仍有55分钟续航，大幅提升单次作业覆盖范围，减少起降频次。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '-20℃至50℃宽温工作，4000米高海拔适配，多重安全保护功能，IP55工业防护，复杂环境下仍可可靠作业。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '18m/s' },
      { label1: '旋翼布局', value1: '6轴6桨', label2: '最大飞行海拔', value2: '4000m' },
      { label1: '螺旋桨规格', value1: '34寸折叠桨', label2: '可抗风等级', value2: '7级' },
      { label1: '整机轴距', value1: '1900mm', label2: '工作温度', value2: '-20℃ ~ 50℃' },
      { label1: '展开尺寸', value1: '1800*2000*750mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '折叠尺寸', value1: '1070*1150*750mm', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '标准载重', value1: '10kg', label2: '空机质量', value2: '16kg' },
      { label1: '空载续航', value1: '75min', label2: '动力系统', value2: 'FOC高效动力系统' },
      { label1: '载重5kg续航', value1: '55min', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
    ],
    scenarios: [
      { title: '电力廊道全线巡检', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用1.png', import.meta.url).href },
      { title: '林业资源全域巡护', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用2.png', import.meta.url).href },
      { title: '国土测绘与地类监测', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用3.png', import.meta.url).href },
      { title: '水利流域生态巡检', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '电力巡检交付', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/实际交付1.png', import.meta.url).href },
      { title: '水域巡查交付', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/实际交付2.png', import.meta.url).href },
      { title: '山地巡检交付', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/实际交付3.png', import.meta.url).href },
    ],
  },
  TF100: {
    name: 'TF100',
    heroTitle: 'TF100 行业级无人机',
    introTitle: 'TF100',
    introText: '整机采用六轴六桨纯电动力架构，高强度碳纤维+航空铝机身，折叠后可单人背负携带。飞行平台与脚架均采用通用接口设计，完美适配市面90%挂载模块，兼顾重载能力与快速部署优势，是应急、巡检、测绘场景的首选轻量化重载机型。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/TF100/首页 拷贝.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/TF100/Gemini_Generated_Image_tdueu8tdueu8tdue .jpg', import.meta.url).href,
    stats: [
      { value: '50', unit: 'kg', label: '最大有效载重' },
      { value: '60', unit: 'min', label: '空载极限续航' },
      { value: '25', unit: 'kg', label: '轻量化空机质量' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标1.png', import.meta.url).href, title: '轻量化易部署', desc: '整机折叠后体积小巧，空机仅25kg，单人即可背负转运，无需专用吊装设备，抵达现场可快速完成展开起飞，适配突发应急场景。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标3.png', import.meta.url).href, title: '通用挂载接口', desc: '飞行平台与脚架采用通用接口设计，完美适配市面90%挂载模块，支持消防、巡检、测绘、投送等多类载荷快速切换，一机多用降本增效。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/图标2.png', import.meta.url).href, title: '长续航作业', desc: '空载续航可达60分钟，载重50kg状态下仍有22分钟续航，兼顾重载能力与作业时长，满足长距离巡检、多点位投送等作业需求。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '高强度碳纤维+航空铝机身，IP55工业防护等级，宽温环境稳定工作，抗风能力优异，山地、高温、严寒等复杂环境均可可靠作业。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '高强度碳纤维+航空铝', label2: '最大飞行速度', value2: '20m/s' },
      { label1: '旋翼布局', value1: '6轴6桨', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '螺旋桨规格', value1: '43寸折叠桨', label2: '定位精度', value2: '±0.05m（RTK）' },
      { label1: '整机轴距', value1: '2300mm', label2: '空机质量', value2: '35kg' },
      { label1: '展开尺寸', value1: '2454*2145*378mm', label2: '', value2: '' },
      { label1: '折叠尺寸', value1: '843*1238*378mm', label2: '', value2: '' },
      { label1: '标准载重', value1: '50kg', label2: '', value2: '' },
      { label1: '空载续航', value1: '60min', label2: '', value2: '' },
      { label1: '载重50kg续航', value1: '22min', label2: '', value2: '' },
    ],
    scenarios: [
      { title: '森林消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用1.png', import.meta.url).href },
      { title: '高空消防作业', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用2.png', import.meta.url).href },
      { title: '电力工程施工', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用3.png', import.meta.url).href },
      { title: '地质勘测搭载', image: new URL('../assets/home/产品中心/多旋翼飞行平台/H400/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/TF100/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/TF100/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/TF100/交付3.png', import.meta.url).href },
    ],
  },
  'X4-10': {
    name: 'X4-10',
    heroTitle: 'X4-10 行业级无人机',
    introTitle: 'X4-10',
    introText: '采用东丽3K碳纤维机身，4轴4桨稳定架构，搭配24寸折叠桨设计，折叠后可装入背包，极致便携。FOC高效动力系统加持，空载续航可达70分钟，7级强风稳定飞行，5000米高海拔适配，是轻载巡检、安防侦察、应急作业场景的首选便携机型。',
    heroImage: new URL('../assets/home/产品中心/多旋翼飞行平台/X4-10/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/多旋翼飞行平台/X4-10/A .jpg', import.meta.url).href,
    stats: [
      { value: '5', unit: 'kg', label: '最大有效载重' },
      { value: '70', unit: 'min', label: '最长空载续航' },
      { value: '7', unit: '级', label: '抗风能力' },
      { value: '5000', unit: 'm', label: '最大飞行海拔' },
    ],
    advantages: [
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F140/图标1.png', import.meta.url).href, title: '轻量化易部署', desc: '24寸折叠桨设计，折叠后机身仅480mm长，可装入普通背包，单人即可随身携带，抵达现场1分钟快速展开起飞。' },
      { icon: icons.icon2, title: '工业级品质', desc: '东丽3K碳纤维机身，强度高重量轻；搭配失控返航、低电降落、断点续飞多重安全保护，保障飞行作业安全。' },
      { icon: new URL('../assets/home/产品中心/多旋翼飞行平台/F100/图标2.png', import.meta.url).href, title: '70分钟长续航', desc: 'FOC高效动力系统优化能耗，空载续航可达70分钟，载重5kg仍有40分钟续航，大幅提升单次作业覆盖范围。' },
      { icon: icons.icon4, title: '全工况工业级', desc: '7级强风稳定飞行，5000米高海拔适配，-20℃至60℃宽温工作，山地、高原、高温严寒等复杂环境均可可靠作业。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '东丽3K碳纤维', label2: '最大飞行速度', value2: '15m/s' },
      { label1: '旋翼布局', value1: '4轴4桨', label2: '最大飞行海拔', value2: '5000m' },
      { label1: '螺旋桨规格', value1: '24寸折叠桨', label2: '可抗风等级', value2: '7级' },
      { label1: '整机轴距', value1: '950mm', label2: '工作温度', value2: '-20℃~60℃' },
      { label1: '展开尺寸', value1: '1100*800*470mm', label2: '定位系统', value2: 'GPS/北斗/伽利略/格洛纳斯' },
      { label1: '折叠尺寸', value1: '480*390*470mm', label2: '定位精度', value2: '±0.05m' },
      { label1: '标准载重', value1: '5kg', label2: '空机质量', value2: '16kg' },
      { label1: '空载续航', value1: '70min', label2: '动力系统', value2: 'FOC高效动力系统' },
      { label1: '载重5kg续航', value1: '40min', label2: '安全保护', value2: '失控返航、低电量返航降落、断点续飞' },
    ],
    scenarios: [
      { title: '电力廊道全线巡检', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用1.png', import.meta.url).href },
      { title: '林业资源全域巡护', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用2.png', import.meta.url).href },
      { title: '国土测绘与地类监测', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用3.png', import.meta.url).href },
      { title: '水利流域生态巡检', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '消防演练', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X4-10/交付1.png', import.meta.url).href },
      { title: '应急救援', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X4-10/交付2.png', import.meta.url).href },
      { title: '消防特勤', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X4-10/交付3.png', import.meta.url).href },
    ],
  },
  'WRCQ-32A': {
    name: 'WRCQ-32AC',
    heroType: '固定翼机场',
    heroTitle: 'WRCQ-32AC 固定翼机场',
    introTitle: 'WRCQ-32A',
    introText: '集成垂直起降固定翼无人机、智能停机舱、监控系统于一体，具备无人值守、远程操控、一键作业、自动充电等核心功能。50km 超远通信链路，100km标准航程，可满足边境巡查、森林防火、管道巡检等长距离大范围监测需求，7×24小时全天候持续作业。',
    heroImage: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/首页.jpg', import.meta.url).href,
    introImage: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/A.jpg', import.meta.url).href,
    stats: [
      { value: '50', unit: 'km', label: '微波通信距离' },
      { value: '7×24', unit: 'h', label: '无人值守作业' },
      { value: '5', unit: '级', label: '抗风能力' },
      { value: '3000', unit: 'm', label: '最大安装海拔' },
    ],
    advantages: [
      { icon: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/图标1.png', import.meta.url).href, title: '全流程无人值守', desc: '自动完成起飞、回收、充电、存储全流程，无需人工现场操作；一键执行任务，7×24小时不间断作业，大幅降低人力成本与作业风险。' },
      { icon: icons.icon2, title: '多重安全冗余', desc: '任务前全系统自检，关键模块冗余设计；具备低电压返航、链路失控返航、应急备降功能；可选UPS不间断电源，保障作业安全。' },
      { icon: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/图标3.png', import.meta.url).href, title: '长航程广覆盖', desc: '标准载荷下航程>100km，续航>85分钟；50km微波通信链路，覆盖大范围区域作业需求，适配边境、管线、林区等长距离巡检场景。' },
      { icon: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/图标4.png', import.meta.url).href, title: '全环境智能感知', desc: '实时监测风速、风向、温湿度、雨量环境参数，智能判断作业条件，环境不满足则禁止起飞，保障复杂气象环境下的作业安全。' },
    ],
    specsData: [
      { label1: '产品材质', value1: '钢/铝/复合材料', label2: '工作频段', value2: '1.437GHz L波段微波' },
      { label1: '整机重量', value1: '≤1600kg', label2: '通信距离', value2: '50km（通视条件）' },
      { label1: '环境感知', value1: '温度、湿度、风向、风速、雨量', label2: '传输方式', value2: '微波图传+有线网络回传' },
      { label1: '输入电压', value1: '220V 市电（机舱+空调双路）', label2: '核心功能', value2: '航迹规划、远程控制、多机管理' },
      { label1: '额定功耗', value1: '机舱≤2000W / 空调≤3000W', label2: '显示界面', value2: '系统状态、电子地图、实时视频' },
      { label1: '工作温度', value1: '-0℃-55℃', label2: '安全机制', value2: '自检预警、低电返航、断链返航' },
      { label1: '最大安装海拔', value1: '3000m', label2: '', value2: '' },
      { label1: '可抗风等级', value1: '5级', label2: '', value2: '' },
      { label1: '系统组成', value1: '环境监测、高精度复位、升降机构、自动充电、控制模块', label2: '', value2: '' },
    ],
    scenarios: [
      { title: '电力廊道全线巡检', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用1.png', import.meta.url).href },
      { title: '林业资源全域巡护', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用2.png', import.meta.url).href },
      { title: '国土测绘与地类监测', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用3.png', import.meta.url).href },
      { title: '水利流域生态巡检', image: new URL('../assets/home/产品中心/多旋翼飞行平台/X6-10/场景应用4.png', import.meta.url).href },
    ],
    cases: [
      { title: '林区部署', image: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/交付1.png', import.meta.url).href },
      { title: '野外值守', image: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/交付2.png', import.meta.url).href },
      { title: '园区运行', image: new URL('../assets/home/产品中心/固定翼飞行平台/WRCQ-32A/交付3.png', import.meta.url).href },
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
