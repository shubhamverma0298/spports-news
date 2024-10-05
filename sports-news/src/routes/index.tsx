import Signin from '../pages/signin';
import Signup from '../pages/signup';
import Notfound from '../pages/Notfound';
import AccountLayout from '../layout/account';
import ProtectedRoute from "./ProtectedRoute";
import Logout from '../logout';
import {
  createBrowserRouter,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/account" replace />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/notfound",
      element: <Notfound />,
    },
    {
      path: "/logout",
     element: <Logout />,
    },
    {
      path: "account",
      element: (
        <ProtectedRoute>
          <AccountLayout />
        </ProtectedRoute>
      )
    },
    {
      path: "*",
      element: <Notfound />,
    }
  ]);

export default router;