import React, { Fragment, useState } from "react";
import "./Sidebar.css";
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
  AddRounded,
  AccountCircleRounded,
  KeyboardArrowRightRounded,
  ArrowRightRounded,
  NumbersRounded,
  KeyboardCommandKeyRounded,
} from "@mui/icons-material";
import TooltipShortcut from "../tooltip-shortcut/TooltipShortcut";
import TooltipDetails from "../tooltip-details/TooltipDetails";
import { channels, directMessage } from "./example-data";
import {
  groupBrowseDetails,
  settings,
  tools,
  workspaces,
} from "./sidebar-data";

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
              {settings.map((item, index) => (
                <Fragment key={index}>
                  <Box className="pl-4 pt-1">
                    <Typography variant="caption" className="text-grey-4">
                      {item.caption}
                    </Typography>
                  </Box>
                  {item.details.map((value, index) => (
                    <Button
                      key={index}
                      className="user-button flex-start"
                      fullWidth
                    >
                      <Typography variant="subtitle2" className="pl-4">
                        {value}
                      </Typography>
                    </Button>
                  ))}
                  {index !== settings.length - 1 && <Divider />}
                </Fragment>
              ))}
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
            {tools.details.map((value, index) => (
              <Button key={index} className="user-button flex-start" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  {value}
                </Typography>
              </Button>
            ))}
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
            {workspaces.details.map((value, index) => (
              <Button key={index} className="user-button flex-start" fullWidth>
                <Typography variant="subtitle2" className="pl-4">
                  {value}
                </Typography>
              </Button>
            ))}
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

function Sidebar() {
  const [openChannels, setOpenChannels] = useState(true);
  const [openDirectMessage, setOpenDirectMessage] = useState(true);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuSelected, setMenuSelected] = useState<"setting" | "browse" | null>(
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
              className="sidebar-group"
              onClick={(event) => handleClick(event, "setting")}
            >
              <ListItemText
                primary="Slack"
                primaryTypographyProps={{
                  className: "sidebar-group-text text-extra-bold",
                }}
                className="text-grey-2"
              />
              <KeyboardArrowRightRounded
                className="group-section-icon"
                sx={{
                  transform:
                    menuSelected === "setting" ? "rotate(90deg)" : "rotate(0)",
                  transition: "0.2s",
                  p:
                    menuSelected === "setting"
                      ? "0px 0px 12px 5px"
                      : "4px 0px 0px 10px",
                }}
              />
            </ListItemButton>
            <TooltipShortcut
              style={{ marginTop: "-5px" }}
              hasArrow
              tooltipContent={{
                title: {
                  name: "new message",
                  style: { fontSize: "0.9rem", fontWeight: "bold" },
                },
                content: {
                  shortcutKey: [
                    {
                      icon: KeyboardCommandKeyRounded,
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
          <ListItemButton className="sidebar-browse p-0 mt-2">
            <Box className="content-center" pl={2.5}>
              <PeopleAlt
                sx={{
                  fontSize: "1.5rem",
                }}
                className="text-grey-2 pr-2"
              />
              <ListItemText
                primary="Slack Connect"
                primaryTypographyProps={{
                  className: "sidebar-menu",
                }}
                className="text-grey-2"
              />
            </Box>
          </ListItemButton>
          <ListItem
            component="div"
            sx={{
              "&.MuiListItem-root": {
                paddingBottom: "10px",
                borderBottom: "0.8px solid rgba(255, 255, 255, 0.2)",
              },
            }}
            disablePadding
          >
            <ListItemButton
              className="sidebar-browse p-0 mt-2"
              onClick={(event) => handleClick(event, "browse")}
            >
              <Box className="content-center" pl={2.5}>
                <MoreVert
                  sx={{
                    fontSize: "1.5rem",
                  }}
                  className="text-grey-2 pr-1"
                />
                <ListItemText
                  primary="Browse Slack"
                  primaryTypographyProps={{
                    className: "sidebar-menu",
                  }}
                  className="text-grey-2"
                />
              </Box>
            </ListItemButton>
          </ListItem>
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
            className="p-0 mt-2"
            onClick={() => setOpenChannels(!openChannels)}
          >
            <Box className="content-center" pl={2}>
              <ArrowRightRounded
                sx={{
                  transform: openChannels ? "rotate(90deg)" : "rotate(0)",
                  transition: "0.2s",
                  fontSize: "1.7rem",
                }}
                className="text-grey-2"
              />
              <ListItemText
                primary="Channels"
                primaryTypographyProps={{
                  className: "sidebar-menu",
                }}
                className="text-grey-2 pl-1"
              />
            </Box>
          </ListItemButton>
          {openChannels &&
            channels.map(({ title, isActive }, index) => (
              <ListItemButton className="sidebar-button my-1" key={index}>
                <Box className="d-flex align-center" pl={4.5}>
                  <NumbersRounded className="text-grey-2 numbers-button" />
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      className: "sidebar-menu",
                    }}
                    className="text-grey-2 pl-2 m-0"
                  />
                </Box>
              </ListItemButton>
            ))}
          {openChannels && (
            <ListItemButton className="sidebar-button my-1">
              <Box className="d-flex align-center" pl={4.2}>
                <IconButton className="add-button">
                  <AddRounded className="text-grey-2 numbers-button" />
                </IconButton>
                <ListItemText
                  primary="Add channels"
                  primaryTypographyProps={{
                    className: "sidebar-menu",
                  }}
                  className="text-grey-2 pl-2 m-0"
                />
              </Box>
            </ListItemButton>
          )}
          <ListItemButton
            className="p-0 mt-2"
            onClick={() => setOpenDirectMessage(!openDirectMessage)}
          >
            <Box className="content-center" pl={2}>
              <ArrowRightRounded
                sx={{
                  transform: openDirectMessage ? "rotate(90deg)" : "rotate(0)",
                  transition: "0.2s",
                  fontSize: "1.7rem",
                }}
                className="text-grey-2"
              />
              <ListItemText
                primary="Direct messages"
                primaryTypographyProps={{
                  className: "sidebar-menu",
                }}
                className="text-grey-2 pl-1"
              />
            </Box>
          </ListItemButton>
          {openDirectMessage &&
            directMessage.map(({ title, isActive }, index) => (
              <ListItemButton className="p-0 sidebar-button my-1" key={index}>
                <Box className="d-flex align-center" pl={4.5}>
                  <AccountCircleRounded className="text-grey-2 numbers-button" />
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      className: "sidebar-menu",
                    }}
                    className="text-grey-2 pl-2 m-0"
                  />
                </Box>
              </ListItemButton>
            ))}
          {openDirectMessage && (
            <ListItemButton className="p-0 sidebar-button my-1">
              <Box className="d-flex align-center" pl={4.2}>
                <IconButton className="add-button">
                  <AddRounded className="text-grey-2 numbers-button" />
                </IconButton>
                <ListItemText
                  primary="Add teammates"
                  primaryTypographyProps={{
                    className: "sidebar-menu",
                  }}
                  className="text-grey-2 pl-2 m-0"
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

export default Sidebar;
