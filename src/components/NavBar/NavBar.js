import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../SVG/Logo.svg";

export default function NavBar() {
  const navigate = useNavigate();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [checked, setChecked] = useState(false);
  //   const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollpos > currentScrollPos;
      if (currentScrollPos === 0) {
        setIsNavbarVisible(true);
      } else if (visible) {
        setIsNavbarVisible(true);
      } else if (!visible) {
        setIsNavbarVisible(false);
      }
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <>
      <div className={`${isNavbarVisible ? "fadeIn" : "fadeOut"}`}>
        <div id="navBarContainer">
          <img id="logoImg" onClick={() => navigate("/")} src={Logo} alt="Logo"></img>
          <div id="navBar" className="me-auto" defaultActiveKey="/"></div>

          <div id="humburgerMenu">
            <section className="p-menu1">
              <nav id="navbar" className="navigation" role="navigation">
                <input id="toggle1" type="checkbox" checked={checked} />
                <label onClick={() => setChecked(!checked)} className="hamburger1" htmlFor="toggle1">
                  <div className="top"></div>
                  <div className="meat"></div>
                  <div className="bottom"></div>
                </label>
                <nav className="menu1">
                  <button
                    onClick={() => {
                      navigate("/chooseCategory");
                      setChecked(!checked);
                    }}
                  >
                    Choose Category Page
                  </button>
                  <button
                    onClick={() => {
                      navigate("/chooseEvent");
                      setChecked(!checked);
                    }}
                  >
                    Choose Event Page
                  </button>
                  <button
                    onClick={() => {
                      navigate("/");
                      setChecked(!checked);
                    }}
                  >
                    Landing Page
                  </button>
                  <button
                    onClick={() => {
                      navigate("/chooseLocation");
                      setChecked(!checked);
                    }}
                  >
                    Choose Locations{" "}
                  </button>
                  <button
                    onClick={() => {
                      navigate("/results");
                      setChecked(!checked);
                    }}
                  >
                    Results Page
                  </button>
                </nav>
              </nav>
            </section>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
