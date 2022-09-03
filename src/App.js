import * as React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";

// context
import { AuthContext } from "./pages/context/AuthContext";
import { ProjectContext } from "./pages/context/ProjectContext";

import Onboard from "./pages/Onboard/onboard";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import ResetEmail from "./pages/Auth/resetemail";
import ResetPassword from "./pages/Auth/resetpassword";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard/dashboard";
import NewProject from "./pages/Project/newproject";
import EditProject from "./pages/Project/editproject";
import Profile from "./pages/User/profile";
import Workspace from "./pages/Workspace/workspace";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Onboard /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/reset-email", element: <ResetEmail /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/project/new", element: <NewProject /> },
    { path: "/project/edit", element: <EditProject /> },
    { path: "/profile", element: <Profile /> },
    { path: "/workspace", element: <Workspace /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  const [currentProjectType, setCurrentProjectType] = React.useState(1);
  const value = React.useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated]
  );
  const project = React.useMemo(
    () => ({
      currentProjectType,
      selected,
      setCurrentProjectType,
      setSelected,
    }),
    [currentProjectType, selected]
  );

  return (
    <Router>
      <AuthContext.Provider value={value}>
        <ProjectContext.Provider value={project}>
          <Layout>
            <App />
          </Layout>
        </ProjectContext.Provider>
      </AuthContext.Provider>
    </Router>
  );
};

export default AppWrapper;
