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
            <Tooltip
              placement="bottom"
              title="Do Not Disturb allows you to pause your Slack notifications"
              arrow
            >
              <AccessTime
                fontSize="small"
                sx={{ p: "3px 5px 0px", color: "#293241" }}
              />
            </Tooltip>
          </Box>
          <Button className="user-button" fullWidth>
            <Typography variant="subtitle2" className="pl-4">
              For 30 minutes
            </Typography>
          </Button>
          <Button className="user-button" fullWidth>
            <Typography variant="subtitle2" className="pl-4">
              For 1 hour
            </Typography>
          </Button>
          <Button className="user-button" fullWidth>
            <Typography variant="subtitle2" className="pl-4">
              For 2 hours
            </Typography>
          </Button>
          <Button className="user-button" fullWidth>
            <Typography variant="subtitle2" className="pl-4">
              Until Tomorrow
            </Typography>
          </Button>
          <Button className="user-button" fullWidth>
            <Typography variant="subtitle2" className="pl-4">
              Custom...
            </Typography>
          </Button>
          <Divider />
          <Box className="user-details">
            <Button className="user-button" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Set a notification schedule
              </Typography>
            </Button>
          </Box>
        </Paper>
      }
    >
      <Button className="user-button" fullWidth>
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
