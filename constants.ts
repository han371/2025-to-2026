import { TimelineItem, InsightItem, PlanItem } from './types';

// 预留的图片占位符或示例图片，实际使用时替换为真实URL
const PLACEHOLDER_IMAGES = Array(6).fill("");

export const TIMELINE_DATA: TimelineItem[] = [
  {
    month: "06 / 2025",
    title: "初来乍到，快速入局",
    description: "从广州飞抵义乌，实习起步。开启疯狂吸收模式，一周内掌握东南亚录播课与SOP文档。",
    details: [
      "每天上架20条链接，快速建立选品手感",
      "掌握东南亚市场基础逻辑与SOP流程",
      "完成从理论到实操的第一次闭环"
    ],
    tags: ["入职适应", "执行力", "基础运营"],
    photos: PLACEHOLDER_IMAGES
  },
  {
    month: "07 / 2025",
    title: "承接教学，慢慢上手",
    description: "入职一周迎来首位墨西哥学员。从答疑开始，逐渐接手课前摸底、认知课、发货课及商品卡优化。",
    details: [
      "独立承接首位墨西哥市场学员",
      "跑通'认知-发货-优化'全链路教学流程",
      "建立初期学员档案与反馈机制"
    ],
    tags: ["教学起步", "墨西哥市场", "课程体系"],
    photos: PLACEHOLDER_IMAGES
  },
  {
    month: "08 / 2025",
    title: "优化SOP，夯实教学",
    description: "SOP打磨阶段，适配墨西哥市场。成功交付资深抖音背景学员，证明了对TK逻辑的深度理解。",
    details: [
      "针对墨西哥市场特性优化SOP文档",
      "成功交付资深抖音背景学员，验证教学深度",
      "参与线下课协助，学习高客单交付技巧"
    ],
    tags: ["SOP优化", "进阶教学", "营销思维"],
    photos: PLACEHOLDER_IMAGES
  },
  {
    month: "09 / 2025",
    title: "突破销转，开启私域",
    description: "发布第一条工作朋友圈，确立“真诚分享”风格。结合K12教培经验，将复杂跨境逻辑简单化。",
    details: [
      "确立'真诚分享'的私域朋友圈人设",
      "利用K12经验降维打击，通俗化解构复杂逻辑",
      "共情学员痛点，实现销转0到1的突破"
    ],
    tags: ["销售转化", "私域运营", "个人品牌"],
    photos: PLACEHOLDER_IMAGES
  },
  {
    month: "10 / 2025",
    title: "线下尝试，初探AI",
    description: "国庆线下沙龙分享短视频环节，互动顺畅。重心回归线上SOP优化。开始接触前沿AI工具。",
    details: [
      "主导线下沙龙短视频分享环节，互动效果佳",
      "接触Veo3.0、可灵等AI视频工具",
      "探索'技术+内容'的新型生产力边界"
    ],
    tags: ["线下活动", "AI探索", "技术调研"],
    photos: PLACEHOLDER_IMAGES
  },
  {
    month: "11 / 2025",
    title: "业绩高光，销转+交付双突破",
    description: "年度最“燃”时刻。配合老板IP打通线上获客，日均2-3条有效线索。交付端高强度排课。",
    details: [
      "掌握'谈宏观、造神秘、假设成交'的高阶话术",
      "学员AI视频单条播放破40万，验证方法论",
      "日均处理2-3条精准线索，转化率显著提升"
    ],
    tags: ["业绩巅峰", "销售精通", "高产出", "爆款内容"],
    highlight: true,
    photos: PLACEHOLDER_IMAGES
  },
  {
    month: "12 / 2025",
    title: "复盘优化，沉淀方法",
    description: "深度复盘，构建AI视频“六要素标准”。研究Gemini、SORA2 API、n8n自动化流。",
    details: [
      "总结输出AI视频'六要素标准'方法论",
      "深入研究Gemini/Sora2/n8n等自动化技术栈",
      "启动个人视频号，倒逼技术输出与IP建设"
    ],
    tags: ["深度复盘", "AI自动化", "方法论", "个人IP"],
    photos: PLACEHOLDER_IMAGES
  },
];

export const INSIGHTS_DATA: InsightItem[] = [
  {
    category: 'success',
    title: "优势与亮点 (Strengths)",
    points: [
      "快速适配+执行力强：学到就做，做完复盘，AI技术迭代第一时间跟进。",
      "教学不断优化：将实拍与AI拆分教学，总结“六要素标准”，提高学员产出率。",
      "销转真诚且有说服力：朋友圈靠真实案例打动客户，谈单技巧日益成熟。",
      "团队配合到位：主动带新，高峰期抗压，与团队默契度提升。"
    ]
  },
  {
    category: 'warning',
    title: "反思与教训 (Lessons)",
    points: [
      "风险控制：曾尝试AI账号买卖未报备，导致发展受阻，需引以为戒。",
      "核心认知：跟着老板做事必须方案对齐，不能为了小利损害核心业务风险。",
      "团队协作：提前沟通，共识先行，拒绝埋头苦干，避免信息孤岛。"
    ]
  }
];

export const GROWTH_METRICS = [
  { label: "交付能力", value: "Level 5", trend: "+技能树" },
  { label: "销售转化", value: "Level 4", trend: "+信任感" },
  { label: "AI 技术", value: "Level 3", trend: "+自动化" },
  { label: "思维认知", value: "Owner", trend: "责任感" },
];

export const PLAN_2026: PlanItem[] = [
  {
    area: "团队层面 (Team)",
    goals: [
      "配合团队搬迁深圳，适配新环境，利用产业优势扩大规模。",
      "跟随老板IP节奏，打通更多获客渠道，吸引精准学员。",
      "升级课程体系，将个人经验与AI技术融入标准化交付。"
    ]
  },
  {
    area: "个人层面 (Individual)",
    goals: [
      "销转端：保持真诚朋友圈风格，稳定输出干货与案例，提升转化。",
      "教学端：深耕“AI+实拍”，开发高效工具降低学员门槛。",
      "成长端：运营个人视频号，对标头部IP，坚持锻炼调整状态。",
      "拓展端：探索学员复购与墨西哥TK延伸服务。"
    ]
  },
];
