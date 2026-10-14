import './styles.css';

const dimensions = [
  { id: 'analysis', name: '复杂问题拆解', short: '信息拆解' },
  { id: 'execution', name: '推进落地', short: '推进执行' },
  { id: 'coordination', name: '团队关系协调', short: '团队协作' },
  { id: 'communication', name: '关键表达', short: '关键表达' },
  { id: 'innovation', name: '创新可能性', short: '创新探索' },
  { id: 'risk', name: '风险识别', short: '风险判断' },
  { id: 'coaching', name: '成长支持', short: '他人成长' },
  { id: 'adaptability', name: '适应迁移', short: '变化适应' },
];

const results = {
  analysis: {
    key: 'analysis',
    title: '复杂问题拆解者',
    subtitle: '你擅长从混乱里找到真正重要的部分。',
    intro: '别人看到一团乱麻，你会本能地想知道：真正的问题是什么？谁受到影响？下一步应该先处理哪一件事？你未必是会议里最会抢话的人，但经常是最后能把问题说清楚的人。',
    strengths: ['把模糊任务变成清晰问题', '识别真正的优先级', '能从零散信息中建立结构', '适合处理复杂、跨部门的问题'],
    blindspot: '你有时会分析太久，等到把所有细节都想清楚才愿意行动。对你来说，练习“先做一个可验证的小版本”，比继续补充分析更重要。',
    environment: '适合问题复杂、允许思考、能够看到完整链路的团队。',
    theory: '你的优势接近问题分析、认知灵活性与复杂信息整合能力。它不是单纯的“想得多”，而是能把信息组织成可行动的结构。',
    share: '原来我不是想太多，我只是习惯先找到真正的问题。',
    action: '下次接到模糊任务时，用三句话确认：最终要解决什么？什么标准算完成？如果只能先做一件事，应该是哪一件？',
  },
  execution: {
    key: 'execution',
    title: '推进落地发动机',
    subtitle: '你擅长把“应该做什么”变成“现在做什么”。',
    intro: '很多人负责提出可能性，而你经常负责让可能性真的发生。你会自然关注负责人、时间点和下一步行动，也能在项目停滞时把任务拆开，让事情重新动起来。',
    strengths: ['快速把目标转成行动', '追踪节点并推动反馈', '能把停滞的项目重新启动', '对“说了很多却没有进展”很敏感'],
    blindspot: '你容易把别人的责任也一起扛过来，对节奏慢的人缺乏耐心。推进不等于替所有人完成，学会明确边界会让你的能力更可持续。',
    environment: '适合项目制、节奏明确、需要强执行和持续协同的工作环境。',
    theory: '你的优势接近尽责性、目标管理与执行控制。真正的落地能力不仅是勤奋，还包括拆解、跟进、收尾和反馈。',
    share: '我不一定最会规划，但我很擅长让事情真正发生。',
    action: '每次会议结束前，固定写下负责人、截止时间和下一步动作，避免把推进只放在自己的记忆里。',
  },
  coordination: {
    key: 'coordination',
    title: '团队气氛稳定器',
    subtitle: '你能让人愿意继续合作，而不只是把事情做完。',
    intro: '你会注意到谁没有被听见，也能察觉到一场会议什么时候开始变得紧张。你不一定是团队里声音最大的人，但很多合作之所以没有失控，往往是因为你在调整彼此的距离。',
    strengths: ['察觉团队中的情绪变化', '理解冲突双方真正的顾虑', '帮助新人融入协作方式', '让沟通重新回到可合作的状态'],
    blindspot: '你有时太重视维持和谐，不愿意直接指出问题。真正的稳定不是没有冲突，而是允许问题被清楚地说出来。',
    environment: '适合跨部门协作、客户关系、团队管理与需要高信任感的工作场景。',
    theory: '你的优势接近人际敏感性、共情和关系协调能力。它不是讨好所有人，而是减少合作中的隐性成本。',
    share: '我不是老好人，我只是能看见关系里的隐性成本。',
    action: '面对冲突时，先说出双方都认可的事实，再讨论立场和方案，避免一开始就站队。',
  },
  communication: {
    key: 'communication',
    title: '关键表达放大器',
    subtitle: '你能让重要的事被准确理解、认真对待。',
    intro: '你真正擅长的不是“会说话”，而是知道什么话应该在什么时候、对什么人说。你能根据对象调整表达，把复杂的信息整理成重点，也能让一个原本被忽略的想法获得机会。',
    strengths: ['根据对象调整沟通方式', '提炼复杂信息的重点', '把想法表达成对方关心的结果', '在关键时刻提高信息的影响力'],
    blindspot: '你可能会过度关注别人是否认可，或为了表达圆润而削弱立场。清晰不等于冒犯，保留结论和边界同样重要。',
    environment: '适合汇报提案、商务沟通、销售、公关、内容和培训等工作。',
    theory: '你的优势接近社会影响、沟通适配与观点组织能力。它不等于外向或话多，而是能让信息产生理解和行动。',
    share: '我真正擅长的不是说服所有人，而是让重要的事被听见。',
    action: '每次表达前先问自己：对方最关心的结果是什么？把结论放在前面，再补充过程和依据。',
  },
  innovation: {
    key: 'innovation',
    title: '可能性开拓者',
    subtitle: '你总能比别人早一步意识到：还可以不一样。',
    intro: '你对“以前一直这样做”保持着一点不满足。遇到限制时，你会寻找替代方式，也容易把不同领域的想法连接起来。很多新路径，最开始都只是你脑中一个不成熟的念头。',
    strengths: ['发现旧流程的改进空间', '连接看似无关的想法', '愿意做低成本尝试', '为团队提供新的可能性'],
    blindspot: '你可能点子很多、收尾较少，也容易低估执行成本。创新真正产生价值，需要给好点子安排验证、负责人和截止时间。',
    environment: '适合产品创新、内容策划、品牌营销、设计、增长和创业型团队。',
    theory: '你的优势接近开放性、创造性思维与探索动机。创新不仅是想出新点子，也包括把想法变成可验证的尝试。',
    share: '我不是总想推翻规则，我只是经常发现规则还有另一种用法。',
    action: '把每个新想法写成一个最小实验：验证什么、用什么指标判断、什么时候复盘。',
  },
  risk: {
    key: 'risk',
    title: '风险预警雷达',
    subtitle: '你能在问题真正发生之前，提前看见裂缝。',
    intro: '当大家都很乐观时，你会本能地确认边界、依赖和备用方案。别人有时觉得你想得太多，但真正出现问题时，团队往往会回来问你：还有没有遗漏的地方？',
    strengths: ['提前识别可能出错的环节', '主动寻找反例和边界', '建立备用方案', '在压力场景中保持现实判断'],
    blindspot: '你容易陷入“万一失败怎么办”，也可能因为强调风险而被误解为保守。好的风险判断不只是指出问题，还要给出低成本验证路径。',
    environment: '适合质量管理、财务、法务、项目管理、数据分析、供应链和危机处理。',
    theory: '你的优势接近审慎性、风险识别、反事实思维和错误监控能力。它不是悲观，而是让乐观方案经得起现实检验。',
    share: '我不是扫兴，我只是习惯在计划成功之前先问一句：哪里可能出错？',
    action: '提出风险时，同时给出一个小范围验证或备用方案，让提醒更容易转化为行动。',
  },
  coaching: {
    key: 'coaching',
    title: '成长教练型',
    subtitle: '你不只解决问题，还能让别人逐渐学会解决问题。',
    intro: '别人向你求助时，你不会急着替对方做决定，而是帮助对方把问题想清楚。你能发现别人没有意识到的优势，也愿意给出具体、让人愿意接受的反馈。',
    strengths: ['帮助他人理清问题', '发现别人未被看见的能力', '提供具体而不伤人的反馈', '帮助新人建立方法感'],
    blindspot: '你容易过度投入别人的成长，不知不觉把自己变成“随叫随到的人”。支持别人之前，也要确认对方是否真的愿意承担自己的部分。',
    environment: '适合管理、培训、教育、HR、客户成功、咨询和组织发展。',
    theory: '你的优势接近教练式沟通、支持性反馈和他人发展能力。它不是替别人发光，而是帮助别人逐渐拥有自己的光。',
    share: '我最擅长的不是替别人解决问题，而是让别人逐渐有能力自己解决。',
    action: '给建议前先问三个问题：你真正想解决什么？你已经尝试过什么？下一步你愿意自己做什么？',
  },
  adaptability: {
    key: 'adaptability',
    title: '快速适应与迁移者',
    subtitle: '环境变化时，你总能较快找到新的工作节奏。',
    intro: '换岗位、换流程、换领导之后，你通常不会停留太久。你能把过去学过的方法迁移到新问题上，也能在信息不完整时先行动，再根据反馈调整路线。',
    strengths: ['快速理解新规则', '迁移过去的经验和方法', '边做边学、边反馈边调整', '计划失效后迅速重建路径'],
    blindspot: '你可能适应环境太快，却忘了确认自己真正想要什么；也可能频繁切换方向。适应变化之外，还要保留长期积累的主线。',
    environment: '适合互联网、创业、咨询、项目制岗位和变化快速的业务团队。',
    theory: '你的优势接近适应性绩效、学习敏捷性、自我效能与经验迁移能力。你的价值不在于永远不出错，而在于调整速度快。',
    share: '我不一定永远准备充分，但我很少会在变化里停太久。',
    action: '遇到变化时先确认新的评价标准，再保留一个两周内可验证的小目标，避免只忙于适应而没有积累。',
  },
};

