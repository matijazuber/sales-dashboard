import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./routes/Dashboard";
import Signin from "./components/SignIn";
import Header from "./components/Header";

export const router = createBrowserRouter([
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
