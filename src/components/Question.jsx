import React from "react";
import { Box, Typography, Paper, RadioGroup, FormControlLabel, Radio } from "@mui/material";

const Question = ({ question, index, selectedValue, onAnswer, isEnglish }) => {
  // 定义各选项的缩放比例和颜色
  const radioSize = {
    1: 4,
    2: 2.8,
    3: 2.6,
    4: 2.4,
    5: 2.6,
    6: 2.8,
    7: 4
  };

  const radioColor = {
    1: "#3d5a80",
    2: "##3d5a80",
    3: "##3d5a80",
    4: "#9B9FAA",
    5: "#e0a458",
    6: "#e0a458",
    7: "#e0a458"
  };

  // 当选项变化时，调用 onAnswer 通知父组件更新该题答案
  const handleChange = (event) => {
    const value = Number(event.target.value);
    onAnswer(index, value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Paper 
        elevation={2}
        sx={{
          padding: 4,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "12px",
          width: "100%",
        }}
      >
        <Typography variant="h5" sx={{fontFamily: "Calluna, Georgia, serif", marginBottom: 2 }}>{question}</Typography>
        <Box 
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "800px",
            marginBottom: 7,
          }}
        >
          {/* 左侧 "同意" */}
          <Box sx = {{marginTop: "28px"}}>
            <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', color: "#3d5a80" }}>
            {isEnglish ? "Agree" : "同意"}
          </Typography>
          </Box>

          {/* 中间的选项 */}
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <RadioGroup
              row
              value={selectedValue || ""}
              onChange={handleChange}
              sx={{
                marginTop: 4,
                display: "flex",
                justifyContent: "center",
                gap: 5,
              }}
            >
              {[1, 2, 3, 4, 5, 6, 7].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value}
                  control={
                    <Radio
                      size="small"
                      sx={{
                        transform: `scale(${radioSize[value]})`,
                        color: radioColor[value],
                        "&.Mui-checked": { color: radioColor[value] }
                      }}
                    />
                  }
                />
              ))}
            </RadioGroup>
          </Box>
          {/* 右侧 "反对" */}
          <Box sx = {{marginTop: "28px"}}>
                      <Typography variant="body1" sx={{ fontFamily: 'Poppins', fontWeight: 'bold', fontSize: '18px', color: "#e0a458" }}>
          {isEnglish ? "Disagree" : "不同意"}
          </Typography>
          </Box>

        </Box>
      </Paper>
    </Box>
  );
};

export default Question;