const questions = [
  ['analysis', '面对一个目标模糊的任务，我通常会先确认最终要解决什么问题、谁来使用结果，以及什么标准算完成。'],
  ['analysis', '当一件事情迟迟没有进展时，我会判断它到底卡在信息不足、目标不清、资源不够，还是责任没有分配清楚。'],
  ['analysis', '团队讨论出现很多不同意见时，我会帮助大家区分哪些是事实、哪些是判断、哪些只是个人偏好。'],
  ['analysis', '当我面对一堆零散资料时，我通常能较快发现其中的主线。'],
  ['execution', '会议结束后，我会自然地关注谁负责、什么时候完成，以及下一步具体行动是什么。'],
  ['execution', '面对一个很大的任务，我习惯先把它拆成几个可以马上开始的小步骤。'],
  ['execution', '当团队成员迟迟没有反馈时，我会主动跟进，而不是一直等待。'],
  ['execution', '我常常能够把“大家都觉得应该做”的事情真正推动起来。'],
  ['coordination', '在讨论中，我能注意到那些不太主动表达、但可能有重要意见的人。'],
  ['coordination', '两个人发生冲突时，我通常能理解他们各自真正介意的是什么。'],
  ['coordination', '新成员加入团队后，我会注意帮助对方理解团队的沟通方式和工作规则。'],
  ['coordination', '当团队气氛变得紧张时，我通常能察觉到变化，即使没人直接说出来。'],
  ['communication', '面对不同的人，我会主动调整表达方式，而不是所有人都用同一种说法。'],
  ['communication', '我能把复杂的信息整理成别人容易理解的重点。'],
  ['communication', '当一个想法没有被重视时，我通常知道应该如何重新组织表达。'],
  ['communication', '重要汇报或沟通前，我会思考对方最关心的是什么，而不只是准备我要说什么。'],
  ['innovation', '当现有方法效果不好时，我通常会主动寻找替代方案。'],
  ['innovation', '我经常能把两个原本不相关的想法联系起来。'],
  ['innovation', '面对别人习以为常的流程，我有时会思考它是否还有改进空间。'],
  ['innovation', '我愿意先做小范围尝试，而不是等到所有人都百分之百确定后才行动。'],
  ['risk', '在开始一个重要项目之前，我会主动思考哪些环节最可能出问题。'],
  ['risk', '当大家都很乐观时，我有时会提出被忽略的反例或风险。'],
  ['risk', '我习惯提前确认任务中的依赖关系、时间节点和备用方案。'],
  ['risk', '我曾经提前提醒过某个问题，后来这个问题确实发生了。'],
  ['coaching', '别人向我求助时，我会先帮助对方理清问题，而不是马上替对方做决定。'],
  ['coaching', '我能发现别人自己没有意识到的优势。'],
  ['coaching', '给别人反馈时，我会尽量说明具体行为，而不是简单评价“你不行”或“你很好”。'],
  ['coaching', '我愿意花时间帮助新人掌握方法，即使直接替他完成会更快。'],
  ['adaptability', '当工作流程、领导风格或团队规则发生变化时，我通常能较快找到新的工作方式。'],
  ['adaptability', '我能把过去在一个领域学到的方法迁移到另一个新问题上。'],
  ['adaptability', '面对信息不完整的任务，我通常可以先开始行动，再根据反馈调整。'],
  ['adaptability', '当原计划无法继续时，我通常能较快接受现实并重新规划。'],
].map(([dimension, text], index) => ({ id: index + 1, dimension, text }));

