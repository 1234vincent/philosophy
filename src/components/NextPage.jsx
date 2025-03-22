import React from "react";
import Button from "@mui/material/Button";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DoneAllIcon from '@mui/icons-material/DoneAll';
const NextPage = ({page, setPage}) => {
    const [curse, setCurse] = React.useState(false);// 鼠标样式
    const handleNextPage = () => {
        setPage(page + 1);
        window.scrollTo({ top: 50, behavior: 'smooth' }); // Scroll to top of page
    };

    return (
        <Button
        onMouseEnter={() => setCurse(true)}
        onMouseLeave={() => setCurse(false)}
        onClick={handleNextPage}
        sx={{
            backgroundColor: "#6B4D7B",
            color: "#FFFFFF",
            borderRadius: "12px",
            padding: "10px 20px",
            fontSize: "1.2rem",
            fontWeight: "bold",
            marginTop: "50px",
            marginBottom: "50px",
            maxWidth: "200px",
            display: "flex",
            justifyContent: "center",
            alignSelf: "center", 
            cursor: curse ? "grab" : "default",
        }}
        variant="contained"
        >
        {page === 3 ? (<DoneAllIcon />) : (<ArrowForwardIcon />)}
        </Button>

    );
}

export default NextPage;