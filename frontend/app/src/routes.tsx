import type { RouteObject } from "react-router-dom";
import Default from "./components/pages/Default";
import Home from "./components/pages/Home";
import SignUp from "./components/pages/SignUp";
import Circle from "./components/pages/Circle";
import Login from "./components/pages/Login";
import Event from "./components/pages/CircleEvent";

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
      {
        path: "circle/:uuid",
        element: <Circle />,
      },
      {
        path: "circle/:uuid/event",
        element: <Event />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];
