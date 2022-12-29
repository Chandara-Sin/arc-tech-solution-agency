import {
  CreateRounded,
  NumbersRounded,
  PeopleRounded,
} from "@mui/icons-material";
import { IMenuList } from "./SidebarType";

export const allMenu: IMenuList = {
  browse: [
    {
      title: "Drafts",
      icon: CreateRounded,
      path: "browse-drafts",
      isActive: false,
    },
    {
      title: "Slack Connect",
      icon: PeopleRounded,
      path: "browse-connect",
      isActive: false,
    },
  ],
  channels: {
    isExpanded: true,
    subMenu: [
      {
        title: "general",
        icon: NumbersRounded,
        path: "groups/628f192fbf4774597372b9b9",
        isActive: false,
      },
      {
        title: "slack-clone-project",
        icon: NumbersRounded,
        path: "groups/628b1a1c751ebc3e4bfd88e3",
        isActive: false,
      },
      {
        title: "slack-clone-git",
        icon: NumbersRounded,
        path: "groups/628b1a87751ebc3e4bfd88e4",
        isActive: false,
      },
    ],
  },
  directMessage: {
    isExpanded: true,
    subMenu: [
      {
        title: "Chandara",
        icon: NumbersRounded,
        path: "groups/628f192fbf4774597372b9b9",
        isActive: false,
      },
      {
        title: "Ami",
        icon: NumbersRounded,
        path: "groups/628b1abacaa1bf5b1e954db3",
        isActive: false,
      },
      {
        title: "Dome",
        icon: NumbersRounded,
        path: "groups/628b1abacaa1bf5b1e234lv9",
        isActive: false,
      },
    ],
  },
};
