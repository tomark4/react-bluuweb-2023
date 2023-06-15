import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const PublicLayout = () => {
  return (
    <div>
      <Navbar />
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
