import React from "react";
import NavBar from "../Component/NavBar";
import { Box } from "@mui/material";
import Footer from "../Component/Footer";
const Home = () => {
  return (
    <div>
      <Box display={"flex"} flexDirection={"column"}>
        <NavBar />
        <Footer/>
      </Box>
    </div>
  );
};

export default Home;
