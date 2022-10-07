import { createBrowserRouter } from "react-router-dom";
import UI from "../views/UI";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UI />,
    },
]);
