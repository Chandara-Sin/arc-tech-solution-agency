import {
  Navigate,
  Outlet,
  createBrowserRouter,
  RouterProvider,
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
import BroweDrafts from "../pages/browse-drafts";

// Admin
import Dashboard from "../pages-admin/dashboard";

// Error Pages
import Error from "../pages/_error";

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Navigate to="/signin" /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/get-started", element: <GetStarted /> },
      { path: "/workspace-signin", element: <SignInWorkSpace /> },
    ],
  },
  {
    element: <MemberRoute />,
    children: [
      { path: "/browse-drafts", element: <BroweDrafts /> },
      { path: "/browse-connect", element: <BrowseConnect /> },
      { path: "/groups/:id", element: <MessageSection /> },
    ],
  },
  {
    element: <AdminRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const Routes = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

export default Routes;
