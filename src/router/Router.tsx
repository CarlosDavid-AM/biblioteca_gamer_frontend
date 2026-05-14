import { createBrowserRouter, Outlet } from "react-router";
import App from "../App";
import Error404 from "../page/Error404";
import AgregarJuego from "../page/AgregarJuego";
import { JuegosProvider } from "../context/JuegosContext";

const Router = createBrowserRouter([
  {
    element: (
      <JuegosProvider>
        <Outlet />
      </JuegosProvider>
    ),
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
      },
      {
        path: "/agregar",
        element: <AgregarJuego />,
      },
    ],
  },
]);

export default Router;
