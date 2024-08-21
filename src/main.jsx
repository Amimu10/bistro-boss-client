import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./Route/Route";
import {  HelmetProvider } from 'react-helmet-async';



ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
  <div className="mx-auto">
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>
  </HelmetProvider>
);