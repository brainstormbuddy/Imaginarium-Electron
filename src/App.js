import * as React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";

// auth context
import { AuthContext } from "./pages/context/AuthContext";
import { ProjectContext } from "./pages/context/ProjectContext";

import Onboard from "./pages/onboard";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetEmail from "./pages/resetemail";
import ResetPassword from "./pages/resetpassword";
import Layout from "./components/Layout";
import Dashboard from "./pages/dashboard";
import NewProject from "./pages/newproject";
import EditProject from "./pages/editproject";
import Profile from "./pages/profile";
import Workspace from "./pages/workspace";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Onboard /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/reset-email", element: <ResetEmail /> },
    { path: "/reset-password", element: <ResetPassword /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/new-project", element: <NewProject /> },
    { path: "/edit-project", element: <EditProject /> },
    { path: "/profile", element: <Profile /> },
    { path: "/workspace", element: <Workspace /> },
  ]);
  return routes;
}

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [selected, setSelected] = React.useState("");
  const value = React.useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated]
  );
  const project = React.useMemo(() => ({ selected, setSelected }), [selected]);

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
