import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

// higher order component (HOC)

const AuthLayout = ({ title, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          margin: "20px",
          width: "300px",
          mt: "30px",
        }}
      >
        <Typography variant="h6" mt={3} fontWeight="bold">
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};

export default AuthLayout;
