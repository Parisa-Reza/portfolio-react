// data router
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { HomePage, RootLayout } from "../pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage/>,
        },
        {
          path: "experience",
          element: <div className="">Certification,Industrial Attachment</div>,
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
