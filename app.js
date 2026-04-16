const skills = [
  "写作",
  "设计",
  "英语",
  "摄影",
  "剪辑",
  "画画",
  "手工",
  "做饭",
  "审美",
  "编程",
  "销售",
  "沟通",
  "教学",
  "运营",
  "收纳整理",
  "策划",
  "动手能力"
];

const questionnaireEffects = {
  strengthType: {
    expression: { skills: { "写作": 1, "沟通": 1, "运营": 1 } },
    execution: { skills: { "剪辑": 1, "设计": 1, "手工": 1, "动手能力": 1 } },
    analysis: { skills: { "编程": 1, "写作": 1 } },
    teaching: { skills: { "教学": 2, "沟通": 1, "英语": 1 } }
  },
  serviceTarget: {
    individual: { hustleBoosts: ["英语家教 / 口语陪练", "PPT / 简历优化服务", "知识咨询 / 线上陪跑", "插画接稿 / 头像定制", "收纳整理顾问 / 上门整理"] },
    business: { hustleBoosts: ["自媒体账号代运营", "编程接私活 / 网站搭建", "自由撰稿 / 文案接单", "海报设计 / 电商作图", "PPT 模板 / 表格模板售卖"] },
    creator: { hustleBoosts: ["短视频剪辑接单", "自媒体账号代运营", "自由撰稿 / 文案接单", "播客剪辑 / 音频后期", "插画接稿 / 头像定制"] },
    mixed: {}
  },
  incomeStyle: {
    fast: { hustleBoosts: ["PPT / 简历优化服务", "短视频剪辑接单", "英语家教 / 口语陪练", "收纳整理顾问 / 上门整理", "活动策划 / 主持文案"] },
    steady: { hustleBoosts: ["自媒体账号代运营", "知识咨询 / 线上陪跑", "英语家教 / 口语陪练", "私房烘焙 / 家常料理订制", "家庭收纳内容号 / 带货账号"] },
    accumulate: { hustleBoosts: ["自由撰稿 / 文案接单", "编程接私活 / 网站搭建", "自媒体账号代运营", "PPT 模板 / 表格模板售卖", "食谱博主 / 美食内容号"] }
  },
  taskStyle: {
    creative: { hustleBoosts: ["短视频剪辑接单", "自由撰稿 / 文案接单", "摄影约拍 / 图片精修", "插画接稿 / 头像定制", "节日礼盒 / 婚礼手作定制"] },
    structured: { hustleBoosts: ["PPT / 简历优化服务", "编程接私活 / 网站搭建", "英语家教 / 口语陪练", "PPT 模板 / 表格模板售卖", "收纳整理顾问 / 上门整理"] },
    repeatable: { hustleBoosts: ["英语家教 / 口语陪练", "自媒体账号代运营", "PPT / 简历优化服务", "私房烘焙 / 家常料理订制", "宠物鲜食 / 宠物零食订制"] },
    project: { hustleBoosts: ["编程接私活 / 网站搭建", "短视频剪辑接单", "摄影约拍 / 图片精修", "海报设计 / 电商作图", "活动策划 / 主持文案"] }
  }
};

const primaryJobEffects = {
  none: {},
  office: {
    hustleBoosts: ["PPT / 简历优化服务", "自由撰稿 / 文案接单", "自媒体账号代运营", "收纳整理顾问 / 上门整理"]
  },
  education: {
    hustleBoosts: ["英语家教 / 口语陪练", "知识咨询 / 线上陪跑", "自由撰稿 / 文案接单", "儿童美术 / 成人兴趣课"]
  },
  tech: {
    hustleBoosts: ["编程接私活 / 网站搭建", "知识咨询 / 线上陪跑", "自由撰稿 / 文案接单", "PPT 模板 / 表格模板售卖"]
  },
  design: {
    hustleBoosts: ["短视频剪辑接单", "PPT / 简历优化服务", "摄影约拍 / 图片精修", "插画接稿 / 头像定制", "手作定制 / 摆摊小店", "海报设计 / 电商作图"]
  },
  sales: {
    hustleBoosts: ["知识咨询 / 线上陪跑", "自媒体账号代运营", "自由撰稿 / 文案接单", "活动策划 / 主持文案"]
  },
  media: {
    hustleBoosts: ["自媒体账号代运营", "短视频剪辑接单", "自由撰稿 / 文案接单", "私房烘焙 / 家常料理订制", "食谱博主 / 美食内容号", "播客剪辑 / 音频后期"]
  }
};

