import { Box, Typography } from "@mui/material";
import React from "react";
import "./cart.css";
import CartItems from "./CartItems";

const MyCart = () => {
  return (
    <Box mx={10} my={10}>
      <Typography variant="h4" mb={6}>
        My Cart
      </Typography>
      <Box className="cart-container">
        <CartItems />
      </Box>
    </Box>
  );
};

export default MyCart;
