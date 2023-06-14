import { createBrowserRouter } from "react-router-dom";
import { AboutUs, Blog, Contact, Home, NotFound } from "./pages";
import { SiteLayout } from "./layouts";
import { loaderPosts } from "./pages/Home";
import { loaderPost } from "./pages/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
            loader: loaderPosts,
          },
          {
            path: "/about-us",
            element: <AboutUs />,
          },
          {
            path: "/post/:id",
            element: <Blog />,
            loader: loaderPost,
          },
          {
            path: "/contact",
            element: <Contact />,
          },
        ],
      },
    ],
  },
]);
