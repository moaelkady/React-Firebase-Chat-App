import { Fragment, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import PrimaryButton from "../../components/primary-button/primary-button.component";
import logo from "../../assets/logo.svg";
import "./navigation.styles.scss";

const Navbar = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  return (
    <Fragment>
      <div className="navbar-container">
        <NavLink to="/">
          <img src={logo} alt="chatapp-logo" width="48px" height="48px" />
          <span className="fontZero">Home</span>
        </NavLink>
        {screenWidth > 931 && <span></span>}
        {screenWidth > 731 && <span></span>}
        {screenWidth > 531 && <span></span>}
        <NavLink to="/chat">
          <PrimaryButton>Chat Room</PrimaryButton>
        </NavLink>
        <a href="https://moqadi.com" target="_blank" rel="noreferrer">
          <PrimaryButton>Visit Developer</PrimaryButton>
        </a>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
