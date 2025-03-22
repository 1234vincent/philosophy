import React from "react";
import { Box, Typography, Button, Container, Grid, Paper, AppBar, Toolbar } from "@mui/material";
import LinearWithValueLabel from "./LinearWithValueLabel";  
import { useEffect } from "react";
const HomeTop = ({page, isEnglish, setIsEnglish}) => {
    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
        setProgress((page) * 25);
    }, [page]);

    return (
        <div>
            <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "none" }}>
            <Container sx = {{marginLeft: 5}}>
                <Toolbar position="fixed" display = "flex">
                    <img src="sy.webp" alt="logo" style={{ width: 50, height: 50, borderRadius: "17px",   }} />
                    <Typography sx={{ fontFamily: "Calluna, Georgia, serif", fontWeight: "bold", flexGrow: 1, color: "#886199" , fontSize: 25}}>
                        100 philosophers
                    </Typography>
                    <Button
                        sx={{padding: 0, color: "#886199", fontSize: 20, fontWeight: "bold", Right: 5}}
                        onClick={() => setIsEnglish(!isEnglish)}
                        >
                        <Typography sx={{ color: "#886199", fontSize: 20, fontWeight: "bold" }}>
                            {isEnglish ? "中文" : "English"}
                        </Typography>
                    </Button>
                </Toolbar>
            </Container>
            </AppBar>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "500px", // 绿色区域高度
                    background: "linear-gradient(to bottom, #32A474 60%, #F9F9F9 40%)", // 渐变分割
                }}
                >

                <Container sx={{ position: "relative", zIndex: 2, pt: 8 }}>
                    <Typography variant="h3" color="white" fontWeight="bold" align="center">
                         Free Phi Test
                    </Typography>
                    <Typography variant="subtitle1" color="white" align="center">
                        Exploer®
                    </Typography>
                </Container>

                <Container sx={{ mt: 10, zIndex: 2 }}>
                    <Grid container spacing={3} justifyContent="center">
                        {[
                            { text: "Be yourself, answer honestly, find your phi type.", bg: "rgba(227, 242, 253, 0.7)", pic: "/test-header-2.svg"  }, // 浅蓝
                            { text: "Understand how your phi type affects various aspects of your life.", bg: "rgba(255, 243, 224, 0.7)", pic: "theory.svg" }, // 浅橙
                            { text: "Shape the self you want with our curated materials.", bg: "rgba(243, 229, 245, 0.7)", pic: "exercise.svg" } // 浅紫
                        ].map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Paper sx={{ 
                                    p: 6, 
                                    textAlign: "center", 
                                    bgcolor: item.bg,
                                    borderRadius: "17px", 
                                    backdropFilter: "blur(20px)",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                                    <img src={item.pic} alt="Test Header" style={{width: "20%", height: "20%"}}/>
                                    <Typography variant="body1">{item.text}</Typography>
                                </Paper>
                            </Grid>
                        ))} 
                    </Grid >
                    <Container sx={{ marginTop: 3}}>
                    <LinearWithValueLabel value={progress} />
                    </Container>
                </Container>
            </Box>

        </div>
        
    );
};

export default HomeTop;