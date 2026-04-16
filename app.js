const scoreFields = [
  { key: "expression", label: "表达输出" },
  { key: "execution", label: "执行推进" },
  { key: "analysis", label: "分析判断" },
  { key: "teaching", label: "教学辅导" },
  { key: "aesthetic", label: "审美内容" },
  { key: "sales", label: "销售成交" },
  { key: "integration", label: "资源整合" },
  { key: "delivery", label: "项目落地" }
];

const tagLabels = {
  interests: {
    photography: "摄影",
    writing: "写作",
    money: "赚钱研究",
    social: "社交",
    gaming: "游戏",
    travel: "旅行",
    food: "美食",
    fashion: "穿搭审美",
    pet: "宠物",
    learning: "学习成长"
  },
  personality: {
    extrovert: "外向",
    introvert: "内向",
    result_driven: "结果导向",
    creative: "创意型",
    stable: "稳定型",
    adventurous: "冒险型",
    analytical: "分析型",
    patient: "耐心型"
  },
  abilities: {
    communication: "沟通能力",
    execution: "执行力",
    aesthetic: "审美",
    data: "数据分析",
    writing: "内容表达",
    editing: "拍摄剪辑",
    organization: "资源整合",
    sales: "成交能力",
    teaching: "讲解辅导",
    no_special_skill: "暂时没明显特长"
  },
  resources: {
    time: "时间多",
    network: "有人脉",
    capital: "有资金",
    overseas: "在海外",
    student: "学生资源",
    local: "本地资源",
    equipment: "有设备 / 工具"
  },
  preferences: {
    no_face: "不想露脸",
    face_ok: "可以露脸",
    no_sales: "不想销售",
    sales_ok: "可以卖东西",
    long_term: "愿意长期投入",
    quick_cash: "想尽快见钱",
    online: "线上优先",
    offline: "线下也行",
    solo: "最好自己搞定",
    collab: "愿意和人合作"
  },
  identities: {
    overseas_person: "海外人士",
    international_student: "留学生",
    office_worker: "上班族",
    student_user: "学生",
    freelancer: "自由职业",
    creator: "内容创作者"
  },
  modes: {
    info_gap: "信息差型",
    resource_match: "资源整合型",
    content: "内容型",
    skill: "技能型",
    execution: "执行套利型",
    service: "轻资产服务型",
    sales: "销售变现型",
    teaching: "教学陪伴型"
  }
};

