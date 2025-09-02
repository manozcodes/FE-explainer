import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const ProfileLayout = () => {
  const [savedProducts, setSavedProducts] = useState([
    {
      id: 1,
      name: "iPhone 15 Pro",
      description: "Latest Apple smartphone with advanced camera system",
      price: "$999.00",
      emoji: "📱",
    },
    {
      id: 2,
      name: 'MacBook Pro 16"',
      description: "Powerful laptop for professionals and creators",
      price: "$2,499.00",
      emoji: "💻",
    },
    {
      id: 3,
      name: "AirPods Pro",
      description: "Wireless earbuds with active noise cancellation",
      price: "$249.00",
      emoji: "🎧",
    },
    {
      id: 4,
      name: "AirPods Pro",
      description: "Wireless earbuds with active noise cancellation",
      price: "$249.00",
      emoji: "🎧",
    },
    {
      id: 5,
      name: "AirPods Pro",
      description: "Wireless earbuds with active noise cancellation",
      price: "$249.00",
      emoji: "🎧",
    },
  ]);

  const onRemoveItem = (id) => {
    setSavedProducts((prevSavedProducts) =>
      prevSavedProducts?.filter((product) => product.id !== id)
    );
  };

  return (
    <Box mx={28} my={5}>
      <Typography variant="h4">Profile</Typography>
      <Box sx={{ p: 3 }}>
        {/* Profile Header */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
          <Box
            sx={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#2d5546",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 3,
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            M
          </Box>
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{ fontWeight: 600, mb: 1 }}
            >
              Manoz
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              manoz@example.com
            </Typography>
          </Box>
        </Box>

        {/* Saved Products Section */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            My Saved Products
          </Typography>
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 3,
              backgroundColor: "#fafafa",
            }}
          >
            {savedProducts.map((product, index) => (
              <Box
                key={product.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: index < savedProducts.length - 1 ? 2 : 0,
                }}
              >
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#e0e0e0",
                    borderRadius: 1,
                    mr: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {product.emoji}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 500, mb: 0.5 }}>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", mb: 1 }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#2d5546", fontWeight: 600 }}
                  >
                    {product.price}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      borderColor: "#2d5546",
                      color: "#2d5546",
                      "&:hover": {
                        borderColor: "#2d5546",
                        backgroundColor: "rgba(45, 85, 70, 0.1)",
                      },
                    }}
                  >
                    View
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#2d5546",
                      "&:hover": {
                        backgroundColor: "#1e3a2e",
                      },
                    }}
                  >
                    Add to Cart
                  </Button>
                  <DeleteOutlineOutlinedIcon
                    sx={{
                      color: "#2d5546",
                      "&:hover": { color: "#1e3a2e", cursor: "pointer" },
                    }}
                    onClick={() => onRemoveItem(product.id)}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Change Password Section */}
        <Box>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Change Password
          </Typography>
          <Box
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: 2,
              p: 3,
              backgroundColor: "#fafafa",
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: "text.secondary", textAlign: "center", py: 4 }}
            >
              Change password functionality will be implemented here
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileLayout;
