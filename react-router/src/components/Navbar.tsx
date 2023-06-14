import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary  ">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about-us" className="nav-link">
            About us
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
