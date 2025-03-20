import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../images/plane.jpg";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(255, 255, 255, 0.6)",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.8)",
    },
  },
});

const Login = () => {
  const navigate = useNavigate();
  


  return (
    <ThemeProvider theme={theme}>
      <div
        className="main-container h-screen w-screen bg-top bg-no-repeat bg-cover"
        style={{ backgroundColor: "#011018" }}
      >
        <Navbar></Navbar>
        
      </div>
    </ThemeProvider>
  );
};

export default Login;
