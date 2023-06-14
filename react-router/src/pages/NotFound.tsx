import { NavLink, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError() as any;
  return (
    <div>
      <h1>
        {error.status}| {error.statusText} | {error.error.message}
      </h1>
      <NavLink to="/" className="btn btn-primary">
        Back to home
      </NavLink>
    </div>
  );
};

export default NotFound;
