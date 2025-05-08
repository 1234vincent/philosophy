const questionData = [
  {
    // 第一组问题（1～5 号问题）——自由的本质与实现路径
    questions: [
      {
        question_cn: "你是否认为，即使做出的选择是欲望所驱动的，这样的选择也可以被视作自由",
        question_en: "If someone knowingly acts on desire and insists it’s their own choice, can that still be considered genuine freedom?",
        weights: {
          Plato: -1,
          Descartes: 0.9,
          Kant: -1,
          Beauvoir: 0.6 
        }
        
      },
      {
        question_cn: "你是否认为，人类之所以拥有自由意志，是因为上帝赋予了这种能力？",
        // Plato 认为这是自由的核心，Descartes 和 Kant 强调理性但不使用灵魂三分结构
        question_en: "Do you think people are truly free if they believe their ability to choose was given by a higher power?",
        weights: { Plato: 0.3, Descartes: 1, Kant: -1 , Beauvoir: -1}
      },
      {
        question_cn: "你是否认为，社会的强制教育是个体通往自由的道路",
        // 三者都强调自由≠任性，Plato 和 Kant 明确指出自由受理性或道德法则引导
        question_en: "Can mandatory education truly lead to individual freedom, or does it risk shaping freedom into conformity?",
        weights: { Plato: 1, Descartes: -0.6, Kant: 0.8, Beauvoir: -1 }
      },
      {
        question_cn: "你是否认为，明知道做出的选择会损害他人利益，但在理性思考后这仍做出这样的选择。这可以被认为是达到了个体的自由",
        // Kant 认为道德是自由的前提，Plato 通过理性秩序也强调道德性，Descartes 较弱
        question_en: "Do you think that if someone makes a choice, knowing it will hurt others but still goes through with it after careful reasoning, that choice can still count as personal freedom?",
        weights: { Plato: 0.6, Descartes: 0, Kant: -1 , Beauvoir: -1}
      },
      {
        question_cn: "你是否认为，在理性思考过后，追求的快乐就是自由本质的体现",
        // 三者都强调理性在自由中的核心作用
        question_en: "Do you believe that pursuing pleasure after rational thought reflects the true nature of freedom?",
        weights: { Plato: -1, Descartes: 0.7, Kant: -1 , Beauvoir: 0.5}
      }
    ],
  },
  {
    questions: [
      {
        "question_cn": "你是否认为，为了拯救多数人而牺牲少数人的自由是合理的？",
        "question_en": "Is sacrificing the freedom of a few for the sake of the majority an act of justice, or a betrayal of freedom?",
        weights: { Plato: 0.7, Descartes: -0.5, Kant: -1 , Beauvoir: -1}
      },
      {
        question_cn: "你是否认为，法律存在在本质上限制了自由？",
        // Plato 认为这是自由的核心，Descartes 和 Kant 强调理性但不使用灵魂三分结构
        question_en: "Do laws inherently restrict freedom, or can they be expressions of collective responsibility?",
        weights: { Plato: -0.8, Descartes: 0, Kant: -1 , Beauvoir: 0.1}
      },
      {
        question_cn: "你是否认为，宗教在一定程度上限制了自由？",
        // 三者都强调自由≠任性，Plato 和 Kant 明确指出自由受理性或道德法则引导
        question_en: "Do you think someone is truly free if they refuse to make choices, preferring to let life make them instead?",
        weights: {
          Plato: -0.6,       
          Descartes: -0.3,    
          Kant: -0.9,         
          Beauvoir: -1        
        }
        
      },
      {
        question_cn: "你是否认为，技术的进步正在创造一种新型的奴役",
        // Kant 认为道德是自由的前提，Plato 通过理性秩序也强调道德性，Descartes 较弱
        question_en: "Do you believe that technological advancement is creating a new form of enslavement?",
        weights: {
          Plato: 0.8,
          Descartes: -0.7,
          Kant: 0.6,
          Beauvoir: 0.2
        }
      },
      {
        question_cn: "你是否认为，谎言在某种程度上是在保护自由？",
        // 三者都强调理性在自由中的核心作用
        question_en: "Do you believe that lies are protecting freedom to some extent?",
        weights: {
          Plato: 0.6,
          Descartes: 0.3,
          Kant: -1,
          Beauvoir: -0.6
        }
      }
    ]
  }
];

export default questionData;
