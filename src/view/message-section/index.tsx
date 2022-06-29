import React, { useState } from "react";
import "./MessageSection.css";
import { Box, Button, Paper, Typography } from "@mui/material";
import {
  AddRounded,
  KeyboardArrowRightRounded,
  NumbersRounded,
  PersonRounded,
} from "@mui/icons-material";
import TooltipShortcut from "../../components/tooltip-shortcut/TooltipShortcut";
import ChannelDetailsDialog from "../../components/channel-details-dialog/ChannelDetailsDialog";
import Message from "../../components/message/Message";

function ChannelDetails() {
  const [openChannelDetailsDialog, setOpenChannelDetailsDialog] =
    useState(false);

  return (
    <Paper className="channel-details flex-between align-center" elevation={0}>
      <TooltipShortcut
        style={{ marginBottom: "-5px" }}
        hasArrow
        tooltipContent={{
          title: {
            name: "Get channel details",
            style: { fontSize: "0.8rem" },
          },
        }}
      >
        <Button
          variant="text"
          className="text-transform-none channel-details-button"
          color="inherit"
          onClick={() => setOpenChannelDetailsDialog(true)}
        >
          <Box className="content-center">
            <NumbersRounded className="tooltip-shortcut-button" />
            <Typography className="text-bold">general</Typography>
            <KeyboardArrowRightRounded className="tooltip-shortcut-button " />
          </Box>
        </Button>
      </TooltipShortcut>
      <TooltipShortcut
        placement="bottom-end"
        style={{ marginBottom: "-5px" }}
        hasArrow
        tooltipContent={{
          title: {
            name: "View all members of this channel",
            style: { fontSize: "0.8rem" },
          },
        }}
      >
        <Button
          variant="outlined"
          className="member-details-button"
          startIcon={<PersonRounded className="member-details-icon" />}
          onClick={() => setOpenChannelDetailsDialog(true)}
        >
          12
        </Button>
      </TooltipShortcut>
      <ChannelDetailsDialog
        open={openChannelDetailsDialog}
        onClose={() => setOpenChannelDetailsDialog(false)}
      />
    </Paper>
  );
}

function ChannelBookmark() {
  return (
    <Paper className="channel-bookmark" elevation={0}>
      <Button
        variant="text"
        className="text-transform-none channel-details-button"
        color="inherit"
      >
        <Box className="content-center">
          <AddRounded className="tooltip-shortcut-button text-grey-4" />
          <Typography variant="subtitle2" className="text-grey-4">
            Add a bookmark
          </Typography>
        </Box>
      </Button>
    </Paper>
  );
}

function MessageSection() {
  return (
    <>
      <ChannelDetails />
      <ChannelBookmark />
      <Box className="message-display-card fill-height">
        <Message />
        <Box sx={{ mt: "150px" }}></Box>
      </Box>
    </>
  );
}

export default MessageSection;
