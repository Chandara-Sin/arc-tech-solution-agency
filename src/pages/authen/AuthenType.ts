export interface IFormSignIn {
  email: string;
}

export interface AuthCodeRef {
  focus: () => void;
  clear: () => void;
}

export interface AuthCodeProps {
  autoFocus?: boolean;
  onChange?: (value: string) => void;
  length?: number;
}
