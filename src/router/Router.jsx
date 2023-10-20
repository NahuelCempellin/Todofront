import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import AccountLayout from "../layout/AccountLayout";
import Signin from "../pages/signin/Signin";
import Signout from "../pages/signout/Signout";
import SignoutSuccess from "../pages/signout/SignoutSuccess";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import CardDetail from "../pages/CardDetail/CardDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <App />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "/home/dashboard",
        element: <Home />,
      },
      {
        path: "/home/detail/:id",
        element: <CardDetail />,
      },
    ],
  },
  {
    path: "/accounts",
    element: <AccountLayout />,
    children: [
      {
        path: "/accounts/signin",
        element: <Signin />,
      },
      {
        path: "/accounts/signout",
        element: <Signout />,
      },
      {
        path: "/accounts/success",
        element: <SignoutSuccess />,
      },
    ],
  },
]);
