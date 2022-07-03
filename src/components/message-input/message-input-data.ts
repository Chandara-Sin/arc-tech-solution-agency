import {
  AppRegistrationRounded,
  KeyboardCommandKeyRounded,
  LaptopMacRounded,
  MoreHorizRounded,
  NotificationsNoneOutlined,
  TextSnippetOutlined,
} from "@mui/icons-material";
import { IAttachmentDetails } from "./MessageInputType";

export const attachmentDetails: IAttachmentDetails[] = [
  {
    caption: "Shortcuts",
    details: [
      {
        icon: TextSnippetOutlined,
        item: "Create a post",
      },
      {
        icon: NotificationsNoneOutlined,
        item: "Create a reminder",
      },
      {
        icon: AppRegistrationRounded,
        item: "Browse apps",
      },
      {
        icon: MoreHorizRounded,
        item: "Browse all shortcuts",
      },
    ],
  },
  {
    caption: "Attach",
    details: [
      {
        icon: LaptopMacRounded,
        item: "Upload from your computer",
        shortCutIcon: KeyboardCommandKeyRounded,
        key: "U",
      },
    ],
  },
];
