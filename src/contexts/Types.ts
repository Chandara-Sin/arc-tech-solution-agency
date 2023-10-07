export type TRole = "admin" | "member" | "guest";

export interface IAuthContext {
  user: IUser;
  signIn: (
    user: Omit<IUser, "isAuthenticated">,
    callback: VoidFunction
  ) => void;
  signOut: (callback: VoidFunction) => void;
}

export interface IUser {
  fullName: string;
  role: TRole;
  email: string;
  profileImageUrl: string;
  provider: string;
  isAuthenticated: boolean;
}
