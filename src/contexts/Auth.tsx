import { createContext, ReactNode, useContext } from "react";
import { IAuthContext, IUser } from "./Types";

const initialUser: IUser = {
  fullName: "",
  email: "",
  role: "guest",
  profileImageUrl: "",
  isAuthenticated: false,
};

const getUserFromStorage = () => {
  const userStorage = localStorage.getItem("user");
  const user: IUser = userStorage ? JSON.parse(userStorage) : initialUser;
  return user;
};

const user = getUserFromStorage();

const initialAuth: IAuthContext = {
  user,
  signIn(user, cb) {
    localStorage.clear();
    localStorage.setItem(
      "user",
      JSON.stringify({ ...user, isAuthenticated: true })
    );
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
