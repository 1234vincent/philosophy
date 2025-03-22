import React from "react";
import Barchart from "./BarChart";
import { Box } from '@mui/material';
const ResultPage = ({ result }) => {
    console.log(result);
    return (
        <Box>
            <h1>Result</h1>
            <Barchart data={result} />
        </Box>
    );
  };
  export default ResultPage;