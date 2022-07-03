import { AlternateEmail, AppRegistrationRounded, BookmarkBorderRounded, ContactsRounded, ForumRounded, LayersRounded, ManageSearchRounded, Notes } from "@mui/icons-material";
import { ICardItem, ITooltipDetails } from "../../app/globalType";

export const groupBrowseDetails: ICardItem[][] = [
    [
      { icon: Notes, item: "All unreads" },
      { icon: ForumRounded, item: "All DMs" },
      { icon: AlternateEmail, item: "Mentions and reactions" },
      { icon: BookmarkBorderRounded, item: "Save items" },
    ],
    [
      { icon: ManageSearchRounded, item: "Channel browser" },
      { icon: LayersRounded, item: "File browser" },
      { icon: ContactsRounded, item: "People & user groups" },
      { icon: AppRegistrationRounded, item: "Apps" },
    ],
  ];
  
  export const settings: ITooltipDetails[] = [
    { caption: "Settings", details: ["Workspace settings", "Customize Slack"] },
    { caption: " Administration", details: ["Manage members", "Manage apps"] },
  ];
  
  export const tools: ITooltipDetails = {
    details: ["Workflow Builder", "Analytics"],
  };
  
  export const workspaces: ITooltipDetails = {
    details: [
      "Sign in to another workspace",
      "Create a new workspace",
      "Find workspaces",
    ],
  };