import React, { useState } from 'react';
import HomeTop from './components/HomeTop';
import QuestionPage from './components/QuestionPage';
import NextPage from './components/NextPage';
import EndPage from './components/EndPage';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import ResultPage from './components/resultPage';
import name from './data/nameData';
import questionData from './data/questionData';
function App() {
  const [isEnglish, setIsEnglish] = useState(true);

  // 当前页码
  const [selectedName, setSelectedName] =  useState("");
  const [page, setPage] = useState(0);
  const [ready, setReady] = useState(false);
  const [answers, setAnswers] = useState([
    [null, null, null, null, null], // 第一组
    [null, null, null, null, null], // 第二组
    ]);
    // const [answers, setAnswers] = useState([
    //   [1, 1, 1, 1, 1], // 第一组：5个问题
    //   [1, 1, 1, 1, 1], // 第二组
    //   ]);
  const [result, setResult] = useState(name);
  const [topFive, setTopFive] = useState(name);
  useEffect(() => {
    setSelectedName(result[0].name)
    setTopFive(result.slice(0, 5))
  }, [result]);
  const mapLikerToScore = (value)  => {
    return (4 - value) / 3;
  }
  useEffect(() => { 
    if (page === 2) {
      const score = {}
      console.log("Ready to update");
      console.log(answers);
      questionData.forEach((question_group, group_Index) => {
        question_group.questions.forEach((question, question_Index) => {
          const answerValue = answers[group_Index][question_Index];
          if (answerValue == null) return;
          Object.entries(question.weights).forEach(([philosopher, weight]) => {
            const attitudeScore = mapLikerToScore(answerValue);
            score[philosopher] = (score[philosopher] || 0) + attitudeScore * weight;
          });
        });
      });

      let updatedResult = name.map((philosopher) => ({
        ...philosopher,
        score: score[philosopher.name] || 0,
    }));
    updatedResult = updatedResult.sort((a, b) => b.score - a.score);
    setResult(updatedResult);
    setReady(true);
    console.log(updatedResult);
    }
  }, [page, answers]);

  // 更新答案的函数，参数分别为：页码、问题索引、选中的值
  const updateAnswer = (pageIndex, questionIndex, value) => {
    const newAnswers = [...answers];
    newAnswers[pageIndex] = [...newAnswers[pageIndex]];
    newAnswers[pageIndex][questionIndex] = value;
    setAnswers(newAnswers);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '60px',
      }}
  
    >
      <HomeTop page={page} isEnglish = {isEnglish} setIsEnglish = {setIsEnglish} ready = {ready} />      
      {page < 2 ? (
        <>
          <QuestionPage page={page} answer={answers} setAnswer={updateAnswer} isEnglish={isEnglish} />
          <NextPage page={page} setPage={setPage} />
        </>
      ) : (
        ready && <ResultPage result={topFive} name = {selectedName} isEnglish = {isEnglish} />
      )}
{/* 
      <ResultPage answer = {answers}/>
      <Question_Page page={page} answer={answers} setAnswer={updateAnswer} isEnglish={isEnglish}/> */}

      <EndPage />
    </Box>
  );
}

export default App;
