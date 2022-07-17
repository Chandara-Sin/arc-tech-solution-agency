import React, { useState } from "react";
import "./MainFooter.css";
import { Box, Button, Link, Popover, Typography } from "@mui/material";
import {
  KeyboardArrowDownRounded,
  LanguageOutlined,
} from "@mui/icons-material";
import { regionDetails } from "./main-footer-data";

function RegionDetails() {
  return (
    <Box className="region-details-card">
      <Typography className="text-bold mb-1" variant="subtitle2">
        Change region
      </Typography>
      <Typography className="text-medium mb-1" variant="subtitle2">
        Selecting a different region will change the language and content of
        Slack.com.
      </Typography>
      <Box className="d-flex">
        {regionDetails.map((value, index) => (
          <Box key={index} className="d-flex flex-column mr-4">
            <Typography className="text-bold mb-1" variant="subtitle2">
              {value.region}
            </Typography>
            {value.languages.map((item, index) => (
              <Link
                href="#"
                key={index}
                className="footer-link text-medium mb-1"
                underline="hover"
              >
                {item}
              </Link>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

function MainFooter() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClickPopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <>
      <Box className="main-footer-container d-flex flex-column align-center">
        <footer className="main-footer flex-center text-center full-width">
          <Link
            href="#"
            underline="hover"
            className="footer-link text-medium mb-1 mr-3"
          >
            Privacy & Terms
          </Link>
          <Link
            href="#"
            underline="hover"
            className="footer-link text-medium mb-1 mr-3"
          >
            Contact Us
          </Link>
          <Button
            className="footer-link footer-language-button bg-transpar text-transform-none mb-1 mr-3 p-0"
            variant="text"
            startIcon={<LanguageOutlined />}
            onClick={handleClickPopover}
          >
            <Typography className="text-medium">Change region</Typography>
            <KeyboardArrowDownRounded
              sx={{
                transform: open ? "rotate(-180deg)" : "rotate(0)",
                transition: "0.2s",
              }}
            />
          </Button>
        </footer>
      </Box>
      <Popover
        sx={{
          mt: "-5px",
        }}
        PaperProps={{ sx: { borderRadius: "8px" } }}
        open={open}
        onClose={() => setAnchorEl(null)}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        elevation={2}
      >
        <RegionDetails />
      </Popover>
    </>
  );
}

export default MainFooter;
