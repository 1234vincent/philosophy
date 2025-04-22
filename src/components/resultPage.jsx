import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import resultData from "../data/resultData";

const ResultPage = ({ name, isEnglish, lanyuejia }) => {
  const [showResult, setShowResult] = useState(!lanyuejia); // 若lanyuejia为true，则初始为false

  const imageMap = {
    Plato: "Plato.png",
    Descartes: "Descartes.png",
    Kant: "Kant.png",
  };

  const philosopher = resultData.find((item) => item.name === name);

  const comfortText = {
    ch: "蓝悦嘉，你最好不是乱点点就点到这里来的。本来想对你说的话已经在脑海里预演了很多遍，但提笔的时候无数思绪像将我的手住满了铅一样。你心情最近不太好，其实我不太知道怎么去安慰你。看到你难过孤独的时候我其实很心疼，但我又害怕我的依赖给你带来苦恼。我希望留给你一点空间调整，其实每次看到你的消息我真的很开心，但与其你陪着我，我更希望你去勇敢消化这段时间。写这些我也是希望你知道你也不是孤单一个人，尽管我不知道我能陪你多久，但我还是希望你每天开心，快乐。————你的小貂蝉",
    en: "蓝悦嘉，你最好不是乱点点就点到这里来的。本来想对你说的话已经在脑海里预演了很多遍，但提笔的时候无数思绪像将我的手住满了铅一样。你心情最近不太好，其实我不太知道怎么去安慰你。看到你难过孤独的时候我其实很心疼，但我又害怕我的依赖给你带来苦恼。我希望留给你一点空间调整，其实每次看到你的消息我真的很开心，但与其你陪着我，我更希望你去勇敢消化这段时间。写这些我也是希望你知道你也不是孤单一个人，尽管我不知道我能陪你多久，但我还是希望你每天开心，快乐。————你的小貂蝉",
  };

  return (
    <Box
      sx={{
        minHeight: "60vh",
        background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 4,
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "20px",
          padding: 6,
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          maxWidth: "900px",
        }}
      >
        <AnimatePresence mode="wait">
          {!showResult && lanyuejia && (
            <motion.div
              key="comfort"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2 }}
              style={{ textAlign: "center" }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Merriweather', serif",
                  fontSize: "1.1rem",
                  color: "#555",
                  lineHeight: 1.8,
                  maxWidth: 500,
                  fontStyle: "italic",
                  marginBottom: 3,
                }}
              >
                {isEnglish ? comfortText.en : comfortText.ch}
              </Typography>
              <Button
                variant="contained"
                onClick={() => setShowResult(true)}
                sx={{ fontFamily: "'Playfair Display', serif" }}
              >
                {isEnglish ? "Show Result" : "查看分析"}
              </Button>
            </motion.div>
          )}

          {showResult && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "40px",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <img
                  src={imageMap[name]}
                  alt={name}
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
                    marginBottom: "12px",
                  }}
                />
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "1px",
                  }}
                >
                  {name}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Merriweather', serif",
                  fontSize: "1.15rem",
                  lineHeight: 1.9,
                  color: "#444",
                  textAlign: "justify",
                  maxWidth: 500,
                }}
              >
                {isEnglish
                  ? philosopher?.answer_en
                  : philosopher?.answer_ch}
              </Typography>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default ResultPage;