const sideHustles = [
  {
    name: "ToB 服务商牵线中间人",
    mode: "resource_match",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["money", "social"],
      personality: ["extrovert", "result_driven", "analytical"],
      abilities: ["communication", "organization", "sales"],
      resources: ["network", "local"],
      preferences: ["sales_ok", "collab", "online"],
      identities: ["office_worker", "freelancer"]
    },
    scoreFit: { integration: 5, sales: 4, delivery: 4, expression: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["wechat", "xiaohongshu"],
    primaryJobs: ["sales", "office", "media"],
    monetization: "收撮合佣金、项目管理费、长期渠道分成。",
    scale: "先打透一个垂类，比如短视频代运营、工厂打样、直播搭建，做出两边资源池后会越滚越轻松。",
    steps: [
      "先只做一个具体垂类，比如“本地商家短视频代运营”或“电商品牌包装设计”，不要一上来什么都接。",
      "去小红书、公众号、朋友圈、企查查和本地商圈群里各找 20 个潜在客户，再找 20 个真实服务商，先把两端名单拉起来。",
      "分别和 5 个需求方、5 个供给方通话，搞清楚他们最怕什么、预算在哪、怎么结算。",
      "第一单不要想着赚很多，先用“我帮你省筛选时间 / 我帮你把人和交付盯住”的价值去成交一个测试单。"
    ],
    weekPlan: [
      "第 1 天：确定垂类和你能接触到的资源。",
      "第 2 天：整理供应商和客户名单。",
      "第 3 天：打 10 个电话或发 20 条私信测试需求。",
      "第 4 天：约 2 个意向方聊合作。",
      "第 5 天：写一版撮合介绍页。",
      "第 6 天：推动第一单进入报价。",
      "第 7 天：复盘哪种客群最容易成交。"
    ]
  },
  {
    name: "品牌与达人商务撮合",
    mode: "resource_match",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["social", "money", "fashion"],
      personality: ["extrovert", "creative", "result_driven"],
      abilities: ["communication", "organization", "sales"],
      resources: ["network"],
      preferences: ["sales_ok", "collab", "online"],
      identities: ["creator", "office_worker", "freelancer"]
    },
    scoreFit: { integration: 5, sales: 5, expression: 4, delivery: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "douyin", "weibo"],
    primaryJobs: ["media", "sales"],
    monetization: "按单抽佣、合作服务费、包月商务外包费。",
    scale: "从小达人小品牌起步，后面可以升级成固定商务代理或小型 MCN。",
    steps: [
      "先只做一个好切的小赛道，比如新消费零食、咖啡器具、宠物用品，不要一开始覆盖所有品牌。",
      "在小红书、抖音和蝉妈妈这类工具里，先整理 30 个愿意接商单的中小达人，再整理 30 个正在投放或看起来有种草需求的小品牌。",
      "主动发私信给品牌，说清楚你手里有哪些合适达人；再发给达人，说清楚你能带来哪些品牌合作，先做“低预算试投放”撮合。",
      "第一单最现实的切法不是大品牌，而是 3000 到 10000 元预算的小品牌种草单，你先把对接效率和成单闭环跑顺。"
    ],
    weekPlan: [
      "第 1 天：定垂类和对接对象。",
      "第 2 天：建品牌表和达人表。",
      "第 3 天：发第一轮合作私信。",
      "第 4 天：撮合第一次通话。",
      "第 5 天：整理报价模版。",
      "第 6 天：推动第一单确认。",
      "第 7 天：复盘回复率和成交点。"
    ]
  },
  {
    name: "招聘内推撮合顾问",
    mode: "resource_match",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["money", "social", "learning"],
      personality: ["extrovert", "stable", "result_driven"],
      abilities: ["communication", "organization", "sales"],
      resources: ["network"],
      preferences: ["collab", "online"],
      identities: ["office_worker", "freelancer"]
    },
    scoreFit: { integration: 4, sales: 4, delivery: 4, expression: 3 },
    platforms: ["wechat", "zhihu"],
    primaryJobs: ["office", "sales", "tech"],
    monetization: "推荐费、候选人辅导费、企业委托费。",
    scale: "先做一个岗位群，比如运营、设计、跨境电商，再慢慢做成细分人才池。",
    steps: [
      "先只做一个岗位方向，比如运营、跨境投手、设计师，不要泛做“所有岗位”。",
      "去 Boss、脉脉、微信群、朋友圈和前同事网络里找岗位，再同步整理一批正在找工作的候选人。",
      "先免费帮 3 个人改简历或写推荐话术，换真实反馈和案例。",
      "只要有 1 个成功推荐，你就立刻把流程标准化，后面就不只是内推，而是“岗位匹配服务”。"
    ],
    weekPlan: [
      "第 1 天：选行业和岗位方向。",
      "第 2 天：整理第一批岗位。",
      "第 3 天：联系第一批候选人。",
      "第 4 天：帮 1 个人完成简历优化。",
      "第 5 天：推送第一批岗位。",
      "第 6 天：跟进反馈。",
      "第 7 天：总结匹配逻辑。"
    ]
  },
  {
    name: "活动资源撮合 / 场地与供应商对接",
    mode: "resource_match",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["social", "money", "travel"],
      personality: ["extrovert", "result_driven", "creative"],
      abilities: ["communication", "organization", "delivery", "sales"],
      resources: ["local", "network"],
      preferences: ["collab", "offline", "sales_ok"],
      identities: ["freelancer", "office_worker"]
    },
    scoreFit: { integration: 5, delivery: 5, sales: 4, expression: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["wechat", "xiaohongshu"],
    monetization: "场地撮合费、供应商返点、项目服务费。",
    scale: "先做生日会、快闪、沙龙这类轻项目，后面很容易升级成小型活动资源库。",
    steps: [
      "先从一个最容易接触的场景切入，比如生日会、品牌沙龙或校园活动。",
      "去本地小红书、点评、朋友圈和活动社群里，先整理 15 个场地、10 个摄影、10 个布置和 10 个主持资源。",
      "第一单不要自己硬办活动，而是先帮别人“省找资源的时间”，做资源清单 + 对接推进。",
      "只要落成 1 场，你就把报价、供应商名单和避坑点整理成可复用模板。"
    ],
    weekPlan: [
      "第 1 天：定活动场景。",
      "第 2 天：整理场地和供应商名单。",
      "第 3 天：发第一轮资源介绍。",
      "第 4 天：约 2 个潜在客户聊需求。",
      "第 5 天：写报价单和服务边界。",
      "第 6 天：推进第一场对接。",
      "第 7 天：复盘执行流程。"
    ]
  },
  {
    name: "本地商家探店短视频代拍",
    mode: "service",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["photography", "social", "food", "travel"],
      personality: ["extrovert", "creative", "result_driven"],
      abilities: ["editing", "communication", "execution", "sales"],
      resources: ["local", "equipment"],
      preferences: ["offline", "collab", "sales_ok", "face_ok"],
      identities: ["freelancer", "creator"]
    },
    scoreFit: { aesthetic: 4, execution: 5, sales: 4, delivery: 4 },
    excludePreferences: ["no_sales"],
    platforms: ["douyin", "xiaohongshu"],
    primaryJobs: ["media", "design"],
    monetization: "按条收费、拍摄套餐费、脚本策划费、后续包月代拍。",
    scale: "先打一个本地行业，后面可以升级成代运营或商家内容工作室。",
    steps: [
      "选一个最容易突破的本地行业，比如咖啡、美甲、健身。",
      "做 3 条样片脚本和 1 份报价说明。",
      "找 10 家店试谈低价首单。",
      "拿到第一单后立刻把案例发出来继续成交第二批。"
    ],
    weekPlan: [
      "第 1 天：选行业和对标账号。",
      "第 2 天：写 3 条样片脚本。",
      "第 3 天：联系 10 家店。",
      "第 4 天：完成 1 条试拍。",
      "第 5 天：完善报价页。",
      "第 6 天：推进第二家成交。",
      "第 7 天：发布案例内容。"
    ]
  },
  {
    name: "城市陪逛 + 出片服务",
    mode: "service",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["travel", "social", "fashion", "photography"],
      personality: ["extrovert", "creative", "adventurous"],
      abilities: ["communication", "aesthetic", "execution"],
      resources: ["local"],
      preferences: ["offline", "collab", "face_ok"],
      identities: ["freelancer", "student_user"]
    },
    scoreFit: { aesthetic: 4, expression: 3, execution: 4, delivery: 3 },
    platforms: ["xiaohongshu", "weibo"],
    monetization: "按次陪逛费、路线费、拍照费、商家合作费。",
    scale: "先做一个城市路线主题，比如古着店、咖啡路线、展览路线，再慢慢产品化。",
    steps: [
      "先做 2 条拿得出手的路线。",
      "把陪逛 + 出片 + 店铺推荐打包成套餐。",
      "发真实路线图和照片案例。",
      "先拿朋友或熟人试单，再开始公开接单。"
    ],
    weekPlan: [
      "第 1 天：定 2 条路线。",
      "第 2 天：拍案例图。",
      "第 3 天：写服务说明。",
      "第 4 天：发第一条路线内容。",
      "第 5 天：收集咨询问题。",
      "第 6 天：试接第一单。",
      "第 7 天：复盘体验感。"
    ]
  },
  {
    name: "社群活动组织者",
    mode: "service",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["social", "travel", "gaming", "learning"],
      personality: ["extrovert", "creative", "result_driven"],
      abilities: ["communication", "organization", "execution"],
      resources: ["network", "local"],
      preferences: ["offline", "collab", "sales_ok"],
      identities: ["freelancer", "student_user", "office_worker"]
    },
    scoreFit: { integration: 4, execution: 5, delivery: 4, expression: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["wechat", "xiaohongshu"],
    monetization: "活动门票、品牌赞助、商家合作、社群会员。",
    scale: "先从小局做起，后续可以做固定社群、主题活动和城市主理人品牌。",
    steps: [
      "先确定一个具体主题，比如桌游、Citywalk、咖啡、观影。",
      "先招募 8 到 15 人的小局。",
      "把流程和群规则写清楚。",
      "跑完一场后用现场图和反馈做第二场的招募内容。"
    ],
    weekPlan: [
      "第 1 天：定主题和人数。",
      "第 2 天：找场地和时间。",
      "第 3 天：发招募海报。",
      "第 4 天：确认报名名单。",
      "第 5 天：准备流程。",
      "第 6 天：落地第一场。",
      "第 7 天：发复盘和下一场预告。"
    ]
  },
  {
    name: "UGC 产品素材制作",
    mode: "content",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["photography", "fashion", "food"],
      personality: ["creative", "stable", "result_driven"],
      abilities: ["editing", "aesthetic", "writing"],
      resources: ["equipment"],
      preferences: ["online", "solo", "face_ok"],
      identities: ["creator", "freelancer"]
    },
    scoreFit: { aesthetic: 5, expression: 4, execution: 4, delivery: 3 },
    platforms: ["xiaohongshu", "douyin"],
    primaryJobs: ["design", "media"],
    monetization: "按条素材费、按套图费、素材包月费、授权复用费。",
    scale: "先做 1 到 2 个品类，后面可以升级成长期合作素材供应商。",
    steps: [
      "先选一个你拍起来最顺手的类目。",
      "拍 5 条像真人分享的样片。",
      "去接小品牌或独立店主的素材需求。",
      "把转化好的素材风格持续复制。"
    ],
    weekPlan: [
      "第 1 天：选类目。",
      "第 2 天：拍 2 条样片。",
      "第 3 天：继续补到 5 条。",
      "第 4 天：发案例页。",
      "第 5 天：联系 10 个品牌。",
      "第 6 天：改进话术。",
      "第 7 天：争取拿第一单。"
    ]
  },
  {
    name: "品牌素材寄拍 / 家里拍样机位",
    mode: "content",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["photography", "fashion", "food"],
      personality: ["creative", "stable", "introvert"],
      abilities: ["editing", "aesthetic", "execution"],
      resources: ["equipment", "time"],
      preferences: ["online", "solo", "no_face"],
      identities: ["creator", "freelancer", "office_worker"]
    },
    scoreFit: { aesthetic: 5, execution: 4, delivery: 3, expression: 2 },
    platforms: ["xiaohongshu", "douyin"],
    monetization: "寄拍费、单条视频费、组图费、长期素材合作。",
    scale: "特别适合从“在家拍产品”升级到固定合作的小型素材工作室。",
    steps: [
      "先用身边现成物品拍 6 到 9 组样片，不需要等品牌先找你。",
      "把样片按风格整理成作品集，比如极简风、ins 风、生活流。",
      "去淘宝店主群、小红书、1688 商家和独立品牌主页私信，说清楚你能拍什么风格。",
      "第一批不要追高价，先拿 3 个寄拍案例把信任做出来。"
    ],
    weekPlan: [
      "第 1 天：整理拍摄背景和道具。",
      "第 2 天：拍 3 组样片。",
      "第 3 天：补到 6 组并修图。",
      "第 4 天：做作品集页。",
      "第 5 天：联系 20 个小品牌。",
      "第 6 天：优化报价和合作说明。",
      "第 7 天：争取拿到第 1 个寄拍单。"
    ]
  },
  {
    name: "品牌产品种草号",
    mode: "content",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["fashion", "food", "pet", "money"],
      personality: ["creative", "stable", "patient"],
      abilities: ["writing", "editing", "aesthetic"],
      resources: ["equipment", "time"],
      preferences: ["online", "solo", "face_ok", "long_term"],
      identities: ["creator", "office_worker", "student_user"]
    },
    scoreFit: { expression: 4, aesthetic: 4, execution: 4, analysis: 3 },
    platforms: ["xiaohongshu", "douyin"],
    monetization: "带货佣金、商单、联盟分成、选品合作。",
    scale: "先专注一个细分类目，比做大而全更容易起量和成交。",
    steps: [
      "选一个你愿意一直测评的赛道。",
      "连续发 10 条真实使用内容。",
      "把评论区问题整理成后续选题。",
      "优先接联盟商品，不用等品牌找你。"
    ],
    weekPlan: [
      "第 1 天：定类目。",
      "第 2 天：列 10 个选题。",
      "第 3 天：拍第 1 条。",
      "第 4 天：拍第 2 条。",
      "第 5 天：研究同类爆款。",
      "第 6 天：优化封面和标题。",
      "第 7 天：补第 3 条并开始挂商品。"
    ]
  },
  {
    name: "小红书资料整理号 + 数字产品售卖",
    mode: "info_gap",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["writing", "money", "learning", "travel"],
      personality: ["introvert", "analytical", "stable"],
      abilities: ["writing", "organization", "execution", "data"],
      resources: ["time", "student", "overseas"],
      preferences: ["no_face", "online", "solo", "long_term"],
      identities: ["student_user", "office_worker", "international_student"]
    },
    scoreFit: { expression: 4, analysis: 4, execution: 4, integration: 3 },
    platforms: ["xiaohongshu", "wechat", "zhihu"],
    primaryJobs: ["office", "finance", "education", "research"],
    monetization: "卖资料包、模板、攻略合集、社群门票、轻咨询。",
    scale: "先做一个强信息差主题，后续很容易升级成产品矩阵和社群。",
    steps: [
      "先选一个你真的熟的细分题材。",
      "做出最小可卖版本的资料包。",
      "连续发 5 条种草图文测试需求。",
      "跑通支付和交付路径后再升级产品。"
    ],
    weekPlan: [
      "第 1 天：定主题。",
      "第 2 天：做资料包。",
      "第 3 天：发第 1 条图文。",
      "第 4 天：发第 2 条图文。",
      "第 5 天：完善购买流程。",
      "第 6 天：根据评论补内容。",
      "第 7 天：发转化反馈内容。"
    ]
  },
  {
    name: "Notion 模板 / 表单工具售卖",
    mode: "skill",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 3,
    tags: {
      interests: ["learning", "money", "writing"],
      personality: ["introvert", "analytical", "stable"],
      abilities: ["organization", "data", "writing"],
      resources: ["time"],
      preferences: ["no_face", "online", "solo", "long_term"],
      identities: ["office_worker", "student_user", "freelancer"]
    },
    scoreFit: { analysis: 4, execution: 4, expression: 3, delivery: 3 },
    platforms: ["xiaohongshu", "wechat"],
    monetization: "模板销售、定制费、社群会员、配套课程。",
    scale: "非常适合做轻资产产品矩阵，卖一次不够就持续上新。",
    steps: [
      "先做一个你自己会用的真实模板。",
      "写清楚适用场景和使用前后差异。",
      "先卖低价版本验证需求。",
      "再做升级版或配套服务。"
    ],
    weekPlan: [
      "第 1 天：定场景。",
      "第 2 天：做模板。",
      "第 3 天：补封面图。",
      "第 4 天：发种草内容。",
      "第 5 天：开通售卖链接。",
      "第 6 天：收第一轮反馈。",
      "第 7 天：做优化版。"
    ]
  },
  {
    name: "二手平台选品倒卖 / 闲置代运营",
    mode: "execution",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["money", "gaming", "fashion", "pet"],
      personality: ["analytical", "result_driven", "stable"],
      abilities: ["data", "execution", "sales", "organization"],
      resources: ["capital", "network", "time", "local"],
      preferences: ["online", "solo", "quick_cash", "sales_ok"],
      identities: ["student_user", "office_worker", "freelancer"]
    },
    scoreFit: { analysis: 4, execution: 5, sales: 4, delivery: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "weibo"],
    monetization: "赚差价、收代挂费、抽成交佣金。",
    scale: "从自己卖升级到帮别人代卖，是最自然的放大方式。",
    steps: [
      "先定一个你懂价格的品类。",
      "做 10 条成交价记录。",
      "从闲置和低价回收开始。",
      "把选品、定价、图和话术优化到能稳定出单。"
    ],
    weekPlan: [
      "第 1 天：选品类。",
      "第 2 天：记录成交价。",
      "第 3 天：整理货源。",
      "第 4 天：上架商品。",
      "第 5 天：调标题和图。",
      "第 6 天：谈第一批代卖。",
      "第 7 天：复盘利润。"
    ]
  },
  {
    name: "拼单团长 / 社群团购主理人",
    mode: "execution",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["money", "social", "food", "pet"],
      personality: ["extrovert", "result_driven", "stable"],
      abilities: ["organization", "sales", "communication", "execution"],
      resources: ["network", "local", "capital"],
      preferences: ["collab", "online", "sales_ok"],
      identities: ["office_worker", "student_user", "freelancer"]
    },
    scoreFit: { sales: 4, integration: 4, execution: 5, delivery: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["wechat", "xiaohongshu"],
    monetization: "团购佣金、差价、社群会员费。",
    scale: "先做一个高复购类目，后面能慢慢做成私域复购生意。",
    steps: [
      "选一个大家本来就会买的品类。",
      "找 2 个靠谱供应商比价。",
      "先在熟人群跑一轮小团。",
      "把履约和售后磨顺再放大。"
    ],
    weekPlan: [
      "第 1 天：选品类。",
      "第 2 天：找供应商。",
      "第 3 天：做团购规则图。",
      "第 4 天：发第一轮团。",
      "第 5 天：跟进履约。",
      "第 6 天：统计复购意向。",
      "第 7 天：准备第二轮。"
    ]
  },
  {
    name: "AI 内容切片分发号",
    mode: "execution",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 3,
    tags: {
      interests: ["money", "learning", "writing"],
      personality: ["introvert", "analytical", "result_driven"],
      abilities: ["execution", "writing", "editing"],
      resources: ["time"],
      preferences: ["no_face", "online", "solo", "quick_cash"],
      identities: ["student_user", "office_worker", "freelancer"]
    },
    scoreFit: { execution: 5, expression: 3, analysis: 3, delivery: 3 },
    platforms: ["xiaohongshu", "douyin", "zhihu"],
    monetization: "带货、流量分成、卖资料、引流私域。",
    scale: "跑通一个主题后可以矩阵化，多平台多账号分发。",
    steps: [
      "先选一个持续有需求的主题。",
      "做一套稳定的内容生产流程。",
      "把一份内容拆成图文、短视频、问答多端分发。",
      "保留能带来询盘和转化的模板。"
    ],
    weekPlan: [
      "第 1 天：选主题。",
      "第 2 天：搭内容流程。",
      "第 3 天：发第一批内容。",
      "第 4 天：多平台分发。",
      "第 5 天：看哪个平台反馈最好。",
      "第 6 天：优化模板。",
      "第 7 天：继续补量。"
    ]
  },
  {
    name: "海外信息差代找 + 代办助理",
    mode: "info_gap",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["travel", "learning", "money", "writing"],
      personality: ["analytical", "patient", "stable"],
      abilities: ["organization", "communication", "writing", "data"],
      resources: ["overseas", "network", "time"],
      preferences: ["no_face", "online", "solo", "long_term"],
      identities: ["overseas_person", "international_student"]
    },
    scoreFit: { analysis: 4, integration: 4, delivery: 4, expression: 3 },
    platforms: ["xiaohongshu", "wechat", "zhihu"],
    primaryJobs: ["education", "office", "legal"],
    monetization: "信息整理费、代办费、攻略包、轻咨询。",
    scale: "先做一个强需求切口，后面可以做成稳定产品和社群。",
    steps: [
      "列 3 个你最熟的海外生活问题。",
      "先做标准化清单或模版。",
      "发避坑型内容吸引用户。",
      "先低价接 3 单，整理高频问题。"
    ],
    weekPlan: [
      "第 1 天：定切口。",
      "第 2 天：做第一版清单。",
      "第 3 天：发避坑内容。",
      "第 4 天：发案例型内容。",
      "第 5 天：设定收费。",
      "第 6 天：接测试单。",
      "第 7 天：做第二版产品。"
    ]
  },
  {
    name: "海外探店 / 海外测评内容号",
    mode: "content",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["travel", "food", "fashion", "money"],
      personality: ["creative", "adventurous", "stable"],
      abilities: ["editing", "writing", "aesthetic", "execution"],
      resources: ["overseas", "local", "equipment"],
      preferences: ["online", "face_ok", "long_term"],
      identities: ["overseas_person", "international_student", "creator"]
    },
    scoreFit: { expression: 4, aesthetic: 4, execution: 4, analysis: 3 },
    platforms: ["xiaohongshu", "douyin", "tiktok"],
    monetization: "商单、探店合作、带货佣金、信息差资料包、社群。",
    scale: "前期靠真实海外生活内容吸粉，后期很容易切代购、带货、留学生活服务或本地商家合作。",
    steps: [
      "先定一个细分方向，比如超市测评、平价餐厅、留学生生活成本、药妆店好物。",
      "连续做 7 到 10 条真实记录，不要一上来拍很空的“国外日常”。",
      "优先发“国内看不到 / 国内不清楚 / 国内容易误判”的内容，信息差越强越容易起量。",
      "当某一类内容稳定有收藏和私信后，再接探店合作或挂相关产品。"
    ],
    weekPlan: [
      "第 1 天：选细分主题。",
      "第 2 天：列 10 个选题。",
      "第 3 天：发第 1 条测评。",
      "第 4 天：发第 2 条超市 / 店铺内容。",
      "第 5 天：看哪类评论最多。",
      "第 6 天：继续补第 3 条和第 4 条。",
      "第 7 天：开始整理可以卖的延伸产品。"
    ]
  },
  {
    name: "小众品牌代购 / 预售主理人",
    mode: "info_gap",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["fashion", "money", "travel"],
      personality: ["creative", "analytical", "result_driven"],
      abilities: ["sales", "aesthetic", "organization"],
      resources: ["overseas", "network", "capital"],
      preferences: ["online", "solo", "sales_ok"],
      identities: ["overseas_person", "international_student", "freelancer"]
    },
    minimumHits: {
      abilities: 1,
      resources: 1
    },
    scoreFit: { sales: 4, analysis: 3, aesthetic: 4, integration: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "wechat", "instagram"],
    monetization: "代购差价、预售订金、跑腿费、会员制复购。",
    scale: "比大众代购更容易做出审美壁垒，后面可以升级成买手选品业务。",
    steps: [
      "不要一上来卖大路货，先选 1 个小众赛道，比如香氛、户外、文具、宠物用品。",
      "先在本地门店和官网里筛 20 个你觉得国内少见、价格带可接受的产品。",
      "发内容测试大家对哪类商品最有兴趣，再做小批量预售，不要先囤太多货。",
      "先跑顺 5 到 10 单，再考虑固定选品和会员群。"
    ],
    weekPlan: [
      "第 1 天：定赛道。",
      "第 2 天：筛 20 个候选产品。",
      "第 3 天：发第一条选品内容。",
      "第 4 天：收集意向和预售反馈。",
      "第 5 天：确定第一批预售款。",
      "第 6 天：完成首批成交。",
      "第 7 天：复盘最好卖的风格。"
    ]
  },
  {
    name: "本地生活助理 / 跑腿代办包",
    mode: "service",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["social", "money", "travel"],
      personality: ["stable", "patient", "result_driven"],
      abilities: ["execution", "communication", "delivery"],
      resources: ["local", "time"],
      preferences: ["offline", "collab"],
      identities: ["freelancer", "student_user", "office_worker"]
    },
    scoreFit: { delivery: 5, execution: 5, sales: 2, expression: 2 },
    platforms: ["wechat", "xiaohongshu"],
    monetization: "按次服务费、打包套餐费、加急费。",
    scale: "先从小区 / 校园 / 办公区做熟，后面可以扩成固定客户的生活助理服务。",
    steps: [
      "先定 3 个最现实的服务场景，比如代排队、代送证件、代办资料。",
      "把服务范围、价格和响应时间写清楚，不要一开始什么都答应。",
      "优先去小区群、校友群、同城群测试第一批需求。",
      "有了前 5 个用户反馈后，再把高频需求打包成标准套餐。"
    ],
    weekPlan: [
      "第 1 天：定服务场景。",
      "第 2 天：写服务说明。",
      "第 3 天：发到 3 个群测试。",
      "第 4 天：接第一单。",
      "第 5 天：补充高频问题。",
      "第 6 天：继续接第二第三单。",
      "第 7 天：整理套餐版服务。"
    ]
  },
  {
    name: "跨境选品 Scout",
    mode: "info_gap",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["money", "fashion", "travel", "learning"],
      personality: ["analytical", "adventurous", "result_driven"],
      abilities: ["data", "organization", "communication"],
      resources: ["overseas", "network", "capital"],
      preferences: ["online", "solo", "collab"],
      identities: ["overseas_person", "international_student", "freelancer"]
    },
    scoreFit: { analysis: 5, integration: 4, delivery: 3, sales: 3 },
    platforms: ["xiaohongshu", "wechat", "linkedin"],
    monetization: "选品费、顾问费、打样佣金、长期 scouting 合作。",
    scale: "非常适合往跨境买手、品牌顾问和中外资源撮合升级。",
    steps: [
      "先定一个本地高潜品类。",
      "持续记录新品、价格带和线下反馈。",
      "把信息整理成商家看得懂的选品报告。",
      "先从小品牌试合作。"
    ],
    weekPlan: [
      "第 1 天：定品类。",
      "第 2 天：线下逛店记录。",
      "第 3 天：整理样本图和价格。",
      "第 4 天：做简版选品报告。",
      "第 5 天：联系第一批商家。",
      "第 6 天：沟通需求。",
      "第 7 天：调整报告格式。"
    ]
  },
  {
    name: "TikTok Shop Affiliate Creator",
    mode: "content",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 6,
    tags: {
      interests: ["money", "fashion", "food", "pet"],
      personality: ["creative", "result_driven", "adventurous"],
      abilities: ["editing", "sales", "execution", "aesthetic"],
      resources: ["overseas", "equipment", "time"],
      preferences: ["online", "face_ok", "sales_ok", "long_term"],
      identities: ["overseas_person", "international_student", "creator"]
    },
    scoreFit: { sales: 5, execution: 5, aesthetic: 4, expression: 4 },
    excludePreferences: ["no_sales"],
    platforms: ["tiktok", "instagram", "xiaohongshu"],
    monetization: "联盟佣金、品牌商单、选品服务、素材代拍、代运营。",
    scale: "跑顺后非常适合升级成个人 IP、内容电商团队或者垂类带货业务。",
    steps: [
      "先定一个国家站点和一个细分类目。",
      "研究 50 条同类带货视频，拆开脚本和镜头。",
      "先从联盟商品起步，连续测 10 到 20 条内容。",
      "把转化好的内容模板反复打磨，再谈品牌合作。"
    ],
    weekPlan: [
      "第 1 天：定站点和类目。",
      "第 2 天：拆 50 条对标视频。",
      "第 3 天：申请联盟商品。",
      "第 4 天：拍 3 条测试视频。",
      "第 5 天：继续补到 6 条。",
      "第 6 天：看点击和成交反馈。",
      "第 7 天：保留最强模板继续加量。"
    ]
  },
  {
    name: "海外接机 / 带看房 / 搬家服务",
    mode: "service",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["social", "travel", "money"],
      personality: ["extrovert", "stable", "patient"],
      abilities: ["communication", "execution", "delivery"],
      resources: ["overseas", "local", "network"],
      preferences: ["offline", "collab", "sales_ok"],
      identities: ["overseas_person", "international_student"]
    },
    scoreFit: { delivery: 5, execution: 4, sales: 3, integration: 3 },
    platforms: ["wechat", "xiaohongshu"],
    monetization: "按次服务费、组合套餐费、转介绍。",
    scale: "后面可以升级成留学生生活服务包，甚至做本地化服务品牌。",
    steps: [
      "先做一个最真实的服务切口。",
      "把价格、服务范围和注意事项写清楚。",
      "去留学生群和社媒试着接前 3 单。",
      "把每次服务的反馈留存下来。"
    ],
    weekPlan: [
      "第 1 天：定服务内容。",
      "第 2 天：写说明页。",
      "第 3 天：发群测试。",
      "第 4 天：接第一单。",
      "第 5 天：完善服务边界。",
      "第 6 天：争取第二单。",
      "第 7 天：整理评价。"
    ]
  },
  {
    name: "数据可视化模板售卖",
    mode: "skill",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 3,
    tags: {
      interests: ["learning", "money", "writing"],
      personality: ["analytical", "introvert", "stable"],
      abilities: ["data", "organization", "aesthetic"],
      resources: ["time"],
      preferences: ["no_face", "online", "solo", "long_term"],
      identities: ["office_worker", "freelancer", "student_user"]
    },
    scoreFit: { analysis: 5, aesthetic: 3, execution: 4, expression: 2 },
    platforms: ["xiaohongshu", "wechat", "zhihu"],
    monetization: "模板费、企业定制费、顾问费。",
    scale: "先卖标准模板，后面很自然能接到企业内训或定制项目。",
    steps: [
      "先做一个场景模板，比如预算、增长、选品。",
      "把模板用法和结果展示清楚。",
      "低价上架先验证需求。",
      "再做升级版或配套教程。"
    ],
    weekPlan: [
      "第 1 天：定场景。",
      "第 2 天：做模板。",
      "第 3 天：补案例图。",
      "第 4 天：发介绍内容。",
      "第 5 天：上架售卖。",
      "第 6 天：收第一轮反馈。",
      "第 7 天：迭代模板。"
    ]
  },
  {
    name: "电商选品分析顾问",
    mode: "skill",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["money", "learning", "fashion"],
      personality: ["analytical", "result_driven", "stable"],
      abilities: ["data", "organization", "sales"],
      resources: ["time", "network"],
      preferences: ["online", "solo", "long_term"],
      identities: ["office_worker", "freelancer"]
    },
    scoreFit: { analysis: 5, delivery: 4, expression: 2, sales: 2 },
    platforms: ["zhihu", "wechat", "xiaohongshu"],
    monetization: "分析费、顾问费、分成合作。",
    scale: "后续可升级成选品 scout、运营顾问或者垂类情报号。",
    steps: [
      "先选一个平台和一个类目。",
      "持续跟踪热卖商品、评论和价格带。",
      "做出一版能落地的分析报告。",
      "先给小商家试用换案例。"
    ],
    weekPlan: [
      "第 1 天：定平台类目。",
      "第 2 天：拉样本数据。",
      "第 3 天：做初版分析。",
      "第 4 天：补结论。",
      "第 5 天：联系商家。",
      "第 6 天：听需求。",
      "第 7 天：优化报告。"
    ]
  },
  {
    name: "社媒账号复盘顾问",
    mode: "skill",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["writing", "money", "learning"],
      personality: ["analytical", "stable", "patient"],
      abilities: ["data", "writing", "teaching"],
      resources: ["time"],
      preferences: ["online", "solo", "no_face"],
      identities: ["creator", "office_worker", "freelancer"]
    },
    scoreFit: { analysis: 5, teaching: 4, expression: 3, execution: 3 },
    platforms: ["xiaohongshu", "wechat", "zhihu"],
    monetization: "复盘费、账号诊断费、陪跑费。",
    scale: "特别适合从内容复盘升级到代运营或咨询业务。",
    steps: [
      "先做 3 个免费账号诊断样例。",
      "用截图说明问题点和优化点。",
      "发复盘型内容吸引咨询。",
      "先从低价诊断单开始。"
    ],
    weekPlan: [
      "第 1 天：选 3 个样例账号。",
      "第 2 天：完成第一版诊断。",
      "第 3 天：发复盘内容。",
      "第 4 天：继续第二个样例。",
      "第 5 天：整理服务说明。",
      "第 6 天：接第一单。",
      "第 7 天：复盘客户问题。"
    ]
  },
  {
    name: "旅游攻略定制 / 行程代做",
    mode: "info_gap",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["travel", "writing", "money", "social"],
      personality: ["analytical", "creative", "patient"],
      abilities: ["organization", "writing", "communication", "data"],
      resources: ["time", "local", "overseas"],
      preferences: ["online", "solo", "long_term"],
      identities: ["student_user", "office_worker", "overseas_person"]
    },
    scoreFit: { analysis: 4, expression: 4, execution: 4, delivery: 3 },
    platforms: ["xiaohongshu", "wechat"],
    monetization: "攻略费、路线费、代订服务费、地图模板费。",
    scale: "做成路线产品后，很容易升级成内容号和私域产品。",
    steps: [
      "先做 2 条你真的熟的路线。",
      "把路线、预算和避坑点写透。",
      "发攻略型内容吸引第一批用户。",
      "先接低价测试单验证需求。"
    ],
    weekPlan: [
      "第 1 天：选路线。",
      "第 2 天：做地图和预算表。",
      "第 3 天：发第一条攻略。",
      "第 4 天：补第二条避坑内容。",
      "第 5 天：开接定制。",
      "第 6 天：交付第一单。",
      "第 7 天：补优化版路线。"
    ]
  },
  {
    name: "学生考试资料整合 / 学习陪跑",
    mode: "info_gap",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 3,
    tags: {
      interests: ["learning", "writing", "money"],
      personality: ["stable", "patient", "analytical"],
      abilities: ["organization", "teaching", "writing", "execution"],
      resources: ["student", "time", "network"],
      preferences: ["online", "solo", "no_face", "long_term"],
      identities: ["student_user", "international_student"]
    },
    scoreFit: { teaching: 4, analysis: 3, execution: 4, expression: 3 },
    platforms: ["xiaohongshu", "wechat", "zhihu"],
    monetization: "资料包、陪跑服务、打卡群、答疑费。",
    scale: "跑通一个考试后，很适合持续扩到别的学科或做小社群。",
    steps: [
      "先选一个你最熟的考试。",
      "整理最小可交付版本的资料。",
      "发真实经验和避坑内容。",
      "先接 1 到 2 个陪跑用户。"
    ],
    weekPlan: [
      "第 1 天：定考试。",
      "第 2 天：做资料包。",
      "第 3 天：发经验内容。",
      "第 4 天：整理 FAQ。",
      "第 5 天：接第一单。",
      "第 6 天：补第二版资料。",
      "第 7 天：做打卡群。"
    ]
  }
];

