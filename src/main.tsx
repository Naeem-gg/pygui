import React from "react";
import ReactDOM from "react-dom/client";
import {NextUIProvider} from '@nextui-org/react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./styles.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
  <NextUIProvider>
  <RouterProvider router={router} />
  </NextUIProvider>
</React.StrictMode>,
);
