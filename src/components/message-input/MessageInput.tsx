import React, { FC, useEffect, useState } from "react";
import "./MessageInput.css";
import TooltipShortcut from "../tooltip-shortcut/TooltipShortcut";
import {
  IMessageFormats,
  IMessageFormatProps,
  IMessageAttachmentsProps,
  IMessageAttachments,
} from "./MessageInputType";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import {
  AddRounded,
  AlternateEmailRounded,
  BoltRounded,
  CodeRounded,
  FormatBoldRounded,
  FormatClearRounded,
  FormatItalicRounded,
  FormatListBulletedRounded,
  FormatListNumberedRounded,
  KeyboardArrowDownRounded,
  KeyboardCommandKeyRounded,
  KeyboardVoiceOutlined,
  LinkSharp,
  SendRounded,
  SentimentVerySatisfiedRounded,
  StrikethroughSRounded,
  VideocamOutlined,
} from "@mui/icons-material";
import Picker, {
  EmojiClickData,
  EmojiStyle,
  SkinTones,
} from "emoji-picker-react";
import TrialDialog from "../trial-dialog/TrialDialog";
import { attachmentDetails } from "./message-input-data";

const MessageFormat: FC<IMessageFormatProps> = (props) => {
  const { onChange } = props;
  const [formats, setFormats] = useState<IMessageFormats>({
    bold: false,
    italic: false,
    strikethrough: false,
    link: false,
    orderedList: false,
    bulletedList: false,
    code: false,
  });

  useEffect(() => {
    onChange(formats);
  }, [formats, onChange]);

  const handleOnChange = (format: string, value: boolean) => {
    setFormats((prevState: IMessageFormats) => ({
      ...prevState,
      [format]: value,
    }));
  };

  return (
    <Box className="message-top-section bg-grey d-flex align-center px-1">
      <TooltipShortcut
        placement="top"
        hasArrow
        tooltipContent={{
          title: {
            name: "Bold",
            style: { fontSize: "0.9rem" },
          },
          content: {
            shortcutKey: [
              {
                icon: KeyboardCommandKeyRounded,
                style: { marginRight: "5px" },
              },
              {
                key: "B",
              },
            ],
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() => handleOnChange("bold", !formats.bold)}
        >
          <FormatBoldRounded className="message-input-button" />
        </IconButton>
      </TooltipShortcut>
      <TooltipShortcut
        placement="top"
        hasArrow
        tooltipContent={{
          title: {
            name: "Italic",
            style: { fontSize: "0.9rem" },
          },
          content: {
            shortcutKey: [
              {
                icon: KeyboardCommandKeyRounded,
                style: { marginRight: "5px" },
              },
              {
                key: "I",
              },
            ],
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() => handleOnChange("italic", !formats.italic)}
        >
          <FormatItalicRounded className="message-input-button" />
        </IconButton>
      </TooltipShortcut>
      <TooltipShortcut
        placement="top"
        hasArrow
        tooltipContent={{
          title: {
            name: "Strikethrough",
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
                key: "B",
              },
            ],
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() =>
            handleOnChange("strikethrough", !formats.strikethrough)
          }
        >
          <StrikethroughSRounded className="message-input-button" />
        </IconButton>
      </TooltipShortcut>
      <Divider orientation="vertical" className="message-icon-divider mx-2" />
      <TooltipShortcut
        placement="top"
        hasArrow
        tooltipContent={{
          title: {
            name: "Link",
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
                key: "U",
              },
            ],
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() => handleOnChange("link", !formats.link)}
        >
          <LinkSharp className="message-input-button" />
        </IconButton>
      </TooltipShortcut>
      <Divider orientation="vertical" className="message-icon-divider mx-2" />
      <TooltipShortcut
        placement="top"
        hasArrow
        tooltipContent={{
          title: {
            name: "Ordered List",
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
                key: "7",
              },
            ],
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() => handleOnChange("orderedList", !formats.orderedList)}
        >
          <FormatListNumberedRounded className="message-input-button" />
        </IconButton>
      </TooltipShortcut>
      <TooltipShortcut
        placement="top"
        hasArrow
        tooltipContent={{
          title: {
            name: "Bulleted list",
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
                key: "8",
              },
            ],
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() => handleOnChange("bulletedList", !formats.bulletedList)}
        >
          <FormatListBulletedRounded className="message-input-button" />
        </IconButton>
      </TooltipShortcut>
      <Divider orientation="vertical" className="message-icon-divider mx-2" />
      <TooltipShortcut
        placement="top"
        hasArrow
        tooltipContent={{
          title: {
            name: "Code",
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
                key: "C",
              },
            ],
          },
        }}
      >
        <IconButton
          size="small"
          onClick={() => handleOnChange("code", !formats.code)}
        >
          <CodeRounded className="message-input-button" />
        </IconButton>
      </TooltipShortcut>
    </Box>
  );
};

const Attachments: FC = () => (
  <Paper className="message-attachment-card bg-grey">
    <Box p="5px 15px 15px">
      <TextField
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BoltRounded />
            </InputAdornment>
          ),
          sx: {
            height: "40px",
          },
        }}
        placeholder="Search shortcuts"
      />
    </Box>
    <Divider />
    {attachmentDetails.map(({ caption, details }, index) => (
      <Box
        key={index}
        className="d-flex flex-column justify-center"
        p="10px 0px 0px"
      >
        <Typography variant="subtitle2" className="text-grey-4" pl={2.5}>
          {caption}
        </Typography>
        {details.map(
          ({ shortCutIcon: ShortCutIcon, icon: Icon, item, key }, index) =>
            ShortCutIcon ? (
              <Button key={index} className="user-button flex-start" fullWidth>
                <Box
                  className="flex-between full-width"
                  alignItems="center"
                  pr={2}
                >
                  <Box className="d-flex align-center full-width" pl={2}>
                    <Icon />
                    <Typography variant="subtitle2" className="pl-2">
                      {item}
                    </Typography>
                  </Box>
                  <Box className="d-flex align-center">
                    <ShortCutIcon sx={{ fontSize: "1rem" }} />
                    <Typography variant="subtitle2" pt={0.1}>
                      {key}
                    </Typography>
                  </Box>
                </Box>
              </Button>
            ) : (
              <Button key={index} className="user-button flex-start" fullWidth>
                <Box className="d-flex align-center full-width" pl={2}>
                  <Icon />
                  <Typography variant="body2" className="pl-2">
                    {item}
                  </Typography>
                </Box>
              </Button>
            )
        )}
        {index !== attachmentDetails.length - 1 && <Divider />}
      </Box>
    ))}
  </Paper>
);

