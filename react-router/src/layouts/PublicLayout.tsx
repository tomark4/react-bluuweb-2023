import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <hr />
      <Outlet />
      <hr />
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default PublicLayout;