const extendedSideHustles = [
  {
    name: "宠物用品测评号 + 宠物社群团购",
    mode: "content",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["pet", "content", "money"],
      personality: ["patient", "creative", "stable"],
      abilities: ["writing", "editing", "aesthetic", "execution"],
      resources: ["equipment", "time", "network"],
      preferences: ["online", "solo", "long_term", "sales_ok"],
      identities: ["creator", "office_worker", "freelancer"]
    },
    scoreFit: { expression: 4, aesthetic: 4, execution: 4, analysis: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "douyin"],
    monetization: "测评合作费、团购佣金、宠物用品联盟分成、社群复购。",
    scale: "先做一个细分养宠场景，比如猫砂、主食罐、遛狗装备，后面很容易变成宠物消费决策号。",
    steps: [
      "先只做一个养宠细分，不要一上来什么宠物产品都测。",
      "连续做 7 条真实使用内容，重点讲优缺点和适合什么宠物。",
      "把评论区高频问题整理成选题，再挂团购或联盟商品。",
      "当某个品类稳定有人问购买链接时，再去谈品牌合作。"
    ],
    weekPlan: [
      "第 1 天：定宠物细分赛道。",
      "第 2 天：列 10 个测评选题。",
      "第 3 天：发第 1 条测评。",
      "第 4 天：发第 2 条对比内容。",
      "第 5 天：整理评论区问题。",
      "第 6 天：挂第 1 个联盟商品。",
      "第 7 天：复盘最容易转化的内容。"
    ]
  },
  {
    name: "宠物寄养 / 遛宠撮合主理人",
    mode: "service",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["pet", "social", "money"],
      personality: ["patient", "stable", "result_driven"],
      abilities: ["communication", "organization", "sales", "execution"],
      resources: ["local", "network", "time"],
      preferences: ["offline", "collab", "sales_ok"],
      identities: ["freelancer", "office_worker", "student_user"]
    },
    scoreFit: { delivery: 4, integration: 4, sales: 3, execution: 4 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "wechat"],
    monetization: "撮合服务费、寄养抽佣、会员群、附加用品团购。",
    scale: "很适合从单次撮合升级到本地宠物服务资源库，后面还能叠加探店、团购、社群。",
    steps: [
      "先只做一个本地场景，比如节假日寄养或周末遛宠。",
      "整理 10 个靠谱寄养家庭、宠物店和遛宠服务资源。",
      "先从熟人和本地宠物群里接 3 单测试，优先建立信任和流程。",
      "把服务边界、价格和免责说明写清楚，再公开放大。"
    ],
    weekPlan: [
      "第 1 天：定服务场景。",
      "第 2 天：找 10 个本地资源。",
      "第 3 天：写服务说明。",
      "第 4 天：在宠物群测试招募。",
      "第 5 天：跑第 1 单。",
      "第 6 天：收用户反馈。",
      "第 7 天：整理标准流程。"
    ]
  },
  {
    name: "游戏攻略整理号 / 游戏情报站",
    mode: "info_gap",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 3,
    tags: {
      interests: ["gaming", "writing", "money", "learning"],
      personality: ["analytical", "patient", "stable"],
      abilities: ["writing", "execution", "data"],
      resources: ["time"],
      preferences: ["online", "solo", "no_face", "long_term"],
      identities: ["student_user", "creator", "office_worker"]
    },
    scoreFit: { expression: 4, analysis: 4, execution: 4, aesthetic: 2 },
    platforms: ["bilibili", "xiaohongshu", "zhihu"],
    monetization: "攻略资料包、陪玩引流、联盟分成、社区赞助、账号商单。",
    scale: "一旦跑出核心游戏垂类，后面可以延伸到工具包、陪练社群和直播切片。",
    steps: [
      "挑一个你真的熟的游戏，不要为了流量去做自己根本不玩的。",
      "先做新手攻略、版本更新总结、阵容推荐这种最刚需的内容。",
      "把散的信息整理成可收藏的长图、表格或视频合集。",
      "等账号有基础搜索流量后，再接工具包、陪练或联盟商品。"
    ],
    weekPlan: [
      "第 1 天：定游戏方向。",
      "第 2 天：列 10 个刚需攻略题目。",
      "第 3 天：发第 1 条攻略。",
      "第 4 天：发第 2 条版本总结。",
      "第 5 天：做 1 份可下载资料。",
      "第 6 天：看哪类问题问得最多。",
      "第 7 天：继续补第 3 条内容。"
    ]
  },
  {
    name: "游戏陪练 + 陪玩社群主理人",
    mode: "service",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["gaming", "social", "money"],
      personality: ["extrovert", "patient", "result_driven"],
      abilities: ["communication", "teaching", "execution"],
      resources: ["time", "network"],
      preferences: ["online", "collab", "sales_ok", "face_ok"],
      identities: ["student_user", "creator", "freelancer"]
    },
    scoreFit: { teaching: 4, expression: 3, execution: 4, sales: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["bilibili", "douyin"],
    monetization: "陪玩费、陪练费、社群门票、语音房活动、游戏相关带货。",
    scale: "从个人接单升级到组织车队、组队社群和游戏活动主理人，会越做越稳。",
    steps: [
      "先定一个自己真的能带人的游戏和段位场景。",
      "先从朋友局和游戏社群里接测试单，确认你最适合陪玩还是陪练。",
      "把流程、价格和可提供的服务写清楚，比如上分、教学、组队气氛。",
      "稳定接单后再做固定群和长期包周服务。"
    ],
    weekPlan: [
      "第 1 天：定游戏和服务类型。",
      "第 2 天：写服务介绍。",
      "第 3 天：在游戏群发测试招募。",
      "第 4 天：跑 1 次体验单。",
      "第 5 天：收评价。",
      "第 6 天：做包周方案。",
      "第 7 天：拉起第 1 个小群。"
    ]
  },
  {
    name: "菜谱内容号 / 厨房好物带货",
    mode: "content",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["food", "writing", "money"],
      personality: ["creative", "patient", "stable"],
      abilities: ["editing", "writing", "execution", "aesthetic"],
      resources: ["equipment", "time"],
      preferences: ["online", "solo", "long_term", "sales_ok"],
      identities: ["creator", "office_worker", "freelancer"]
    },
    scoreFit: { expression: 4, aesthetic: 4, execution: 4, analysis: 2 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "douyin"],
    monetization: "厨房好物佣金、食材合作、商单、电子菜谱、社群打卡。",
    scale: "特别适合从家常内容起号，再延伸到厨具、食材和课程类产品。",
    steps: [
      "先做一个具体场景，比如上班族晚饭、减脂便当、宿舍小电锅。",
      "连续发 7 条可复制的菜谱内容，重点讲简单和复现率。",
      "优先挂厨房好物和常用食材，不要太早接不相关商单。",
      "评论区有人问做法细节后，再出电子菜谱或打卡群。"
    ],
    weekPlan: [
      "第 1 天：定内容场景。",
      "第 2 天：列 7 个菜谱选题。",
      "第 3 天：拍第 1 条。",
      "第 4 天：拍第 2 条。",
      "第 5 天：挂第 1 个厨房好物。",
      "第 6 天：整理高频提问。",
      "第 7 天：发布第 3 条并复盘。"
    ]
  },
  {
    name: "小众零食测评 / 团购主理人",
    mode: "execution",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["food", "money", "social"],
      personality: ["creative", "result_driven", "stable"],
      abilities: ["execution", "sales", "writing", "aesthetic"],
      resources: ["network", "capital", "time"],
      preferences: ["online", "sales_ok", "collab"],
      identities: ["creator", "student_user", "office_worker"]
    },
    scoreFit: { execution: 4, sales: 4, expression: 3, analysis: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "wechat"],
    monetization: "团购佣金、差价、试吃合作、品牌投放。",
    scale: "跑通一个高复购零食方向后，很容易做成私域复购群。",
    steps: [
      "先选一个零食细分类目，比如低卡、进口糖、办公室解馋。",
      "先做 10 个产品口味和价格记录，别靠感觉乱推。",
      "发测评内容测试大家想买什么，再开小团。",
      "履约稳定后再谈独家优惠和品牌合作。"
    ],
    weekPlan: [
      "第 1 天：定零食方向。",
      "第 2 天：整理 10 个候选商品。",
      "第 3 天：发第 1 条测评。",
      "第 4 天：收集购买意向。",
      "第 5 天：跑第 1 次小团。",
      "第 6 天：统计复购。",
      "第 7 天：准备第 2 轮选品。"
    ]
  },
  {
    name: "穿搭模板号 / 胶囊衣橱顾问",
    mode: "content",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "低",
    minHours: 4,
    tags: {
      interests: ["fashion", "photography", "money"],
      personality: ["creative", "stable", "result_driven"],
      abilities: ["aesthetic", "writing", "editing"],
      resources: ["equipment", "time"],
      preferences: ["online", "face_ok", "long_term", "sales_ok"],
      identities: ["creator", "office_worker", "freelancer"]
    },
    scoreFit: { aesthetic: 5, expression: 4, execution: 3, sales: 3 },
    excludePreferences: ["no_sales"],
    platforms: ["xiaohongshu", "douyin"],
    monetization: "穿搭商单、带货佣金、胶囊衣橱清单、1 对 1 搭配建议。",
    scale: "先做固定人群穿搭模板，后面更容易变成可收费的搭配服务。",
    steps: [
      "先定一个具体人群，比如通勤女生、微胖男生、留学生平价穿搭。",
      "做 10 套可复制模板，不要只发好看但不可复现的内容。",
      "把单品链接、搭配思路和预算写清楚。",
      "稳定有收藏后，再卖搭配清单或接单品合作。"
    ],
    weekPlan: [
      "第 1 天：定人群和风格。",
      "第 2 天：整理 10 套模板。",
      "第 3 天：发第 1 条搭配内容。",
      "第 4 天：发第 2 条预算版内容。",
      "第 5 天：做清单版图文。",
      "第 6 天：整理评论问题。",
      "第 7 天：尝试挂第 1 个商品链接。"
    ]
  },
  {
    name: "简历作品集优化 / 面试陪练",
    mode: "teaching",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["writing", "learning", "money"],
      personality: ["patient", "stable", "analytical"],
      abilities: ["teaching", "writing", "communication", "analysis"],
      resources: ["network", "time"],
      preferences: ["online", "solo", "collab"],
      identities: ["office_worker", "freelancer", "student_user"]
    },
    scoreFit: { teaching: 5, expression: 4, analysis: 4, delivery: 3 },
    platforms: ["xiaohongshu", "wechat", "zhihu"],
    monetization: "简历优化费、模拟面试费、求职陪跑、资料包。",
    scale: "很适合从单次优化升级到某岗位的求职陪跑产品。",
    steps: [
      "先定一个你熟的岗位方向，比如运营、产品、设计、留学申请。",
      "先免费帮 2 到 3 个人改简历，换案例和反馈。",
      "把你最擅长解决的问题写成服务说明，比如不会讲项目、不会包装成果。",
      "跑通第一批后再做打包服务。"
    ],
    weekPlan: [
      "第 1 天：定岗位方向。",
      "第 2 天：做前后对比案例。",
      "第 3 天：发第 1 条经验内容。",
      "第 4 天：接 1 个测试单。",
      "第 5 天：跑模拟面试。",
      "第 6 天：整理高频问题。",
      "第 7 天：做标准服务页。"
    ]
  },
  {
    name: "AI 办公流搭建 / 表格自动化顾问",
    mode: "skill",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["learning", "money", "writing"],
      personality: ["analytical", "result_driven", "stable"],
      abilities: ["data", "organization", "execution", "teaching"],
      resources: ["time", "network"],
      preferences: ["online", "solo", "collab", "long_term"],
      identities: ["office_worker", "freelancer", "creator"]
    },
    scoreFit: { analysis: 5, delivery: 4, execution: 4, teaching: 3 },
    platforms: ["xiaohongshu", "zhihu", "wechat"],
    primaryJobs: ["tech", "office", "finance"],
    monetization: "搭建费、顾问费、培训费、模板销售。",
    scale: "特别适合从单次交付，慢慢升级到包月顾问和知识产品。",
    steps: [
      "先选一个最容易出效果的场景，比如表格自动汇总、会议纪要整理、客服回复模板。",
      "先把自己或朋友的一个真实流程改快 30% 以上，再拿它做案例。",
      "把流程前后对比写清楚，比只说会用 AI 更容易成交。",
      "先接轻量搭建单，再升级到顾问和培训。"
    ],
    weekPlan: [
      "第 1 天：定场景。",
      "第 2 天：做案例。",
      "第 3 天：录演示或写图文。",
      "第 4 天：发第 1 条获客内容。",
      "第 5 天：联系 5 个潜在客户。",
      "第 6 天：接 1 个测试需求。",
      "第 7 天：整理可复制模板。"
    ]
  },
  {
    name: "科研文献整理 / 学术资料助手",
    mode: "skill",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 3,
    tags: {
      interests: ["learning", "writing", "money"],
      personality: ["analytical", "patient", "stable"],
      abilities: ["writing", "data", "organization"],
      resources: ["time", "student"],
      preferences: ["online", "solo", "no_face"],
      identities: ["student_user", "international_student", "office_worker"]
    },
    scoreFit: { analysis: 4, expression: 4, execution: 3, teaching: 2 },
    platforms: ["zhihu", "wechat", "xiaohongshu"],
    primaryJobs: ["research", "education"],
    monetization: "文献整理费、资料包、综述框架整理、论文工具模板。",
    scale: "适合从一开始的小型整理服务，逐步升级到固定学术支持产品。",
    steps: [
      "先聚焦一个明确需求，比如文献综述表格、研究方向速览、资料归档。",
      "把交付边界写清楚，只做整理和辅助，不碰学术不当代写风险。",
      "先用 1 到 2 个真实样例展示你整理后的价值。",
      "前期先接轻量单，慢慢做成模板和资料包。"
    ],
    weekPlan: [
      "第 1 天：定服务边界。",
      "第 2 天：做样例表格。",
      "第 3 天：发第 1 条说明内容。",
      "第 4 天：联系潜在用户。",
      "第 5 天：接第 1 个整理单。",
      "第 6 天：总结交付模板。",
      "第 7 天：做第二个样例。"
    ]
  },
  {
    name: "法律 / 财税信息整理内容号",
    mode: "info_gap",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 3,
    tags: {
      interests: ["learning", "money", "writing"],
      personality: ["analytical", "stable", "patient"],
      abilities: ["writing", "analysis", "teaching"],
      resources: ["time"],
      preferences: ["online", "solo", "no_face", "long_term"],
      identities: ["office_worker", "freelancer", "creator"]
    },
    scoreFit: { analysis: 5, expression: 4, teaching: 3, execution: 3 },
    platforms: ["xiaohongshu", "zhihu", "wechat"],
    primaryJobs: ["legal", "finance"],
    monetization: "咨询引流、资料包、线索分发、课程或社群。",
    scale: "如果你本身就在法律或财税相关行业，这类内容非常适合做长期信任资产。",
    steps: [
      "只讲自己真正熟的细分问题，比如个税、合同避坑、海外报税、个体户开票。",
      "先做 10 条高频问答内容，不碰超出资质边界的建议。",
      "把复杂问题讲简单，比堆专业术语更容易建立信任。",
      "内容有搜索流量后，再接轻咨询或导向标准服务。"
    ],
    weekPlan: [
      "第 1 天：定细分问题。",
      "第 2 天：列 10 个高频问答。",
      "第 3 天：发第 1 条图文。",
      "第 4 天：发第 2 条问答。",
      "第 5 天：整理评论区问题。",
      "第 6 天：做资料清单。",
      "第 7 天：测试轻咨询入口。"
    ]
  },
  {
    name: "学科家教 / 升学陪跑",
    mode: "teaching",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["learning", "writing", "money"],
      personality: ["patient", "stable", "result_driven"],
      abilities: ["teaching", "communication", "writing"],
      resources: ["time", "network", "student"],
      preferences: ["online", "offline", "solo", "collab"],
      identities: ["student_user", "office_worker", "freelancer"]
    },
    scoreFit: { teaching: 5, expression: 3, execution: 3, analysis: 3 },
    platforms: ["wechat", "xiaohongshu", "zhihu"],
    primaryJobs: ["education", "research", "finance", "legal"],
    monetization: "按小时家教费、阶段陪跑费、资料包、模考答疑。",
    scale: "先做一对一，再做小班课、题库包、打卡群，后面很容易沉淀成稳定复购。",
    steps: [
      "先只选一个你真正能教出结果的学科或考试，不要一上来什么都接。",
      "整理 1 份提分方案和 2 份样例讲义，先证明你能把难题讲清楚。",
      "先从熟人转介绍、家长群、校友群接 2 到 3 个测试学生。",
      "把课后反馈、作业跟进和提分记录整理出来，再公开扩大招生。"
    ],
    weekPlan: [
      "第 1 天：定学科和目标人群。",
      "第 2 天：整理讲义和试听课。",
      "第 3 天：发布招生说明。",
      "第 4 天：安排第 1 次试听。",
      "第 5 天：收集家长 / 学生反馈。",
      "第 6 天：优化课程结构。",
      "第 7 天：争取转成第 1 个正式学员。"
    ]
  },
  {
    name: "科研方法 / 论文框架辅导",
    mode: "teaching",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["learning", "writing", "money"],
      personality: ["analytical", "patient", "stable"],
      abilities: ["teaching", "writing", "data", "organization"],
      resources: ["time", "network", "student"],
      preferences: ["online", "solo", "no_face", "collab"],
      identities: ["student_user", "international_student", "office_worker", "freelancer"]
    },
    scoreFit: { teaching: 5, analysis: 4, expression: 4, delivery: 3 },
    platforms: ["zhihu", "wechat", "xiaohongshu"],
    primaryJobs: ["research", "education", "medical"],
    monetization: "研究设计辅导费、论文框架梳理费、文献阅读陪跑、学术工具课。",
    scale: "很适合从一对一方法辅导升级到研究设计训练营、学术工具模板和长期陪跑。",
    steps: [
      "明确你的边界是“方法辅导和框架梳理”，不碰代写、代投这类高风险服务。",
      "先做 2 个公开样例，比如文献综述怎么起、研究问题怎么收窄、实验设计怎么搭。",
      "去导师群、研究生群、学术社区和小红书搜高频卡点，优先接“开题前最焦虑”的需求。",
      "先低价接 2 到 3 个框架梳理单，把流程和模板打磨出来。"
    ],
    weekPlan: [
      "第 1 天：写清服务边界。",
      "第 2 天：做 2 个方法样例。",
      "第 3 天：发第 1 条开题避坑内容。",
      "第 4 天：联系潜在学生群体。",
      "第 5 天：接第 1 个框架辅导单。",
      "第 6 天：复盘高频问题。",
      "第 7 天：整理标准化辅导模版。"
    ]
  },
  {
    name: "法律考试 / 法律写作辅导",
    mode: "teaching",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["learning", "writing", "money"],
      personality: ["patient", "analytical", "stable"],
      abilities: ["teaching", "writing", "analysis"],
      resources: ["time", "network"],
      preferences: ["online", "solo", "no_face", "collab"],
      identities: ["office_worker", "freelancer", "student_user"]
    },
    scoreFit: { teaching: 5, analysis: 4, expression: 4, execution: 3 },
    platforms: ["zhihu", "wechat", "xiaohongshu"],
    primaryJobs: ["legal", "education"],
    monetization: "法考辅导费、案例拆解课、法律写作批改费、资料包。",
    scale: "先做案例拆解和答题思路，后面可以扩成题库、批改、训练营和求职辅导。",
    steps: [
      "先只切一个明确方向，比如法考主观题、案例分析、合同审查写作。",
      "把你的讲解优势做成样例，最好是前后对比式批改。",
      "先在法学生群、法考群、校友群里接测试单，优先验证学生最愿意为什么付钱。",
      "稳定有反馈后再升级成阶段课和批改服务。"
    ],
    weekPlan: [
      "第 1 天：定服务切口。",
      "第 2 天：做 2 份批改样例。",
      "第 3 天：发布招生帖。",
      "第 4 天：安排试听或答疑。",
      "第 5 天：接第 1 个付费学生。",
      "第 6 天：沉淀答题模版。",
      "第 7 天：优化下一轮招生文案。"
    ]
  },
  {
    name: "金融 / 财会家教与实务辅导",
    mode: "teaching",
    barrier: "低",
    longTerm: "是",
    newbieFriendly: "是",
    difficulty: "中",
    minHours: 4,
    tags: {
      interests: ["learning", "money", "writing"],
      personality: ["analytical", "patient", "stable"],
      abilities: ["teaching", "data", "analysis", "communication"],
      resources: ["time", "network"],
      preferences: ["online", "solo", "collab"],
      identities: ["office_worker", "freelancer", "student_user"]
    },
    scoreFit: { teaching: 5, analysis: 5, expression: 3, delivery: 3 },
    platforms: ["wechat", "zhihu", "xiaohongshu"],
    primaryJobs: ["finance", "education"],
    monetization: "家教费、考证辅导费、财务实务训练营、表格模板包。",
    scale: "适合从一对一财会辅导，慢慢升级到考证陪跑、实务训练和企业内训。",
    steps: [
      "先选一个结果最明确的方向，比如会计入门、财务报表分析、 CFA / ACCA / 初会某一科。",
      "整理 1 份试听课和 1 套练习题，优先强调你能让学生少走哪些弯路。",
      "从熟人转介绍、考证群、实习生群和求职群接前几单。",
      "跑通第一批后，把内容拆成课时包、打卡群和模板产品。"
    ],
    weekPlan: [
      "第 1 天：定方向和用户。",
      "第 2 天：准备试听内容。",
      "第 3 天：联系第一批潜在学生。",
      "第 4 天：跑第 1 次试听。",
      "第 5 天：优化课程和题库。",
      "第 6 天：转第 1 个正式学员。",
      "第 7 天：整理成标准课包。"
    ]
  },
  {
    name: "中小企业财务梳理 / 经营分析顾问",
    mode: "skill",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["money", "learning", "writing"],
      personality: ["analytical", "result_driven", "stable"],
      abilities: ["data", "analysis", "communication", "organization"],
      resources: ["network", "time", "local"],
      preferences: ["online", "offline", "solo", "collab", "long_term"],
      identities: ["office_worker", "freelancer"]
    },
    scoreFit: { analysis: 5, delivery: 4, expression: 3, teaching: 2 },
    platforms: ["wechat", "zhihu", "xiaohongshu"],
    primaryJobs: ["finance", "office"],
    monetization: "诊断费、月度顾问费、财务梳理项目费、经营复盘服务费。",
    scale: "特别适合从一次报表梳理升级到包月经营分析、预算管理和老板财务陪跑。",
    steps: [
      "别直接写“财务咨询”，先把服务切成看得懂的小模块，比如利润表梳理、成本结构分析、现金流预警。",
      "用 1 个真实或模拟案例做前后对比，告诉老板你能帮他看出什么问题。",
      "先从身边商家、朋友公司、熟人老板里接第 1 个轻诊断单，优先做 1 次 90 分钟深度梳理。",
      "把诊断结果模板化后，再升级成包月顾问。"
    ],
    weekPlan: [
      "第 1 天：拆出 3 个最容易卖的模块。",
      "第 2 天：做 1 个财务诊断样例。",
      "第 3 天：联系 5 个潜在老板。",
      "第 4 天：约第 1 次诊断沟通。",
      "第 5 天：交付第 1 版分析。",
      "第 6 天：提出后续顾问方案。",
      "第 7 天：沉淀标准化报告模板。"
    ]
  },
  {
    name: "中小企业合同流程 / 合规顾问",
    mode: "skill",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["learning", "money", "writing"],
      personality: ["analytical", "stable", "patient"],
      abilities: ["writing", "analysis", "organization", "communication"],
      resources: ["network", "local", "time"],
      preferences: ["online", "offline", "solo", "collab", "long_term"],
      identities: ["office_worker", "freelancer"]
    },
    scoreFit: { analysis: 5, expression: 4, delivery: 4, teaching: 2 },
    platforms: ["wechat", "zhihu"],
    primaryJobs: ["legal", "office"],
    monetization: "合同模板包、审查费、流程梳理费、包月合规顾问费。",
    scale: "先做合同和流程体检，后面很适合延伸到 SOP、用工合规、供应商合作流程。",
    steps: [
      "先只卖一个特别具体的服务，比如合同条款体检、签约流程梳理、供应商合作模板。",
      "用脱敏案例展示“没梳理前容易踩什么坑、梳理后怎么省事”。",
      "从创业者群、老板群、本地商会和朋友公司拿到前 1 到 2 个测试项目。",
      "先交付清单和建议，不要一开始承诺做全套大改造。"
    ],
    weekPlan: [
      "第 1 天：定最小服务模块。",
      "第 2 天：整理 1 份合同体检样例。",
      "第 3 天：写服务说明和边界。",
      "第 4 天：联系第 1 批潜在客户。",
      "第 5 天：完成第 1 次流程诊断。",
      "第 6 天：交付问题清单。",
      "第 7 天：设计包月顾问方案。"
    ]
  },
  {
    name: "科研型企业技术资料 / 申报材料顾问",
    mode: "skill",
    barrier: "中",
    longTerm: "是",
    newbieFriendly: "否",
    difficulty: "中",
    minHours: 5,
    tags: {
      interests: ["learning", "writing", "money"],
      personality: ["analytical", "patient", "result_driven"],
      abilities: ["writing", "organization", "analysis", "communication"],
      resources: ["network", "time"],
      preferences: ["online", "solo", "collab", "long_term"],
      identities: ["office_worker", "freelancer", "international_student"]
    },
    scoreFit: { expression: 5, analysis: 4, delivery: 4, teaching: 2 },
    platforms: ["wechat", "zhihu", "xiaohongshu"],
    primaryJobs: ["research", "medical", "tech"],
    monetization: "材料梳理费、项目申报辅导费、技术资料包装费、长期顾问费。",
    scale: "很适合从单次材料梳理升级到固定企业外包支持，尤其适合懂科研但不想只做纯学术的人。",
    steps: [
      "先把服务说具体，比如技术亮点提炼、申报材料结构梳理、实验结果表达优化。",
      "做 1 到 2 个脱敏样例，让企业知道你不是写空话，而是能把复杂技术讲明白。",
      "先找科技型小企业、医药器械团队、实验室创业项目做测试合作。",
      "第一单重点是把复杂资料变成老板和评审都看得懂的版本。"
    ],
    weekPlan: [
      "第 1 天：拆分服务模块。",
      "第 2 天：做 1 个技术资料样例。",
      "第 3 天：联系 5 个潜在项目方。",
      "第 4 天：沟通他们最卡的材料问题。",
      "第 5 天：交付第 1 份试样。",
      "第 6 天：完善报价和边界。",
      "第 7 天：推进长期合作。"
    ]
  }
];

