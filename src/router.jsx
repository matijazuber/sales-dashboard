import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Signin from "./components/SignIn";
import Header from "./components/Header";
import Signup from "./components/SignUp";
import RootRedirect from "./routes/RootRedirect";
import ProtectedRoute from "./routes/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect></RootRedirect>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/signin",
    element: <Signin></Signin>,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <ProtectedRoute>
          <Header></Header>
          <Dashboard></Dashboard>
        </ProtectedRoute>
      </>
    ),
  },
]);
