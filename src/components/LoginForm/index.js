import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputLabel from "@mui/material/InputLabel";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AuthService from "../../services/AuthService";
import "./loginForm.css";
import "./media.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const authService = new AuthService();
  const [errMsg, setErrMsg] = useState(null);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const setFullLoginData = (inputObj) => {
    setLoginData({ ...loginData, ...inputObj });
  };

  const actionLogin = async () => {
    try {
      const { email, password } = loginData;
      if (!email || !password) setErrMsg("Enter your credentials");
      else {
        const loggedIn = await authService.login(loginData);
        if (loggedIn) navigate("/");
      }
    } catch (err) {
      const { message: msg } = err.response.data;
      setErrMsg(msg);
    }
  };

  return (
    <Box id="login-form-wrapper">
      <Box sx={{ width: "100px" }}>
        <img src="/img/logo.png" className="resp-img" alt="logo" />
      </Box>

      <Typography variant="h3" sx={{ mb: 2, color: "var(--login-form-text)" }}>
        Health Care
      </Typography>
      {errMsg && (
        <Box className="err-msg" sx={{ mb: 1 }}>
          {errMsg}
        </Box>
      )}
      <Box className="round-border wrapper" id="login-form">
        <Box className="login-form-element">
          <TextField
            label="Email"
            variant="standard"
            className="w-100"
            onInput={({ target }) => setFullLoginData({ email: target.value })}
          />
        </Box>
        <Box className="login-form-element">
          <FormControl variant="standard" className="w-100">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              onInput={({ target }) =>
                setFullLoginData({ password: target.value })
              }
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword((show) => !show)}
                    onMouseDown={(event) => {
                      event.preventDefault();
                    }}
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box className="login-form-element">
          <Button variant="contained" className="w-100" onClick={actionLogin}>
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
