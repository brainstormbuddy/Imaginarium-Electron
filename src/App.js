import * as React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./App.css";

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

// auth context
import { AuthContext } from "./pages/context/AuthContext";

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
    // ...
  ]);
  return routes;
}

const AppWrapper = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const value = React.useMemo(
    () => ({ isAuthenticated, setIsAuthenticated }),
    [isAuthenticated]
  );

  return (
    <Router>
      <AuthContext.Provider value={value}>
        <Layout>
          <App />
        </Layout>
      </AuthContext.Provider>
    </Router>
  );
};

export default AppWrapper;
