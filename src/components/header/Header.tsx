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
  Paper,
  Popover,
  Skeleton,
  TextField,
  Link,
} from "@mui/material";
import {
  Person,
  ArrowBack,
  ArrowForward,
  AccessTime,
  HelpOutline,
  SentimentVerySatisfiedSharp,
  AccountCircle,
  Search,
  Close,
  TipsAndUpdates,
  Numbers,
} from "@mui/icons-material";
import HeaderNotify from "../header-notify/HeaderNotify";
import SideBar from "../sidebar/SideBar";

function SearchDialog() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openDialog = Boolean(anchorEl);
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<Search />}
        className="search-button"
        onClick={handleClick}
      >
        Search xxx
      </Button>
      {openDialog && (
        <Popover
          sx={{ mt: "-10px" }}
          open={openDialog}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          elevation={3}
          PaperProps={{
            sx: { borderRadius: "7px" },
          }}
        >
          <Paper className="search-dialog">
            <Grid container sx={{ p: "10px 20px 5px" }}>
              <Grid xs={1} item className="flex-center pt-1">
                <Search />
              </Grid>
              <Grid xs={10} item>
                <TextField
                  className="search-input"
                  fullWidth
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  placeholder="Search for files, facts, figures, and stats"
                />
              </Grid>
              <Grid xs={1} item className="flex-end">
                <Close
                  onClick={handleClose}
                  sx={{ color: "#5a495c", "&:hover": { cursor: "pointer" } }}
                />
              </Grid>
            </Grid>
            <Divider className="mb-2" />
            <Box
              className="text-center"
              sx={{ bgcolor: "#e9ecef", py: "20px" }}
            >
              <Box className="content-center" py="5px">
                <TipsAndUpdates sx={{ color: "#e9c46a" }} />
                <Typography className="text-bold pl-2">
                  Search messages, files, and more
                </Typography>
              </Box>
              <Typography>
                Looking for a particular message, doc, or decision?
              </Typography>
              <Typography>
                If it happened in Slack, you can find it in search.
              </Typography>
            </Box>
            <Divider />
            <Box p="10px 40px">
              <Box pb="10px">
                <Typography variant="caption" className="text-grey-4">
                  From our Help Center
                </Typography>
              </Box>

              <Box className="flex-start full-width pb-2" alignContent="center">
                <HelpOutline fontSize="small" />
                <Link
                  href="#"
                  variant="subtitle2"
                  className="pl-1"
                  color="inherit"
                  underline="hover"
                >
                  <strong>How to Search in Slack </strong>Access the right
                  information instantly
                </Link>
              </Box>
              <Box className="flex-start full-width pb-2" alignContent="center">
                <HelpOutline fontSize="small" />
                <Link
                  href="#"
                  variant="subtitle2"
                  className="pl-1"
                  color="inherit"
                  underline="hover"
                >
                  <strong>Using Slack </strong>Learn how Slack works from top to
                  bottom
                </Link>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ bgcolor: "#e9ecef", p: "10px" }} className="text-end">
              <Typography variant="caption">
                Not the results you expected?{" "}
                <Link href="#" underline="hover">
                  Give feedback
                </Link>{" "}
                or{" "}
                <Link href="#" underline="hover">
                  Learn more
                </Link>
              </Typography>
            </Box>
          </Paper>
        </Popover>
      )}
    </>
  );
}

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
      <Button className="user-button user-button-text" fullWidth>
        <Numbers className="numbers-button" />
        <Typography variant="subtitle2" className="pl-1 text-bold">
          general
        </Typography>
      </Button>
      <Button className="user-button user-button-text" fullWidth>
        <Numbers className="numbers-button" />
        <Typography variant="subtitle2" className="text-bold pl-1">
          slack-clone-project
        </Typography>
      </Button>
      <Button className="user-button user-button-text" fullWidth>
        <Numbers className="numbers-button" />
        <Typography variant="subtitle2" className=" text-bold pl-1">
          slack-clone-git
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
    <Box display="flex">
      <AppBar position="fixed" elevation={0} className="header">
        <Toolbar className="tool-bar">
          <Grid alignItems="center" container>
            <Grid xs={2} display="flex" justifyContent="space-evenly" item>
              <IconButton sx={{ color: "#848484" }}>
                <ArrowBack fontSize="medium" />
              </IconButton>
              <IconButton>
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
              <SearchDialog />
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
                  <AccountCircle fontSize="large" />
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
      <SideBar />
    </Box>
  );
}
export default Header;
