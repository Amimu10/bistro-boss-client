import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import {
  RouterProvider,
} from "react-router-dom";

import { router } from "./Route/Route";
import {  HelmetProvider } from 'react-helmet-async';
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
    <React.StrictMode>
  <div className="mx-auto">
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>
  </HelmetProvider>
    </QueryClientProvider>
  <Toaster />
 </AuthProvider>
);