const hustleDetailOverrides = {
  "品牌与达人商务撮合": {
    firstMoney: "第一笔钱通常来自小预算试投放单。最现实的是先撮合 3000 到 10000 元的小品牌种草合作，收 10% 到 20% 的撮合佣金，或者直接收一笔固定对接服务费。",
    searchKeywords: [
      "去小红书搜“商务合作”“可接商单”“品牌合作”，先筛中小达人。",
      "去品牌主页、淘宝店铺、天猫新品牌、展会名单里找正在发新品的小品牌。",
      "在朋友圈、微信群、博主互助群里发“我可帮对接品牌 / 达人试投放”的测试帖。"
    ],
    pitfalls: [
      "不要一上来就碰大品牌，流程长、回款慢，新手很容易卡死。",
      "不要同时接太多类目，类目太散会导致你既不懂达人，也不懂品牌需求。",
      "先把合同、报价、结算方式讲清楚，不然后面最容易因为回款扯皮。"
    ]
  },
  "ToB 服务商牵线中间人": {
    firstMoney: "最常见的第一笔钱不是长期大单，而是一个试合作项目的撮合费。比如帮本地商家找到代运营、拍摄、设计、投流团队，收一笔介绍费或项目推进费。",
    searchKeywords: [
      "去本地商圈群、企查查、点评、小红书商家号里找有增长需求的老板。",
      "去朋友圈、同行群、服务商交流群里找靠谱供给方，先做 20 个资源名单。",
      "用“帮你省筛选和沟通时间”的话术切入，比直接说抽佣更容易开口。"
    ],
    pitfalls: [
      "不要什么项目都接，先只做一个你能看得懂交付的垂类。",
      "不要只会拉群，不会盯进度。真正能赚钱的是把项目推进落地。",
      "前期先赚信息和信任，别为了高佣金硬接不靠谱需求。"
    ]
  },
  "TikTok Shop Affiliate Creator": {
    firstMoney: "第一笔钱通常来自联盟商品佣金。你不需要先囤货，先挂 5 到 10 个佣金合适、素材好做的商品，跑出第一条有成交的视频就有机会见到第一笔收入。",
    searchKeywords: [
      "先去 TikTok Shop Affiliate 后台看近期热卖和高佣金商品。",
      "搜同类账号的开箱、测评、Before/After、使用对比内容，拆他们的脚本结构。",
      "优先选你所在地区真实能收到货、且你愿意持续拍的品类。"
    ],
    pitfalls: [
      "不要一开始追求拍得像广告，联盟视频更需要真实使用感。",
      "不要选自己完全没兴趣的商品，后面会拍不动。",
      "先少量、多测，多看数据反馈，不要一口气做一堆长视频。"
    ],
    fitProfile: "尤其适合在海外、愿意持续发内容、对镜头不抗拒，或者本来就熟悉短视频平台节奏的人。"
  },
  "小众品牌代购 / 预售主理人": {
    fitProfile: "更适合对某个具体消费赛道真的有长期兴趣的人，比如香氛、文具、户外、穿搭、宠物用品，而不是只因为“能卖”就硬做。",
    pitfalls: [
      "不要因为自己喜欢某个品就默认别人会买，先用内容测试需求。",
      "不要没有规则就开预售，发货周期、退款边界一定要讲清楚。",
      "新手别先大量囤货，先做小批量预售最稳。"
    ]
  }
};

