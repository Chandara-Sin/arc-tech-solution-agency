import React, { useState } from "react";
import "./ChannelDetailsDialog.css";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Tab,
  Typography,
} from "@mui/material";
import {
  CloseRounded,
  KeyboardArrowRightRounded,
  NotificationsNone,
  NumbersRounded,
  PhoneRounded,
  StarBorderRounded,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { IChannelDetailsDialogProps } from "./ChannelDetailsDialogType";
import TooltipShortcut from "../tooltip-shortcut/TooltipShortcut";

const tabs = [
  { tabName: "About", value: "about" },
  { tabName: "Member", value: "member" },
  { tabName: "Integration", value: "integration" },
  { tabName: "Settings", value: "settings" },
];

function ChannelDetailsDialog(props: IChannelDetailsDialogProps) {
  const { open, onClose } = props;
  const [tabSelected, setTabSelected] = useState("about");

  const handleTabChange = (event: React.SyntheticEvent, value: string) => {
    setTabSelected(value);
  };
  
  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      onClose={() => onClose(false)}
      scroll="paper"
      open={open}
      PaperProps={{ sx: { borderRadius: "8px" } }}
    >
      <DialogTitle className="channel-dialog-title">
        <Box className="flex-start align-center">
          <NumbersRounded />
          <Typography variant="h6" className="text-bold">
            general
          </Typography>
        </Box>
        <IconButton
          onClick={() => onClose(false)}
          className="dialog-close-button"
        >
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <DialogContent className="p-0">
        <Box className="flex-start align-center">
          <TooltipShortcut
            placement="top"
            hasArrow
            style={{ marginBlock: "-5px" }}
            tooltipContent={{
              title: {
                name: "Star Channel",
                style: { fontSize: "0.8rem", fontWeight: "bold" },
              },
            }}
          >
            <IconButton className="channel-star-button">
              <StarBorderRounded />
            </IconButton>
          </TooltipShortcut>
          <TooltipShortcut
            placement="top"
            hasArrow
            style={{ marginBlock: "-5px" }}
            tooltipContent={{
              title: {
                name: "You'll be notified about all messages sent to this channel",
                style: { fontSize: "0.8rem", fontWeight: "bold" },
              },
            }}
          >
            <Button
              variant="outlined"
              startIcon={<NotificationsNone className="channel-notify-icon" />}
              endIcon={
                <KeyboardArrowRightRounded className="channel-notify-icon" />
              }
              className="channel-notify-button text-transform-none mx-2 text-bold"
            >
              Get Notifications for All Messages
            </Button>
          </TooltipShortcut>
          <Button
            variant="outlined"
            startIcon={<PhoneRounded />}
            className="channel-phone-button text-transform-none"
            disabled
          >
            Start a Call
          </Button>
        </Box>
        <Box className="mt-2">
          <TabContext value={tabSelected}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange}>
                {tabs.map((item, index) => (
                  <Tab
                    key={index}
                    className="text-transform-none"
                    label={item.tabName}
                    value={item.value}
                  />
                ))}
              </TabList>
            </Box>
            <TabPanel value="about">About</TabPanel>
            <TabPanel value="member">Member</TabPanel>
            <TabPanel value="integration">Integration</TabPanel>
            <TabPanel value="settings">Settings</TabPanel>
          </TabContext>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default ChannelDetailsDialog;
