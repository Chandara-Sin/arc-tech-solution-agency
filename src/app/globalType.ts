import { SvgIconComponent } from "@mui/icons-material";

export interface ICardItem {
    icon: SvgIconComponent;
    item: string;
}

export interface ICardItemShortCut extends ICardItem {
    shortCutIcon?: SvgIconComponent;
    key?: string;
}

export interface ITooltipDetails {
    caption?: string;
    details: string[];
}