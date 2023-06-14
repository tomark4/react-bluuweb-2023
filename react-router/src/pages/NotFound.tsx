import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 | Page not found</h1>
      <NavLink to="/" className="btn btn-primary">
        Back to home
      </NavLink>
    </div>
  );
};

export default NotFound;
