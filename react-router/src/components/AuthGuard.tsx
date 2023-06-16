import { useEffect } from "react";
import { useAuthContext } from "../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }: any) => {
  const { status } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "non-auth") {
      navigate("/");
    }
  }, [status]);

  if (status === "auth") {
    return <>{children}</>;
  }

  return <></>;
};

export default AuthGuard;
