import { IChannelMenu, IDirectMessageMenu } from "./SidebarType";

export const channelMenuMock: IChannelMenu = {
  isExpanded: true,
  channels: [
    {
      id: "628f192fbf4774597372b9b9",
      channel: "general",
      isActive: false,
    },
    {
      id: "628b1a1c751ebc3e4bfd88e3",
      channel: "slack-clone-project",
      isActive: false,
    },
    {
      id: "628b1a87751ebc3e4bfd88e4",
      channel: "slack-clone-git",
      isActive: false,
    },
  ],
};

export const directMessageMenuMock: IDirectMessageMenu = {
  isExpanded: true,
  directMessages: [
    {
      receiverId: "628b1abacaa1bf5b1e954db3",
      receiverName: "Chandara",
      isActive: false,
    },
    {
      receiverId: "628b1abacaa1bf5b1e954pg2",
      receiverName: "Ami",
      isActive: false,
    },
    {
      receiverId: "628b1abacaa1bf5b1e234lv9",
      receiverName: "Dome",
      isActive: false,
    },
  ],
};
