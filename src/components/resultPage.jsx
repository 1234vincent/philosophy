import React from "react";
import Barchart from "./BarChart";
import { Box } from '@mui/material';
import { Container } from "react-bootstrap";
const ResultPage = ({ result, name }) => {
    console.log("ResultPage", name);
    const imageMap = {
        Plato: "plato.webp",
        Descartes: "Descartes.webp",
        Kant: "Kant.webp",
        Marx: "Marx.webp",
        Foucault: "Foucault.webp",
        deBeauvoir: "Beauvoir.webp",
        Zea: "Zea.webp", 
        Code: "Code.webp",
        Lorde: "Lorde.webp",
        Mills: "Mills.webp",
        Fanon: "Fanon.webp",
        Quijano: "quijano.webp",
        Lugones: "Lugones.webp"
      };
      const namesWithImages = result.map(({ name, score }) => ({
        name,
        score,
        image: imageMap[name] ? `/${imageMap[name]}` : null
      }));
    return (
        <Box
        sx ={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
        }}
        >
          <Container>
            <img
                src={namesWithImages.find(item => item.name === name)?.image}
                alt={name}
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
            <h2>{name}</h2>
          </Container>
          <Barchart data={result} />
        </Box>
    );
  };
  export default ResultPage;