const MessageAttachments: FC<IMessageAttachmentsProps> = (props) => {
  const { onChange } = props;
  const [openTrialDialog, setOpenTrialDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [menuSelected, setMenuSelected] = useState<
    "emoji" | "attachment" | null
  >(null);
  const [chosenEmoji, setChosenEmoji] = useState<EmojiClickData | null>(null);
  const [attachments, setAttachments] = useState<IMessageAttachments>({
    format: false,
    mention: false,
    emoji: null,
  });

  useEffect(() => {
    onChange({
      format: attachments.format,
      mention: attachments.mention,
      emoji: chosenEmoji,
    });
  }, [attachments, chosenEmoji, onChange]);

  const handleClickPopover = (
    event: React.MouseEvent<HTMLElement>,
    menu: "emoji" | "attachment" | null
  ) => {
    setAnchorEl(event.currentTarget);
    setMenuSelected(menu);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
    setMenuSelected(null);
  };

  const handleTrialDialog = () => {
    setOpenTrialDialog(true);
  };
  const handleCloseTrailDialog = () => {
    setOpenTrialDialog(false);
  };

  const onEmojiClick = (emoji: EmojiClickData, _: MouseEvent) => {
    setChosenEmoji(emoji);
  };

  const handleAttachmentChange = (attachment: string, value: boolean) => {
    setAttachments((prevState: IMessageAttachments) => ({
      ...prevState,
      [attachment]: value,
    }));
  };
  const open = !!anchorEl;

  return (
    <>
      <Box className="d-flex align-center">
        <IconButton
          className={`ml-1 add-attachment-button ${
            menuSelected === "attachment" ? "active-button" : ""
          }`}
          sx={{
            transform:
              menuSelected === "attachment" ? "rotate(-45deg)" : "rotate(0)",
            transition: "0.3s",
          }}
          size="small"
          onClick={(event) => handleClickPopover(event, "attachment")}
        >
          <AddRounded className="message-input-button" />
        </IconButton>
        <Divider orientation="vertical" className="message-icon-divider mx-2" />
        <IconButton size="small" onClick={handleTrialDialog}>
          <VideocamOutlined className="message-input-button" />
        </IconButton>
        <IconButton size="small" onClick={handleTrialDialog}>
          <KeyboardVoiceOutlined className="message-input-button" />
        </IconButton>
        <Divider orientation="vertical" className="message-icon-divider mx-2" />
        <TooltipShortcut
          placement="top"
          hasArrow
          style={{ marginBlock: "-5px" }}
          tooltipContent={{
            title: {
              name: "Emoji",
              style: { fontSize: "0.8rem", fontWeight: "bold" },
            },
          }}
        >
          <IconButton
            size="small"
            onClick={(event) => handleClickPopover(event, "emoji")}
          >
            <SentimentVerySatisfiedRounded className="message-input-button" />
          </IconButton>
        </TooltipShortcut>
        <TooltipShortcut
          placement="top"
          hasArrow
          style={{ marginBlock: "-5px" }}
          tooltipContent={{
            title: {
              name: "Mention someone",
              style: { fontSize: "0.8rem", fontWeight: "bold" },
            },
          }}
        >
          <IconButton
            size="small"
            onClick={() =>
              handleAttachmentChange("mention", !attachments.mention)
            }
          >
            <AlternateEmailRounded className="message-input-button" />
          </IconButton>
        </TooltipShortcut>
        <TooltipShortcut
          placement="top"
          hasArrow
          style={{ marginBlock: "-5px" }}
          tooltipContent={{
            title: {
              name: "Hide formatting",
              style: { fontSize: "0.8rem", fontWeight: "bold" },
            },
          }}
        >
          <IconButton
            size="small"
            onClick={() =>
              handleAttachmentChange("format", !attachments.format)
            }
          >
            <FormatClearRounded className="message-input-button" />
          </IconButton>
        </TooltipShortcut>
      </Box>
      <TrialDialog open={openTrialDialog} onClose={handleCloseTrailDialog} />
      <Popover
        sx={{
          mt: "-5px",
          ml: menuSelected === "attachment" ? "-70px" : "0px",
        }}
        open={open}
        onClose={handleClosePopover}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: menuSelected === "attachment" ? "left" : "center",
        }}
        elevation={2}
      >
        {menuSelected === "attachment" && <Attachments />}
        {menuSelected === "emoji" && (
          <Picker
            emojiStyle={EmojiStyle.NATIVE}
            onEmojiClick={onEmojiClick}
            lazyLoadEmojis
            defaultSkinTone={SkinTones.MEDIUM_LIGHT}
            height={380}
            width={330}
            previewConfig={{ showPreview: false }}
          />
        )}
      </Popover>
    </>
  );
};

