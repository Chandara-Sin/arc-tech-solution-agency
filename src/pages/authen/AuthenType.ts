export interface IFormSignIn {
  email: string;
}

export interface AuthCodeRef {
  focus: () => void;
  clear: () => void;
}

export interface AuthCodeProps {
  onChange?: (value: string) => void;
  length?: number;
}
