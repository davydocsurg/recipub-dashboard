import { createBrowserRouter } from "react-router-dom";
import Login from "../views/superAdmin/Login";
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
]);
