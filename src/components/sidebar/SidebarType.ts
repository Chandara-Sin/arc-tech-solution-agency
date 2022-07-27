import { SvgIconComponent } from "@mui/icons-material";

export interface IMenuList {
  browse: IMenu[];
  channels: {
    isExpanded: boolean;
    subMenu: IMenu[];
  };
  directMessage: {
    isExpanded: boolean;
    subMenu: IMenu[];
  };
}

export interface IMenu {
  title: string;
  icon: SvgIconComponent;
  path: string;
  isActive: boolean;
}
