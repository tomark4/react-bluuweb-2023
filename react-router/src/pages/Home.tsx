import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";
import { useState } from "react";

const Home = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await login("jotta", "123");
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <div>
      {" "}
      <h2>Home</h2>
      <button
        onClick={handleLogin}
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? "Validate..." : "Login"}
      </button>
    </div>
  );
};

export default Home;
