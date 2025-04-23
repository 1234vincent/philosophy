import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import resultData from "../data/resultData";

const ResultPage = ({ name, isEnglish }) => {
  const imageMap = {
    Plato: "Plato.png",
    Descartes: "Descartes.png",
    Kant: "Kant.png",
  };

  const philosopher = resultData.find((item) => item.name === name);


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
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default ResultPage;
