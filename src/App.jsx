import React from "react";
import Pages from "./pages/Pages";
import { BrowserRouter as Router } from "react-router-dom";
import Category from "./components/Category";
import Search from "./components/Search";
import { Link } from "react-router-dom";
// import { GiKnifeFork } from "react-icons/gi";
import Logo from "./img/android-chrome-512x512.png";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <header>
          <nav className="py-4 px-0 flex justify-start items-center ">
            <div className="no-underline text-lg font-normal flex items-center justify-start">
              <img
                src={Logo}
                alt="Cuisines"
                className="w-[50px] text-2xl"
                style={{
                  width: "50px",
                  filter: "drop-shadow(5px 4px 4px gray)",
                  marginRight: "10px",
                }}
              />
              <Link to={"/"}>Cuisines</Link>
            </div>
          </nav>
        </header>
        <Search />
        <Category />
        <Pages />
        <Footer />
      </Router>
    </>
  );
};

export default App;
