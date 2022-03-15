import React from "react";
import "./TooltipShortcutType.css";
import { KeyboardCommandKeyRounded } from "@mui/icons-material";
import { Box, Paper, Tooltip, Typography } from "@mui/material";
import { ITooltipShortcutProps } from "./TooltipShortcutType";

function TooltipShortcut(props: ITooltipShortcutProps) {
  const { children, placement, hasArrow, tooltipContent, style } = props;
  const { title, content } = tooltipContent;
  return (
    <Tooltip
      placement={placement}
      title={
        <Box className="content-center flex-column" style={style}>
          <Typography variant="subtitle1" style={title.style}>
            {title.name}
          </Typography>
          {content && (
            <Box className="content-center" style={content.style}>
              {content.shortcutKey.map((item, index) =>
                item.key === "commentKey" ? (
                  <Paper
                    key={index}
                    className="tooltip-shortcut content-center"
                  >
                    <KeyboardCommandKeyRounded className="tooltip-shortcut-button" />
                  </Paper>
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
