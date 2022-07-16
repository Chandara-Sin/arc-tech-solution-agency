export type Role = "admin" | "member" | "guest";

export interface IAuthContext {
  isAuthenticated: boolean;
  role: Role;
  signIn: (role: Role, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}
