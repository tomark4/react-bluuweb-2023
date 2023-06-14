import { createBrowserRouter } from "react-router-dom";
import { PrivateLayout, PublicLayout } from "./layouts";
import { Dashboard, Home } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/dashboard",
        element: <PrivateLayout />,
        children: [{ index: true, element: <Dashboard /> }],
      },
    ],
  },
]);
