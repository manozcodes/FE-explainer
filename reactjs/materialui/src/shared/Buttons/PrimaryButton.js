import Button from "@mui/material/Button";
import React from "react";

const PrimaryButton = ({
  text = "Deafult",
  variant = "contained",
  onClick,
}) => {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      sx={{
        px: 4,
        py: 1.5,
        borderRadius: "25px",
        fontWeight: 600,
        backgroundColor: "#2d5546",
        color: "white",
        border: "1px solid #2d5546",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          color: "#333",
          border: "1px solid #2d5546",
          boxShadow: "none",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
