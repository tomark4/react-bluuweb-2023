import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components";

const SiteLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>My app</h1>
            <hr />
            <div
              className="container"
              style={{
                padding: "10px",
                borderRadius: "8px",
                boxShadow: "0 0 5px 0 rgba(0,0,0,.2) ",
              }}
            >
              {navigation.state === "loading" ? (
                <h3>Loading....</h3>
              ) : (
                <Outlet />
              )}
            </div>
            <footer
              style={{ background: "gray", color: "#fff", padding: "10px" }}
              className="mt-5"
            >
              This is the footer page
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteLayout;
