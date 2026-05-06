import { createBrowserRouter } from "react-router";
import App from "../App";
import Error404 from "../page/Error404";
import AgregarJuego from "../page/AgregarJuego";
import JuegosTerminados from "../page/JuegosTerminados";
import JuegosPendientes from "../page/JuegosPendientes";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/agregar",
    element: <AgregarJuego />,
  },
  {
    path: "/terminados",
    element: <JuegosTerminados />,
  },
  {
    path: "/pendientes",
    element: <JuegosPendientes />,
  },
]);

export default Router;
