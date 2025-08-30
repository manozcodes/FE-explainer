import React from "react";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

const SocialMediaIcons = ({ socialMediaPlatforms }) => {
  const getSocialMediaIcon = (socialMediaName) => {
    switch (socialMediaName) {
      case "facebook":
        return <Facebook />;
      case "twitter":
        return <Twitter />;
      case "linkedin":
        return <LinkedIn />;
      case "instagram":
        return <Instagram />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ display: "flex", gap: 1 }}>
      {socialMediaPlatforms.map((platform) => (
        <IconButton
          key={platform}
          sx={{
            color: "white",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            },
          }}
          size="small"
        >
          {getSocialMediaIcon(platform)}
        </IconButton>
      ))}
    </Box>
  );
};

export default SocialMediaIcons;