const situations = [
  { text: '项目距离交付还有三天，设计、开发和运营之间的信息不一致。你最可能先做什么？', options: [
    ['确认最终交付标准，并定位当前最大阻塞点', 'analysis'], ['列出负责人、截止时间和下一步动作', 'execution'], ['排查哪些依赖可能导致延期', 'risk'], ['分别确认各方理解的差异', 'coordination'],
  ] },
  { text: '新同事连续两次提交错误，你发现他并非不认真，而是不理解流程。你会先怎么做？', options: [
    ['一起找出具体哪一步没理解', 'coaching'], ['补一份清晰的流程与检查点', 'analysis'], ['先协调任务安排以保证进度', 'execution'], ['先确认对方是否敢于求助', 'coordination'],
  ] },
  { text: '产品和销售团队在会上争论不休，双方都觉得对方不了解业务。你会先？', options: [
    ['把争论转成几个可以验证的问题', 'analysis'], ['让双方说出最在意的顾虑', 'coordination'], ['用共同的业务目标重新表述分歧', 'communication'], ['安排一个小范围试验来检验方案', 'innovation'],
  ] },
  { text: '领导说方案要“更年轻、更有传播力”，但不能增加预算。你会先？', options: [
    ['追问目标人群和判断标准', 'analysis'], ['寻找低成本的新传播方式', 'innovation'], ['先用已有资源做一个可讨论的版本', 'adaptability'], ['把想法整理成领导关心的业务结果', 'communication'],
  ] },
  { text: '团队都认可一个方案，但你发现其中一个关键假设还没验证。你会先？', options: [
    ['提出一个低成本的验证方法', 'risk'], ['设计小规模试验收集反馈', 'innovation'], ['清晰说明假设失效会影响什么', 'communication'], ['确认是否仍能按节点推进试验', 'execution'],
  ] },
  { text: '项目负责人突然离开，团队对接下来做什么没有共识。你会先？', options: [
    ['梳理当前目标、进度与未解决事项', 'analysis'], ['组织大家确定下一步负责人和时间点', 'execution'], ['快速调整自己的任务以适应变化', 'adaptability'], ['确认团队成员最担心的是什么', 'coordination'],
  ] },
  { text: '你的提案在会议上没有得到回应，后来发现大家没理解它的价值。你会先？', options: [
    ['换成对方关心的业务结果重新表达', 'communication'], ['把提案做成更容易理解的小样', 'innovation'], ['找一位同事了解大家没听懂的部分', 'coaching'], ['根据反馈修改提案的重点', 'adaptability'],
  ] },
  { text: '公司临时调整考核方式，原有工作重点随之变化。你会先？', options: [
    ['确认新的评价标准并调整做法', 'adaptability'], ['重新排定任务优先级和行动节点', 'execution'], ['判断变化可能引起哪些风险', 'risk'], ['帮同事理解新规则对工作意味着什么', 'coaching'],
  ] },
].map((situation, index) => ({ id: 33 + index, type: 'situation', ...situation }));

