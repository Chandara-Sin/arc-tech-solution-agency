import { SvgIconComponent } from "@mui/icons-material";

export interface ICardItem {
    icon: SvgIconComponent;
    item: string;
}

export interface ITooltipDetails {
    caption?: string;
    details: string[];
}