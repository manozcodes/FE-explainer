import Button from "@mui/material/Button";
import React from "react";

const SecondaryButton = ({
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
        backgroundColor: "white",
        color: "#2e5546",
        border: "1px solid white",
      }}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
