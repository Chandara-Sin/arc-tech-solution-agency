import React from "react";
import "./MainHeader.css";
import { Box, Link, Typography } from "@mui/material";

function MainHeader() {
  return (
    <header className="main-header full-width">
      <Box className="left-column"></Box>
      <Box className="center-column" p={3}>
        <img
          src={require("../../assets/image/Slack_RGB.png")}
          width="200px"
          alt="slack-logo"
        />
      </Box>
      <Box className="right-column">
        <Box className="header-sidelink">
          <Typography variant="caption">New to Slack?</Typography>
          <br />
          <Link href="#" variant="caption">
            Creat an account
          </Link>
        </Box>
      </Box>
    </header>
  );
}

export default MainHeader;
