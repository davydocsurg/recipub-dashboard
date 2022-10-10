import { createBrowserRouter } from "react-router-dom";
import Login from "../views/superAdmin/Login";
import Register from "../views/Auth/Register";
import UI from "../views/UI";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <UI />,
  },
  {
    path: "/super-admin/login",
    element: <Login />,
  },

  {
    path: "/register",
    element: <Register />,
  },
]);
