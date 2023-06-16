import { createBrowserRouter } from "react-router-dom";
import { PrivateLayout, PublicLayout } from "./layouts";
import { Dashboard, Login } from "./pages";
import Register from "./pages/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);
