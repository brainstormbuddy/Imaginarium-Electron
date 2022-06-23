import * as React from "react";
import Navbar from "./Navbar";

// core components
import SubNavbar from "./SubNavbar";

export default function Layout(props) {
  return (
    <div className="">
      <Navbar />
      <SubNavbar />
      {props.children}
    </div>
  );
}
