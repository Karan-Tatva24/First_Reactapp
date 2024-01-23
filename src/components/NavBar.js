import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  
  return (
    <>
      <ul>
        {isLoggedIn && (
          <>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/news"}>News</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contect"}>Contect Us</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
