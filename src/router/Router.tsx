import { createBrowserRouter } from "react-router";
import App from "../App";
import Error404 from "../page/Error404";
import AgregarJuego from "../page/AgregarJuego";

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
]);

export default Router;