const defaultMatchingWeights = {
  interest_weight: 0.28,
  ability_weight: 0.24,
  ability_willingness_weight: 0.22,
  resource_weight: 0.12,
  identity_weight: 0.1,
  preference_weight: 0.2,
  career_relevance_bonus: 0.08
};

const sideHustleLibrary = [...sideHustles, ...extendedSideHustles].map(normalizeHustle);

function normalizeHustle(hustle) {
  const normalizedTags = normalizeHustleTags(hustle.tags);
  const override = hustleDetailOverrides[hustle.name] || {};
  const merged = {
    ...inferHustleMeta(hustle),
    ...hustle,
    tags: normalizedTags,
    ...override
  };

  merged.matchingRules = {
    hardFilters: merged.hardFilters || buildHardFilters(merged),
    sortWeights: { ...defaultMatchingWeights, ...(merged.sortWeights || {}) },
    explanationFields: merged.explanationFields || ["interests", "personality", "abilities", "resources", "identities", "preferences"]
  };

  return merged;
}

function normalizeHustleTags(tags) {
  const aliases = {
    interests: {
      content: "writing"
    },
    abilities: {
      analysis: "data",
      delivery: "organization"
    }
  };

  return Object.fromEntries(
    Object.entries(tags).map(([group, values]) => [
      group,
      values.map((value) => aliases[group]?.[value] || value)
    ])
  );
}

