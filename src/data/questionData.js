const questionData = [
  {
    // 第一组问题（1～5 号问题）
    questions: [
      {
        question_cn: "你觉得人类的理性真的是我们理解世界最靠谱的工具吗？（就像笛卡尔那句‘我思故我在’所暗示的那样）",
        question_en: "Do you think human reason is really the most reliable tool for understanding the world? (Inspired by Descartes' 'I think, therefore I am')",
        weights: { Plato: 1, Descartes: 1, Kant: 1, Foucault: -0.5, Code: -1, Lorde: -0.5 }
      },
      {
        question_cn: "你认为知识的获取是不是完全中性的，跟一个人的性别和身份一点关系都没有？（正如 Code 在‘Is the Sex of the Knower’中讨论的那样）",
        question_en: "Do you believe that the acquisition of knowledge is completely neutral, unrelated to one's gender or identity? (As discussed in Code’s 'Is the Sex of the Knower')",
        weights: { Descartes: 1, Kant: 1, Code: -1, deBeauvoir: -1, Lorde: -1, Lugones: -1 }
      },
      {
        question_cn: "你觉得社会到底是不是由阶级斗争造就的？（Marx 在 PPT 里强调阶级斗争是社会的根本动力）",
        question_en: "Do you think society is fundamentally shaped by class struggle? (Marx emphasized in the slides that class struggle is the driving force of society)",
        weights: { Marx: 1, Fanon: 1, Quijano: 1, Kant: -0.5 }
      },
      {
        question_cn: "你是否同意，语言不仅仅是现实的镜子，而是实际上还在塑造我们的世界？（福柯讲‘权力无处不在，语言构成现实’）",
        question_en: "Do you agree that language not only reflects reality, but actually constructs our world? (Foucault emphasized how power and language shape reality)",
        weights: { Foucault: 1, Fanon: 1, Plato: 0.5, Descartes: -1 }
      },
      {
        question_cn: "你认为哲学是不是应该帮助人们获得解放？（这也是 Zea 和 Fanon 等人在课堂上一再提到的‘哲学的承诺’）",
        question_en: "Do you think philosophy should help achieve human liberation? (This aligns with the 'commitment' aspect discussed by Zea and Fanon)",
        weights: { Zea: 1, Fanon: 1, Lorde: 1, Quijano: 1, Plato: -0.5 }
      }
    ]
  },
  {
    // 第二组问题（6～10 号问题）
    questions: [
      {
        question_cn: "你觉得身体也是我们获取知识的重要部分吗？经验难道可以被忽视吗？（de Beauvoir 的‘存在主义’强调具身经验的重要性）",
        question_en: "Do you think that the body is also an important part of how we acquire knowledge? Can experience really be ignored? (as de Beauvoir emphasizes the significance of embodied experience in existentialism)",
        weights: { deBeauvoir: 1, Lorde: 1, Code: 1, Descartes: -1 }
      },
      {
        question_cn: "你认为，人一出生是不是就自带自由意志？（这与笛卡尔和康德关于自律和自由意志的讨论有关）",
        question_en: "Do you believe that we are born with free will? (This relates to Descartes’ and Kant’s discussions on autonomy and free will)",
        weights: { Descartes: 1, Plato: 1, Foucault: -1, Marx: -0.5 }
      },
      {
        question_cn: "你同意历史总是沿着一个统一、线性的进步方向发展吗？（参考 Kant 的‘普遍历史观’）",
        question_en: "Do you agree that history follows a universal, linear trajectory of progress? (Referencing Kant’s idea for a universal history from a cosmopolitan perspective)",
        weights: { Kant: 1, Quijano: -1, Zea: -0.5, Fanon: -0.5 }
      },
      {
        question_cn: "你觉得种族和性别这些社会结构，是历史造出来的，而不是天生就有的？（这也是后殖民和女权理论中经常讨论的议题）",
        question_en: "Do you think that social structures like race and gender are constructed by history, rather than being natural? (A key theme in postcolonial and feminist theories)",
        weights: { Fanon: 1, Lugones: 1, Code: 1, Kant: -1 }
      },
      {
        question_cn: "你会同意这样一句话吗：权力无处不在，总是悄悄地通过一些社会规范来影响我们的生活？（正如福柯在‘Panopticism’中论述的那样）",
        question_en: "Would you agree that power is everywhere, subtly influencing our lives through social norms? (As Foucault discusses in his analysis of panopticism)",
        weights: { Foucault: 1, Lorde: 0.5, Descartes: -1 }
      }
    ]
  }
];

export default questionData;