const platformEffects = {
  none: {},
  xiaohongshu: {
    hustleBoosts: ["自媒体账号代运营", "自由撰稿 / 文案接单", "PPT / 简历优化服务", "手作定制 / 摆摊小店", "私房烘焙 / 家常料理订制", "收纳整理顾问 / 上门整理", "食谱博主 / 美食内容号", "家庭收纳内容号 / 带货账号", "节日礼盒 / 婚礼手作定制"]
  },
  douyin: {
    hustleBoosts: ["短视频剪辑接单", "自媒体账号代运营", "私房烘焙 / 家常料理订制", "手作定制 / 摆摊小店", "播客剪辑 / 音频后期", "宠物鲜食 / 宠物零食订制"]
  },
  bilibili: {
    hustleBoosts: ["短视频剪辑接单", "知识咨询 / 线上陪跑", "编程接私活 / 网站搭建", "插画接稿 / 头像定制", "儿童美术 / 成人兴趣课", "播客剪辑 / 音频后期"]
  },
  wechat: {
    hustleBoosts: ["自由撰稿 / 文案接单", "知识咨询 / 线上陪跑", "收纳整理顾问 / 上门整理", "活动策划 / 主持文案", "PPT 模板 / 表格模板售卖"]
  },
  zhihu: {
    hustleBoosts: ["自由撰稿 / 文案接单", "知识咨询 / 线上陪跑", "编程接私活 / 网站搭建", "PPT 模板 / 表格模板售卖"]
  },
  weibo: {
    hustleBoosts: ["自媒体账号代运营", "自由撰稿 / 文案接单", "插画接稿 / 头像定制", "海报设计 / 电商作图"]
  }
};

