import * as React from "react";
import { useLocation } from "react-router-dom";
import DashboardSubNavbar from "./components/DashboardSubNavbar";
import NewProjectSubNavbar from "./components/NewProjectSubNavbar";
import EditSubNavbar from "./components/EditSubNavbar";
import ProfileSubNavbar from "./components/ProfileSubNavbar";
import WorkSpaceNavbar from "./components/WorkSpaceNavbar";



export default function SubNavbar(props) {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/dashboard" && <DashboardSubNavbar />}
      {location.pathname === "/new-project" && <NewProjectSubNavbar />}
      {location.pathname === "/edit-project" && <EditSubNavbar />}
      {location.pathname === "/profile" && <ProfileSubNavbar />}
      {location.pathname === "/workspace" && <WorkSpaceNavbar />}
      
    </>
  );
}
