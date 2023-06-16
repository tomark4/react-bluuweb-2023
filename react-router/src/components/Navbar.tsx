import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth/AuthContext";

const Navbar = () => {
  const { logout, status } = useAuthContext();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {status === "non-auth" && (
            <li className="nav-item active">
              <NavLink to="/" className="nav-link">
                Login
              </NavLink>
            </li>
          )}
          {status === "auth" && (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                  className="nav-link btn btn-outline-danger"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
