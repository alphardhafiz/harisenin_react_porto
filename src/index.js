import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Home";
import Portofolio from "./Portofolio";
import {
  createBrowserRouter,
  RouterProvider,
  // useParams,
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Kontak from "./Kontak";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/portofolio",
    element: <Portofolio />,
  },
  {
    path: "/kontak",
    element: <Kontak />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
