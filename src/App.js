import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Onboard from "./pages/onboard";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetEmail from "./pages/resetemail";
import ResetPassword from "./pages/resetpassword";

function App() {
  let routes = useRoutes([
    { path: "/", element: <Onboard /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/reset-email", element: <ResetEmail /> },
    { path: "/reset-password", element: <ResetPassword /> },
    // ...
  ]);
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
