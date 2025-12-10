// data router
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Experience, HomePage, RootLayout } from "../pages";
import { Attachments, Certifications } from "../pages/experience";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "experience",
          element: <Experience />,

          children: [
            { index: true, element: <Navigate to="certifications" replace /> },
            {
              path: "certifications",
              element: <Certifications />,
            },
            { path: "attachments", element: <Attachments /> },
          ],
        },
        {
          path: "about",
          element: <div className="">About</div>,
        },
        {
          path: "contact",
          element: <div className="">Contact</div>,
        },
      ],
    },
  ],

  {
    basename: "/portfolio-react",
  }
);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
