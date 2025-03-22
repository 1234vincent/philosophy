import React, { useRef } from "react";
import Question from './Question';
import questionData from "../data/questionData"; // 假设题目数据在此文件中

const Question_Page = ({ page, answer, setAnswer, isEnglish }) => {
  // 从外部数据获取题目集合
  const question_set = questionData; // 例如，questionData 是一个数组，每项包含 questions 数组
  const questionRefs = useRef([]);
  // 自动滚动到下一题
  const scrollToRef = (currentIndex) => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < questionRefs.current.length) {
      questionRefs.current[nextIndex]?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // 当某题选项变化时，更新答案，并滚动到下一题
  const handleAnswerChange = (pageIndex, questionIndex, value) => {
    setAnswer(pageIndex, questionIndex, value);
    scrollToRef(questionIndex);
  };

  return (
    <div>
      {question_set[page].questions.map((questionObj, index) => (
        <div
          key={index}
          ref={(el) => (questionRefs.current[index] = el)}
          style={{ marginBottom: '10px 0' }}
        >
          <Question
            question={isEnglish ? questionObj.question_en : questionObj.question_cn}
            index={index}
            selectedValue={answer[page][index]}
            onAnswer={(questionIndex, value) => handleAnswerChange(page, questionIndex, value)}
            isEnglish={isEnglish}
          />
        </div>
      ))}
    </div>
  );
};

export default Question_Page;
