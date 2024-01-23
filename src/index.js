import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartItem from "./CartItem";
import Details from "./details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "cart",
    element: <CartItem />,
  },
  {
    path:"details",
    element: <Details/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
