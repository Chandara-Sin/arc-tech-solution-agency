import React, { useState } from "react";
import "./Header.css";
import { useAuth } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import {
  Divider,
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
  HelpOutline,
  SentimentVerySatisfiedSharp,
  AccountCircle,
  Close,
  TipsAndUpdates,
  HelpOutlineRounded,
  AccessTimeRounded,
  ArrowForwardRounded,
  ArrowBackRounded,
  KeyboardCommandKeyRounded,
  TuneRounded,
  SearchRounded,
} from "@mui/icons-material";
import Sidebar from "../sidebar/Sidebar";
import HeaderNotify from "../header-notify/HeaderNotify";
import TooltipShortcut from "../tooltip-shortcut/TooltipShortcut";
import { recentHistories } from "./example-data";

function SearchPopover() {
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
      <Box className="search-container">
        <TooltipShortcut
          hasArrow
          style={{ marginBlock: "-5px" }}
          tooltipContent={{
            title: {
              name: "Search xxx",
              style: { fontSize: "0.8rem", fontWeight: "bold" },
            },
            content: {
              shortcutKey: [
                {
                  icon: KeyboardCommandKeyRounded,
                },
                {
                  key: "G",
                  style: { marginLeft: "5px" },
                },
              ],
            },
          }}
        >
          <Button
            variant="outlined"
            startIcon={<SearchRounded />}
            className="search-button"
            onClick={handleClick}
            fullWidth
          >
            Search xxx
          </Button>
        </TooltipShortcut>
        <TooltipShortcut
          hasArrow
          style={{ marginBlock: "-5px" }}
          tooltipContent={{
            title: {
              name: "filter",
              style: { fontSize: "0.8rem", fontWeight: "bold" },
            },
          }}
        >
          <IconButton
            className="search-filter-icon text-grey-1"
          >
            <TuneRounded />
          </IconButton>
        </TooltipShortcut>
      </Box>
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
                <SearchRounded />
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
            <Divider />
            <Box
              className="text-center"
              sx={{ bgcolor: "rgb(242, 241, 241)", py: "20px" }}
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
            <Box sx={{ bgcolor: "rgb(242, 241, 241)", p: "10px" }} className="text-end">
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
      {recentHistories.map((value, index) => (
        <Button
          key={index}
          className="user-button flex-start user-button-text"
          fullWidth
        >
          <value.icon fontSize="small" />
          <Typography variant="subtitle2" className="text-bold pl-1">
            {value.item}
          </Typography>
        </Button>
      ))}
      <Box sx={{ p: "5px 80px 10px 20px " }}>
        {[...Array(4)].map((_, index) => (
          <Skeleton key={index} variant="text" className="mr-1 mb-1" />
        ))}
      </Box>
      <Divider />
      <Box className="user-details">
        <Button className="user-button flex-start" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Show more
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function UserCard() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const [userStatus, setUserStatus] = useState(true);
  const confirmLogout = () => {
    const next = () => navigate("/", { replace: true });
    signOut(next);
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
        <Button
          className="user-button flex-start"
          fullWidth
          onClick={() => setUserStatus(!userStatus)}
        >
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
      <Box className="user-setting d-flex flex-column justify-center">
        <Button className="user-button flex-start" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Profile
          </Typography>
        </Button>
        <Button className="user-button flex-start" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Preferences
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-details">
        <Button className="user-button flex-start" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Downloads
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-details">
        <Button
          className="user-button flex-start"
          onClick={confirmLogout}
          fullWidth
        >
          <Typography variant="subtitle2" className="pl-4">
            Sign out of xxx
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function Header() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuSelected, setMenuSelected] = useState<"history" | "user" | null>(
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
                <ArrowBackRounded fontSize="medium" />
              </IconButton>
              <IconButton className="header-button text-white">
                <ArrowForwardRounded fontSize="medium" />
              </IconButton>
              <TooltipShortcut
                hasArrow
                style={{ marginBlock: "-5px" }}
                tooltipContent={{
                  title: {
                    name: "History",
                    style: { fontSize: "0.8rem", fontWeight: "bold" },
                  },
                }}
              >
                <IconButton
                  className="header-button text-white"
                  onClick={(event) => handleClick(event, "history")}
                >
                  <AccessTimeRounded fontSize="medium" />
                </IconButton>
              </TooltipShortcut>
            </Grid>
            <Grid xs={8} item>
              <SearchPopover />
            </Grid>
            <Grid xs={2} display="flex" justifyContent="flex-end" item>
              <TooltipShortcut
                hasArrow
                style={{ marginBlock: "-5px" }}
                tooltipContent={{
                  title: {
                    name: "Help",
                    style: { fontSize: "0.8rem", fontWeight: "bold" },
                  },
                }}
              >
                <IconButton className="header-button text-white mr-3">
                  <HelpOutlineRounded fontSize="medium" />
                </IconButton>
              </TooltipShortcut>
              <TooltipShortcut
                hasArrow
                style={{ marginBlock: "-5px" }}
                tooltipContent={{
                  title: {
                    name: "Chandara",
                    style: { fontSize: "0.8rem", fontWeight: "bold" },
                  },
                }}
              >
                <IconButton
                  onClick={(event) => handleClick(event, "user")}
                  sx={{ p: "0px" }}
                  className="header-button text-white"
                >
                  <AccountCircle fontSize="large" />
                </IconButton>
              </TooltipShortcut>
            </Grid>
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
          </Grid>
        </Toolbar>
      </AppBar>
      <Sidebar />
    </Box>
  );
}
export default Header;
