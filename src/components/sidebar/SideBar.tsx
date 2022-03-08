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
  KeyboardArrowDown,
  MobileFriendly,
  MoreVert,
  PeopleAlt,
  Person,
} from "@mui/icons-material";
import { channels, direstMessage } from "./example-data";
import { TooltipDetails } from "../header-notify/HeaderNotify";

function GroupSection() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <>
      <ListItem component="div" className="group-section" disablePadding>
        <ListItemButton className="sidebar-button" onClick={handleClick}>
          <ListItemText
            primary="Slack"
            primaryTypographyProps={{
              color: "rgba(255,255,255,0.8)",
              fontWeight: "bold",
              variant: "subtitle1",
            }}
          />
          {open ? (
            <KeyboardArrowDown
              sx={{
                position: "absolute",
                left: "60px",
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1.2rem",
              }}
            />
          ) : (
            <ArrowForwardIos className="group-section-icon" />
          )}
        </ListItemButton>
        <Tooltip arrow title="New Messages">
          <Box className="group-setting-button">
            <IconButton sx={{ color: "#4e1c4e", p: "6px 8px 8px" }}>
              <BorderColorRounded fontSize="small" />
            </IconButton>
          </Box>
        </Tooltip>
      </ListItem>

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
                  <Typography variant="caption">
                    slack-ew2313.slack.com
                  </Typography>
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
                  <Box
                    className="flex-between full-width"
                    alignItems="center"
                    pr={2}
                  >
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
                  <Box
                    className="flex-between full-width"
                    alignItems="center"
                    pr={2}
                  >
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
                  <Box
                    className="flex-between full-width"
                    alignItems="center"
                    pr={2}
                  >
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
                <Box
                  className="flex-between full-width"
                  alignItems="center"
                  pr={2}
                >
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
        </Popover>
      )}
    </>
  );
}

function SideBar() {
  const [openChannels, setOpenChannels] = useState(true);
  const [openDirectMessage, setOpenDirectMessage] = useState(true);
  return (
    <Drawer variant="permanent" className="sidebar">
      <Paper className="sidebar-card full-height">
        <List>
          <GroupSection />
          <ListItemButton>
            <Box className="sidebar-button content-center full-width">
              <PeopleAlt className="text-grey-2 pr-2" />
              <ListItemText primary="Slack Connect" className="text-grey-2" />
            </Box>
          </ListItemButton>
          <ListItemButton>
            <MoreVert className="text-grey-2 pr-2" />
            <ListItemText primary="Browse Slack" className="text-grey-2" />
          </ListItemButton>

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
