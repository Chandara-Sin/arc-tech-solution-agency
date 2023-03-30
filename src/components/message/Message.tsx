import React, { FC, useState } from "react";
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
import dayjs, { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";

const suggestMessageDate = ["Most recent", "Last week", "Last month"];

const MessageDate: FC = () => {
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [openDateDialog, setOpenDateDialog] = useState(false);
  return (
    <>
      <Paper className="message-date-card bg-grey">
        <Box className="d-flex flex-column justify-center" p="5px 0px 7px">
          <Typography variant="subtitle2" className="text-grey-4" pl={2.5}>
            Jump to...
          </Typography>
          {suggestMessageDate.map((value, index) => (
            <Button key={index} className="user-button flex-start" fullWidth>
              <Typography variant="body2" pl={2}>
                {value}
              </Typography>
            </Button>
          ))}
        </Box>
        <Divider />
        <Button
          className="user-button flex-start mt-1"
          fullWidth
          onClick={() => setOpenDateDialog(true)}
        >
          <Typography variant="body2" pl={2}>
            Jump to specific date
          </Typography>
        </Button>
      </Paper>
      <Dialog
        fullWidth={true}
        onClose={() => setOpenDateDialog(false)}
        scroll="paper"
        open={openDateDialog}
        PaperProps={{ sx: { borderRadius: "9px", maxWidth: "340px" } }}
      >
        <DialogTitle variant="h6" className="flex-between text-bold">
          Jump to a specific date
          <IconButton
            onClick={() => setOpenDateDialog(false)}
            className="dialog-close-button"
          >
            <CloseRounded />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ height: "320px" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              className="calender-picker"
              value={date}
              onChange={(newDate) => setDate(newDate)}
            />
          </LocalizationProvider>
        </DialogContent>
      </Dialog>
    </>
  );
};

function Message() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleMessageDate = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const open = !!anchorEl;
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
        onClose={() => setAnchorEl(null)}
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
