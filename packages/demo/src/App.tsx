import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
