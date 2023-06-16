import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/axios-instance";
import { GuestGuard } from "../components";
import * as Yup from "yup";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string()
    .required()
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirm: "",
  firstName: "",
  lastName: "",
};

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(undefined);

  const handleRegister = async (values: typeof initialValues) => {
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
    <GuestGuard>
      <div>
        <h1>Register</h1>
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
              {error && <div className="alert alert-danger">{error}</div>}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => handleRegister(values)}
              >
                {({ handleSubmit, getFieldProps, errors, touched }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder="First name"
                        className="form-control"
                        {...getFieldProps("firstName")}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        placeholder="Last name"
                        className="form-control"
                        {...getFieldProps("lastName")}
                      />
                    </div>
                    <div className="mb-2">
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
                        className={`form-control ${
                          errors.username && touched.username
                            ? "is-invalid"
                            : ""
                        }`}
                        {...getFieldProps("password")}
                      />
                      {errors.password && touched.password && (
                        <div className="d-block invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <div className="mb-2">
                      <input
                        type="password"
                        placeholder="Password confirm"
                        className={`form-control ${
                          errors.username && touched.username
                            ? "is-invalid"
                            : ""
                        }`}
                        {...getFieldProps("passwordConfirm")}
                      />
                      {errors.passwordConfirm && touched.passwordConfirm && (
                        <div className="d-block invalid-feedback">
                          {errors.passwordConfirm}
                        </div>
                      )}
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
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </GuestGuard>
  );
};

export default Register;
