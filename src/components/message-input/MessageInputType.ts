import { IEmojiData } from "emoji-picker-react";

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
  emojiObject: IEmojiData | null;
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
  emojiObject: IEmojiData | null;
}
