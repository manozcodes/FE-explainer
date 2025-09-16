import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { CircularProgress, Box, Typography } from "@mui/material";

const PublicRoute = ({ children, restricted = false }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Check authentication status from localStorage
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      const username = localStorage.getItem("username");

      if (authStatus === "true" && username) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
        gap={2}
      >
        <CircularProgress />
        <Typography variant="body1">Loading...</Typography>
      </Box>
    );
  }

  // If route is restricted and user is authenticated, redirect to home
  if (isAuthenticated) {
    const from = location.state?.from || "/";
    return <Navigate to={from} replace />;
  }

  return children;
};

export default PublicRoute;
