import React from "react";
import { Box } from '@mui/material';
import { Container } from "react-bootstrap";
const ResultPage = ({ result, name }) => {

    const imageMap = {
        Plato: "plato.png",
        Descartes: "Descartes.png",
        Kant: "Kant.png",
      };
      // const namesWithImages = result.map(({ name, score }) => ({
      //   name,
      //   score,
      //   image: imageMap[name] ? `/${imageMap[name]}` : null
      // }));   
      console.log("ResultPage", name, imageMap[name]);
    return (
        <Box
        sx ={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
          <Container>
            <img
                src={`Kant.png`}
               // src={namesWithImages.find(item => item.name === name)?.image}
                alt={name}
                style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
            <h2>{name}</h2>
          </Container>
        </Box>
    );
  };
  export default ResultPage;