function inferHustleMeta(hustle) {
  return {
    firstMoney: buildFirstMoney(hustle),
    searchKeywords: buildSearchKeywords(hustle),
    pitfalls: buildPitfalls(hustle),
    fitProfile: buildFitProfile(hustle)
  };
}

function buildHardFilters(hustle) {
  return {
    excludedPreferences: hustle.excludePreferences || [],
    requireAnyInterest: true,
    requireAnyAbility: hustle.mode === "skill" || hustle.mode === "teaching"
  };
}

function buildFirstMoney(hustle) {
  const presets = {
    info_gap: "第一笔钱通常来自一份低价但很具体的资料包、清单、攻略或轻咨询，不是先做成大号以后才赚钱。",
    resource_match: "第一笔钱通常来自一次撮合成功后的介绍费、推进费，或者你帮别人把人和项目接上之后收的服务费。",
    content: "第一笔钱大多来自联盟分成、低预算合作、素材费，先跑出第一条有反馈的内容比追求大商单更现实。",
    skill: "第一笔钱通常来自一个很小但很明确的交付单，比如模板、整理、优化、搭建，不是先接复杂大项目。",
    execution: "第一笔钱通常来自差价、代运营费、代卖费或一次小范围测试单，先把小闭环跑通最关键。",
    service: "第一笔钱一般来自第一次体验单或熟人转介绍，先用低风险测试单把流程跑顺更稳。",
    sales: "第一笔钱往往来自第一单成交佣金或一笔固定销售服务费，先追求首单而不是高客单。",
    teaching: "第一笔钱通常来自 1 对 1 体验辅导、低价陪跑或资料答疑，先证明你能帮人解决问题。"
  };

  return presets[hustle.mode] || "第一笔钱通常来自先把一个最小可交付版本卖出去，而不是等一切准备完。";
}

