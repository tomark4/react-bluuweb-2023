import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";
import { useState } from "react";

const Home = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({ username: "", password: "" });

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async () => {
    setLoading(true);
    await login(values.username, values.password);
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <div>
      {" "}
      <h2>Home</h2>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <div className="mb-2">
                <input
                  type="username"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <button
                  onClick={handleLogin}
                  className="btn btn-primary"
                  disabled={loading}
                >
                  {loading ? "Validate..." : "Login"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <p className="text-center mt-2">
        Don't have and account <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Home;
