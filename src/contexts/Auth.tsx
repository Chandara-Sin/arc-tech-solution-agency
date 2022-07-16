import { createContext, ReactNode, useContext } from "react";
import { IAuthContext } from "./Types";

const getUserFromLocalStorage = () => {
  const userStorage = localStorage.getItem("user");
  const { isAuthenticated, role }: IAuthContext = userStorage
    ? JSON.parse(userStorage)
    : { isAuthenticated: false, role: "guest" };
  return { isAuthenticated, role };
};

const user = getUserFromLocalStorage();

const initialAuth: IAuthContext = {
  isAuthenticated: user.isAuthenticated,
  role: user.role,
  signIn(role, cb) {
    localStorage.setItem(
      "user",
      JSON.stringify({ isAuthenticated: true, role: role })
    );
    initialAuth.isAuthenticated = true;
    initialAuth.role = role;
    cb();
  },
  signOut(cb) {
    localStorage.clear();
    initialAuth.isAuthenticated = false;
    initialAuth.role = "guest";
    cb();
  },
};

const AuthContext = createContext<IAuthContext>(initialAuth);

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider value={initialAuth}>{children}</AuthContext.Provider>
  );
}

export { useAuth, AuthProvider };
