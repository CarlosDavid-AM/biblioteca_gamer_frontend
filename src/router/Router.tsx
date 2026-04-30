import { createBrowserRouter } from "react-router";
import App from "../App";
import Error404 from "../page/Error404";
import NewGame from "../page/NewGame";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/new",
    element: <NewGame />,
  },
]);

export default Router;
