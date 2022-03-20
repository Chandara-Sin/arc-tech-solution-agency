import React, { useState } from "react";
import "./Message.css";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  Link,
  Paper,
  Popover,
  DialogTitle,
  Dialog,
  DialogContent,
} from "@mui/material";
import {
  CloseRounded,
  KeyboardArrowRightRounded,
  Person,
} from "@mui/icons-material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import CalendarPicker from "@mui/lab/CalendarPicker";

function MessageDate() {
  const [date, setDate] = useState<null | Date>(new Date());
  const [openDateDialog, setOpenDateDialog] = useState(false);

  const handleOpenDateDialog = () => {
    setOpenDateDialog(true);
  };

  const handleCloseDateDialog = () => {
    setOpenDateDialog(false);
  };

  return (
    <>
      <Paper className="message-date-card bg-grey">
        <Box className="d-flex flex-column justify-center" p="5px 0px 7px">
          <Typography variant="subtitle2" className="text-grey-4" pl={2.5}>
            Jump to...
          </Typography>
          <Button className="user-button flex-start" fullWidth>
            <Typography variant="body2" pl={2}>
              Most recent
            </Typography>
          </Button>
          <Button className="user-button flex-start" fullWidth>
            <Typography variant="body2" pl={2}>
              Last week
            </Typography>
          </Button>
          <Button className="user-button flex-start" fullWidth>
            <Typography variant="body2" pl={2}>
              Last month
            </Typography>
          </Button>
        </Box>
        <Divider />
        <Button
          className="user-button flex-start mt-1"
          fullWidth
          onClick={handleOpenDateDialog}
        >
          <Typography variant="body2" pl={2}>
            Jump to specific date
          </Typography>
        </Button>
      </Paper>
      <Dialog
        fullWidth={true}
        onClose={handleCloseDateDialog}
        scroll="paper"
        open={openDateDialog}
        PaperProps={{ sx: { borderRadius: "9px", maxWidth: "340px" } }}
      >
        <DialogTitle className="flex-between">
          <Typography variant="h6" className="text-bold">
            Jump to a specific date
          </Typography>
          <IconButton
            onClick={handleCloseDateDialog}
            className="dialog-close-button"
          >
            <CloseRounded />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CalendarPicker
              className="calender-picker"
              date={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
        </DialogContent>
      </Dialog>
    </>
  );
}

function Message() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMessageDate = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  return (
    <Box className="message-card">
      <Divider>
        <Button
          variant="outlined"
          endIcon={<KeyboardArrowRightRounded />}
          className="message-date-button text-transform-none"
          onClick={handleMessageDate}
        >
          Wednesday, March 16th
        </Button>
      </Divider>
      <Box className="message-details flex-start">
        <Box className="message-profile-card">
          <IconButton className="message-profile">
            <Person fontSize="large" />
          </IconButton>
        </Box>
        <Box className="d-flex flex-column">
          <Box>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              variant="subtitle2"
              className="text-bold"
            >
              cdsin68
            </Link>
            <Link
              href="#"
              underline="hover"
              color="inherit"
              variant="caption"
              className="text-grey-4 pl-1"
            >
              4:14 PM
            </Link>
          </Box>
          <Typography variant="subtitle2">What are you doing</Typography>
        </Box>
      </Box>
      <Popover
        sx={{
          mt: "5px",
        }}
        open={open}
        onClose={handleClosePopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: 100,
        }}
        elevation={2}
      >
        <MessageDate />
      </Popover>
    </Box>
  );
}

export default Message;