const allQuestions = [...questions, ...situations];

const SUPABASE_URL = 'https://acmniseaiojchlpvgpkm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbW5pc2VhaW9qY2hscHZncGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NjQxNDgsImV4cCI6MjEwNzQ0MDE0OH0.meo7hS3tsR0a8ciNISWcBpt8pVIcKOEmAj_7L0YQ1U';

const state = {
  screen: 'home',
  code: '',
  questionIndex: 0,
  answers: Array(allQuestions.length).fill(null),
  resultKey: null,
  modal: null,
  sharedScores: null,
};

const app = document.querySelector('#app');

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[character]));
}

function render() {
  if (state.screen === 'home') renderHome();
  if (state.screen === 'access') renderAccess();
  if (state.screen === 'quiz') renderQuiz();
  if (state.screen === 'result') renderResult();
  if (state.modal) renderModal();
}

function frame(content) {
  return `<main class="shell"><header class="brand"><div class="brand-mark">职场隐藏天赋</div><div class="brand-caption">A little more than work</div></header>${content}</main><div id="toast" class="toast"></div>`;
}

function renderHome() {
  app.innerHTML = frame(`
    <section class="hero-card">
      <p class="eyebrow">WORKPLACE HIDDEN TALENT · 趣味自我探索</p>
      <h1>你是哪种<br><span style="color:var(--accent-deep)">职场隐藏天赋？</span></h1>
      <p class="hero-subtitle">32 道行为自评 + 8 道职场情境，测出那个一直被低估的你。不是给你贴一个标签，而是帮你看见：你究竟在哪些时刻最有价值。</p>
      <div class="hero-note"><span class="pill">约 7—10 分钟</span><span class="pill">8 种隐藏天赋</span><span class="pill">支持保存与分享</span></div>
      <div class="button-row"><button class="primary-btn" data-action="go-access">输入密码开始测试</button></div>
    </section>
  `);
  bindEvents();
}

