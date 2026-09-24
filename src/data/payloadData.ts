// 载荷配件页面数据（/payload）
// 素材目录：src/assets/home/产品中心/载荷配件/
const asset = (name: string) => new URL(`../assets/home/产品中心/载荷配件/${name}`, import.meta.url).href;

export interface PayloadRow { label: string; value: string }
export interface PayloadProduct {
  /** 锚点 id：导航「载荷配件」子菜单点击名字后滚动到对应卡片 */
  anchor: string;
  name: string;
  /** 名称后的灰色小字后缀，如（支持大疆） */
  suffix?: string;
  badge: string;
  image: string;
  rows: PayloadRow[];
}
export interface PayloadGroup {
  title: string;
  subtitle: string;
  products: PayloadProduct[];
}

export const payloadPage = {
  heroTitle: '载荷配件',
  heroImage: asset('首页 拷贝.jpg'),
  sectionTitle: '选购挂载配件',
  sectionSubtitle: '根据您的行业需求，挑选适配的专业级任务载荷，释放无人机无限潜能。',
  groups: [
    {
      title: '消防灭火喷射系统',
      subtitle: '水带输送 + 高空喷射，覆盖远距离高层灭火作业场景',
      products: [
        {
          anchor: 'fire-water-gun',
          name: '消防水枪',
          badge: '高空喷射',
          image: asset('消防水枪.png'),
          rows: [
            { label: '水带长度', value: '50-100m（可定制）' },
            { label: '材质', value: '碳纤维' },
            { label: '喷射距离', value: '≥20m' },
            { label: '水带直径', value: '25mm / 40mm' },
            { label: '特殊功能', value: '喷杆可伸缩，空中释放脱离功能(升级版)' },
          ],
        },
        {
          anchor: 'hard-bucket',
          name: '消防灭火水桶（硬桶）',
          badge: '精准投放',
          image: asset('消防水桶 硬.png'),
          rows: [
            { label: '最大容积', value: '40L / 60L / 100L / 180L' },
            { label: '桶身材质', value: '航空铝合金，漆面防火处理' },
            { label: '控制方式', value: 'PSDK / 网口 / 串口 / 接收机' },
            { label: '响应速度', value: '阀门开度线性调节，响应时间≤0.6S' },
            { label: '最大水流量', value: '45L/S' },
            { label: '灭火剂类型', value: '清水 / 氟蛋白泡沫 / 水基灭火剂' },
            { label: '灭火面积', value: '30-100m²（视飞行高度）' },
          ],
        },
        {
          anchor: 'soft-bucket',
          name: '消防灭火水桶（软桶）',
          badge: '精准投放',
          image: asset('消防水桶 软.png'),
          rows: [
            { label: '最大容积', value: '200L' },
            { label: '桶身材质', value: '聚酯纤维网布加双面PVC涂层' },
            { label: '控制方式', value: 'PSDK / 网口 / 串口 / 接收机，支持独立遥控器' },
            { label: '响应速度', value: '响应时间≤0.6s' },
            { label: '最大水流量', value: '50L/S' },
            { label: '灭火剂类型', value: '清水 / 氟蛋白泡沫 / 水基灭火剂' },
            { label: '多桶轮换', value: '自动识别连接最多5个吊桶，多桶轮换灭火作业' },
          ],
        },
        {
          anchor: 'fire-hose',
          name: '消防水带',
          badge: '快拆结构',
          image: asset('消防水带.png'),
          rows: [
            { label: '灭火剂种类', value: '消防泡沫/消防水剂' },
            { label: '安装方式', value: '快拆结构' },
            { label: '水带直径', value: '25mm/40mm' },
            { label: '喷射距离', value: '220m' },
            { label: '使用高度', value: '280m' },
            { label: '水管长度', value: '100m(可定制)' },
          ],
        },
      ],
    },
    {
      title: '灭火弹投放系列',
      subtitle: '破窗深入室内灭火 + 干粉/水基大范围覆盖，适配多类火场',
      products: [
        {
          anchor: 'window-breaker',
          name: '无人机破窗装置',
          badge: '空中喷洒',
          image: asset('破窗器.png'),
          rows: [
            { label: '驱动方式', value: '速生成氮气驱动' },
            { label: '启动电流', value: '≥ 1.2A' },
            { label: '适用方法', value: '无人机机载' },
            { label: '使用环境温度', value: '-35℃~85℃' },
            { label: '射程', value: '15 米' },
            { label: '使用年限', value: '5 年' },
            { label: '适应范围', value: '玻璃厚度≤12mm各类玻璃门窗破窗救援' },
          ],
        },
        {
          anchor: 'window-breaker-launcher',
          name: '破窗灭火弹发射器',
          badge: '破窗深入',
          image: asset('破窗发射器.png'),
          rows: [
            { label: '单体主材质', value: '铝合金十玻璃钢' },
            { label: '破窗能力', value: '单发18米直接穿透钢化双层真空玻璃(厚16mm)' },
            { label: '最大射程', value: 's50米' },
            { label: '电启动参数', value: 'DC12V700HA' },
            { label: '发射数量', value: '2发/4发/6发' },
          ],
        },
        {
          anchor: 'window-breaker-bomb',
          name: '破窗灭火弹',
          badge: 'ABC超细干粉',
          image: asset('破窗灭火弹.png'),
          rows: [
            { label: '全长度', value: '≤995mm' },
            { label: '全弹重', value: '≤3010g' },
            { label: '灭火剂种类', value: 'ABC超细干粉' },
            { label: '干粉灭火剂净重', value: '1100g' },
            { label: '单发弹灭火能力', value: '9.2m³' },
          ],
        },
        {
          anchor: 'dry-powder-bomb',
          name: '干粉水基灭火弹15L/25L/50L',
          badge: '空中喷洒',
          image: asset('干粉灭火弹.png'),
          rows: [
            { label: '弹长', value: '375mm / 390mm / 450mm' },
            { label: '弹径', value: 'Φ300 / Φ390 / Φ440mm' },
            { label: '投放方式', value: '垂直精准投放' },
            { label: '投放高度', value: '2S-定高30m / 3S-定高60m' },
            { label: '喷洒半径', value: '≥5m / ≥5m / ≥10m' },
            { label: '覆盖面积', value: '≥30m² / ≥70m² / ≥100m²' },
            { label: '灭火种类', value: 'ABC超细干粉；水胶型水基灭火剂' },
            { label: '控制方式', value: '定高启动，延时精度≤5ms' },
            { label: '使用温度/年限', value: '-20℃~55℃ / 2年' },
          ],
        },
        {
          anchor: 'forest-bomb',
          name: '森林灭火弹15L/25L/50L',
          badge: '凌空爆抛',
          image: asset('森林灭火弹.png'),
          rows: [
            { label: '弹长', value: '560mm / 690mm / 865mm' },
            { label: '弹径', value: 'Φ226 / Φ285 / Φ349mm' },
            { label: '作业方式', value: '精准投放，凌空定高爆抛洒' },
            { label: '投放高度', value: '2S-定高30m / 3S-定高60m' },
            { label: '喷洒半径', value: '干粉6/12/20m；水基3/6/10m' },
            { label: '覆盖面积', value: '15-30 / 50-80 / 100-200m²' },
            { label: '灭火种类', value: '干粉A/B/C/E类；水基A/B类' },
            { label: '充装量', value: '15L / 25L / 50L' },
            { label: '使用温度/年限', value: '-20℃~55℃ / 2年' },
            { label: '安全配置', value: '三重保护，软硬件冗余安全保障' },
          ],
        },
      ],
    },
    {
      title: '大疆兼容挂载配件',
      subtitle: '三秒快装、一键快拆，支持大疆行业机型快速适配',
      products: [
        {
          anchor: 'descender',
          name: '索降器',
          suffix: '（支持大疆）',
          badge: '空中喷洒',
          image: asset('索降器.png'),
          rows: [
            { label: '工作电压', value: '48-80V' },
            { label: '重量', value: '3kg' },
            { label: '最大载重', value: '60kg' },
            { label: '最大收放线长度', value: '30m' },
            { label: '最大收放线速度', value: '15m/min' },
            { label: '工作温度', value: '-25℃~70℃' },
            { label: '配重盘重量', value: '2kg（落地自动脱钩）' },
            { label: '功能支持', value: '一键熔断、触地脱钩、触顶保护、货物称重' },
          ],
        },
        {
          anchor: 'bomb-thrower',
          name: '灭火弹抛投器',
          suffix: '（支持大疆）',
          badge: '序列投放',
          image: asset('抛投器.png'),
          rows: [
            { label: '外形尺寸', value: '308.7*191.7*132.5mm' },
            { label: '单钩最大载重', value: '60kg' },
            { label: '标准挂钩数量', value: '4个' },
            { label: '抛投重量', value: '1.97kg' },
            { label: '供电电压', value: '24V' },
            { label: '快拆支持', value: '三秒快装、一键快拆' },
            { label: '控制方式', value: '遥控器按键控制' },
            { label: '投放方式', value: '序列式电控(可单投或多投，自由组合)' },
          ],
        },
        {
          anchor: 'speaker',
          name: '喊话器',
          suffix: '（支持大疆）',
          badge: '语音疏导',
          image: asset('喊话器.png'),
          rows: [
            { label: '重量', value: '750±5g' },
            { label: '功率', value: '45W（最大功率30W）' },
            { label: '供电输入', value: '12-80V' },
            { label: '工作温度', value: '-25℃~50℃' },
            { label: '俯仰角度', value: '0°~90°' },
            { label: '有效广播距离', value: '650m' },
            { label: '喊话方式', value: '实时喊话、音频文件播放' },
          ],
        },
        {
          anchor: 'searchlight',
          name: '探照灯',
          suffix: '（支持大疆）',
          badge: '夜间作业',
          image: asset('探照灯.png'),
          rows: [
            { label: '重量', value: '750g' },
            { label: '总功率', value: '136W' },
            { label: '光通量', value: '16000LM' },
            { label: '功能模式', value: '长亮 / 爆闪' },
            { label: '供电电压', value: '12-80V' },
            { label: '警灯功能', value: '可开启或关闭红蓝闪' },
            { label: '快拆', value: '支持旋转快拆、热插拔' },
            { label: '光效', value: '1251m/W（功率128W）' },
          ],
        },
        {
          anchor: 'washing-system',
          name: '无人机清洗系统',
          suffix: '（适配DJI M400）',
          badge: '空中清洗',
          image: asset('无人机清洗系统.png'),
          rows: [
            { label: '喷枪尺寸/重量', value: '900×35×50mm / 350g' },
            { label: '喷枪材质', value: '铝合金' },
            { label: '喷淋角度', value: '0° 直射' },
            { label: '高压清洗机峰值功率', value: '≥ 3500W' },
            { label: '供电', value: 'AC 110-220V' },
            { label: '压力/流量', value: '200 bar / 20 L·min' },
            { label: '重量/体积', value: '52kg / 620×360×500mm' },
            { label: '移动方式', value: '快拆推杆+4向止向万向轮' },
            { label: '防护等级', value: 'IPX5 可拆卸' },
            { label: '水管长度', value: '80m / 120m' },
            { label: '水管耐压', value: '≤300 Bar' },
            { label: '清洗剂规格', value: 'DN6 / 80g/m' },
            { label: '环保型清洗剂', value: 'pH 6-7，稀释 10-20×' },
            { label: '强效型清洗剂', value: 'pH 2-3，稀释 20-30×' },
          ],
        },
      ],
    },
    {
      title: '地面保障配套装备',
      subtitle: '地面转运+现场保障，覆盖全场景无人机作业场景',
      products: [
        {
          anchor: 'trailer',
          name: '中置轴挂车',
          badge: '地面转运',
          image: asset('中置轴挂车.png'),
          rows: [
            { label: '车身颜色', value: '白/黑' },
            { label: '外廓尺寸', value: '3550*2020*1200mm' },
            { label: '货厢内部尺寸', value: '1965*1590*600mm' },
            { label: '轮胎数', value: '2' },
            { label: '轮距（前/后）', value: '- / 1780mm' },
            { label: '轴距', value: '2490mm' },
            { label: '轴荷', value: '- / 650mm' },
            { label: '总质量', value: '690kg' },
            { label: '整备质量', value: '370kg' },
            { label: '额定载质量', value: '320kg' },
            { label: '半挂车鞍座最大允许总质量', value: '40kg' },
          ],
        },
      ],
    },
  ] as PayloadGroup[],
};
