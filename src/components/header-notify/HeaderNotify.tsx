import React from "react";
import "./HeaderNotify.css";
import {
  Box,
  Button,
  Divider,
  Paper,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
} from "@mui/material";
import { AccessTime, ArrowForwardIos } from "@mui/icons-material";
import TooltipShortcut from "../tooltip-shortcut/TooltipShortcut";

export const TooltipDetails = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  )
)({
  [`& .${tooltipClasses.tooltip}`]: {
    color: "#293241",
    backgroundColor: "#f8f8f8",
    padding: "0px",
    borderRadius: "8px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
});

const suggestNotifyTime = [
  "For 30 minutes",
  "For 1 hour",
  "For 2 hours",
  "Until Tomorrow",
  "Custom...",
];

function HeaderNotify() {
  return (
    <TooltipDetails
      placement="left-start"
      title={
        <Paper className="user-card">
          <Box className="flex-between">
            <Typography variant="caption" className="pl-4 text-grey-4" py="5px">
              Pause notification...
            </Typography>
            <TooltipShortcut
              placement="right"
              hasArrow
              style={{ marginBlock: "-5px" }}
              tooltipContent={{
                title: {
                  name: "Do Not Disturb allows you to pause your Slack notifications",
                  style: { fontSize: "0.8rem", fontWeight: "bold" },
                },
              }}
            >
              <AccessTime
                fontSize="small"
                sx={{ p: "3px 5px 0px", color: "#293241" }}
              />
            </TooltipShortcut>
          </Box>
          {suggestNotifyTime.map((value, index) => (
            <Button key={index} className="user-button flex-start" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                {value}
              </Typography>
            </Button>
          ))}
          <Divider />
          <Box className="user-details">
            <Button className="user-button flex-start" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Set a notification schedule
              </Typography>
            </Button>
          </Box>
        </Paper>
      }
    >
      <Button className="user-button flex-start" fullWidth>
        <Box className="flex-between full-width" alignItems="center" pr={2}>
          <Typography variant="subtitle2" className="pl-4">
            Pause Notification
          </Typography>
          <ArrowForwardIos sx={{ fontSize: "0.6rem" }} />
        </Box>
      </Button>
    </TooltipDetails>
  );
}

export default HeaderNotify;
