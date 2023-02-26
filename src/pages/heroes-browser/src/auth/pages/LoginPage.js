import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const path = localStorage.getItem("path") || "/";

    login("Usuario 1");

    navigate(path, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
