import Home from "../page/Home";
import DefaultPage from "../components/DefaultPage";
import Register from "../page/Auth/Register";
import Login from "../page/Auth/Login";

export const publicRouter = [
  {
    element: Home,
    path: "/",
    layout: DefaultPage,
  },
  {
    element: Register,
    path: "/register",
  },
  {
    element: Login,
    path: "/login",
  },
];
