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
    path: "/register",
    element: <Register />,
  },

    {
        path: "/login",
        element: <Login />,
    },
]);
