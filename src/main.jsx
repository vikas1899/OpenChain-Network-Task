import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Service from "./components/Service/Service";

// Create routes with react-router-dom
const routes = (
  <Route path="/" element={<App />}>
    <Route path="/" element={<Home />} />
    <Route path="/service" element={<Service />} />
  </Route>
);

// Create browser router with routes
const router = createBrowserRouter(createRoutesFromElements(routes));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
