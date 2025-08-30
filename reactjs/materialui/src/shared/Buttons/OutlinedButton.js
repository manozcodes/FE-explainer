import { Button } from "@mui/material";
import React from "react";

const OutlinedButton = ({ text }) => {
  return (
    <Button
      variant="outlined"
      sx={{
        borderColor: "white",
        color: "white",
        px: 4,
        py: 1.5,
        borderRadius: "25px",
        fontWeight: 600,
        "&:hover": {
          borderColor: "#f5f5f5",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default OutlinedButton;
