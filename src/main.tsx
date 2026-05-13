import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./router/Router";
import "./index.css";
import { JuegosProvider } from "./context/JuegosContext";

createRoot(document.getElementById("root")!).render(
  <JuegosProvider>
    <RouterProvider router={Router} />
  </JuegosProvider>,
);