function renderAccess() {
  app.innerHTML = frame(`
    <section class="access-card">
      <p class="eyebrow">STEP 01 · ACCESS</p>
      <h2>输入测试密码</h2>
      <p>每个密码最多支持测试 3 次，验证成功即使用 1 次。请根据你过去一年真实的工作、实习、社团或小组协作经历作答。</p>
      <form class="password-form" data-form="password">
        <input class="password-input" name="password" placeholder="请输入测试密码" autocomplete="off" autofocus />
        <div class="form-error" id="password-error"></div>
        <button class="primary-btn" type="submit">验证并开始</button>
      </form>
      <button class="text-btn" data-action="go-home">返回首页</button>
    </section>
  `);
  bindEvents();
}

function renderQuiz() {
  const question = allQuestions[state.questionIndex];
  const selected = state.answers[state.questionIndex];
  const progress = ((state.questionIndex + 1) / allQuestions.length) * 100;
  const isLast = state.questionIndex === allQuestions.length - 1;
  const dimensionName = question.type === 'situation' ? '职场情境 · 选择你最可能先做的事' : '根据过去一年的真实行为作答';
  const letters = ['A', 'B', 'C', 'D', 'E'];
  app.innerHTML = frame(`
    <section class="quiz-card">
      <div class="quiz-top"><span>第 ${state.questionIndex + 1} / ${allQuestions.length} 题</span><span>${Math.round(progress)}%</span></div>
      <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>
      <p class="question-kicker">${escapeHtml(dimensionName)}</p>
      <h2>${escapeHtml(question.text)}</h2>
      <div class="options">
        ${(question.type === 'situation' ? question.options.map(([text], index) => [index, text]) : [1, 2, 3, 4, 5].map((value, index) => [value, ['非常不像我', '比较不像我', '不确定 / 偶尔如此', '比较像我', '非常像我'][index]])).map(([value, text], index) => `<button class="option-btn ${selected === value ? 'selected' : ''}" data-answer="${value}"><span class="option-marker">${letters[index]}</span><span>${escapeHtml(text)}</span></button>`).join('')}
      </div>
      <div class="quiz-actions">
        <button class="text-btn" data-action="prev-question" ${state.questionIndex === 0 ? 'disabled' : ''}>← 上一题</button>
        <button class="primary-btn" data-action="next-question" ${selected === null ? 'disabled' : ''}>${isLast ? '查看我的结果' : '下一题 →'}</button>
      </div>
    </section>
  `);
  bindEvents();
}

function calculateScores() {
  if (state.sharedScores) return state.sharedScores;
  const totals = Object.fromEntries(dimensions.map((dimension) => [dimension.id, 0]));
  questions.forEach((question, index) => { totals[question.dimension] += Number(state.answers[index] || 0); });
  const preferenceCounts = Object.fromEntries(dimensions.map((dimension) => [dimension.id, 0]));
  situations.forEach((situation, index) => {
    const selected = state.answers[questions.length + index];
    const dimension = situation.options[selected]?.[1];
    if (dimension) preferenceCounts[dimension] += 1;
  });
  const scores = Object.fromEntries(dimensions.map((dimension) => [dimension.id, Math.round((totals[dimension.id] / 20) * 85 + (preferenceCounts[dimension.id] / 4) * 15)]));
  return scores;
}

function getResultKey(scores) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
}

