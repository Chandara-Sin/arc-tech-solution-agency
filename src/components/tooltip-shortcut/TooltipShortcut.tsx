import { FC } from "react";
import "./TooltipShortcut.css";
import { ITooltipShortcutProps } from "./TooltipShortcutType";
import { Box, Paper, Tooltip, Typography } from "@mui/material";

const TooltipShortcut: FC<ITooltipShortcutProps> = (props) => {
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
            textAlign="center"
          >
            {title.name}
          </Typography>
          {content && (
            <Box className="content-center" style={content.style}>
              {content.shortcutKey.map(({ icon: Icon, style, key }, index) =>
                Icon ? (
                  <Paper
                    key={index}
                    className="tooltip-shortcut content-center"
                    style={style}
                  >
                    {Icon && <Icon className="tooltip-shortcut-button" />}
                  </Paper>
                ) : (
                  <Paper
                    key={index}
                    className={`${
                      key !== "Press" ? "tooltip-shortcut" : "bg-transpar"
                    } content-center`}
                    style={style}
                  >
                    <Typography
                      variant="subtitle2"
                      className={`${key === "Press" ? "text-grey-4" : ""}`}
                    >
                      {key}
                    </Typography>
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
};

export default TooltipShortcut;
