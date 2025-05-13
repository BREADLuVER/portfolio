import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PortfolioSimple } from "./screens/PortfolioSimple";
import { Tablet } from "./screens/Tablet";
import { TabletScreen } from "./screens/TabletScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <PortfolioSimple />,
  },
  {
    path: "/portfolio-simple-footer",
    element: <PortfolioSimple />,
  },
  {
    path: "/tablet-1",
    element: <Tablet />,
  },
  {
    path: "/tablet-2",
    element: <TabletScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
