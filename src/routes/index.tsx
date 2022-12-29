import { FC } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes as RouteList,
  Route,
  Outlet,
} from "react-router-dom";
import { AuthProvider, useAuth } from "../contexts/Auth";

// Authen
import MainHeader from "../layouts/main-header/MainHeader";
import MainFooter from "../layouts/main-footer/MainFooter";
import SignIn from "../pages/authen/SignIn";
import GetStarted from "../pages/authen/GetStarted";
import SignInWorkSpace from "../pages/authen/SignInWorkSpace";

// Member
import { Box } from "@mui/material";
import Header from "../layouts/header/Header";
import MessageSection from "../pages/message-section";
import BrowseConnect from "../pages/browse-connect";

// Admin
import Dashboard from "../pages-admin/dashboard";

// Error Pages
import ErrorPage from "../pages/error";

const PublicRoute = () => {
  const { isAuthenticated, role } = useAuth();
  return !isAuthenticated ? (
    <>
      <MainHeader />
      <Outlet />
      <MainFooter />
    </>
  ) : role === "member" ? (
    <Navigate to="/browse-connect" replace />
  ) : role === "admin" ? (
    <Navigate to="/dashboard" replace />
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
    <Navigate to="/browse-connect" replace />
  ) : (
    <Navigate to="/" replace />
  );
};

const List: FC = () => (
  <RouteList>
    <Route element={<PublicRoute />}>
      <Route path="/" element={<Navigate to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/workspace-signin" element={<SignInWorkSpace />} />
    </Route>
    <Route element={<MemberRoute />}>
      <Route path="/browse-connect" element={<BrowseConnect />} />
      <Route path="/groups/:id" element={<MessageSection />} />
    </Route>
    <Route path="/dashboard" element={<AdminRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    <Route path="*" element={<ErrorPage />} />
  </RouteList>
);

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
