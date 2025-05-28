import { createBrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Game from "./Pages/Game";
import App from "./App";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import RequireAuth from "./Middlewares/RequireAuth";
import { AuthProvider } from "./Providers/AuthContext";

export const router = createBrowserRouter([
  {
    element: <AuthProvider><App /></AuthProvider>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        element: <RequireAuth />,
        children: [
          { path: "/profile", element: <Profile /> },
          { path: "/game", element: <Game /> }
        ]
      }
    ]
  }
]);