function buildSearchKeywords(hustle) {
  const platformHints = (hustle.platforms || []).slice(0, 3).map((item) => `去 ${formatPlatform(item)} 搜同类账号、合作帖和需求关键词。`);
  const modeHints = {
    info_gap: ["先搜“避坑”“攻略”“资料整理”“经验分享”，找真实用户在问什么。"] ,
    resource_match: ["先搜“合作”“对接”“供应商”“资源”“招募”，看两端的人都卡在哪一步。"] ,
    content: ["优先拆最近 30 天还在起量的内容，不要只看很老的爆款。"] ,
    skill: ["搜“求推荐”“谁会做”“代做”“顾问”“模板”，找到最直接的需求表达。"] ,
    execution: ["搜“团购”“闲置”“转卖”“代发”“拼单”，先看哪些品真的在成交。"] ,
    service: ["搜本地同城词、服务词和用户吐槽点，先找到最痛的真实需求。"] ,
    sales: ["先找已经在卖的人，看他们怎么成交、怎么报价、怎么处理异议。"] ,
    teaching: ["搜“求助”“带学”“陪跑”“资料”“如何入门”，这些都是天然需求信号。"] 
  };

  return [...platformHints, ...(modeHints[hustle.mode] || [])].slice(0, 3);
}

function buildPitfalls(hustle) {
  const presets = {
    info_gap: ["别把信息搬运当成价值，真正值钱的是你整理后的判断和落地建议。", "不要一开始做太大而全，先只解决一个很具体的问题。"],
    resource_match: ["不要只负责拉群，真正能收费的是你把合作推进到落地。", "别什么资源都接，先只做你看得懂的一类。"],
    content: ["不要为了更新频率牺牲真实感，用户更吃真实体验和具体观点。", "别太早接不相关商单，容易把账号做散。"],
    skill: ["不要一开始接超出自己交付边界的单，先从小而明确的需求做起。", "报价前要把交付范围说清楚，不然后面最容易反复改。"],
    execution: ["不要先囤太多货或铺太多链接，先用小样本测试成交。", "别只看表面热度，成交效率和复购更重要。"],
    service: ["不要口头约定，时间、价格、边界和售后都要提前说清楚。", "新手先跑体验单，别一开始就接太重的项目。"],
    sales: ["别一上来就强推，先把需求、预算和决策链问明白。", "不要只会报价，不会跟进。"],
    teaching: ["不要把服务讲得太虚，用户更关心你具体能帮他解决哪一步。", "先讲边界，不承诺不可控结果。"] 
  };

  return presets[hustle.mode] || ["先小步试错，别一次押太重。"];
}

function buildFitProfile(hustle) {
  const interestText = formatTags("interests", hustle.tags.interests.slice(0, 2));
  const abilityText = formatTags("abilities", hustle.tags.abilities.slice(0, 2));
  return `更适合对 ${interestText} 本来就有持续兴趣，同时手里至少有 ${abilityText} 这类基础能力的人。这样做起来不容易拧巴，也更容易坚持到看到结果。`;
}

const form = document.getElementById("recommendation-form");
const skillsMatrix = document.getElementById("skills-matrix");
const resultsContainer = document.getElementById("results");
const resultScreenList = document.getElementById("result-screen-list");
const emptyState = document.getElementById("empty-state");
const template = document.getElementById("result-card-template");
const homeScreen = document.getElementById("home-screen");
const resultScreen = document.getElementById("result-screen");
const backButton = document.getElementById("back-button");
let resultRevealTimer = null;

renderSkillInputs();
form.addEventListener("submit", handleSubmit);
backButton.addEventListener("click", showHomeScreen);

function renderSkillInputs() {
  const options = [1, 2, 3, 4, 5]
    .map((score) => `<option value="${score}" ${score === 3 ? "selected" : ""}>${score} 分</option>`)
    .join("");

  skillsMatrix.innerHTML = scoreFields
    .map(
      (field) => `
        <div class="skill-row">
          <div class="skill-name">${field.label}</div>
          <div class="skill-score">
            <label for="${field.key}-score">当前水平</label>
            <select id="${field.key}-score" name="${field.key}-score">
              ${options}
            </select>
          </div>
          <div class="skill-score">
            <label for="${field.key}-interest">愿不愿意靠它赚钱</label>
            <select id="${field.key}-interest" name="${field.key}-interest">
              ${options}
            </select>
          </div>
        </div>
      `
    )
    .join("");
}

function handleSubmit(event) {
  event.preventDefault();

  const profile = readProfile();
  const rankedResults = sideHustleLibrary
    .map((item) => scoreHustle(item, profile))
    .sort((left, right) => right.score - left.score)
    .slice(0, 6);

  renderResults(rankedResults, profile, resultsContainer);
  renderResults(rankedResults, profile, resultScreenList);
  showResultScreen();
}

function readProfile() {
  const formData = new FormData(form);
  const scoreMap = {};

  scoreFields.forEach((field) => {
    scoreMap[field.key] = {
      level: Number(formData.get(`${field.key}-score`)),
      interest: Number(formData.get(`${field.key}-interest`))
    };
  });

  return {
    name: (formData.get("name") || "").trim(),
    goal: formData.get("goal"),
    weeklyHours: Number(formData.get("weeklyHours")),
    interests: formData.getAll("interests"),
    personality: formData.getAll("personality"),
    abilities: normalizeArray(formData.getAll("abilities"), "no_special_skill"),
    resources: formData.getAll("resources"),
    identities: normalizeIdentities(formData),
    preferences: normalizePreferences(formData.getAll("preferences")),
    primaryJob: formData.get("primaryJob"),
    jobRelated: formData.get("jobRelated"),
    familiarPlatform: formData.get("familiarPlatform"),
    notes: (formData.get("notes") || "").trim(),
    scoreMap
  };
}

function normalizeArray(items, fallback) {
  return items.length ? items : [fallback];
}

function normalizeIdentities(formData) {
  const identities = new Set(formData.getAll("identities"));

  if (formData.get("primaryJob") !== "none") {
    identities.add("office_worker");
  }

  if (formData.getAll("resources").includes("overseas")) {
    identities.add("overseas_person");
  }

  if (formData.getAll("resources").includes("student")) {
    identities.add("student_user");
  }

  return [...identities];
}

function normalizePreferences(preferences) {
  const set = new Set(preferences);

  if (!set.has("online") && !set.has("offline")) {
    set.add("online");
  }

  if (!set.has("solo") && !set.has("collab")) {
    set.add("solo");
  }

  return [...set];
}

function extractNoteSignals(notes) {
  const value = notes.toLowerCase();

  return {
    quickCash: /快点赚|尽快见钱|第一笔|快点搞钱|先赚钱/.test(value),
    noInventory: /不囤货|不要囤货|不想囤货/.test(value),
    noHeavyStart: /不想一开始搞太重|先轻一点|别太重|轻一点/.test(value),
    noLongAccount: /不想做长期账号|不想做长期号|不想长期做账号/.test(value),
    onlineFirst: /先在线上|线上试试|线上优先/.test(value),
    eveningsOnly: /晚上搞|晚上做|白天上班/.test(value),
    interestFirst: /兴趣相关|更想做和兴趣相关/.test(value)
  };
}

