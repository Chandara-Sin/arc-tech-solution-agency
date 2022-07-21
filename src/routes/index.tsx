import {
  BrowserRouter as Router,
  Navigate,
  Routes as RouteList,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/Auth";

// Authen
import MainHeader from "../components/main-header/MainHeader";
import MainFooter from "../components/main-footer/MainFooter";
import SignIn from "../views/authen/SignIn";
import GetStarted from "../views/authen/GetStarted";
import SignInWorkSpace from "../views/authen/SignInWorkSpace";

// Member
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import MessageSection from "../views/message-section";
import Connection from "../views/connection";

// Admin
import Dashboard from "../views-admin/dashboard";

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
    <Navigate to="/connection" state={{ from: location }} replace />
  ) : role === "admin" ? (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
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
        </Box>
      </main>
    </>
  ) : role === "admin" ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/" replace />
  );
};

const AdminRoute = () => {
  const { isAuthenticated, role } = useAuth();
  return isAuthenticated && role === "admin" ? (
    <Outlet />
  ) : role === "member" ? (
    <Navigate to="/connection" replace />
  ) : (
    <Navigate to="/" replace />
  );
};

const List = () => {
  return (
    <RouteList>
      <Route element={<PublicRoute />}>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/workspace-signin" element={<SignInWorkSpace />} />
      </Route>
      <Route element={<MemberRoute />}>
        <Route path="/connection" element={<Connection />} />
        <Route path="/groups/:id" element={<MessageSection />} />
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
        <List />
      </Router>
    </AuthProvider>
  );
}

export default Routes;
