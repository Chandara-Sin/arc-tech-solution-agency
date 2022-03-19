import React from "react";
import "./TooltipShortcut.css";
import { KeyboardCommandKeyRounded } from "@mui/icons-material";
import { Box, Paper, Tooltip, Typography } from "@mui/material";
import { ITooltipShortcutProps } from "./TooltipShortcutType";

function TooltipShortcut(props: ITooltipShortcutProps) {
  const { children, placement, hasArrow, tooltipContent, style } = props;
  const { title, content } = tooltipContent;

  return (
    <Tooltip
      disableHoverListener={!title.name}
      placement={placement}
      title={
        <Box
          className="content-center flex-column tooltip-shortcut-card"
          style={style}
        >
          <Typography
            variant="subtitle1"
            style={title.style}
            className="tooltip-shortcut-title"
          >
            {title.name}
          </Typography>
          {content && (
            <Box className="content-center" style={content.style}>
              {content.shortcutKey.map((item, index) =>
                item.key === "commentKey" ? (
                  <Paper
                    key={index}
                    className="tooltip-shortcut content-center"
                    style={item.style}
                  >
                    <KeyboardCommandKeyRounded className="tooltip-shortcut-button" />
                  </Paper>
                ) : item.key === "press" ? (
                  <Box
                    key={index}
                    className="content-center"
                    style={item.style}
                  >
                    <Typography variant="subtitle2" className="text-grey-4">
                      Press
                    </Typography>
                  </Box>
                ) : (
                  <Paper
                    key={index}
                    className="tooltip-shortcut content-center"
                    style={item.style}
                  >
                    <Typography variant="subtitle2">{item.key}</Typography>
                  </Paper>
                )
              )}
            </Box>
          )}
        </Box>
      }
      arrow={hasArrow}
    >
      {children}
    </Tooltip>
  );
}

export default TooltipShortcut;
