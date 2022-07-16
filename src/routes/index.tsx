import {
  BrowserRouter as Router,
  Navigate,
  Routes as RouteList,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/Auth";

// Member
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import MessageInput from "../components/message-input/MessageInput";
import MessageSection from "../views/message-section";

// Admin
import Dashboard from "../views-admin/dashboard";

// Authen
import SignIn from "../views/authen/SignIn";
import MainHeader from "../components/main-header/MainHeader";
import MainFooter from "../components/main-footer/MainFooter";

const AdminRoute = () => {
  const { isAuthenticated, role } = useAuth();
  return isAuthenticated && role === "admin" ? (
    <Outlet />
  ) : role === "member" ? (
    <Navigate to="/users" replace />
  ) : (
    <Navigate to="/" replace />
  );
};

const MemberRoute = () => {
  const { isAuthenticated, role } = useAuth();
  return isAuthenticated && role === "member" ? (
    <>
      <Header />
      <main className="drawer-content-margin">
        <Box className="container">
          <Outlet />
          <MessageInput />
        </Box>
      </main>
    </>
  ) : role === "admin" ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/" replace />
  );
};

const PublicRoute = () => {
  const { isAuthenticated, role } = useAuth();
  const location = useLocation();
  return !isAuthenticated ? (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  ) : role === "member" ? (
    <Navigate to="/users" state={{ from: location }} replace />
  ) : role === "admin" ? (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

const Layout = () => {
  return (
    <RouteList>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
      </Route>
      <Route path="/users" element={<MemberRoute />}>
        <Route path="/users" element={<MessageSection />} />
      </Route>
      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </RouteList>
  );
};

function Routes() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
