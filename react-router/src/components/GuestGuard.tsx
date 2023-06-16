import { useEffect } from "react";
import { useAuthContext } from "../context/auth/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }: any) => {
  const { status } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "auth") {
      navigate("/dashboard");
    }
  }, [status]);

  if (status === "non-auth") {
    return <>{children}</>;
  }

  return <></>;
};

export default AuthGuard;
