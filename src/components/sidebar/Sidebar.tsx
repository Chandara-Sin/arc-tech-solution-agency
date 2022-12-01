import React, { FC, Fragment, useState } from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import TooltipShortcut from "../tooltip-shortcut/TooltipShortcut";
import TooltipDetails from "../tooltip-details/TooltipDetails";
import { IMenuList } from "./SidebarType";
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
  Collapse,
} from "@mui/material";
import {
  ArrowForwardIos,
  BorderColorRounded,
  MobileFriendly,
  AddRounded,
  KeyboardArrowRightRounded,
  ArrowRightRounded,
  KeyboardCommandKeyRounded,
  MoreVertRounded,
} from "@mui/icons-material";
import { allMenu } from "./menu-list";
import {
  groupBrowseDetails,
  settings,
  tools,
  workspaces,
} from "./sidebar-data";

const GroupBrowse: FC = () => (
  <Paper className="group-section-card">
    {groupBrowseDetails.map((browseDetailsList, index) => (
      <Fragment key={index}>
        <Box className="group-setting">
          {browseDetailsList.map(({ icon: Icon, item }, index) => (
            <Button key={index} className="user-button flex-start" fullWidth>
              <Box
                className="flex-start full-width"
                alignContent="center"
                pl={2}
              >
                <Icon fontSize="small" />
                <Typography variant="subtitle2" className="pl-2">
                  {item}
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
          <span className="text-primary">preferences</span>
        </Typography>
      </Button>
    </Box>
  </Paper>
);

const GroupSetting: FC = () => (
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
            {settings.map(({ caption, details }, index) => (
              <Fragment key={index}>
                <Box className="pl-4 pt-1">
                  <Typography variant="caption" className="text-grey-4">
                    {caption}
                  </Typography>
                </Box>
                {details.map((value, index) => (
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

function Sidebar() {
  const navigate = useNavigate();
  const [menus, setMenus] = useState<IMenuList>(allMenu);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuSelected, setMenuSelected] = useState<"setting" | "browse" | null>(
    null
  );

  const handleMenuClick = (menu: string, menuIndex: number, path: string) => {
    menu === "browse"
      ? setMenus((prevState: IMenuList) => ({
          ...prevState,
          browse: prevState.browse.map((value, index) => ({
            ...value,
            isActive: index === menuIndex,
          })),
        }))
      : menu === "channels"
      ? setMenus((prevState: IMenuList) => ({
          ...prevState,
          channels: {
            ...prevState.channels,
            subMenu: prevState.channels.subMenu.map((value, index) => ({
              ...value,
              isActive: index === menuIndex,
            })),
          },
        }))
      : setMenus((prevState: IMenuList) => ({
          ...prevState,
          directMessage: {
            ...prevState.directMessage,
            subMenu: prevState.directMessage.subMenu.map((value, index) => ({
              ...value,
              isActive: index === menuIndex,
            })),
          },
        }));
    navigate(path);
  };

  const handleMenuExpand = (menu: string) => {
    setMenus((prevState: IMenuList) =>
      menu === "channel"
        ? {
            ...prevState,
            channels: {
              ...prevState.channels,
              isExpanded: !prevState.channels.isExpanded,
            },
          }
        : {
            ...prevState,
            directMessage: {
              ...prevState.directMessage,
              isExpanded: !prevState.directMessage.isExpanded,
            },
          }
    );
  };

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
  const open = !!anchorEl;

  return (
    <>
      <Drawer variant="permanent" className="sidebar">
        <Paper className="sidebar-card full-height">
          <List>
            <ListItem
              component="div"
              className="group-section mb-2"
              disablePadding
            >
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
                      menuSelected === "setting"
                        ? "rotate(90deg)"
                        : "rotate(0)",
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
            {menus.browse.map(({ icon: Icon, path, title }, index) => (
              <ListItemButton
                key={index}
                className="sidebar-browse p-0"
                onClick={() => handleMenuClick("browse", index, path)}
              >
                <Box className="content-center" pl={2}>
                  <Icon
                    sx={{
                      fontSize: "1.5rem",
                    }}
                    className="text-grey-2 pr-2"
                  />
                  <ListItemText
                    primary={title}
                    primaryTypographyProps={{
                      className: "sidebar-menu",
                    }}
                    className="text-grey-2"
                  />
                </Box>
              </ListItemButton>
            ))}
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
                className="sidebar-browse p-0"
                onClick={(event) => handleClick(event, "browse")}
              >
                <Box className="content-center" pl={2}>
                  <MoreVertRounded
                    sx={{
                      fontSize: "1.5rem",
                    }}
                    className="text-grey-2 pr-2"
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
            <Box className="d-flex align-center justify-space-between mt-2">
              <ListItemButton
                className="section-options p-0"
                onClick={() => handleMenuExpand("channel")}
              >
                <Box className="content-center" pl={2}>
                  <ArrowRightRounded
                    sx={{
                      transform: menus.channels.isExpanded
                        ? "rotate(90deg)"
                        : "rotate(0)",
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
              <Box className="options context-center" pr={2}>
                <TooltipShortcut
                  placement="top"
                  hasArrow
                  style={{ marginBlock: "-5px" }}
                  tooltipContent={{
                    title: {
                      name: "sections options",
                      style: {
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      },
                    },
                  }}
                >
                  <IconButton className="text-grey-2" sx={{ p: "2.5px" }}>
                    <MoreVertRounded fontSize="small" />
                  </IconButton>
                </TooltipShortcut>
                <TooltipShortcut
                  placement="top"
                  hasArrow
                  style={{ marginBlock: "-5px" }}
                  tooltipContent={{
                    title: {
                      name: "add channels",
                      style: {
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      },
                    },
                  }}
                >
                  <IconButton className="text-grey-2" sx={{ p: "2.5px" }}>
                    <AddRounded fontSize="small" />
                  </IconButton>
                </TooltipShortcut>
              </Box>
            </Box>
            {menus.channels.isExpanded && (
              <Collapse
                in={menus.channels.isExpanded}
                timeout="auto"
                unmountOnExit
              >
                {menus.channels.subMenu.map(
                  ({ icon: Icon, path, title }, index) => (
                    <ListItemButton
                      className="sidebar-button my-1"
                      key={index}
                      onClick={() => handleMenuClick("channel", index, path)}
                    >
                      <Box className="d-flex align-center" pl={4.5}>
                        <Icon className="text-grey-2 numbers-button" />
                        <ListItemText
                          primary={title}
                          primaryTypographyProps={{
                            className: "sidebar-menu",
                          }}
                          className="text-grey-2 pl-2 m-0"
                        />
                      </Box>
                    </ListItemButton>
                  )
                )}
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
              </Collapse>
            )}
            <Box className="d-flex align-center justify-space-between mt-2">
              <ListItemButton
                className="section-options p-0"
                onClick={() => handleMenuExpand("directMessage")}
              >
                <Box className="content-center" pl={2}>
                  <ArrowRightRounded
                    sx={{
                      transform: menus.directMessage.isExpanded
                        ? "rotate(90deg)"
                        : "rotate(0)",
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
              <Box className="options context-center" pr={2}>
                <TooltipShortcut
                  placement="top"
                  hasArrow
                  style={{ marginBlock: "-5px" }}
                  tooltipContent={{
                    title: {
                      name: "sections options",
                      style: {
                        fontSize: "0.8rem",
                        fontWeight: "bold",
                      },
                    },
                  }}
                >
                  <IconButton className="text-grey-2" sx={{ p: "2.5px" }}>
                    <MoreVertRounded fontSize="small" />
                  </IconButton>
                </TooltipShortcut>
                <TooltipShortcut
                  placement="top"
                  hasArrow
                  tooltipContent={{
                    title: {
                      name: "open a direct message",
                      style: { fontSize: "0.9rem" },
                    },
                    content: {
                      shortcutKey: [
                        {
                          icon: KeyboardCommandKeyRounded,
                        },
                        {
                          key: "Shift",
                          style: { marginInline: "5px", paddingInline: "5px" },
                        },
                        {
                          key: "K",
                        },
                      ],
                    },
                  }}
                >
                  <IconButton className="text-grey-2" sx={{ p: "2.5px" }}>
                    <AddRounded fontSize="small" />
                  </IconButton>
                </TooltipShortcut>
              </Box>
            </Box>
            {menus.directMessage.isExpanded && (
              <Collapse
                in={menus.directMessage.isExpanded}
                timeout="auto"
                unmountOnExit
              >
                {menus.directMessage.subMenu.map(
                  ({ icon: Icon, path, title }, index) => (
                    <ListItemButton
                      className="sidebar-button p-0 my-1"
                      key={index}
                      onClick={() =>
                        handleMenuClick("directMessage", index, path)
                      }
                    >
                      <Box className="d-flex align-center" pl={4.5}>
                        <Icon className="text-grey-2 numbers-button" />
                        <ListItemText
                          primary={title}
                          primaryTypographyProps={{
                            className: "sidebar-menu",
                          }}
                          className="text-grey-2 pl-2 m-0"
                        />
                      </Box>
                    </ListItemButton>
                  )
                )}
                <ListItemButton className="sidebar-button p-0 my-1">
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
              </Collapse>
            )}
          </List>
        </Paper>
      </Drawer>
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
    </>
  );
}

export default Sidebar;
