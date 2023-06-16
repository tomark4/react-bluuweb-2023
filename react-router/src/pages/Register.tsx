import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios-instance";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(undefined);
  const [values, setValues] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e: any) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      setError("");
      const { username, password, firstName, lastName } = values;

      if (!(username.trim() || password.trim()))
        throw { response: { message: "username and password required" } };

      await axiosInstance.post(`/users/register/`, {
        username,
        password,
        first_name: firstName,
        last_name: lastName,
      });
      navigate("/");
    } catch (e: any) {
      setError(e.response.message);
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <div className="container">
        <div className="row">
          <div className="col-6 mx-auto">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleRegister}>
              <div className="mb-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={values.firstName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={values.lastName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
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
                <input
                  type="password"
                  name="passwordConfirm"
                  placeholder="Password confirm"
                  value={values.passwordConfirm}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="mb-2">
                <button
                  type="submit"
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
    </div>
  );
};

export default Register;
