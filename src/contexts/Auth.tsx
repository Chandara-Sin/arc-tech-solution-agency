import { createContext, ReactNode, useContext } from "react";
import { IAuthContext, IUser } from "./Types";

const initialUser: IUser = {
  fullName: "",
  email: "",
  role: "guest",
  profileImageUrl: "",
  isAuthenticated: false,
};

const getUserFromLocalStorage = () => {
  const userStorage = localStorage.getItem("user");
  const { user }: IAuthContext = userStorage
    ? JSON.parse(userStorage)
    : { user: initialUser };
  return user;
};

const user = getUserFromLocalStorage();

const initialAuth: IAuthContext = {
  user,
  signIn(user, cb) {
    localStorage.setItem("user", JSON.stringify(user));
    initialAuth.user = { ...user, isAuthenticated: true };
    cb();
  },
  signOut(cb) {
    localStorage.clear();
    initialAuth.user = initialUser;
    cb();
  },
};

const AuthContext = createContext<IAuthContext>(initialAuth);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => (
  <AuthContext.Provider value={initialAuth}>{children}</AuthContext.Provider>
);

export { useAuth, AuthProvider };
