import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";

const PrivateLayout = () => {
  const { status, user } = useAuthContext();

  return !user && status === "non-auth" ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateLayout;