function encodeSharePayload() {
  const payload = { resultKey: state.resultKey, scores: calculateScores() };
  return btoa(unescape(encodeURIComponent(JSON.stringify(payload)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function decodeSharePayload(value) {
  try {
    const padded = value.replace(/-/g, '+').replace(/_/g, '/') + '==='.slice((value.length + 3) % 4);
    return JSON.parse(decodeURIComponent(escape(atob(padded))));
  } catch { return null; }
}

function renderResult() {
  const result = results[state.resultKey];
  const scores = calculateScores();
  const sortedDimensions = [...dimensions].sort((a, b) => scores[b.id] - scores[a.id]);
  app.innerHTML = frame(`
    <section class="result-card" id="result-capture">
      <div class="result-hero">
        <p class="eyebrow">YOUR HIDDEN TALENT · 测试结果</p>
        <h1>${escapeHtml(result.title)}</h1>
        <p class="result-subtitle">${escapeHtml(result.subtitle)}</p>
        <div class="hero-note"><span class="pill">核心优势：${escapeHtml(dimensions.find((item) => item.id === state.resultKey)?.short || '')}</span><span class="pill">结果仅供趣味探索</span></div>
      </div>
      <div class="result-body">
        <section class="result-section"><h2>为什么这个结果像你</h2><p>${escapeHtml(result.intro)}</p></section>
        <section class="result-section"><h2>你的能力画像</h2><div class="score-list">${sortedDimensions.map((dimension) => `<div class="score-row"><span>${escapeHtml(dimension.short)}</span><div class="score-track"><div class="score-fill" style="width:${scores[dimension.id]}%"></div></div><strong>${scores[dimension.id]}</strong></div>`).join('')}</div></section>
        <section class="result-section"><h2>你的隐藏优势</h2><ul>${result.strengths.map((strength) => `<li>${escapeHtml(strength)}</li>`).join('')}</ul></section>
        <section class="result-section"><h2>你容易被低估的地方</h2><p>${escapeHtml(result.blindspot)}</p></section>
        <section class="result-section"><div class="result-grid"><div class="result-mini"><strong>理论关键词</strong><p>${escapeHtml(result.theory)}</p></div><div class="result-mini"><strong>适合的工作场景</strong><p>${escapeHtml(result.environment)}</p></div></div></section>
        <section class="result-section"><h2>给你的一个行动建议</h2><p>${escapeHtml(result.action)}</p></section>
        <section class="result-section"><div class="share-quote">“${escapeHtml(result.share)}”</div><p style="margin-top:20px;font-size:13px">依据 32 道行为自评与 8 道情境偏好生成。情境题没有唯一正确答案；分数仅表示本次回答倾向，不是能力百分位。本测试未经信效度验证，不用于招聘筛选或心理诊断。</p></section>
      </div>
      <div class="result-actions"><button class="primary-btn" data-action="save-image">保存测试结果</button><button class="secondary-btn" data-action="copy-link">复制结果链接</button><button class="secondary-btn" data-action="retake">再测一次</button><button class="secondary-btn" data-action="review-gift">好评有礼</button></div>
    </section>
  `);
  bindEvents();
}

function renderModal() {
  const modal = document.createElement('div');
  modal.className = 'modal-backdrop';
  modal.innerHTML = `<div class="modal" role="dialog" aria-modal="true"><h2>好评有礼</h2><p>店铺好评后，请联系客服并发送好评截图，即可获得 1 元返现。</p><button class="primary-btn" data-action="close-modal">知道了</button></div>`;
  app.appendChild(modal);
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll('[data-action]').forEach((element) => element.addEventListener('click', handleAction));
  document.querySelectorAll('[data-answer]').forEach((element) => element.addEventListener('click', () => {
    state.answers[state.questionIndex] = Number(element.dataset.answer);
    renderQuiz();
  }));
  const form = document.querySelector('[data-form="password"]');
  if (form) form.addEventListener('submit', handlePasswordSubmit);
}

async function handlePasswordSubmit(event) {
  event.preventDefault();
  const input = event.currentTarget.elements.password.value.trim().toUpperCase();
  const error = document.querySelector('#password-error');
  const button = event.currentTarget.querySelector('button[type="submit"]');
  button.disabled = true;
  error.textContent = '';
  try {
    const response = await fetch(SUPABASE_URL + '/rest/v1/rpc/redeem_test_code', {
      method: 'POST',
      headers: { apikey: SUPABASE_ANON_KEY, Authorization: 'Bearer ' + SUPABASE_ANON_KEY, 'content-type': 'application/json' },
      body: JSON.stringify({ input_code: input }),
    });
    const payload = await response.json();
    if (!response.ok || payload?.ok !== true) {
      error.textContent = payload?.message || '密码无效或测试次数已用完。';
      button.disabled = false;
      return;
    }
  } catch {
    error.textContent = '无法连接云端测试服务，请检查网络后重试。';
    button.disabled = false;
    return;
  }
  state.code = input;
  state.answers = Array(allQuestions.length).fill(null);
  state.questionIndex = 0;
  state.sharedScores = null;
  state.screen = 'quiz';
  render();
}

function handleAction(event) {
  const action = event.currentTarget.dataset.action;
  if (action === 'go-access') { state.screen = 'access'; render(); return; }
  if (action === 'go-home') { state.screen = 'home'; render(); return; }
  if (action === 'prev-question') { state.questionIndex = Math.max(0, state.questionIndex - 1); renderQuiz(); return; }
  if (action === 'next-question') {
    if (state.answers[state.questionIndex] === null) return;
    if (state.questionIndex < allQuestions.length - 1) { state.questionIndex += 1; renderQuiz(); return; }
    state.resultKey = getResultKey(calculateScores());
    state.screen = 'result';
    window.history.replaceState({}, '', `${window.location.pathname}${window.location.search}`);
    renderResult();
    return;
  }
  if (action === 'retake') { state.screen = 'access'; state.modal = null; state.sharedScores = null; window.history.replaceState({}, '', window.location.pathname); render(); return; }
  if (action === 'review-gift') { state.modal = 'gift'; renderModal(); return; }
  if (action === 'close-modal') { state.modal = null; document.querySelector('.modal-backdrop')?.remove(); return; }
  if (action === 'copy-link') { copyResultLink(); return; }
  if (action === 'save-image') { saveResultImage(); }
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove('show'), 2600);
}

async function copyResultLink() {
  const url = `${window.location.origin}${window.location.pathname}#result=${encodeSharePayload()}`;
  try {
    await navigator.clipboard.writeText(url);
    showToast('结果链接已复制，发给朋友即可直接查看');
  } catch {
    window.prompt('请复制下面的结果链接：', url);
  }
}

function wrapCanvasText(ctx, text, maxWidth) {
  const lines = [];
  let current = '';
  [...text].forEach((character) => {
    const next = current + character;
    if (ctx.measureText(next).width > maxWidth && current) { lines.push(current); current = character; } else current = next;
  });
  if (current) lines.push(current);
  return lines;
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.roundRect(x, y, width, height, radius);
  ctx.fill();
}

function createResultCanvas() {
  const result = results[state.resultKey];
  const scores = calculateScores();
  const width = 1080;
  const height = 2460;
  const canvas = document.createElement('canvas');
  canvas.width = width * 2;
  canvas.height = height * 2;
  const ctx = canvas.getContext('2d');
  ctx.scale(2, 2);
  ctx.fillStyle = '#f8f5f0';
  ctx.fillRect(0, 0, width, height);
  const gradient = ctx.createLinearGradient(0, 0, width, 470);
  gradient.addColorStop(0, '#ead5c9'); gradient.addColorStop(0.6, '#fbf5ed'); gradient.addColorStop(1, '#dfe6da');
  ctx.fillStyle = gradient; ctx.fillRect(0, 0, width, 470);
  ctx.fillStyle = '#8f4637'; ctx.font = '700 24px "Noto Serif SC", serif'; ctx.fillText('职场隐藏天赋 · 测试结果', 76, 74);
  ctx.fillStyle = '#292622'; ctx.font = '800 64px "Noto Serif SC", serif';
  let titleLines = wrapCanvasText(ctx, result.title, 820); titleLines.forEach((line, index) => ctx.fillText(line, 76, 165 + index * 78));
  ctx.fillStyle = '#5f5147'; ctx.font = '500 28px "Noto Serif SC", serif';
  const subtitleLines = wrapCanvasText(ctx, result.subtitle, 820); subtitleLines.forEach((line, index) => ctx.fillText(line, 76, 300 + index * 46));
  ctx.fillStyle = '#fffdfa'; roundedRect(ctx, 56, 500, 968, 260, 24);
  ctx.fillStyle = '#8f4637'; ctx.font = '700 28px "Noto Serif SC", serif'; ctx.fillText('为什么这个结果像你', 88, 556);
  ctx.fillStyle = '#615a51'; ctx.font = '500 24px "Noto Serif SC", serif';
  wrapCanvasText(ctx, result.intro, 880).slice(0, 6).forEach((line, index) => ctx.fillText(line, 88, 610 + index * 38));
  ctx.fillStyle = '#fffdfa'; roundedRect(ctx, 56, 796, 968, 430, 24);
  ctx.fillStyle = '#8f4637'; ctx.font = '700 28px "Noto Serif SC", serif'; ctx.fillText('你的能力画像', 88, 852);
  const sorted = [...dimensions].sort((a, b) => scores[b.id] - scores[a.id]);
  sorted.forEach((dimension, index) => {
    const y = 900 + index * 38;
    ctx.fillStyle = '#655d54'; ctx.font = '500 20px "Noto Serif SC", serif'; ctx.fillText(dimension.short, 88, y);
    ctx.fillStyle = '#eee6dc'; roundedRect(ctx, 250, y - 17, 650, 13, 8);
    ctx.fillStyle = '#bf765b'; roundedRect(ctx, 250, y - 17, 650 * (scores[dimension.id] / 100), 13, 8);
    ctx.fillStyle = '#655d54'; ctx.font = '700 18px sans-serif'; ctx.fillText(String(scores[dimension.id]), 930, y - 1);
  });
  ctx.fillStyle = '#fffdfa'; roundedRect(ctx, 56, 1260, 968, 330, 24);
  ctx.fillStyle = '#8f4637'; ctx.font = '700 28px "Noto Serif SC", serif'; ctx.fillText('你的隐藏优势', 88, 1316);
  ctx.fillStyle = '#615a51'; ctx.font = '500 24px "Noto Serif SC", serif';
  result.strengths.slice(0, 4).forEach((strength, index) => ctx.fillText(`· ${strength}`, 88, 1370 + index * 38));
  ctx.fillStyle = '#fffdfa'; roundedRect(ctx, 56, 1630, 968, 350, 24);
  ctx.fillStyle = '#8f4637'; ctx.font = '700 28px "Noto Serif SC", serif'; ctx.fillText('你容易被低估的地方', 88, 1686);
  ctx.fillStyle = '#615a51'; ctx.font = '500 24px "Noto Serif SC", serif';
  wrapCanvasText(ctx, result.blindspot, 880).slice(0, 7).forEach((line, index) => ctx.fillText(line, 88, 1740 + index * 38));
  ctx.fillStyle = '#fffdfa'; roundedRect(ctx, 56, 2020, 968, 260, 24);
  ctx.fillStyle = '#8f4637'; ctx.font = '700 28px "Noto Serif SC", serif'; ctx.fillText('给你的行动建议', 88, 2076);
  ctx.fillStyle = '#615a51'; ctx.font = '500 24px "Noto Serif SC", serif';
  wrapCanvasText(ctx, result.action, 880).slice(0, 4).forEach((line, index) => ctx.fillText(line, 88, 2130 + index * 38));
  ctx.fillStyle = '#f7eee8'; roundedRect(ctx, 56, 2320, 968, 100, 24);
  ctx.fillStyle = '#5d453a'; ctx.font = '600 26px "Noto Serif SC", serif';
  wrapCanvasText(ctx, `“${result.share}”`, 860).slice(0, 1).forEach((line, index) => ctx.fillText(line, 88, 2382 + index * 42));
  return canvas;
}

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod|Mobile|HarmonyOS/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 1 && window.innerWidth < 900);
}

function triggerImageDownload(blob, filename) {
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.download = filename;
  link.href = url;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  window.setTimeout(() => {
    URL.revokeObjectURL(url);
    link.remove();
  }, 1000);
}

async function saveResultImage() {
  const filename = '职场隐藏天赋-测试结果.png';
  const canvas = createResultCanvas();
  const mobile = isMobileDevice();

  let blob;
  try {
    blob = await new Promise((resolve, reject) => canvas.toBlob((value) => value ? resolve(value) : reject(new Error('图片生成失败')), 'image/png'));
  } catch {
    showToast('图片生成失败，请稍后重试');
    return;
  }

  triggerImageDownload(blob, filename);
  showToast(mobile ? '图片已开始保存，请在浏览器下载或照片中查看' : '图片已下载，请在浏览器下载记录中选择另存为');
}

function loadSharedResult() {
  const match = window.location.hash.match(/^#result=(.+)$/);
  if (!match) return false;
  const payload = decodeSharePayload(match[1]);
  if (!payload?.resultKey || !results[payload.resultKey]) return false;
  state.resultKey = payload.resultKey;
  state.screen = 'result';
  if (payload.scores && dimensions.every((dimension) => Number.isInteger(payload.scores[dimension.id]) && payload.scores[dimension.id] >= 0 && payload.scores[dimension.id] <= 100)) state.sharedScores = payload.scores;
  return true;
}

if (!loadSharedResult()) render();
else renderResult();
