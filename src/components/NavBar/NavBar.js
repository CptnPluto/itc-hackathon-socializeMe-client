import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  const navigate = useNavigate();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  //   const [checked, setChecked] = useState(false);
  // const [showNav, setShowNav] = useState(true);

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
          <div id="navBar" className="me-auto" defaultActiveKey="/">
            Navigation Dev
            <button onClick={() => navigate("/chooseCategory")}>Choose Category Page</button>
            <button onClick={() => navigate("/chooseEvent")}>Choose Event Page</button>
            <button onClick={() => navigate("/")}>Landing Page</button>
            <button onClick={() => navigate("/LocationPage")}>Choose Locations </button>
            <button onClick={() => navigate("/results")}>Results Page</button>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}
