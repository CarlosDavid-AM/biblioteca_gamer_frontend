import { createBrowserRouter } from "react-router";
import App from "../App";
import Error404 from "../page/Error404";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
]);

export default Router;
