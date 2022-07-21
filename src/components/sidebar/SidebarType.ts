export interface IChannelMenu {
  isExpanded: boolean;
  channels: {
    id: string;
    channel: string;
    isActive: boolean;
  }[];
}

export interface IDirectMessageMenu {
  isExpanded: boolean;
  directMessages: {
    receiverId: string;
    receiverName: string;
    isActive: boolean;
  }[];
}
