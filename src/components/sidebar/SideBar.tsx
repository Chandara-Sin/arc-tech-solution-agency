import React, { Fragment, useState } from "react";
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
} from "@mui/material";
import {
  ArrowForwardIos,
  BorderColorRounded,
  MobileFriendly,
  MoreVert,
  PeopleAlt,
  Notes,
  ForumRounded,
  AlternateEmail,
  BookmarkBorderRounded,
  ManageSearchRounded,
  LayersRounded,
  ContactsRounded,
  AppRegistrationRounded,
  AddRounded,
  AccountCircleRounded,
  KeyboardArrowRightRounded,
  ArrowRightRounded,
  NumbersRounded,
} from "@mui/icons-material";
import { channels, directMessage } from "./example-data";
import { TooltipDetails } from "../header-notify/HeaderNotify";
import TooltipShortcut from "../tooltip-shortcut/TooltipShortcut";
import { ICardItem } from "../header/HeaderType";

const groupBrowseDetails: ICardItem[][] = [
  [
    { icon: Notes, item: "All unreads" },
    { icon: ForumRounded, item: "All DMs" },
    { icon: AlternateEmail, item: "Mentions and reactions" },
    { icon: BookmarkBorderRounded, item: "Save items" },
  ],
  [
    { icon: ManageSearchRounded, item: "Channel browser" },
    { icon: LayersRounded, item: "File browser" },
    { icon: ContactsRounded, item: "People & user groups" },
    { icon: AppRegistrationRounded, item: "Apps" },
  ],
];