function MessageInput() {
  const [messageInput, setMessageInput] = useState("");
  const [inputFormats, setInputFormats] = useState<IMessageFormats>({
    bold: false,
    italic: false,
    strikethrough: false,
    link: false,
    orderedList: false,
    bulletedList: false,
    code: false,
  });
  const [inputAttachments, setInputAttachments] = useState<IMessageAttachments>(
    {
      format: false,
      mention: false,
      emoji: null,
    }
  );
  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { value } = event.target;
    setMessageInput(value);
  };

  const handleMessageFormat = (formats: IMessageFormats) => {
    const formatKeys = Object.values(formats);
    const inputFormatKeys = Object.values(inputFormats);
    const isEqual = formatKeys.every(
      (value, index) => value === inputFormatKeys[index]
    );
    !isEqual && setInputFormats(formats);
  };
  const handleMessageAttachments = (attachments: IMessageAttachments) => {
    const attachmentKeys = Object.values(attachments);
    const inputAttachmentKeys = Object.values(inputAttachments);
    const isEqual = attachmentKeys.every(
      (value, index) => value === inputAttachmentKeys[index]
    );
    !isEqual && setInputAttachments(attachments);
  };

  return (
    <Paper component="form" className="message-input-card" elevation={0}>
      <Grid container>
        {!inputAttachments.format && (
          <Grid xs={12} item>
            <MessageFormat onChange={handleMessageFormat} />
          </Grid>
        )}
        <Grid xs={12} item p="10px 15px 0px">
          <InputBase
            fullWidth
            placeholder="Jot something down"
            onChange={handleMessageChange}
          />
        </Grid>
        <Grid xs={12} item>
          <Box className="message-bottom-section flex-between align-center">
            <MessageAttachments onChange={handleMessageAttachments} />
            <Box
              className={`content-center ${
                messageInput ? "message-submit-button" : ""
              }`}
            >
              <TooltipShortcut
                placement="top-end"
                hasArrow
                tooltipContent={{
                  title: {
                    name: messageInput ? "send now" : "",
                    style: { fontSize: "0.9rem" },
                  },
                  content: {
                    shortcutKey: [
                      {
                        key: "Press",
                      },
                      {
                        key: "Return",
                        style: { marginLeft: "5px", paddingInline: "5px" },
                      },
                    ],
                  },
                }}
              >
                <span>
                  <IconButton
                    className={`submit-button send-button ${
                      messageInput ? "text-white" : ""
                    }`}
                    disabled={!messageInput}
                  >
                    <SendRounded className="message-input-button" />
                  </IconButton>
                </span>
              </TooltipShortcut>
              <Divider
                orientation="vertical"
                className="bg-white"
                sx={{ height: "20px" }}
              />
              <TooltipShortcut
                placement="top-end"
                hasArrow
                style={{ marginBlock: "-5px" }}
                tooltipContent={{
                  title: {
                    name: messageInput ? "Schedule for later" : "",
                    style: { fontSize: "0.8rem", fontWeight: "bold" },
                  },
                }}
              >
                <span>
                  <IconButton
                    className={`submit-button schedule-button  ${
                      messageInput ? "text-white" : ""
                    }`}
                    disabled={!messageInput}
                  >
                    <KeyboardArrowDownRounded className="message-input-button" />
                  </IconButton>
                </span>
              </TooltipShortcut>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default MessageInput;
