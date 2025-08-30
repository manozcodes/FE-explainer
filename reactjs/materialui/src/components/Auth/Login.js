import TextField from "@mui/material/TextField";
import React from "react";
import PrimaryButton from "../../shared/Buttons/PrimaryButton";
import AuthLayout from "../../shared/Layout/AuthLayout";

const Login = () => {
  return (
    <>
      {/* HOC -> AuthLayout - Higher Order Component */}
      <AuthLayout title={"User Login"}>
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          autoComplete="off"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="off"
        />
        {/* PrimaryButton > Reusable Component */}
        <PrimaryButton text="Login" variant="contained" />
      </AuthLayout>
    </>
  );
};

export default Login;
