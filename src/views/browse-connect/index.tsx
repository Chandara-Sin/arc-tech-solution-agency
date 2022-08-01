import React, { FC } from "react";
import "./BrowseConnect.css";
import { Box, Button, Paper, Typography } from "@mui/material";
import {
  AddRounded,
  BorderColorRounded,
  TipsAndUpdatesRounded,
} from "@mui/icons-material";

const BrowseConnect: FC = () => (
  <Paper className="browse-header-container" elevation={0}>
    <Box className="browse-header flex-between align-center">
      <Typography variant="body1" className="text-extra-bold pl-1">
        Slack Connect
      </Typography>
      <Button variant="outlined" className="browse-button text-transform-none">
        <Typography variant="body2" className="text-black text-bold">
          View Invitations
        </Typography>
      </Button>
    </Box>
    <Box className="browse-container align-center flex-between">
      <Box className="browse-content">
        <Typography variant="h4" className="text-bold">
          Work with people outside Test in Slack
        </Typography>
        <Typography variant="subtitle1" className="text-grey-6 mt-2">
          Use Slack Connect to collaborate securely with clients, vendors and
          partners.
        </Typography>
        <Button className="browse-content-button text-transform-none flex-center mt-2">
          <TipsAndUpdatesRounded fontSize="small" sx={{ color: "#f2cc8f" }} />
          <Typography className="text-black text-bold pl-1" variant="subtitle2">
            See how Slack Connect works
          </Typography>
        </Button>
      </Box>
      <Box p="5px 10px 15px 0px">
        <img
          src={require("../../assets/image/Slack_Connect.png")}
          width="300px"
          alt="slack-connect"
        />
      </Box>
    </Box>
    <Box className="flex-center" marginY="40px">
      <Typography className="text-bold">
        How do you want to work together?
      </Typography>
    </Box>
    <Box className="flex-center">
      <Button className="browse-sub-content-button text-transform-none flex-start mr-2">
        <BorderColorRounded className="browse-sub-content-icon text-grey-8 bg-grey-2" />
        <Box className="text-start ml-3">
          <Typography
            variant="subtitle1"
            sx={{ lineHeight: "1.4" }}
            className="text-black text-bold"
          >
            Start a direct message
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ lineHeight: "1.4" }}
            className="text-grey-6"
          >
            Talk one-on-one with anyone
          </Typography>
        </Box>
      </Button>
      <Button className="browse-sub-content-button text-transform-none flex-start ml-2">
        <AddRounded className="browse-sub-content-icon text-grey-8 bg-grey-2" />
        <Box className="text-start ml-3">
          <Typography
            variant="subtitle1"
            sx={{ lineHeight: "1.4" }}
            className="text-black text-bold"
          >
            Create a channel
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ lineHeight: "1.4" }}
            className="text-grey-6"
          >
            Work together with up to 250 countries
          </Typography>
        </Box>
      </Button>
    </Box>
  </Paper>
);

export default BrowseConnect;
