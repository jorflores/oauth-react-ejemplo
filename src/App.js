import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Logout from "./components/logout";
import Profile from "./pages/profile-page";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import CallbackPage from "./pages/callback-page";
import NotFoundPage from "./pages/not-found-page";
import NavBar from "./components/navbar";
import PageLoader from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import AdminPage from "./pages/admin-page";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }

  return (
    <div>
      {isAuthenticated && <NavBar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<AuthenticationGuard component={Profile} />}
        />
        <Route
          path="/admin"
          element={<AuthenticationGuard component={AdminPage} />}
        />
        <Route path="/callback" element={<CallbackPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
