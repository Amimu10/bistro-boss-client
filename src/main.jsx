import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./Route/Route";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <div className="container mx-auto lg:px-6 px-4">
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>
);