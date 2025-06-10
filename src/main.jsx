// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import EarlyAccessPage from "./pages/early_access";
import EarlyAccessResponsePage from "./pages/early_access_response";
import ShopByBreed from "./pages/shop_by_breed";
import HomePage from "./pages/home_page";

// 👇 Define routes using the Data Router format
const router = createBrowserRouter([
  {
    path: "/",
    element: <EarlyAccessPage />,
  },
  {
    path: "/records",
    element: <EarlyAccessResponsePage />,
  },
  {
    path: "/shop-by-breed",
    element: <ShopByBreed />,
  },
  {
    path: "/home-page",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <App />, // fallback if you want
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
