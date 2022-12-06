import { EmojiClickData } from "emoji-picker-react";
import { ICardItemShortCut } from "../../app/globalType";
import { ITooltipShortcutProps } from "../tooltip-shortcut/TooltipShortcutType";

export interface IMessageInputProps {
  onChange: (data: IOnSubmitMessage) => void;
  data?: string;
}

export interface IOnSubmitMessage {
  text: string;
  inputDate: Date;
}

export interface IMessageInputFormats {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  link: boolean;
  orderedList: boolean;
  bulletedList: boolean;
  code: boolean;
  format: boolean;
  mention: boolean;
  emoji: EmojiClickData | null;
}

export interface IMessageFormatProps {
  onChange: (formats: IMessageFormats) => void;
}

export interface IMessageFormats {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  link: boolean;
  orderedList: boolean;
  bulletedList: boolean;
  code: boolean;
}

export interface IMessageAttachmentsProps {
  onChange: (attachments: IMessageAttachments) => void;
}

export interface IMessageAttachments {
  format: boolean;
  mention: boolean;
  emoji: EmojiClickData | null;
}

export interface IMessageFormatsDeails
  extends Omit<ITooltipShortcutProps, "children"> {
  format: string;
}

export interface IAttachmentDetails {
  caption: string;
  details: ICardItemShortCut[];
}
