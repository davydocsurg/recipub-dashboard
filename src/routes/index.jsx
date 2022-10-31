import { createBrowserRouter } from "react-router-dom";
import Login from "../views/superAdmin/Login";
import Register from "../views/Auth/Register";
import UI from "../views/UI";
import RenderDashboard from "../views/dashboard/RenderDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UI />,
  },

  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/dashboard",
    element: <RenderDashboard />,
  },
]);
