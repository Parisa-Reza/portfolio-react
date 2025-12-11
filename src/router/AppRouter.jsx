// data mode
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Experience, HomePage, RootLayout ,Attachmentss, Certificationss, AboutPage, ContactPage} from "../pages";
// 


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
              element: <Certificationss />,
            },
            { path: "attachments", element: <Attachmentss /> },
          ],
        },
        {
          path: "about",
          element: <div className=""><AboutPage/></div>,
        },
        {
          path: "contact",
          element: <div className=""><ContactPage/></div>,
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
