import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import PrimaryButton from "../../shared/Buttons/PrimaryButton";
import AuthLayout from "../../shared/Layout/AuthLayout";
import { userDetail } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formDetail, setFormDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e, inputFieldName) => {
    setFormDetail({ ...formDetail, [inputFieldName]: e.target.value });
  };

  const navigate = useNavigate();

  console.log({ formDetail });

  const handleLogin = () => {
    const isUsernameMatch = formDetail.username === userDetail.username;
    const isPasswordMatch = formDetail.password === userDetail.password;

    if (isUsernameMatch && isPasswordMatch) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("username", formDetail.username);
      navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      {/* HOC -> AuthLayout - Higher Order Component */}
      <AuthLayout title={"User Login"}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          autoComplete="off"
          onChange={(e) => handleChange(e, "username")}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="off"
          onChange={(e) => handleChange(e, "password")}
        />
        {/* PrimaryButton > Reusable Component */}
        <PrimaryButton text="Login" variant="contained" onClick={handleLogin} />
      </AuthLayout>
    </>
  );
};

export default Login;
