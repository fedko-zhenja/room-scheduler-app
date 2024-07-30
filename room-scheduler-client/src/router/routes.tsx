import { HomePage } from "../components/pages/HomePage";
import { LoginPage } from "../components/pages/LoginPage";
import { SchedulePage } from "../components/pages/SchedulePage";
import { RegistrationPage } from "../components/pages/RegistrationPage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { Paths } from "../types/type";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components/pages/ErrorPage";
import { Layout } from "../components/Layout";

export const protectedRouter = createBrowserRouter([
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
        path: Paths.NotFoundPage,
        element: <NotFoundPage/>,
        // loader: () => {
        //   return isAuth ? redirect(Paths.HomePage) : redirect(Paths.LoginPage);
        // }
      },
    ],
  },
]);

export const publicRouter = createBrowserRouter([
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
        // loader: () => {
        //   return isAuth ? redirect(Paths.HomePage) : redirect(Paths.LoginPage);
        // }
      },
    ],
  },
]);