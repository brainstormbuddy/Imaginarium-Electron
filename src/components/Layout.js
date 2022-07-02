import * as React from "react";
import Navbar from "./Navbar";

import { AuthContext } from "../pages/context/AuthContext";

// core components
import SubNavbar from "./SubNavbar";

export default function Layout(props) {
  const { isAuthenticated, setIsAuthenticated } = React.useContext(AuthContext);

  React.useEffect(
    () => setIsAuthenticated(localStorage.getItem("auth")),
    [setIsAuthenticated]
  );

  return (
    <div>
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
