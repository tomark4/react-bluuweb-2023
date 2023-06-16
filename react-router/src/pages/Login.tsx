import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";
import { useState } from "react";
import { Formik } from "formik";
import { GuestGuard } from "../components";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

const Login = () => {
  const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    try {
      setLoading(true);
      await login(values.username, values.password);
      navigate("/dashboard");
    } catch (e) {
      setError("Username or password wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <GuestGuard>
      <div>
        <h2>Login</h2>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
              {error && <div className="alert alert-danger">{error}</div>}
              <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values) => handleLogin(values)}
                validationSchema={validationSchema}
              >
                {({ getFieldProps, handleSubmit, errors, touched }) => (
                  <form onSubmit={handleSubmit} className="was-invalid">
                    <div className="mb-3">
                      <input
                        type="username"
                        placeholder="Username"
                        className={`form-control ${
                          errors.username && touched.username
                            ? "is-invalid"
                            : ""
                        }`}
                        {...getFieldProps("username")}
                      />
                      {errors.username && touched.username && (
                        <div className="d-block invalid-feedback">
                          {errors.username}
                        </div>
                      )}
                    </div>
                    <div className="mb-2">
                      <input
                        type="password"
                        placeholder="Password"
                        {...getFieldProps("password")}
                        className={`form-control ${
                          errors.password && touched.password
                            ? "is-invalid"
                            : ""
                        }`}
                      />
                      {errors.password && touched.password && (
                        <div className="d-block invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="mb-2">
                      <button
                        className="btn btn-primary"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Validate..." : "Login"}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <p className="text-center mt-2">
          Don't have and account <Link to="/register">Register</Link>
        </p>
      </div>
    </GuestGuard>
  );
};

export default Login;
