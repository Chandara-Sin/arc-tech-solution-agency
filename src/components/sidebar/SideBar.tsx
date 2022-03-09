import React, { useState } from "react";
import "./SideBar.css";
import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  Typography,
  Paper,
  Box,
  Popover,
  Button,
  Link,
  Grid,
  Tooltip,
} from "@mui/material";
import {
  ArrowForwardIos,
  ArrowRight,
  BorderColorRounded,
  KeyboardArrowRight,
  MobileFriendly,
  MoreVert,
  PeopleAlt,
  Person,
  Notes,
  ForumRounded,
  AlternateEmail,
  BookmarkBorderRounded,
  ManageSearchRounded,
  LayersRounded,
  ContactsRounded,
  AppRegistrationRounded,
} from "@mui/icons-material";
import { channels, direstMessage } from "./example-data";
import { TooltipDetails } from "../header-notify/HeaderNotify";

function GroupBrowse() {
  return (
    <Paper className="group-section-card">
      <Box className="group-setting">
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <Notes fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              All unreads
            </Typography>
          </Box>
        </Button>
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <ForumRounded fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              All DMs
            </Typography>
          </Box>
        </Button>
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <AlternateEmail fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              Mentions and reactions
            </Typography>
          </Box>
        </Button>
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <BookmarkBorderRounded fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              Save items
            </Typography>
          </Box>
        </Button>
      </Box>
      <Divider />
      <Box className="group-setting">
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <ManageSearchRounded fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              Channel browser
            </Typography>
          </Box>
        </Button>
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <LayersRounded fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              File browser
            </Typography>
          </Box>
        </Button>
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <ContactsRounded fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              People & user groups
            </Typography>
          </Box>
        </Button>
        <Button className="user-button" fullWidth>
          <Box className="flex-start full-width" alignContent="center" pl={2}>
            <AppRegistrationRounded fontSize="small" />
            <Typography variant="subtitle2" className="pl-2">
              Apps
            </Typography>
          </Box>
        </Button>
      </Box>
      <Divider />
      <Box className="user-details">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Customize this list in your{" "}
            <Link href="#" underline="hover" color="inherit">
              preferences
            </Link>
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function GroupSetting() {
  return (
    <Paper className="group-section-card">
      <Grid container p="10px 0px">
        <Grid xs={3} item className="content-center">
          <Box className="group-name content-center">
            <Typography variant="h5" color="#fff">
              S
            </Typography>
          </Box>
        </Grid>
        <Grid xs={9} item alignSelf="center" justifyItems="center">
          <Grid display="flex" flexDirection="column">
            <Typography variant="subtitle2" className="text-bold">
              Slack
            </Typography>
            <Typography variant="caption">slack-ew2313.slack.com</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Box className="user-setting">
        <Button className="user-button user-button-text" fullWidth>
          <Typography variant="body2" align="left">
            Your work place is currently on the free version of Slack.{" "}
            <Link href="#" underline="hover" color="inherit">
              See plans
            </Link>
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-setting">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Invite people to Slack
          </Typography>
        </Button>
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Create a channel
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-setting">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Preferences
          </Typography>
        </Button>
        <TooltipDetails
          placement="right-start"
          title={
            <Paper className="user-card">
              <Box className="pl-4 pt-1">
                <Typography variant="caption" className="text-grey-4">
                  Settings
                </Typography>
              </Box>
              <Button className="user-button" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  Workspace settings
                </Typography>
              </Button>
              <Button className="user-button" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  Customize Slack
                </Typography>
              </Button>
              <Divider />
              <Box className="pl-4 pt-1">
                <Typography variant="caption" className="text-grey-4">
                  Administration
                </Typography>
              </Box>
              <Button className="user-button" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  Manage members
                </Typography>
              </Button>
              <Button className="user-button" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  Manage apps
                </Typography>
              </Button>
            </Paper>
          }
        >
          <Button className="user-button" fullWidth>
            <Box className="flex-between full-width" alignItems="center" pr={2}>
              <Typography variant="subtitle2" className="pl-4">
                Setting & administration
              </Typography>
              <ArrowForwardIos sx={{ fontSize: "0.6rem" }} />
            </Box>
          </Button>
        </TooltipDetails>
      </Box>
      <Divider />
      <TooltipDetails
        placement="right-start"
        title={
          <Paper className="user-card">
            <Button className="user-button" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Workflow Builder
              </Typography>
            </Button>
            <Button className="user-button" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Analytics
              </Typography>
            </Button>
          </Paper>
        }
      >
        <Box className="user-details">
          <Button className="user-button" fullWidth>
            <Box className="flex-between full-width" alignItems="center" pr={2}>
              <Typography variant="subtitle2" className="pl-4">
                Tools
              </Typography>
              <ArrowForwardIos sx={{ fontSize: "0.6rem" }} />
            </Box>
          </Button>
        </Box>
      </TooltipDetails>
      <Divider />
      <TooltipDetails
        placement="right-start"
        title={
          <Paper className="user-card">
            <Button className="user-button" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Sign in to another workspace
              </Typography>
            </Button>
            <Button className="user-button" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Create a new workspace
              </Typography>
            </Button>
            <Button className="user-button" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Find workspaces
              </Typography>
            </Button>
          </Paper>
        }
      >
        <Box className="user-details">
          <Button className="user-button" fullWidth>
            <Box className="flex-between full-width" alignItems="center" pr={2}>
              <Typography variant="subtitle2" className="pl-4">
                Add workspaces
              </Typography>
              <ArrowForwardIos sx={{ fontSize: "0.6rem" }} />
            </Box>
          </Button>
        </Box>
      </TooltipDetails>
      <Divider />
      <Box className="user-details">
        <Button className="user-button" fullWidth>
          <Box className="flex-between full-width" alignItems="center" pr={2}>
            <Typography variant="subtitle2" className="pl-4">
              Sign in on Mobile
            </Typography>
            <MobileFriendly sx={{ fontSize: "1rem" }} />
          </Box>
        </Button>
      </Box>
      <Divider />
      <Box className="user-details">
        <Button className="user-button" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Sign out of Slack
          </Typography>
        </Button>
      </Box>
    </Paper>
  );
}

function SideBar() {
  const [openChannels, setOpenChannels] = useState(true);
  const [openDirectMessage, setOpenDirectMessage] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuSelected, setMenuSelected] = useState<null | "setting" | "browse">(
    null
  );

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    menuName: "setting" | "browse"
  ) => {
    setMenuSelected(menuName);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setMenuSelected(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Drawer variant="permanent" className="sidebar">
      <Paper className="sidebar-card full-height">
        <List>
          <ListItem component="div" className="group-section" disablePadding>
            <ListItemButton
              className="sidebar-button"
              onClick={(event) => handleClick(event, "setting")}
            >
              <ListItemText
                primary="Slack"
                primaryTypographyProps={{
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: "bold",
                  variant: "subtitle1",
                }}
              />
              <KeyboardArrowRight className="group-section-icon" />
            </ListItemButton>
            <Tooltip arrow title="New Messages">
              <Box className="group-setting-button">
                <IconButton sx={{ color: "#4e1c4e", p: "6px 8px 8px" }}>
                  <BorderColorRounded fontSize="small" />
                </IconButton>
              </Box>
            </Tooltip>
          </ListItem>

          <ListItemButton className="p-0 mt-2">
            <Box className="sidebar-button full-width">
              <Box className="content-center" pl={2.5}>
                <PeopleAlt className="text-grey-2 pr-2" />
                <ListItemText primary="Slack Connect" className="text-grey-2" />
              </Box>
            </Box>
          </ListItemButton>

          <ListItemButton
            className="sidebar-browse p-0 pt-1"
            onClick={(event) => handleClick(event, "browse")}
          >
            <Box className="content-center" pl={2.5}>
              <MoreVert className="pr-2" />
              <ListItemText primary="Browse Slack" />
            </Box>
          </ListItemButton>

          {open && (
            <Popover
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
              {menuSelected === "setting" && <GroupSetting />}
              {menuSelected === "browse" && <GroupBrowse />}
            </Popover>
          )}

          {/* Channels */}
          <ListItemButton onClick={() => setOpenChannels(!openChannels)}>
            <ArrowRight
              sx={{
                opacity: 1,
                transform: openChannels ? "rotate(90deg)" : "rotate(0)",
                transition: "0.2s",
              }}
              className="text-grey-2 "
            />
            <ListItemText
              primary="Channels"
              primaryTypographyProps={{
                fontWeight: "bold",
                variant: "subtitle1",
              }}
              className="text-grey-2 pl-2"
            />
          </ListItemButton>
          {openChannels &&
            channels.map(({ title, isActive }, index) => (
              <ListItem button key={index}>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        variant="subtitle2"
                        className="text-bold pl-2"
                      >
                        <strong className="pr-2">#</strong> {title}
                      </Typography>
                    </>
                  }
                  className="text-grey-2"
                />
              </ListItem>
            ))}
          <ListItemButton
            onClick={() => setOpenDirectMessage(!openDirectMessage)}
          >
            <ArrowRight
              sx={{
                opacity: 1,
                transform: openDirectMessage ? "rotate(90deg)" : "rotate(0)",
                transition: "0.2s",
              }}
              className="text-grey-2 "
            />
            <ListItemText
              primary="Direct Message"
              primaryTypographyProps={{
                fontWeight: "bold",
                variant: "subtitle1",
              }}
              className="text-grey-2 pl-2"
            />
          </ListItemButton>
          {openDirectMessage &&
            direstMessage.map(({ title, isActive }, index) => (
              <ListItem button key={index}>
                <ListItemText
                  primary={
                    <Box
                      className="flex-start full-width pl-1"
                      alignContent="center"
                    >
                      <Person fontSize="small" />
                      <Typography
                        variant="subtitle2"
                        className="text-bold pl-2"
                      >
                        {title}
                      </Typography>
                    </Box>
                  }
                  className="text-grey-2"
                />
              </ListItem>
            ))}
        </List>
        <Divider />
      </Paper>
    </Drawer>
  );
}

export default SideBar;
