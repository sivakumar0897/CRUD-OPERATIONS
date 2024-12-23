import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py: 2, backgroundColor: "#f5f5f5" }}>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} User Management App. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
