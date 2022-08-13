import type { RouteObject } from "react-router-dom";
import Default from "./components/pages/Default";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
];
