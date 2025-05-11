import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import App from "./App";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
export const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/game",
        element: <Game />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
    ]
}]);
