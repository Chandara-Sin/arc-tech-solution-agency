export type Role = "admin" | "member" | "guest";

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
  role: Role;
  email: string;
  profileImageUrl: string;
  isAuthenticated: boolean;
}
