import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../Layout/MainLayout";
import { Home } from "../Pages/Home/Home";
import { Register } from "../Components/Register";
import { Login } from "../Components/Login";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <
          Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ],
    },
  ]);