import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import NorthOutlinedIcon from "@mui/icons-material/NorthOutlined";
import SouthOutlinedIcon from "@mui/icons-material/SouthOutlined";

const ProductFilter = () => {
  const [category, setCategory] = useState(10);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  console.log({ category });

  return (
    <Box
      sx={{ display: "flex", gap: "10px", justifyContent: "flex-end", mb: 3 }}
    >
      <Button
        variant="contained"
        color="primary"
        startIcon={<NorthOutlinedIcon />}
      >
        Price: Low to High
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<SouthOutlinedIcon />}
      >
        Price: High to Low
      </Button>
      <FormControl>
        <InputLabel id="demo-simple-select-label">
          Search by Category
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Search by Category"
          onChange={handleChange}
          sx={{ width: 250 }}
        >
          <MenuItem value={10}>Electronics</MenuItem>
          <MenuItem value={20}>Wearables</MenuItem>
          <MenuItem value={30}>Clothing</MenuItem>
          <MenuItem value={50}>Gaming</MenuItem>
          <MenuItem value={60}>Fitness</MenuItem>
          <MenuItem value={70}>Accessories</MenuItem>
          <MenuItem value={80}>Kitchen</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default ProductFilter;