function GroupBrowse() {
  return (
    <Paper className="group-section-card">
      {groupBrowseDetails.map((value, index) => (
        <Fragment key={index}>
          <Box className="group-setting">
            {value.map((browseDetails, index) => (
              <Button key={index} className="user-button flex-start" fullWidth>
                <Box
                  className="flex-start full-width"
                  alignContent="center"
                  pl={2}
                >
                  <browseDetails.icon fontSize="small" />
                  <Typography variant="subtitle2" className="pl-2">
                    {browseDetails.item}
                  </Typography>
                </Box>
              </Button>
            ))}
          </Box>
          <Divider />
        </Fragment>
      ))}
      <Divider />
      <Box className="user-details">
        <Button className="user-button flex-start" fullWidth>
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
      <Box className="user-setting d-flex flex-column justify-center">
        <Button className="user-button user-button-text flex-start" fullWidth>
          <Typography variant="body2" align="left">
            Your work place is currently on the free version of Slack.{" "}
            <Link href="#" underline="hover" color="inherit">
              See plans
            </Link>
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-setting d-flex flex-column justify-center">
        <Button className="user-button flex-start" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Invite people to Slack
          </Typography>
        </Button>
        <Button className="user-button flex-start" fullWidth>
          <Typography variant="subtitle2" className="pl-4">
            Create a channel
          </Typography>
        </Button>
      </Box>
      <Divider />
      <Box className="user-setting d-flex flex-column justify-center">
        <Button className="user-button flex-start" fullWidth>
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
              <Button className="user-button flex-start" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  Workspace settings
                </Typography>
              </Button>
              <Button className="user-button flex-start" fullWidth>
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
              <Button className="user-button flex-start" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  Manage members
                </Typography>
              </Button>
              <Button className="user-button flex-start" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  Manage apps
                </Typography>
              </Button>
            </Paper>
          }
        >
          <Button className="user-button flex-start" fullWidth>
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
            <Button className="user-button flex-start" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Workflow Builder
              </Typography>
            </Button>
            <Button className="user-button flex-start" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Analytics
              </Typography>
            </Button>
          </Paper>
        }
      >
        <Box className="user-details">
          <Button className="user-button flex-start" fullWidth>
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
            <Button className="user-button flex-start" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Sign in to another workspace
              </Typography>
            </Button>
            <Button className="user-button flex-start" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Create a new workspace
              </Typography>
            </Button>
            <Button className="user-button flex-start" fullWidth>
              <Typography variant="subtitle2" className="pl-4">
                Find workspaces
              </Typography>
            </Button>
          </Paper>
        }
      >
        <Box className="user-details">
          <Button className="user-button flex-start" fullWidth>
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
        <Button className="user-button flex-start" fullWidth>
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
        <Button className="user-button flex-start" fullWidth>
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
              sx={{ p: "10px 18px" }}
            >
              <ListItemText
                primary="Slack"
                primaryTypographyProps={{
                  variant: "body1",
                  fontWeight: "bold",
                }}
                className="text-grey-2"
              />
              <KeyboardArrowRightRounded
                className="group-section-icon"
                sx={{
                  transform:
                    menuSelected === "setting" ? "rotate(90deg)" : "rotate(0)",
                  transition: "0.2s",
                }}
              />
            </ListItemButton>
            <TooltipShortcut
              style={{ marginTop: "-5px" }}
              hasArrow
              tooltipContent={{
                title: {
                  name: "New message",
                  style: { fontSize: "0.9rem", fontWeight: "bold" },
                },
                content: {
                  shortcutKey: [
                    {
                      key: "commentKey",
                      style: { marginRight: "5px" },
                    },
                    {
                      key: "N",
                    },
                  ],
                },
              }}
            >
              <Box className="group-setting-button">
                <IconButton sx={{ color: "#4e1c4e", p: "6px 8px 8px" }}>
                  <BorderColorRounded fontSize="small" />
                </IconButton>
              </Box>
            </TooltipShortcut>
          </ListItem>
          <ListItemButton className="p-0 mt-2 sidebar-button">
            <Box className="content-center" pl={2.5}>
              <PeopleAlt className="text-grey-2 pr-2" />
              <ListItemText primary="Slack Connect" className="text-grey-2" />
            </Box>
          </ListItemButton>
          <ListItemButton
            className="sidebar-browse p-0 mt-2"
            onClick={(event) => handleClick(event, "browse")}
          >
            <Box className="content-center" pl={2.5}>
              <MoreVert className="pr-2" />
              <ListItemText primary="Browse Slack" />
            </Box>
          </ListItemButton>
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
          <ListItemButton
            className="p-0 sidebar-button mt-2"
            onClick={() => setOpenChannels(!openChannels)}
          >
            <Box className="content-center" pl={2.3}>
              <ArrowRightRounded
                sx={{
                  transform: openChannels ? "rotate(90deg)" : "rotate(0)",
                  transition: "0.2s",
                  fontSize: "1.8rem",
                }}
                className="text-grey-2"
              />
              <ListItemText
                primary="Channels"
                primaryTypographyProps={{
                  variant: "subtitle1",
                }}
                className="text-grey-2 pl-2"
              />
            </Box>
          </ListItemButton>
          {openChannels &&
            channels.map(({ title, isActive }, index) => (
              <ListItemButton className="p-0 sidebar-button my-0" key={index}>
                <Box className="d-flex align-center" pl={4.5}>
                  <NumbersRounded className="text-grey-2 numbers-button" />
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      variant: "subtitle1",
                    }}
                    className="text-grey-2 pl-2 m-0"
                  />
                </Box>
              </ListItemButton>
            ))}
          {openChannels && (
            <ListItemButton className="p-0 sidebar-button">
              <Box className="d-flex align-center" pl={4.2}>
                <IconButton className="add-button">
                  <AddRounded className="text-grey-2 numbers-button" />
                </IconButton>
                <ListItemText
                  primary="Add channels"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                  }}
                  className="text-grey-2 pl-2"
                />
              </Box>
            </ListItemButton>
          )}
          <ListItemButton
            className="p-0 sidebar-button mt-2"
            onClick={() => setOpenDirectMessage(!openDirectMessage)}
          >
            <Box className="content-center" pl={2.3}>
              <ArrowRightRounded
                sx={{
                  transform: openDirectMessage ? "rotate(90deg)" : "rotate(0)",
                  transition: "0.2s",
                  fontSize: "1.8rem",
                }}
                className="text-grey-2"
              />
              <ListItemText
                primary="Direct Message"
                primaryTypographyProps={{
                  variant: "subtitle1",
                }}
                className="text-grey-2 pl-2"
              />
            </Box>
          </ListItemButton>
          {openDirectMessage &&
            directMessage.map(({ title, isActive }, index) => (
              <ListItemButton className="p-0 sidebar-button my-0" key={index}>
                <Box className="d-flex align-center" pl={4.5}>
                  <AccountCircleRounded className="text-grey-2 numbers-button" />
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      variant: "subtitle1",
                    }}
                    className="text-grey-2 pl-2 m-0"
                  />
                </Box>
              </ListItemButton>
            ))}
          {openDirectMessage && (
            <ListItemButton className="p-0 sidebar-button">
              <Box className="d-flex align-center" pl={4.2}>
                <IconButton className="add-button">
                  <AddRounded className="text-grey-2 numbers-button" />
                </IconButton>
                <ListItemText
                  primary="Add teammates"
                  primaryTypographyProps={{
                    variant: "subtitle1",
                  }}
                  className="text-grey-2 pl-2"
                />
              </Box>
            </ListItemButton>
          )}
        </List>
        <Divider />
      </Paper>
    </Drawer>
  );
}

export default SideBar;
