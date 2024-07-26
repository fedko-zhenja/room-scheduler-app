import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Paths } from "../types/type";
import { HomePage } from "../components/pages/HomePage";
import { LoginPage } from "../components/pages/LoginPage";
import { SchedulePage } from "../components/pages/SchedulePage";
import { RegistrationPage } from "../components/pages/RegistrationPage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { ErrorPage } from "../components/pages/ErrorPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: Paths.HomePage,
          element: <HomePage/>,
        },
        {
          path: Paths.SchedulePage,
          element: <SchedulePage/>,
        },
        {
          path: Paths.LoginPage,
          element: <LoginPage/>,
        },
        {
          path: Paths.RegistrationPage,
          element: <RegistrationPage/>,
        },
        {
          path: Paths.NotFoundPage,
          element: <NotFoundPage/>,
        },
      ],
    },
  ]);
  
  export function Router() {
    return <RouterProvider router={router} />;
  }