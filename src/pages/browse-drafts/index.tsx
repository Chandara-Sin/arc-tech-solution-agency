import { FC, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import draftMsg from "../../assets/image/draft_save_msg.png";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";

const tabs = [
  { tabName: "Drafts", value: "drafts" },
  { tabName: "Schedule", value: "schedule" },
  { tabName: "Sent", value: "sent" },
];

const BroweDrafts: FC = () => {
  const [tabSelected, setTabSelected] = useState("schedule");
  return (
    <Paper className="browse-header-container" elevation={0}>
      <Box
        padding="0px 14px"
        minHeight="52px"
        className="flex-start align-center"
      >
        <Typography variant="body1" className="text-extra-bold pl-1">
          Drafts & sent
        </Typography>
      </Box>
      <Box sx={{ borderBlock: "1px solid #d3d3d3" }}>
        <Tabs
          value={tabSelected}
          onChange={(_, value) => setTabSelected(value)}
          sx={{ minHeight: "36px" }}
        >
          {tabs.map(({ tabName, value }, index) => (
            <Tab
              value={value}
              label={tabName}
              key={index}
              className="text-transform-none text-bold"
              sx={{ minHeight: "36px", padding: "8px 12px" }}
            />
          ))}
        </Tabs>
      </Box>
      <Box
        className="flex-between align-center"
        sx={{
          border: "1px solid #d3d3d3",
          borderRadius: "16px",
          bgcolor: "#f8f9fa",
        }}
        margin="20px"
        padding="20px 30px"
      >
        <Box>
          <Typography variant="h6" className="text-bold">
            All your outgoing messages
          </Typography>
          <Typography variant="subtitle1">
            Everything you sent, draft, and schedule can now be found here.
          </Typography>
        </Box>
        <CardMedia
          component="img"
          src={draftMsg}
          alt="msg-chat"
          style={{ width: "10rem", marginRight: "30px" }}
        />
      </Box>
      <Box
        className="d-flex flex-column justify-center align-center"
        sx={{ height: "calc(100vh - 364px)" }}
      >
        <ScheduleSendIcon className="pb-2" />
        <Typography variant="h6" className="text-bold pb-2">
          Write now, send later
        </Typography>
        <Typography
          sx={{ width: "500px" }}
          className="pb-3"
          gutterBottom
          textAlign="center"
        >
          schedule message to be send at later time, another day altogether.
          They'll wait here until they delivered
        </Typography>
        <Button variant="outlined" className="text-transform-none text-bold">
          Start New Message
        </Button>
      </Box>
    </Paper>
  );
};

export default BroweDrafts;
