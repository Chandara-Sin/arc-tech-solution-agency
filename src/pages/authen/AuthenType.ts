import { JWTPayload } from "jose";
import { TRole } from "../../contexts/Types";

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

export interface ISessionToken extends JWTPayload {
  user_id: string;
  email: string;
  role: TRole;
  name: string;
}