function scoreHustle(hustle, profile) {
  const noteSignals = extractNoteSignals(profile.notes);
  const weights = hustle.matchingRules.sortWeights;
  let score = 0;
  const reasons = [];
  const hits = {
    interests: intersect(profile.interests, hustle.tags.interests),
    personality: intersect(profile.personality, hustle.tags.personality),
    abilities: intersect(profile.abilities, hustle.tags.abilities),
    resources: intersect(profile.resources, hustle.tags.resources),
    preferences: intersect(profile.preferences, hustle.tags.preferences),
    identities: intersect(profile.identities, hustle.tags.identities)
  };

  score += hits.interests.length * 56 * weights.interest_weight;
  score += hits.personality.length * 24;
  score += hits.abilities.length * 42 * weights.ability_weight;
  score += hits.resources.length * 34 * weights.resource_weight;
  score += hits.preferences.length * 30 * weights.preference_weight;
  score += hits.identities.length * 36 * weights.identity_weight;
  score += scoreByScoreForm(hustle, profile.scoreMap);

  if (!hits.interests.length) {
    score -= hustle.matchingRules.hardFilters.requireAnyInterest ? 30 : 12;
    reasons.push("这条路和你当前最想长期碰的兴趣点连接不够强，所以它更像能做，但不一定做得久。");
  }

  if (hustle.matchingRules.hardFilters.requireAnyAbility && !hits.abilities.length) {
    score -= 24;
    reasons.push("这条路更吃可直接变现的能力基础，如果你现在完全没有相关能力命中，建议先排在后面。");
  }

  if (hits.interests.length >= 2) {
    score += 14;
    reasons.push(`它不只是蹭到你一点兴趣，而是同时踩中了 ${formatTags("interests", hits.interests)}，这会明显提高你做下去的概率。`);
  }

  const minimumCheck = applyMinimumHits(hustle, hits);
  score += minimumCheck.score;
  if (minimumCheck.reason) {
    reasons.push(minimumCheck.reason);
  }

  if (hits.identities.length) {
    reasons.push(`你的身份和地区标签里有 ${formatTags("identities", hits.identities)}，这类副业本身就吃这种场景优势。`);
  }

  if (hits.resources.length) {
    reasons.push(`你手里的资源像 ${formatTags("resources", hits.resources)}，能直接帮你把启动门槛压下来。`);
  }

  if (hits.abilities.length) {
    reasons.push(`你的能力标签里有 ${formatTags("abilities", hits.abilities)}，这条路不需要你先补太多课。`);
  }

  if (hits.personality.length) {
    reasons.push(`你的性格偏 ${formatTags("personality", hits.personality)}，和这条路的赚钱节奏很匹配。`);
  }

  if (hits.interests.length) {
    reasons.push(`兴趣里有 ${formatTags("interests", hits.interests)}，你更容易长期做下去，而不是做两天就停。`);
  }

  if (hits.preferences.length) {
    reasons.push(`你的偏好是 ${formatTags("preferences", hits.preferences)}，所以这条路会比高门槛硬技能路线更顺手。`);
  }

  const conflicts = hustle.excludePreferences
    ? hustle.excludePreferences.filter((item) => profile.preferences.includes(item))
    : [];

  if (conflicts.length) {
    score -= conflicts.length * 28;
    reasons.push(`但你当前偏好 ${formatTags("preferences", conflicts)}，执行时可能会有点别扭。`);
  }

  if (profile.weeklyHours >= hustle.minHours) {
    score += 10;
    reasons.push(`你现在每周大概能投入 ${profile.weeklyHours} 小时，足够把它先跑起来。`);
  } else {
    score -= 8;
  }

  if (hustle.platforms && hustle.platforms.includes(profile.familiarPlatform)) {
    score += 8;
    reasons.push(`你本来就更熟悉 ${formatPlatform(profile.familiarPlatform)}，这会让获客和发内容更省力。`);
  }

  if (hustle.primaryJobs && hustle.primaryJobs.includes(profile.primaryJob) && profile.jobRelated === "yes") {
    score += 40 * weights.career_relevance_bonus;
    reasons.push(`它和你的 ${formatPrimaryJob(profile.primaryJob)} 有联动空间，更容易边做边放大。`);
  }

  if (profile.goal === "extra_income" && hustle.barrier === "低") {
    score += 8;
  }

  if (profile.goal === "stable_income" && hustle.longTerm === "是") {
    score += 8;
  }

  if (profile.goal === "freelance_path" && profile.preferences.includes("solo")) {
    score += 6;
  }

  if (noteSignals.quickCash && hustle.barrier === "低") {
    score += 8;
  }

  if (noteSignals.noInventory && hustle.tags.resources.includes("capital")) {
    score -= 14;
    reasons.push("你备注里提到不想先囤货，这条路前期如果压货太重，会让你做起来压力更大。");
  }

  if (noteSignals.noLongAccount && hustle.mode === "content") {
    score -= 10;
  }

  if (noteSignals.onlineFirst && hustle.tags.preferences.includes("offline") && !hustle.tags.preferences.includes("online")) {
    score -= 18;
  }

  if (noteSignals.eveningsOnly && hustle.tags.preferences.includes("offline") && hustle.minHours >= 5) {
    score -= 8;
  }

  if (noteSignals.interestFirst && hits.interests.length) {
    score += 8;
  }

  return { ...hustle, score, reasons: dedupeReasons(reasons) };
}

function applyMinimumHits(hustle, hits) {
  if (!hustle.minimumHits) {
    return { score: 0, reason: "" };
  }

  const unmet = Object.entries(hustle.minimumHits)
    .filter(([group, min]) => (hits[group] || []).length < min)
    .map(([group]) => group);

  if (!unmet.length) {
    return { score: 10, reason: "你不只是表面感兴趣，这条路需要的关键能力或资源你也至少占到了一部分。" };
  }

  const labels = {
    abilities: "关键能力",
    resources: "关键资源",
    identities: "身份场景",
    preferences: "执行偏好"
  };

  return {
    score: -22,
    reason: `这条路虽然你可能会感兴趣，但目前在 ${unmet.map((item) => labels[item] || item).join("、")} 上还不够强，所以更适合排在后面。`
  };
}

function scoreByScoreForm(hustle, scoreMap) {
  const mapping = {
    expression: "expression",
    execution: "execution",
    analysis: "analysis",
    teaching: "teaching",
    aesthetic: "aesthetic",
    sales: "sales",
    integration: "integration",
    delivery: "delivery"
  };

  return Object.entries(hustle.scoreFit).reduce((total, [key, target]) => {
    const source = scoreMap[mapping[key]];
    if (!source) {
      return total;
    }

    return total + source.level * target * 0.9 + source.interest * target * 1.35;
  }, 0);
}

function intersect(source, target) {
  return source.filter((item) => target.includes(item));
}

function renderResults(results, profile, container) {
  container.innerHTML = "";

  if (container === resultsContainer) {
    emptyState.classList.add("hidden");
  }

  results.forEach((result, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".result-card");
    const displayScore = formatDisplayScore(result.score);

    fragment.querySelector(".result-rank").textContent = `Top ${index + 1}`;
    fragment.querySelector(".result-title").textContent = result.name;
    fragment.querySelector(".score-badge").textContent = `匹配度 ${displayScore}`;
    fragment.querySelector(".result-summary").textContent = buildSummary(profile, result);
    renderList(fragment.querySelector(".reason-list"), result.reasons);
    renderList(fragment.querySelector(".starter-plan"), result.steps);
    fragment.querySelector(".monetization-plan").textContent = result.monetization;
    fragment.querySelector(".first-money-plan").textContent = result.firstMoney;
    renderList(fragment.querySelector(".search-plan"), result.searchKeywords);
    fragment.querySelector(".scale-plan").textContent = result.scale;
    renderList(fragment.querySelector(".pitfall-plan"), result.pitfalls);
    fragment.querySelector(".fit-profile").textContent = result.fitProfile;
    renderList(fragment.querySelector(".day-plan"), result.weekPlan);
    fragment.querySelector(".result-encouragement").textContent = buildEncouragement(index);
    fragment.querySelector(".mode-chip").textContent = `模式：${formatMode(result.mode)}`;
    fragment.querySelector(".barrier-chip").textContent = `门槛：${result.barrier}`;
    fragment.querySelector(".newbie-chip").textContent = `新手友好：${result.newbieFriendly}`;
    fragment.querySelector(".longterm-chip").textContent = `长期发展：${result.longTerm}`;

    card.style.animation = `fadeUp 420ms ease ${index * 80}ms both`;
    window.setTimeout(() => {
      card.classList.add("is-revealed");
    }, 60 + index * 120);
    container.appendChild(fragment);
  });
}

function formatDisplayScore(score) {
  const safeScore = Math.max(score, 0);
  return Math.min(99, Math.round(safeScore / 3));
}

function renderList(target, items) {
  target.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    target.appendChild(li);
  });
}

function buildSummary(profile, result) {
  const displayName = profile.name || "你";
  return `${displayName}当前更适合先试“${result.name}”。这不是只看你会什么，而是把兴趣能不能长期撑住、能力愿不愿意拿来赚钱、你手上资源够不够、身份场景有没有优势一起算进去之后，更容易先跑出第一笔钱的那条路。`;
}

function buildEncouragement(index) {
  const lines = [
    "真正能赚到钱的人，很多时候不是最天赋异禀的，而是最早把最小闭环跑通的人。先小赚，再放大。坚持就是胜利。",
    "别等所有条件都齐了才开始。先发第一条、先接第一单、先跑第一次转化，钱感就是这么练出来的。坚持就是胜利。",
    "你现在已经不是缺方向了，更多是缺第一轮执行。把这周跑顺，很多事会比你想得清楚。坚持就是胜利。"
  ];

  return lines[index] || lines[0];
}

function formatTags(type, values) {
  return values.map((value) => tagLabels[type][value] || value).join("、");
}

function formatMode(mode) {
  return tagLabels.modes[mode] || mode;
}

function formatPrimaryJob(primaryJob) {
  const labels = {
    office: "职场办公类主业",
    education: "教育培训类主业",
    tech: "互联网或技术类主业",
    design: "设计内容类主业",
    sales: "销售商务类主业",
    media: "传媒传播类主业",
    finance: "金融财会类主业",
    research: "科研学术类主业",
    legal: "法律合规类主业",
    medical: "医疗健康类主业"
  };

  return labels[primaryJob] || "当前主业";
}

function formatPlatform(platform) {
  const labels = {
    xiaohongshu: "小红书",
    douyin: "抖音",
    bilibili: "B 站",
    wechat: "公众号",
    zhihu: "知乎",
    weibo: "微博",
    tiktok: "TikTok",
    instagram: "Instagram"
  };

  return labels[platform] || "当前平台";
}

function showResultScreen() {
  homeScreen.classList.add("is-hidden");
  resultScreen.classList.remove("hidden");
  resultScreen.classList.remove("is-ready");

  if (resultRevealTimer) {
    window.clearTimeout(resultRevealTimer);
  }

  resultRevealTimer = window.setTimeout(() => {
    resultScreen.classList.add("is-ready");
  }, 900);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showHomeScreen() {
  if (resultRevealTimer) {
    window.clearTimeout(resultRevealTimer);
    resultRevealTimer = null;
  }

  resultScreen.classList.add("hidden");
  resultScreen.classList.remove("is-ready");
  homeScreen.classList.remove("is-hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function dedupeReasons(reasons) {
  return [...new Set(reasons)].slice(0, 5);
}
