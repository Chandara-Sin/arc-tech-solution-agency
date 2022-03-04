import React, { useState } from "react";
import "./Header.css";
import {
  Divider,
  Tooltip,
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Grid,
  InputBase,
  Paper,
  styled,
  Popover,
  Skeleton,
} from "@mui/material";
import {
  Person,
  ArrowBack,
  ArrowForward,
  AccessTime,
  HelpOutline,
  SentimentVerySatisfiedSharp,
} from "@mui/icons-material";
import HeaderNotify from "../header-notify/HeaderNotify";

const SearchInput = styled(InputBase)(() => ({
  "& .MuiInputBase-input": {
    borderRadius: 6,
    backgroundColor: "#5a495c",
    fontSize: 16,
    height: "6px",
    width: "95vh",
    padding: "10px 12px",
    color: "#fff",
    "&:hover": {
      boxShadow: "#ced4da 0 0 0 1px",
    },
  },
}));

function UserHistory() {
  return (
    <Paper className="user-card">
      <Typography variant="caption" className="pl-4 text-grey-4" py="5px">
        Recent
      </Typography>
      <Button className="user-button" fullWidth>
        <Box className="flex-start full-width" alignContent="center" pl={2}>
          <HelpOutline fontSize="small" />
          <Typography variant="subtitle2" className="text-bold pl-1">
            Help
          </Typography>
        </Box>
      </Button>
      <Button className="user-button" fullWidth>
        <Box className="flex-start full-width" alignContent="center" pl={2}>
          <Person fontSize="small" />
          <Typography variant="subtitle2" className="text-bold pl-1">
            Chandara (you)
          </Typography>
        </Box>
      </Button>
      <Button className="user-button" fullWidth>
        <Typography variant="subtitle2" className="pl-4 text-bold">
          <strong className="pr-2">#</strong> general
        </Typography>
      </Button>
      <Button className="user-button" fullWidth>
        <Typography variant="subtitle2" className="text-bold pl-4">
          <strong className="text-bold pr-2">#</strong> slack-clone-project
        </Typography>
      </Button>
      <Button className="user-button" fullWidth>
        <Typography variant="subtitle2" className=" text-bold pl-4">
          <strong className="pr-2">#</strong> slack-clone-git
        </Typography>
      </Button>
      <Box sx={{ p: "0px 80px 10px 20px " }}>
        <Skeleton variant="text" className="mr-1" />
        <Skeleton variant="text" className="mr-1" />
        <Skeleton variant="text" className="mr-1" />
        <Skeleton variant="text" className="mr-1" />
      </Box>
      <Divider />
      <Box className="user-details">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Show more
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function UserCard() {
  const [userStatus, setUserStatus] = useState<boolean>(true);
  const handleUserStatus = () => {
    setUserStatus(!userStatus);
  };
  return (
    <Paper className="user-card">
      <Grid container>
        <Grid xs={3} item>
          <Person className="user-profile-icon" />
        </Grid>
        <Grid xs={3} item alignSelf="center" justifyItems="center">
          <Grid display="flex" flexDirection="column">
            <Typography variant="subtitle2" className="text-bold">
              Chandara
            </Typography>
            <Typography variant="subtitle2">
              {userStatus ? "Active" : "Away"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Box className="user-details" p="5px 20px">
        <Button
          variant="outlined"
          className="user-status-button"
          startIcon={<SentimentVerySatisfiedSharp />}
          fullWidth
        >
          <Typography variant="subtitle2">Update your status</Typography>
        </Button>
      </Box>
      <Box className="user-profile">
        <Button className="user-button" fullWidth onClick={handleUserStatus}>
          <Typography variant="subtitle2" className="pl-4">
            Set yourself as
            <span className="text-bold">
              {userStatus ? " away" : " active"}
            </span>
          </Typography>
        </Button>
        <HeaderNotify />
      </Box>
      <Divider />
      <Box className="user-setting">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Profile
          </Typography>
        </Button>
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Preferences
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-details">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Downloads
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-details">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Sign out of xxx
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuSelected, setMenuSelected] = useState<null | "history" | "user">(
    null
  );

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    menuName: "history" | "user"
  ) => {
    setAnchorEl(event.currentTarget);
    setMenuSelected(menuName);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuSelected(null);
  };

  const open = Boolean(anchorEl);

  return (
    <AppBar position="static" elevation={0} className="header">
      <Toolbar className="tool-bar">
        <Grid alignItems="center" container>
          <Grid xs={2} display="flex" justifyContent="space-evenly" item>
            <IconButton sx={{ p: "0px" }}>
              <ArrowBack fontSize="medium" />
            </IconButton>
            <IconButton sx={{ p: "0px" }}>
              <ArrowForward fontSize="medium" />
            </IconButton>
            <Tooltip
              title="History"
              arrow
              onClick={(event) => handleClick(event, "history")}
            >
              <IconButton sx={{ p: "0px" }}>
                <AccessTime fontSize="medium" />
              </IconButton>
            </Tooltip>
          </Grid>

          <Grid xs={8} item>
            <SearchInput placeholder="Search" />
          </Grid>

          <Grid xs={2} display="flex" justifyContent="flex-end" item>
            <Tooltip title="Help" arrow>
              <IconButton sx={{ color: "#ffffff", px: "20px" }}>
                <HelpOutline fontSize="medium" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Chandara" arrow>
              <IconButton
                onClick={(event) => handleClick(event, "user")}
                sx={{ color: "#ffffff", p: "0px" }}
              >
                <Person fontSize="large" />
              </IconButton>
            </Tooltip>
          </Grid>

          {menuSelected && (
            <Popover
              sx={{ mt: "15px" }}
              open={open}
              onClose={handleClose}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              elevation={3}
            >
              {menuSelected === "history" && <UserHistory />}
              {menuSelected === "user" && <UserCard />}
            </Popover>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
