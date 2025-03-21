import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../images/plane.jpg";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  const [isValid, setIsValid] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dirty, setDirty] = useState(false);

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setIsValid(val.includes("@") && val.includes("."));
    setEmail(val);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (isValid && password.length) {
      navigate("/main");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        className="login-container h-full w-screen bg-top bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="bg-[#032538] min-h-screen h-full w-full md:w-6/12 lg:w-5/12 px-12 py-14">
          <h1 className="text-[4.5rem] font-bold text-white max-w-md mx-auto md:mx-0">
            Airway
          </h1>
          <h1 className="text-[4.5rem] font-bold text-white max-w-md mx-auto md:mx-0">
            Analytics
          </h1>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="flex flex-col px-2 gap-8 py-12 max-w-md mx-auto md:mx-0 relative"
          >
            <TextField
              error={dirty && !isValid}
              id="email"
              label="Enter email"
              variant="standard"
              value={email}
              onBlur={() => setDirty(true)}
              onChange={handleEmailChange}
              InputLabelProps={{
                style: {
                  color: "rgba(255, 255, 255, 0.6)",
                },
              }}
            />
            {dirty && !isValid && (
              <p
                className={`absolute text-[#d32f2f] font-normal text-xs top-24 left-2`}
              >
                Enter valid email address
              </p>
            )}
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              InputLabelProps={{
                style: {
                  color: "rgba(255, 255, 255, 0.6)",
                },
              }}
            />
            <div className="flex justify-end items-center">
              <Button
                style={{
                  backgroundColor: "#021018",
                  color: "white",
                  padding: "0.5rem 2rem",
                  boxShadow:
                    "0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3)",
                  pointerEvents: "auto",
                  cursor:
                    !password.length || !isValid ? "not-allowed" : "pointer",
                }}
                className="shadow-lg"
                variant="contained"
                disabled={!password.length || !isValid}
                onClick={handleLogin}
              >
                Login
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Login;
