import {
  BrowserRouter as Router,
  Navigate,
  Routes as RouteList,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/Auth";

// Member
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import MessageInput from "../components/message-input/MessageInput";
import MessageSection from "../views/message-section";

// Admin
import { Dashboard } from "@mui/icons-material";

// Authen
import Login from "../views/authen/Login";

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? (
    <>
      <Header />
      <main className="drawer-content-margin">
        <Box className="container">
          {children}
          <MessageInput />
        </Box>
      </main>
    </>
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

const List = () => {
  return (
    <RouteList>
      <Route path="/" element={<Login />} />
      <Route
        path="/user"
        element={
          <AuthRoute>
            <MessageSection />
          </AuthRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <AuthRoute>
            <Dashboard />
          </AuthRoute>
        }
      />
    </RouteList>
  );
};

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <List />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