const sideHustles = [
  {
    name: "自由撰稿 / 文案接单",
    summary: "适合擅长写作、表达清晰，并愿意持续积累作品的人。",
    requiredSkills: ["写作", "沟通"],
    bonusSkills: ["英语", "运营", "销售"],
    style: ["online", "solo"],
    minHours: 4,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先做 3 篇不同风格的样稿，再去小红书、公众号社群或熟人圈发布“可试稿”的服务说明。",
    risk: "前期需要靠作品证明自己，报价容易偏低。"
  },
  {
    name: "PPT / 简历优化服务",
    summary: "适合擅长结构化表达、审美不错，又希望低成本线上接单的人。",
    requiredSkills: ["设计", "写作"],
    bonusSkills: ["沟通", "教学", "运营"],
    style: ["online", "solo"],
    minHours: 4,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "fast",
    starterPlan: "整理 2 到 3 个前后对比案例，明确基础版和进阶版报价，再从简历优化或答辩 PPT 美化切入。",
    risk: "需求常常比较急，需要控制好交付范围。"
  },
  {
    name: "英语家教 / 口语陪练",
    summary: "适合英语基础好、愿意一对一沟通，并能稳定安排时间的人。",
    requiredSkills: ["英语", "教学"],
    bonusSkills: ["沟通", "写作"],
    style: ["online", "collaboration"],
    minHours: 6,
    constraintsAvoid: ["low_social"],
    startupCost: "low",
    feedbackSpeed: "fast",
    starterPlan: "先明确自己最能教的细分方向，比如口语、应试或成人入门，再做一个试听流程和价格说明。",
    risk: "需要稳定排课，取消和改期会影响收入稳定性。"
  },
  {
    name: "短视频剪辑接单",
    summary: "适合剪辑能力强、节奏感好，又希望主要在线上完成工作的人。",
    requiredSkills: ["剪辑", "设计"],
    bonusSkills: ["写作", "运营", "沟通"],
    style: ["online", "solo"],
    minHours: 5,
    constraintsAvoid: [],
    startupCost: "medium",
    feedbackSpeed: "fast",
    starterPlan: "先围绕一个垂直领域做 3 条模拟作品，比如探店、知识口播或 vlog，再去接基础剪辑单。",
    risk: "改稿轮次容易变多，需要事先约定交付标准。"
  },
  {
    name: "自媒体账号代运营",
    summary: "适合既会内容表达，又能持续跟踪数据和节奏的人。",
    requiredSkills: ["运营", "写作"],
    bonusSkills: ["设计", "剪辑", "沟通", "销售"],
    style: ["online", "collaboration"],
    minHours: 8,
    constraintsAvoid: ["low_social"],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "挑一个你熟悉的行业做模拟运营方案，包含选题、发布节奏、内容样例和基础数据指标。",
    risk: "客户通常会把结果和账号增长绑定，预期管理很关键。"
  },
  {
    name: "编程接私活 / 网站搭建",
    summary: "适合编程能力强、能独立推进交付，并愿意持续积累作品的人。",
    requiredSkills: ["编程"],
    bonusSkills: ["设计", "沟通", "写作"],
    style: ["online", "solo"],
    minHours: 6,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先做 1 到 2 个小型完整案例，比如企业官网或表单工具，并把需求范围和售后边界写清楚。",
    risk: "需求膨胀很常见，报价和边界一定要提前明确。"
  },
  {
    name: "摄影约拍 / 图片精修",
    summary: "适合摄影审美稳定、愿意线下执行，或者能做后期精修的人。",
    requiredSkills: ["摄影", "设计"],
    bonusSkills: ["沟通", "销售", "运营"],
    style: ["offline", "collaboration"],
    minHours: 6,
    constraintsAvoid: ["low_social", "low_startup_cost"],
    startupCost: "high",
    feedbackSpeed: "medium",
    starterPlan: "先明确是拍摄还是修图服务，再整理风格样片和适合你的客群，比如写真、产品或活动跟拍。",
    risk: "设备、时间和沟通成本都比较高，适合认真经营而不是临时尝试。"
  },
  {
    name: "知识咨询 / 线上陪跑",
    summary: "适合表达清晰、经验成体系，并愿意和人深度沟通的人。",
    requiredSkills: ["教学", "沟通"],
    bonusSkills: ["写作", "销售", "运营"],
    style: ["online", "collaboration"],
    minHours: 5,
    constraintsAvoid: ["low_social"],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "从一个你最熟悉的小切口开始，比如简历辅导、学习方法、内容规划，先做低价体验版服务。",
    risk: "需要你本身有可验证的经验，否则转化会比较难。"
  },
  {
    name: "插画接稿 / 头像定制",
    summary: "适合画画基础扎实、风格明确，并愿意把作品持续展示出来的人。",
    requiredSkills: ["画画", "审美"],
    bonusSkills: ["设计", "沟通", "运营"],
    style: ["online", "solo"],
    minHours: 5,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先整理一组统一风格作品，明确你做头像、壁纸还是商稿，再发布价格表和可约档期。",
    risk: "前期容易陷入低价单，最好尽早明确风格和修改范围。"
  },
  {
    name: "手作定制 / 摆摊小店",
    summary: "适合手工和动手能力强，愿意做实物作品并逐步测试市场的人。",
    requiredSkills: ["手工", "动手能力"],
    bonusSkills: ["审美", "销售", "摄影", "运营"],
    style: ["online", "offline"],
    minHours: 6,
    constraintsAvoid: [],
    startupCost: "medium",
    feedbackSpeed: "fast",
    starterPlan: "先从 1 到 2 个拿手品类切入，比如饰品、编织或节日礼物，拍出成品图后再测试预售或摆摊。",
    risk: "材料成本和出货时间要算清楚，不然很容易做得很忙但利润偏低。"
  },
  {
    name: "私房烘焙 / 家常料理订制",
    summary: "适合做饭能力稳定、愿意反复打磨口味和出品标准的人。",
    requiredSkills: ["做饭"],
    bonusSkills: ["审美", "摄影", "销售", "运营"],
    style: ["online", "offline"],
    minHours: 6,
    constraintsAvoid: [],
    startupCost: "medium",
    feedbackSpeed: "fast",
    starterPlan: "先固定 2 到 3 个最稳定的单品，记录成本、出品和客单价，再从熟人试单或同城预订开始。",
    risk: "食品安全、备料损耗和交付时效都需要提前考虑。"
  },
  {
    name: "收纳整理顾问 / 上门整理",
    summary: "适合整理能力强、喜欢优化空间，并愿意提供实际服务的人。",
    requiredSkills: ["收纳整理", "沟通"],
    bonusSkills: ["审美", "策划", "销售"],
    style: ["offline", "collaboration"],
    minHours: 5,
    constraintsAvoid: ["low_social"],
    startupCost: "low",
    feedbackSpeed: "fast",
    starterPlan: "先整理自己的案例或帮朋友做前后对比样本，再明确按小时还是按空间收费。",
    risk: "这是服务体验很强的方向，沟通预期和现场体力投入都不能低估。"
  },
  {
    name: "海报设计 / 电商作图",
    summary: "适合设计和审美稳定，能根据明确需求快速交付视觉物料的人。",
    requiredSkills: ["设计", "审美"],
    bonusSkills: ["运营", "沟通", "摄影"],
    style: ["online", "solo"],
    minHours: 4,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "fast",
    starterPlan: "先整理 6 到 8 张不同类型的作品，比如电商主图、海报、菜单或活动图，再明确单张和套餐报价。",
    risk: "这类需求通常节奏快、修改多，最好提前写清交付轮次。"
  },
  {
    name: "PPT 模板 / 表格模板售卖",
    summary: "适合结构化能力强、审美过关，并愿意做可重复售卖数字产品的人。",
    requiredSkills: ["设计", "策划"],
    bonusSkills: ["写作", "运营", "审美"],
    style: ["online", "solo"],
    minHours: 4,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先围绕一个清晰场景做模板，比如答辩、汇报、预算表或排班表，再把封面图和使用场景讲清楚。",
    risk: "前期可能需要一定数量的模板才能看见销量，适合慢慢积累。"
  },
  {
    name: "播客剪辑 / 音频后期",
    summary: "适合剪辑细致、节奏感好，并愿意做声音处理和栏目包装的人。",
    requiredSkills: ["剪辑"],
    bonusSkills: ["运营", "沟通", "策划"],
    style: ["online", "solo"],
    minHours: 4,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先做 2 到 3 段音频样例，展示去口癖、降噪、加片头片尾和切精彩段落的能力。",
    risk: "声音类服务专业感很强，前期需要靠样例和细节建立信任。"
  },
  {
    name: "食谱博主 / 美食内容号",
    summary: "适合做饭稳定、愿意拍过程，并能持续输出内容的人。",
    requiredSkills: ["做饭", "摄影"],
    bonusSkills: ["运营", "写作", "审美"],
    style: ["online", "solo"],
    minHours: 5,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先从 1 个垂直方向开始，比如减脂餐、家常快手菜或烘焙，连续发一组系列内容测试反馈。",
    risk: "内容增长通常需要持续更新，前期变现不一定来得快。"
  },
  {
    name: "宠物鲜食 / 宠物零食订制",
    summary: "适合做饭细致、愿意研究配方，并能兼顾安全和出品稳定的人。",
    requiredSkills: ["做饭"],
    bonusSkills: ["审美", "摄影", "运营", "动手能力"],
    style: ["online", "offline"],
    minHours: 6,
    constraintsAvoid: [],
    startupCost: "medium",
    feedbackSpeed: "fast",
    starterPlan: "先从少量稳定单品做起，比如烘干零食或基础鲜食，明确配方、保鲜和交付说明后再接单。",
    risk: "宠物食品更需要注意配方说明和保鲜运输，不能只看卖相。"
  },
  {
    name: "节日礼盒 / 婚礼手作定制",
    summary: "适合手工细致、审美在线，并愿意围绕节庆或纪念场景做定制的人。",
    requiredSkills: ["手工", "审美"],
    bonusSkills: ["策划", "摄影", "销售"],
    style: ["online", "offline"],
    minHours: 6,
    constraintsAvoid: [],
    startupCost: "medium",
    feedbackSpeed: "fast",
    starterPlan: "先挑一个强场景切入，比如婚礼伴手礼、生日礼盒或节日花礼，把套餐、工期和风格图做清楚。",
    risk: "节日型订单会明显波峰波谷，接单前要预估产能。"
  },
  {
    name: "儿童美术 / 成人兴趣课",
    summary: "适合画画基础不错，也愿意教学陪伴的人。",
    requiredSkills: ["画画", "教学"],
    bonusSkills: ["沟通", "审美", "策划"],
    style: ["online", "offline"],
    minHours: 5,
    constraintsAvoid: ["low_social"],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先设计 4 到 6 节可展示成果的小课，比如线稿上色、水彩入门或亲子手作，再用试听课测试反馈。",
    risk: "教学方向需要稳定备课和互动耐心，不只是自己会画就够了。"
  },
  {
    name: "活动策划 / 主持文案",
    summary: "适合沟通和策划能力强，能快速组织流程与表达的人。",
    requiredSkills: ["策划", "沟通"],
    bonusSkills: ["写作", "销售", "运营"],
    style: ["online", "offline"],
    minHours: 5,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "fast",
    starterPlan: "先从小型活动切入，比如生日会、沙龙、社群活动或婚礼流程文案，把案例模版先做出来。",
    risk: "临场协调和时间压力会比较大，需要很强的细节把控。"
  },
  {
    name: "家庭收纳内容号 / 带货账号",
    summary: "适合整理和表达都不错，并愿意持续做前后对比内容的人。",
    requiredSkills: ["收纳整理", "运营"],
    bonusSkills: ["摄影", "写作", "审美"],
    style: ["online", "solo"],
    minHours: 5,
    constraintsAvoid: [],
    startupCost: "low",
    feedbackSpeed: "medium",
    starterPlan: "先从你最擅长的整理场景开始，比如衣柜、厨房或租房收纳，连续输出前后对比和清单类内容。",
    risk: "这类账号通常需要先有内容信任，再慢慢接带货或咨询。"
  }
];

