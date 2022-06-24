import * as React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

import { AuthContext } from "../pages/context/AuthContext";

// core components
import SubNavbar from "./SubNavbar";

export default function Layout(props) {
  const { isAuthenticated } = React.useContext(AuthContext);

  const location = useLocation();
  console.log(location.pathname.indexOf("/"));

  return (
    <div>
      {/* {location.pathname.indexOf("login") === -1 && (
        <>
          <Navbar />
          <SubNavbar />
        </>
      )} */}
      {/* 
      {location.pathname.indexOf("") === -1 && (
        <>
          <Navbar />
          <SubNavbar />
        </>
      )} */}

      {isAuthenticated && (
        <div>
          <Navbar />
          <SubNavbar />
        </div>
      )}
      {props.children}
    </div>
  );
}
