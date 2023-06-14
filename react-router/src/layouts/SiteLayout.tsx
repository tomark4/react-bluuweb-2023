import { Outlet } from "react-router-dom";

const SiteLayout = () => {
  return (
    <div
      className="container"
      style={{
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0 0 5px 0 rgba(0,0,0,.2) ",
      }}
    >
      <Outlet />
    </div>
  );
};

export default SiteLayout;
