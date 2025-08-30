import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SecondaryButton, OutlinedButton } from "../../shared/Buttons";
import SocialMediaIcons from "../../shared/Icons/SocialMediaIcons";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const socialMediaPlatforms = ["facebook", "twitter", "linkedin", "instagram"];

  const entityTypes = [
    "Knowledge base",
    "Security",
    "Privacy Policy",
    "Partners",
    "About us",
    "FAQs",
  ];

  const services = [
    "Contact Us",
    "Press",
    "Payroll",
    "Library",
    "Blog",
    "Help Center",
  ];

  const resources = [
    "Pricing",
    "FAQs",
    "Contact Support",
    "Privacy Policy",
    "Terms",
  ];

  const support = [
    "Contact",
    "Affiliates",
    "Sitemap",
    "Cancellation Policy",
    "Pricing",
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2d5546",
        color: "white",
        py: 6,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        {/* Main CTA Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 6,
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 3 : 0,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.8rem", md: "2.5rem" },
              maxWidth: { xs: "100%", md: "60%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Start your business today for $0+ state fees.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <SecondaryButton text="Get Started" />
            <OutlinedButton text="Contact Sales" />
          </Box>
        </Box>

        {/* Footer Links Section */}
        <Grid container spacing={4}>
          {/* Company Info Column */}
          <Grid item xs={12} md={3}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  fontSize: "1.2rem",
                }}
              >
                furni.shop
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  lineHeight: 1.6,
                  mb: 3,
                }}
              >
                Opsin seamlessly connects your members with the community
                resources.
              </Typography>

              {/* Social Icons */}
              <SocialMediaIcons socialMediaPlatforms={socialMediaPlatforms} />
            </Box>
          </Grid>

          {/* Entity Types Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Entity types
            </Typography>
            <List dense sx={{ p: 0 }}>
              {entityTypes.map((item, index) => (
                <ListItem key={index} sx={{ p: 0, mb: 0.5 }}>
                  <ListItemText
                    primary={item}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.875rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Services Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Services
            </Typography>
            <List dense sx={{ p: 0 }}>
              {services.map((item, index) => (
                <ListItem key={index} sx={{ p: 0, mb: 0.5 }}>
                  <ListItemText
                    primary={item}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.875rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Resources Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Resources
            </Typography>
            <List dense sx={{ p: 0 }}>
              {resources.map((item, index) => (
                <ListItem key={index} sx={{ p: 0, mb: 0.5 }}>
                  <ListItemText
                    primary={item}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.875rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Support Column */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontSize: "1rem",
              }}
            >
              Support
            </Typography>
            <List dense sx={{ p: 0 }}>
              {support.map((item, index) => (
                <ListItem key={index} sx={{ p: 0, mb: 0.5 }}>
                  <ListItemText
                    primary={item}
                    sx={{
                      "& .MuiListItemText-primary": {
                        color: "rgba(255, 255, 255, 0.8)",
                        fontSize: "0.875rem",
                        cursor: "pointer",
                        "&:hover": {
                          color: "white",
                        },
                      },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
