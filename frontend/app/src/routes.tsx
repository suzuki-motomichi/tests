import type { RouteObject } from "react-router-dom";
import Default from "./components/pages/Default";
import Home from "./components/pages/Home";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Default />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
];