const form = document.getElementById("recommendation-form");
const skillsMatrix = document.getElementById("skills-matrix");
const resultsContainer = document.getElementById("results");
const emptyState = document.getElementById("empty-state");
const template = document.getElementById("result-card-template");

renderSkillInputs();
form.addEventListener("submit", handleSubmit);

function renderSkillInputs() {
  const scoreOptions = [1, 2, 3, 4, 5]
    .map((score) => `<option value="${score}">${score} 分</option>`)
    .join("");

  skillsMatrix.innerHTML = skills
    .map(
      (skill) => `
        <div class="skill-row">
          <div class="skill-name">${skill}</div>
          <div class="skill-score">
            <label for="level-${skill}">熟练度</label>
            <select id="level-${skill}" name="level-${skill}">
              ${scoreOptions}
            </select>
          </div>
          <div class="skill-score">
            <label for="interest-${skill}">兴趣度</label>
            <select id="interest-${skill}" name="interest-${skill}">
              ${scoreOptions}
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
  const rankedResults = sideHustles
    .map((item) => scoreHustle(item, profile))
    .sort((left, right) => right.score - left.score)
    .slice(0, 3);

  renderResults(rankedResults, profile);
}

function readProfile() {
  const formData = new FormData(form);
  const questionnaire = {
    strengthType: formData.get("strengthType"),
    serviceTarget: formData.get("serviceTarget"),
    incomeStyle: formData.get("incomeStyle"),
    taskStyle: formData.get("taskStyle")
  };

  return {
    name: (formData.get("name") || "").trim(),
    goal: formData.get("goal"),
    weeklyHours: Number(formData.get("weeklyHours")),
    workStyle: formData.getAll("workStyle"),
    constraints: formData.getAll("constraints"),
    primaryJob: formData.get("primaryJob"),
    jobRelated: formData.get("jobRelated"),
    familiarPlatform: formData.get("familiarPlatform"),
    questionnaire,
    notes: (formData.get("notes") || "").trim(),
    skills: mergeQuestionnaireSkills(
      skills.map((skill) => ({
        name: skill,
        level: Number(formData.get(`level-${skill}`)),
        interest: Number(formData.get(`interest-${skill}`))
      })),
      questionnaire
    )
  };
}

function mergeQuestionnaireSkills(rawSkills, questionnaire) {
  const merged = rawSkills.map((skill) => ({ ...skill }));

  Object.entries(questionnaire).forEach(([questionKey, answer]) => {
    const effectGroup = questionnaireEffects[questionKey];
    const effect = effectGroup ? effectGroup[answer] : null;

    if (!effect || !effect.skills) {
      return;
    }

    Object.entries(effect.skills).forEach(([skillName, extraPoints]) => {
      const targetSkill = merged.find((skill) => skill.name === skillName);
      if (!targetSkill) {
        return;
      }

      targetSkill.level = Math.min(5, targetSkill.level + extraPoints);
    });
  });

  return merged;
}

function scoreHustle(hustle, profile) {
  let score = 0;
  const reasons = [];
  const matchedSkillNames = [];

  hustle.requiredSkills.forEach((skillName) => {
    const userSkill = profile.skills.find((skill) => skill.name === skillName);
    if (!userSkill) {
      return;
    }

    const skillScore = userSkill.level * 8 + userSkill.interest * 4;
    score += skillScore;

    if (userSkill.level >= 4 || userSkill.interest >= 4) {
      matchedSkillNames.push(skillName);
    }
  });

  hustle.bonusSkills.forEach((skillName) => {
    const userSkill = profile.skills.find((skill) => skill.name === skillName);
    if (!userSkill) {
      return;
    }

    score += userSkill.level * 3 + userSkill.interest * 2;
  });

  if (matchedSkillNames.length) {
    reasons.push(`你的 ${matchedSkillNames.join("、")} 更容易直接转化成这个方向的核心竞争力。`);
  }

  const questionBoost = applyQuestionnaireBoosts(hustle, profile.questionnaire);
  score += questionBoost.score;
  if (questionBoost.reason) {
    reasons.push(questionBoost.reason);
  }

  const primaryJobBoost = applyPrimaryJobBoosts(hustle, profile.primaryJob, profile.jobRelated);
  score += primaryJobBoost.score;
  if (primaryJobBoost.reason) {
    reasons.push(primaryJobBoost.reason);
  }

  const platformBoost = applyPlatformBoosts(hustle, profile.familiarPlatform);
  score += platformBoost.score;
  if (platformBoost.reason) {
    reasons.push(platformBoost.reason);
  }

  if (profile.weeklyHours >= hustle.minHours) {
    score += 12;
    reasons.push(`你当前每周可投入约 ${profile.weeklyHours} 小时，能覆盖它的基础起步时间。`);
  } else {
    score -= 10;
    reasons.push(`这个方向通常需要至少 ${hustle.minHours} 小时投入，时间上会稍微吃紧。`);
  }

  const hasMatchingStyle = hustle.style.every((style) => profile.workStyle.includes(style));
  const partiallyMatchingStyle = hustle.style.some((style) => profile.workStyle.includes(style));

  if (hasMatchingStyle) {
    score += 12;
    reasons.push(`它的工作方式和你偏好的 ${formatStyles(hustle.style)} 比较一致。`);
  } else if (partiallyMatchingStyle) {
    score += 5;
    reasons.push("你的工作偏好和它部分匹配，但实际执行时可能还需要适应。");
  } else {
    score -= 8;
    reasons.push("它的工作方式和你当前偏好不完全一致。");
  }

  const blockedByConstraint = hustle.constraintsAvoid.filter((item) =>
    profile.constraints.includes(item)
  );

  if (blockedByConstraint.length) {
    score -= blockedByConstraint.length * 14;
    reasons.push(`你勾选的限制条件和这个方向有冲突：${formatConstraintConflicts(blockedByConstraint)}。`);
  }

  if (profile.constraints.includes("low_startup_cost")) {
    if (hustle.startupCost === "low") {
      score += 8;
      reasons.push("它的启动成本相对友好，适合先轻量试水。");
    }

    if (hustle.startupCost === "high") {
      score -= 12;
      reasons.push("你希望低成本开始，而这个方向前期投入会偏高。");
    }
  }

  if (profile.constraints.includes("fast_feedback") && hustle.feedbackSpeed === "fast") {
    score += 8;
    reasons.push("你希望尽快拿到反馈，这类服务型副业通常更容易快速验证。");
  }

  if (profile.goal === "freelance_path" && hustle.style.includes("solo")) {
    score += 6;
    reasons.push("如果你未来想转自由职业，这类可独立交付的方向更适合提前积累案例。");
  }

  if (profile.goal === "stable_income" && hustle.style.includes("collaboration")) {
    score += 4;
    reasons.push("你更看重稳定副收入，这类持续服务型方向后续更容易形成复购。");
  }

  return {
    ...hustle,
    score,
    reasons: dedupeReasons(reasons)
  };
}

function applyQuestionnaireBoosts(hustle, questionnaire) {
  let score = 0;
  const hits = [];

  Object.entries(questionnaire).forEach(([questionKey, answer]) => {
    const effectGroup = questionnaireEffects[questionKey];
    const effect = effectGroup ? effectGroup[answer] : null;

    if (!effect || !effect.hustleBoosts) {
      return;
    }

    if (effect.hustleBoosts.includes(hustle.name)) {
      score += 8;
      hits.push(questionKey);
    }
  });

  if (!hits.length) {
    return { score, reason: "" };
  }

  return {
    score,
    reason: `你的问卷偏好和这个方向比较契合，尤其是在${formatQuestionHits(hits)}上有明显匹配。`
  };
}

function applyPrimaryJobBoosts(hustle, primaryJob, jobRelated) {
  if (primaryJob === "none" || jobRelated === "neutral") {
    return { score: 0, reason: "" };
  }

  const primaryJobGroup = primaryJobEffects[primaryJob];
  const related = primaryJobGroup && primaryJobGroup.hustleBoosts && primaryJobGroup.hustleBoosts.includes(hustle.name);

  if (jobRelated === "yes" && related) {
    return {
      score: 10,
      reason: `如果你想让副业和主业互相带动，这个方向和你的 ${formatPrimaryJob(primaryJob)} 关联度更高。`
    };
  }

  if (jobRelated === "yes" && !related) {
    return {
      score: -6,
      reason: `你希望副业和主业相关，但这个方向和你的 ${formatPrimaryJob(primaryJob)} 联动性相对弱一些。`
    };
  }

  if (jobRelated === "no" && related) {
    return {
      score: -4,
      reason: `这个方向和你的 ${formatPrimaryJob(primaryJob)} 容易形成强关联，而你目前更希望把主业和副业分开。`
    };
  }

  return { score: 4, reason: "这个方向和你想把主业与副业分开的想法不冲突，边界会更清晰。" };
}

function applyPlatformBoosts(hustle, familiarPlatform) {
  if (familiarPlatform === "none") {
    return { score: 0, reason: "" };
  }

  const platform = platformEffects[familiarPlatform];
  const related = platform && platform.hustleBoosts && platform.hustleBoosts.includes(hustle.name);

  if (!related) {
    return { score: 0, reason: "" };
  }

  return {
    score: 6,
    reason: `你已经更熟悉 ${formatPlatform(familiarPlatform)}，这个方向更容易直接开始做内容展示和获客。`
  };
}

function renderResults(results, profile) {
  resultsContainer.innerHTML = "";
  emptyState.classList.add("hidden");

  results.forEach((result, index) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".result-card");

    fragment.querySelector(".result-rank").textContent = `Top ${index + 1}`;
    fragment.querySelector(".result-title").textContent = result.name;
    fragment.querySelector(".score-badge").textContent = `${Math.max(result.score, 0)} 分`;
    fragment.querySelector(".result-summary").textContent = buildSummary(profile, result);
    fragment.querySelector(".starter-plan").textContent = result.starterPlan;
    fragment.querySelector(".promotion-plan").textContent = buildPromotionPlan(profile, result);
    fragment.querySelector(".effort-chip").textContent = `起步时间：每周约 ${result.minHours}+ 小时`;
    fragment.querySelector(".style-chip").textContent = `方式：${formatStyles(result.style)}`;
    fragment.querySelector(".risk-chip").textContent = `提醒：${result.risk}`;

    const reasonList = fragment.querySelector(".reason-list");
    result.reasons.forEach((reason) => {
      const li = document.createElement("li");
      li.textContent = reason;
      reasonList.appendChild(li);
    });

    card.style.animation = `fadeUp 420ms ease ${index * 80}ms both`;
    resultsContainer.appendChild(fragment);
  });
}

function buildSummary(profile, result) {
  const displayName = profile.name || "你";
  return `${displayName}现在最适合先试试“${result.name}”。这条路更容易让你用现有能力换到第一笔钱，不用一上来就走太多弯路。先跑通，再放大。`;
}

function formatStyles(styles) {
  const labels = {
    online: "线上",
    offline: "线下",
    solo: "独立完成",
    collaboration: "高沟通协作"
  };

  return styles.map((style) => labels[style]).join(" / ");
}

function formatConstraintConflicts(conflicts) {
  const labels = {
    no_camera: "不想露脸",
    low_social: "不想频繁社交",
    low_startup_cost: "希望低成本开始",
    fast_feedback: "希望尽快拿到反馈"
  };

  return conflicts.map((item) => labels[item]).join("、");
}

function formatQuestionHits(hits) {
  const labels = {
    strengthType: "强项类型",
    serviceTarget: "服务对象",
    incomeStyle: "变现节奏",
    taskStyle: "做事方式"
  };

  return hits.map((item) => labels[item]).join("、");
}

function formatPrimaryJob(primaryJob) {
  const labels = {
    office: "职场办公类主业",
    education: "教育培训类主业",
    tech: "互联网或技术类主业",
    design: "设计内容类主业",
    sales: "销售商务类主业",
    media: "传媒传播类主业"
  };

  return labels[primaryJob] || "主业";
}

function formatPlatform(platform) {
  const labels = {
    xiaohongshu: "小红书",
    douyin: "抖音",
    bilibili: "B 站",
    wechat: "公众号",
    zhihu: "知乎",
    weibo: "微博"
  };

  return labels[platform] || "当前熟悉的平台";
}

function buildPromotionPlan(profile, result) {
  const familiarPlatform = profile.familiarPlatform;
  const platformLabel = familiarPlatform === "none" ? "" : formatPlatform(familiarPlatform);

  if (familiarPlatform !== "none") {
    return `先从 ${platformLabel} 开始最省力。围绕“${result.name}”连续发 3 到 5 条能体现你水平的内容，比如案例拆解、前后对比、方法分享或接单说明，把想来单的人引到私信或表单。`;
  }

  return `你还没有特别熟的平台也没关系，先挑一个你最容易持续更新的平台开始。内容上优先发“${result.name}”相关案例、过程展示和服务说明，先试出哪种内容最容易带来咨询。`;
}

function dedupeReasons(reasons) {
  return [...new Set(reasons)].slice(0, 5);
}
