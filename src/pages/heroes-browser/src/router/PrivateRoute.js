import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
  const { pathname, search } = useLocation();

  const path = pathname + search;
  localStorage.setItem("path", path);

  return isLogged ? children : <Navigate to="login" />;
};
