const questionData = [
  {
    questions: [
      {
        question_cn: "人类理性是我们认知世界最可靠的工具。",
        question_en: "Human reason is the most reliable tool for understanding the world.",
        weights: { Plato: 1, Descartes: 1, Kant: 1, Foucault: -0.5, Code: -1, Lorde: -0.5 }
      },
      {
        question_cn: "知识的获得是性别中立的，与个体身份无关。",
        question_en: "The acquisition of knowledge is gender-neutral and unrelated to personal identity.",
        weights: { Descartes: 1, Kant: 1, Code: -1, deBeauvoir: -1, Lorde: -1, Lugones: -1 }
      },
      {
        question_cn: "社会是由阶级斗争构成的。",
        question_en: "Society is fundamentally shaped by class struggle.",
        weights: { Marx: 1, Fanon: 1, Quijano: 1, Kant: -0.5 }
      },
      {
        question_cn: "语言不仅反映现实，也构成了我们的现实。",
        question_en: "Language not only reflects reality but also constructs it.",
        weights: { Foucault: 1, Fanon: 1, Plato: 0.5, Descartes: -1 }
      },
      {
        question_cn: "哲学应该服务于人的解放。",
        question_en: "Philosophy should serve human liberation.",
        weights: { Zea: 1, Fanon: 1, Lorde: 1, Quijano: 1, Plato: -0.5 }
      }
    ]
  },
  {
    questions: [
      {
        question_cn: "身体是知识的一部分，我们不能忽视经验。",
        question_en: "The body is part of knowledge; experience must not be ignored.",
        weights: { deBeauvoir: 1, Lorde: 1, Code: 1, Descartes: -1 }
      },
      {
        question_cn: "我们天生拥有自由意志。",
        question_en: "We are born with free will.",
        weights: { Descartes: 1, Plato: 1, Foucault: -1, Marx: -0.5 }
      },
      {
        question_cn: "历史有一个普遍的、线性的进步方向。",
        question_en: "History follows a universal and linear trajectory of progress.",
        weights: { Kant: 1, Quijano: -1, Zea: -0.5, Fanon: -0.5 }
      },
      {
        question_cn: "社会结构如种族和性别是历史建构出来的，而非自然的。",
        question_en: "Social structures like race and gender are historically constructed, not natural.",
        weights: { Fanon: 1, Lugones: 1, Code: 1, Kant: -1 }
      },
      {
        question_cn: "权力无处不在，它通过社会规范悄无声息地运行。",
        question_en: "Power is everywhere, operating silently through social norms.",
        weights: { Foucault: 1, Lorde: 0.5, Descartes: -1 }
      }
    ]
  },
  {
    questions: [
      {
        question_cn: "哲学应该以抽象、普遍的原则为核心。",
        question_en: "Philosophy should be based on abstract and universal principles.",
        weights: { Plato: 1, Descartes: 1, Kant: 1, Zea: -0.5, Fanon: -0.5 }
      },
      {
        question_cn: "殖民主义不仅是军事征服，也是对知识、语言与身体的控制。",
        question_en: "Colonialism is not just military conquest, but also control over knowledge, language, and the body.",
        weights: { Fanon: 1, Quijano: 1, Lugones: 1, Kant: -0.5 }
      },
      {
        question_cn: "哲学家应当从自身的社会位置出发思考问题。",
        question_en: "Philosophers should reflect from the standpoint of their own social positions.",
        weights: { Code: 1, deBeauvoir: 1, Lorde: 1, Descartes: -1 }
      },
      {
        question_cn: "资本主义是异化人类、制造虚假意识的制度。",
        question_en: "Capitalism alienates humanity and creates false consciousness.",
        weights: { Marx: 1, Fanon: 0.5, Plato: 0.5, Kant: -0.5 }
      },
      {
        question_cn: "性别是一种社会制度，而非自然本质。",
        question_en: "Gender is a social system, not a natural essence.",
        weights: { Lugones: 1, deBeauvoir: 1, Code: 1, Kant: -0.5 }
      }
    ]
  },
  {
    questions: [
      {
        question_cn: "权力应当去中心化，由多元社群共同参与管理。",
        question_en: "Power should be decentralized and governed by diverse communities.",
        weights: { Foucault: 1, Zea: 1, Lorde: 1, Plato: -1 }
      },
      {
        question_cn: "宗教和传统观念是社会压迫的工具。",
        question_en: "Religion and traditional beliefs are tools of social oppression.",
        weights: { Marx: 1, Fanon: 0.5, Lorde: 0.5, Plato: -1 }
      },
      {
        question_cn: "身份的交错性（种族、性别、阶级等）决定了人的经验。",
        question_en: "Intersectionality (race, gender, class, etc.) shapes human experience.",
        weights: { Lorde: 1, Lugones: 1, Code: 1, Descartes: -1 }
      },
      {
        question_cn: "教育应当解放人，而非再生产社会结构。",
        question_en: "Education should liberate people, not reproduce existing social structures.",
        weights: { Zea: 1, Fanon: 1, Quijano: 1, Kant: -0.5 }
      },
      {
        question_cn: "知识是斗争的场域，它不是中性的，也不是无争议的。",
        question_en: "Knowledge is a site of struggle—it is neither neutral nor uncontested.",
        weights: { Foucault: 1, Code: 1, Marx: 0.5, Descartes: -1 }
      }
    ]
  }
];

export default questionData;
