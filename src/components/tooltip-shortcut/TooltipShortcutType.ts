import { ReactElement } from "react";

export interface ITooltipShortcutProps {
  children: ReactElement;
  placement?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "bottom-end"
    | "bottom-start"
    | "left-end"
    | "left-start"
    | "right-end"
    | "right-start"
    | "top-end"
    | "top-start";
  hasArrow?: boolean;
  style: React.CSSProperties;
  tooltipContent: IToolTipContent;
}

export interface IToolTipContent {
  title: {
    name: string;
    style: React.CSSProperties;
  };
  content?: {
    style?: React.CSSProperties;
    shortcutKey: IShortcutKey[];
  };
}

export interface IShortcutKey {
  key: string;
  style?: React.CSSProperties;
}
