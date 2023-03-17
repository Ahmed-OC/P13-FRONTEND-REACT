import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
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
    path: "/sign-in",
    element: <SignIn />,
  },
];

export default routes;