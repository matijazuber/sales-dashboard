import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Signin from "./components/SignIn";
import Header from "./components/Header";
import Signup from "./components/SignUp";

export const router = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/",
    element: <Signin></Signin>,
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Header></Header>
        <Dashboard></Dashboard>
      </>
    ),
  },
]);
