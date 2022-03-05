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
} from "@mui/material";
import {
  ArrowForwardIos,
  ArrowRight,
  BorderColorRounded,
  MoreVert,
  PeopleAlt,
  Person,
} from "@mui/icons-material";
import { channels, direstMessage } from "./example-data";

function SideBar() {
  const [openChannels, setOpenChannels] = useState(true);
  const [openDirectMessage, setOpenDirectMessage] = useState(true);
  return (
    <Drawer variant="permanent" className="sidebar">
      <Paper className="sidebar-card full-height">
        <List>
          <ListItem component="div" className="group-section" disablePadding>
            <ListItemButton>
              <ListItemText
                primary="Slack"
                primaryTypographyProps={{
                  color: "rgba(255,255,255,0.8)",
                  fontWeight: "bold",
                  variant: "subtitle1",
                }}
              />
              <ArrowForwardIos className="group-section-icon" />
            </ListItemButton>
            <IconButton
              size="large"
              sx={{
                "& svg": {
                  color: "rgba(255,255,255,0.8)",
                  transition: "0.2s",
                  transform: "translateX(0) rotate(0)",
                },
                "&:hover, &:focus": {
                  bgcolor: "unset",
                  "& svg:first-of-type": {
                    transform: "translateX(-4px) ",
                  },
                  "& svg:last-of-type": {
                    right: 0,
                    opacity: 1,
                  },
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  height: "80%",
                  display: "block",
                  left: 0,
                  width: "1px",
                  bgcolor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              <BorderColorRounded />
              <ArrowRight sx={{ position: "absolute", right: 4, opacity: 0 }} />
            </IconButton>
          </ListItem>
          <ListItem button>
            <PeopleAlt className="text-grey-2 pr-2" />
            <ListItemText primary="Slack Connect" className="text-grey-2" />
          </ListItem>
          <ListItem button>
            <MoreVert className="text-grey-2 pr-2" />
            <ListItemText primary="Browse Slack" className="text-grey-2" />
          </ListItem>

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
