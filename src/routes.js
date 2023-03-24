import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <User />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;