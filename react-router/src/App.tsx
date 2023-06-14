import { Navbar } from "./components/";
import { Routes, Route } from "react-router-dom";
import { AboutUs, Blog, Contact, Home, NotFound } from "./pages";
import { SiteLayout } from "./layouts";

// standard-version: changelog auto from commits

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>My app</h1>
            <hr />
            <Routes>
              <Route element={<Home />} index />
              <Route path="/" element={<SiteLayout />}>
                <Route element={<AboutUs />} path="/about-us" />
                <Route element={<Contact />} path="/contact" />
                <Route element={<Blog />} path="/post/:id" />
              </Route>
              <Route element={<NotFound />} path="*" />
            </Routes>
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

export default App;
