import React from "react";
import { Box, Typography, Container, Grid, Paper, AppBar, Toolbar } from "@mui/material";
import LinearWithValueLabel from "./LinearWithValueLabel";  
import { useEffect } from "react";
const HomeTop = ({page, isEnglish, setIsEnglish, ready}) => {
    const [progress, setProgress] = React.useState(0);
    useEffect(() => {
        setProgress((page) * 50);
    }, [page]);
 
    return (
        <div>
            <AppBar position="sticky" sx={{ backgroundColor: "white", boxShadow: "none" }}>
                <Toolbar sx =  {{display: "flex", justifyContent: "space-between",alignContent: "center" }}>
                    <Box sx = {{display: "flex", alignContent: "center", gap: 1, marginLeft: 5}}>
                    <img src="sy.webp" alt="logo" style={{ width: 50, height: 50, borderRadius: "17px",   }} />
                    <Typography sx={{ fontFamily: "Calluna, Georgia, serif", fontWeight: "bold", flexGrow: 1, color: "#e0a458" , fontSize: 25, marginTop: 0.5}}>
                        100 philosophers
                    </Typography>
                    </Box>
                    {/* <Button
                        sx={{padding: 0, color: "#886199", fontSize: 20, fontWeight: "bold", Right: 5}}
                        onClick={() => setIsEnglish(!isEnglish)}
                        >
                        <Typography sx={{ color: "#886199", fontSize: 20, fontWeight: "bold" }}>
                            {isEnglish ? "中文" : "English"}
                        </Typography>
                    </Button> */}
                </Toolbar>
            </AppBar>
            {ready === false && 
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "500px", // 绿色区域高度
                    background: "linear-gradient(to bottom, #3d5a80 60%, #F9F9F9 40%)", // 渐变分割
                }}
                >

                <Container sx={{ position: "relative", zIndex: 2, pt: 8 }}>
                    <Typography variant="h3" color="white" fontWeight="bold" align="center">
                    {isEnglish ? "So, what is freedom?" : "那么，什么是自由？"}
                    </Typography>
                    <Typography variant="subtitle1" color="white" align="center">
                        See which philosopher do you think like®
                    </Typography>
                </Container>

                <Container sx={{ mt: 10, zIndex: 2 }}>
                    <Grid container spacing={3} justifyContent="center">
                        {[
                            { text: isEnglish ? "Be yourself, answer honestly, find your phi type." : "读书破万卷，自有心中光", bg: "rgba(227, 242, 253, 0.7)", pic: "test-header-2.svg"  }, // 浅蓝
                            { text: isEnglish ? "Understand how your phi type affects various aspects of your life." : "玉在山而草木润，渊生珠而崖不枯", bg: "rgba(255, 243, 224, 0.7)", pic: "theory.svg" }, // 浅橙
                            { text: isEnglish ? "Shape the self you want with our curated materials." :  "非学无以广才，非志无以成学", bg: "rgba(243, 229, 245, 0.7)", pic: "exercise.svg" } // 浅紫
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
            }
        </div>
        
    );
};

export default HomeTop;